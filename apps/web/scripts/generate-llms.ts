import path from "path";
import { theme } from "flowbite-react";
import type { FlowbiteTheme } from "flowbite-react/types";
import type { CodeData } from "~/components/code-demo";
import { GUIDES } from "~/components/quickstart/integration-guides";
import * as examples from "~/examples";
import { pick } from "~/helpers/pick";
import { DOCS_SIDEBAR } from "../data/docs-sidebar";

const BASE_URL = "https://flowbite-react.com";
const OUTPUT_DIR = path.join(process.cwd(), "public");
const DOCS_DIR = path.join(process.cwd(), "content", "docs");

/**
 * Generates documentation content for LLM training and converts MDX to MD files
 */
async function main(): Promise<void> {
  try {
    await generateLlmsFile();
    await generateLlmsFullFile();
    await generateDocsFiles();
  } catch (error) {
    console.error(`Failed to generate LLM files:`, error);
  }
}

/**
 * Generates content for LLM training based on documentation structure
 */
async function generateLlmsFile(): Promise<void> {
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

  const outputFile = path.join(OUTPUT_DIR, "llms.txt");
  await Bun.write(outputFile, content.trim());
}

/**
 * Generates a full content file containing all documentation pages
 */
async function generateLlmsFullFile(): Promise<void> {
  let fullContent = "# Flowbite React Full Documentation\n\n";

  for (const section of DOCS_SIDEBAR) {
    fullContent += `# ${section.title.charAt(0).toUpperCase() + section.title.slice(1)}\n\n`;

    for (const item of section.items) {
      const relativePath = `${item.href.replace(/^\/docs\//, "")}.mdx`;
      const sourcePath = path.join(DOCS_DIR, relativePath);

      const file = Bun.file(sourcePath);
      if (await file.exists()) {
        const content = await file.text();
        const convertedContent = await convertMdxContentToMd(content);

        const tagIndicator = item.tag ? ` (${item.tag})` : "";
        fullContent += `## ${item.title}${tagIndicator}\n\n${convertedContent}\n\n---\n\n`;
      }
    }
  }

  const outputFullFile = path.join(OUTPUT_DIR, "llms-full.txt");
  await Bun.write(outputFullFile, fullContent.trim());
}

/**
 * Converts MDX files to MD and saves them to the output directory.
 */
async function generateDocsFiles(): Promise<void> {
  const globber = new Bun.Glob("**/*.mdx");
  const files = await Array.fromAsync(globber.scan({ cwd: DOCS_DIR }));

  for (const file of files) {
    const sourcePath = path.join(DOCS_DIR, file);
    const relativePath = file.replace(/\.mdx$/, ".md");
    const outputPath = path.join(OUTPUT_DIR, "docs", relativePath);
    const content = await Bun.file(sourcePath).text();
    const convertedContent = await convertMdxContentToMd(content);

    await Bun.write(outputPath, convertedContent);
  }
}

/**
 * Converts MDX content to MD format
 */
async function convertMdxContentToMd(content: string): Promise<string> {
  let result = content;

  // Convert frontmatter to MD format
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

    result = result.replace(/^---\n[\s\S]*?\n---\n/, "");

    let newHeader = "";
    if (title) {
      newHeader += `# ${title}\n\n`;
    }
    if (description) {
      newHeader += `> ${description}\n`;
    }

    result = newHeader + result;
  }

  // Process `Theme` component
  result = result.replace(/<Theme\s+name="([^"]+)"\s*\/>/g, (_, name: keyof FlowbiteTheme) => {
    if (theme[name]) {
      return "```json\n" + JSON.stringify(theme[name], null, 2) + "\n```";
    }

    return `<Theme name="${name}" />`;
  });

  // Process `Example` component
  result = result.replace(/<Example\s+name="([^"]+)"\s*\/>/g, (_, name) => {
    const codeData = pick<CodeData>(examples, name);

    if (!codeData) {
      return `<Example name="${name}" />`;
    }

    return formatCode(codeData);
  });

  // Process `IntegrationGuides` component
  result = result.replace(/<IntegrationGuides\s*\/>/g, () => {
    let guidesContent = "";
    for (const guide of GUIDES) {
      guidesContent += `- [${guide.name}](${guide.slug})\n`;
    }
    return guidesContent;
  });

  // Transform relative and absolute links to properly point to markdown files
  // 1. Convert relative /docs/ links to include BASE_URL
  // 2. Add .md extension to doc links
  result = result
    .replace(/\]\(\/docs\//g, `](${BASE_URL}/docs/`)
    .replace(/\]\(\/docs\/([^)]+)\)/g, `](${BASE_URL}/docs/$1.md)`)
    .replace(/\]\((https?:\/\/flowbite-react\.com\/docs\/[^)]+)(?!\.md)\)/g, `]($1.md)`)
    .replace(
      /\]\(([^)]+)https:\/\/flowbite-react\.com\/docs\/([^)]+)\.md\)/g,
      `](https://flowbite-react.com/docs/$2.md)`,
    );

  return result;
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
