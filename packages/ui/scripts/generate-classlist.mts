import { parse } from "acorn";
import { Glob } from "bun";
import { Node, walk } from "estree-walker";

async function main() {
  const classListMap: Record<string, string[]> = {};

  for await (const path of new Glob("src/components/**/theme.ts").scan()) {
    const componentName = path.split("/")[2];
    const file = Bun.file(path);
    const content = await file.text();
    const classList = await extractClassList(content);
    classListMap[componentName] = classList;
  }

  await Bun.write("src/class-list.json", JSON.stringify(classListMap, null, 2));
}

async function extractClassList(content: string) {
  const classList = new Set<string>();
  const transpiler = new Bun.Transpiler({
    loader: "ts",
  });
  const transpiledContent = transpiler.transformSync(content);
  const ast = parse(transpiledContent, {
    ecmaVersion: "latest",
    sourceType: "module",
  });
  let isInsideCreateTheme = false;

  walk(ast as Node, {
    enter(node) {
      if (isCreateThemeNode(node)) {
        isInsideCreateTheme = true;
      }
      if (isInsideCreateTheme) {
        if (node.type === "Literal" && typeof node.value === "string") {
          for (const className of node.value.split(/\s+/)) {
            if (className) classList.add(className);
          }
        }
      }
    },
    leave(node) {
      if (isCreateThemeNode(node)) {
        isInsideCreateTheme = false;
      }
    },
  });

  function isCreateThemeNode(node: Node) {
    return node.type === "CallExpression" && "name" in node.callee && node.callee.name === "createTheme";
  }

  return [...classList].sort();
}

main();
