import { parse } from "acorn";
import { Glob } from "bun";
import { walk, type Node } from "estree-walker";
import prettier from "prettier";

const outputDir = "src/metadata";

async function generateClassList() {
  const classListMap: Record<string, string[]> = {};
  const themePaths = await Array.fromAsync(new Glob("src/components/**/theme.ts").scan());
  themePaths.sort();

  for (const path of themePaths) {
    const paths = path.split("/");
    const componentName = paths[2];
    const file = Bun.file(path);
    const content = await file.text();
    const classList = await extractClassList(content);
    classListMap[componentName] = classList;
  }

  const componentToClassListMap: Record<string, string> = {};
  let componentPaths = await Array.fromAsync(new Glob("src/components/**/*.tsx").scan());
  componentPaths = componentPaths.filter((path) => ![".test."].some((item) => path.includes(item))).sort();

  for (const path of componentPaths) {
    const parts = path.split("/");
    const rootName = parts[2];
    const componentName = parts[parts.length - 1].split(".tsx")[0];
    const file = Bun.file(path);
    const content = await file.text();

    if (content.includes("./theme")) {
      componentToClassListMap[componentName] = rootName;
    }
  }

  await Bun.write(
    `${outputDir}/class-list.ts`,
    await prettier.format(
      `export const CLASS_LIST_MAP = ${JSON.stringify(classListMap, null, 2)};` +
        "\n\n" +
        `export const COMPONENT_TO_CLASS_LIST_MAP = ${JSON.stringify(componentToClassListMap, null, 2)};`,
      {
        parser: "babel",
      },
    ),
  );
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

async function generateDependencyList() {
  const dependencyListMap: Record<string, string[]> = {};

  let paths = await Array.fromAsync(new Glob("src/components/**/*.tsx").scan());
  paths = paths.filter((path) => !path.includes(".test.")).sort();

  for (const path of paths) {
    const parts = path.split("/");
    const componentName = parts[parts.length - 1].split(".tsx")[0];
    const file = Bun.file(path);
    const content = await file.text();

    if (content.includes("./theme")) {
      const dependencyList = await extractDependencyList(content);
      dependencyListMap[componentName] = dependencyList;
    }
  }

  await Bun.write(
    `${outputDir}/dependency-list.ts`,
    await prettier.format(`export const DEPENDENCY_LIST_MAP = ${JSON.stringify(dependencyListMap, null, 2)}`, {
      parser: "babel",
    }),
  );
}

async function extractDependencyList(content: string) {
  const componentImports = new Set<string>();
  const transpiler = new Bun.Transpiler({
    loader: "tsx",
  });
  const transpiledContent = transpiler.transformSync(content);
  const ast = parse(transpiledContent, {
    ecmaVersion: "latest",
    sourceType: "module",
  });

  walk(ast as Node, {
    enter(node) {
      if (node.type === "ImportDeclaration") {
        if ("specifiers" in node && Array.isArray(node.specifiers)) {
          for (const specifier of node.specifiers) {
            if ("imported" in specifier && "name" in specifier.imported) {
              componentImports.add(specifier.imported.name);
            }
          }
        }
      }
    },
  });

  return [...componentImports].sort();
}

generateClassList();
generateDependencyList();
