import { Glob } from "bun";
import { parseSync, Visitor } from "oxc-parser";
import prettier from "prettier";

const outputDir = "src/metadata";
const schemaFile = "schema.json";

/**
 * Generates class list mappings for components and writes them to a file.
 *
 * This function performs two main tasks:
 * 1. Creates a mapping of component names to their theme classes by scanning theme.ts files
 * 2. Creates a mapping of component file names to their root component names for files that import theme
 *
 * The function processes all theme.ts files in the components directory and generates:
 * - CLASS_LIST_MAP: Record<string, string[]> mapping component names to their theme classes
 * - COMPONENT_TO_CLASS_LIST_MAP: Record<string, string> mapping component filenames to root component names
 *
 * The results are written to 'class-list.ts' in the output directory after being formatted with prettier.
 *
 * @returns {Promise<{ classListMap: Record<string, string[]>; componentToClassListMap: Record<string, string>; }>}
 */
async function generateClassList(): Promise<{
  classListMap: Record<string, string[]>;
  componentToClassListMap: Record<string, string>;
}> {
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
  componentPaths = componentPaths.filter((path) => !path.includes(".test.")).sort();

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

  return { classListMap, componentToClassListMap };
}

/**
 * Extracts and sorts unique class names from string literals within createTheme function calls in TypeScript/JavaScript code
 * @param content - The source code content to analyze
 * @returns {Promise<string[]>} A sorted array of unique class names found within createTheme function calls
 * @example
 * ```ts
 * const content = `
 *   createTheme({
 *     button: "bg-blue-500 hover:bg-blue-600"
 *   });
 * `;
 * const classes = await extractClassList(content);
 * // Returns: ["bg-blue-500", "hover:bg-blue-600"]
 * ```
 */
export async function extractClassList(content: string): Promise<string[]> {
  const classList = new Set<string>();
  const result = parseSync("theme.ts", content);

  if (result.errors.length > 0) {
    return [];
  }

  let isInsideCreateTheme = false;

  const visitor = new Visitor({
    CallExpression(node) {
      if (node.callee.type === "Identifier" && node.callee.name === "createTheme") {
        isInsideCreateTheme = true;
      }
    },
    "CallExpression:exit"(node) {
      if (node.callee.type === "Identifier" && node.callee.name === "createTheme") {
        isInsideCreateTheme = false;
      }
    },
    Literal(node) {
      if (isInsideCreateTheme && node.type === "Literal" && typeof node.value === "string") {
        for (const className of node.value.split(/\s+/)) {
          if (className) classList.add(className);
        }
      }
    },
  });

  visitor.visit(result.program);

  return [...classList].sort();
}

/**
 * Generates a dependency list map for components that use theme functionality.
 * The function scans through all .tsx files in the src/components directory,
 * identifies files that import from "./theme", and creates a mapping of
 * component names to their dependencies.
 *
 * The resulting map is written to a TypeScript file in the output directory
 * as a formatted constant named DEPENDENCY_LIST_MAP.
 *
 * @returns {Promise<void>} A promise that resolves when the dependency list file has been generated
 */
async function generateDependencyList(): Promise<void> {
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

/**
 * Extracts and sorts a list of imported component names from TypeScript/TSX content.
 * The function parses the content into an AST and walks through import declarations
 * to collect component names. Type-only imports are excluded.
 *
 * @param content - The TypeScript/TSX source code content to analyze
 * @returns {Promise<string[]>} A sorted array of unique component names that are imported in the source code
 * @example
 * const content = `
 *   import { Button, Card } from 'some-library';
 *   import type { ButtonProps } from 'some-library';
 * `;
 * const dependencies = await extractDependencyList(content);
 * // returns ['Button', 'Card'] (type imports are excluded)
 */
export async function extractDependencyList(content: string): Promise<string[]> {
  const componentImports = new Set<string>();
  const result = parseSync("component.tsx", content);

  if (result.errors.length > 0) {
    return [];
  }

  const visitor = new Visitor({
    ImportDeclaration(node) {
      if (node.importKind === "type") {
        return;
      }

      if (Array.isArray(node.specifiers)) {
        for (const specifier of node.specifiers) {
          if (specifier.type === "ImportSpecifier") {
            if (specifier.importKind === "type") {
              continue;
            }
            if (specifier.imported.type === "Identifier") {
              componentImports.add(specifier.imported.name);
            }
          }
        }
      }
    },
  });

  visitor.visit(result.program);

  return [...componentImports].sort();
}

async function generateSchema(components: string[]): Promise<void> {
  try {
    const defaultSchema = {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        components: {
          description:
            "List of component names to generate styles for. Empty array enables automatic detection. \nSee https://flowbite-react.com/docs/customize/config#components for more details.",
          type: "array",
          items: {
            type: "string",
            enum: ["*"],
          },
          uniqueItems: true,
        },
        dark: {
          description:
            "Whether to generate dark mode styles. \nSee https://flowbite-react.com/docs/customize/config#dark for more details.",
          type: "boolean",
          default: true,
        },
        path: {
          description:
            "Path where components will be created, relative to the project root. \nSee https://flowbite-react.com/docs/customize/config#path for more details.",
          type: "string",
          default: "src/components",
        },
        prefix: {
          description:
            "Optional prefix to apply to all Tailwind CSS classes. \nSee https://flowbite-react.com/docs/customize/config#prefix for more details.",
          type: "string",
          default: "",
        },
        rsc: {
          description:
            "Whether to include the 'use client' directive for React Server Components. \nSee https://flowbite-react.com/docs/customize/config#rsc for more details.",
          type: "boolean",
          default: true,
        },
        tsx: {
          description:
            "Whether to use TypeScript (.tsx) or JavaScript (.jsx) for component creation. \nSee https://flowbite-react.com/docs/customize/config#tsx for more details.",
          type: "boolean",
          default: true,
        },
        version: {
          description:
            "The version of Tailwind CSS to use. \nSee https://flowbite-react.com/docs/customize/config#version for more details.",
          type: "number",
          enum: [3, 4],
          default: 4,
        },
      },
      required: ["components", "dark", "path", "prefix", "rsc", "tsx", "version"],
    };

    defaultSchema.properties.components.items.enum.push(...components);

    await Bun.write(
      schemaFile,
      await prettier.format(JSON.stringify(defaultSchema), {
        parser: "json",
      }),
    );
  } catch (error) {
    console.error(`Failed updating ${schemaFile} file`, error);
  }
}

const { componentToClassListMap } = await generateClassList();
await generateDependencyList();
await generateSchema(Object.keys(componentToClassListMap));
