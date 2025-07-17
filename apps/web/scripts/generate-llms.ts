import path from "path";
import { convertMdxContentToMd } from "~/helpers/md";
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
        const convertedContent = convertMdxContentToMd(content);

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
    const convertedContent = convertMdxContentToMd(content);

    await Bun.write(outputPath, convertedContent);
  }
}

main();
