import { mkdir } from "node:fs/promises";
import path from "path";
import { theme } from "flowbite-react";
import type { FlowbiteTheme } from "flowbite-react/types";
import type { CodeData } from "~/components/code-demo";
import { GUIDES } from "~/components/quickstart/integration-guides";
import * as examples from "~/examples";
import { pick } from "~/helpers/pick";
import { DOCS_SIDEBAR } from "../data/docs-sidebar";

const BASE_URL = "https://flowbite-react.com";

/**
 * Generates documentation content for LLM training and converts MDX to MD files
 */
async function main(): Promise<void> {
  const outputDir = path.join(process.cwd(), "public");
  const outputFile = path.join(outputDir, "llms.txt");
  const docsOutputDir = path.join(outputDir, "docs");
  const docsContentDir = path.join(process.cwd(), "content", "docs");

  try {
    await ensureDirectoryExists(docsOutputDir);
    await copyMdxToMd(docsContentDir, docsOutputDir);
    await Bun.write(outputFile, generateLlmContent().trim());
  } catch (error) {
    console.error(`Failed to generate ${outputFile} file:`, error);
  }
}

/**
 * Ensures a directory exists, creating it if needed
 */
async function ensureDirectoryExists(directory: string): Promise<void> {
  if (!(await Bun.file(directory).exists())) {
    await mkdir(directory, { recursive: true });
  }
}

/**
 * Generates content for LLM training based on documentation structure
 */
function generateLlmContent(): string {
  let content = "# Flowbite React Documentation\n\n";
  content +=
    "> Flowbite React is a UI component library based on Tailwind CSS and React, featuring interactive components for building modern web applications.\n\n";
  content += "This documentation covers all aspects of using Flowbite React, from installation to advanced usage.\n\n";
  content += "## Documentation Sections\n\n";

  for (const section of DOCS_SIDEBAR) {
    content += `### ${section.title.charAt(0).toUpperCase() + section.title.slice(1)}\n\n`;

    for (const item of section.items) {
      const tagIndicator = item.tag ? ` (${item.tag})` : "";
      content += `- [${item.title}](${BASE_URL}${item.href}.md)${tagIndicator}\n`;
    }

    content += "\n";
  }

  return content;
}

/**
 * Copies and converts MDX files to MD files
 */
async function copyMdxToMd(sourceDir: string, destDir: string): Promise<void> {
  const mdxFiles = await Array.fromAsync(new Bun.Glob("**/*.mdx").scan({ cwd: sourceDir }));

  for (const relativePath of mdxFiles) {
    const sourcePath = path.join(sourceDir, relativePath);
    const destSubDir = path.join(destDir, path.dirname(relativePath));
    const fileName = path.basename(relativePath);

    await ensureDirectoryExists(destSubDir);
    await convertMdxToMd(sourcePath, destSubDir, fileName);
  }
}

/**
 * Converts a single MDX file to MD format
 */
async function convertMdxToMd(sourcePath: string, destDir: string, fileName: string): Promise<void> {
  const destPath = path.join(destDir, fileName.replace(".mdx", ".md"));
  let content = await Bun.file(sourcePath).text();

  // Extract frontmatter
  let title = "";
  let description = "";
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\s*(\n|$)/);
    const descriptionMatch = frontmatter.match(/description:\s*["']?(.*?)["']?\s*(\n|$)/);

    if (titleMatch) {
      title = titleMatch[1];
    }
    if (descriptionMatch) {
      description = descriptionMatch[1];
    }

    // Remove frontmatter from content
    content = content.replace(/^---\n[\s\S]*?\n---\n/, "");

    // Add title as h1 and description as blockquote
    let newHeader = "";
    if (title) {
      newHeader += `# ${title}\n\n`;
    }
    if (description) {
      newHeader += `> ${description}\n`;
    }

    content = newHeader + content;
  }

  // Process `Theme` component
  content = content.replace(/<Theme\s+name="([^"]+)"\s*\/>/g, (_, name: keyof FlowbiteTheme) => {
    if (theme[name]) {
      return "```json\n" + JSON.stringify(theme[name], null, 2) + "\n```";
    }

    return `<Theme name="${name}" />`;
  });

  // Process `Example` component
  content = content.replace(/<Example\s+name="([^"]+)"\s*\/>/g, (_, name) => {
    const codeData = pick<CodeData>(examples, name);

    if (!codeData) {
      return `<Example name="${name}" />`;
    }

    return formatCode(codeData);
  });

  // Process `IntegrationGuides` component
  content = content.replace(/<IntegrationGuides\s*\/>/g, () => {
    let guidesContent = "";

    for (const guide of GUIDES) {
      guidesContent += `- [${guide.name}](${guide.slug})\n`;
    }

    return guidesContent;
  });

  // Transform relative and absolute links to properly point to markdown files
  // 1. Convert relative /docs/ links to include BASE_URL
  // 2. Add .md extension to doc links
  content = content
    .replace(/\]\(\/docs\//g, `](${BASE_URL}/docs/`)
    .replace(/\]\(\/docs\/([^)]+)\)/g, `](${BASE_URL}/docs/$1.md)`)
    .replace(/\]\((https?:\/\/flowbite-react\.com\/docs\/[^)]+)(?!\.md)\)/g, `]($1.md)`)
    .replace(
      /\]\(([^)]+)https:\/\/flowbite-react\.com\/docs\/([^)]+)\.md\)/g,
      `](https://flowbite-react.com/docs/$2.md)`,
    );

  await Bun.write(destPath, content);
}

/**
 * Formats code examples
 */
function formatCode(data: CodeData): string {
  function getCodeContent(data: CodeData, variant: string = ""): CodeData["code"] {
    return data.type === "variant" ? data.code[variant || data.variant] : data.code;
  }

  const code = getCodeContent(data); // TODO: Implement variant selection logic
  const codeItems = Array.isArray(code) ? code : [code];

  return codeItems
    .map((item) => `\`\`\`${item.language}\n// ${item.fileName}.${item.language}\n${item.code}\`\`\``)
    .join("\n\n");
}

main();
