import { theme } from "flowbite-react";
import type { FlowbiteTheme } from "flowbite-react/types";
import type { CodeData } from "~/components/code-demo";
import { GUIDES } from "~/components/quickstart/integration-guides";
import * as examples from "~/examples";
import { pick } from "~/helpers/pick";

/**
 * Converts MDX content to MD format
 */
export function convertMdxContentToMd(content: string, baseUrl: string = "https://flowbite-react.com"): string {
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

  result = result
    .replace(/\]\(\/docs\//g, `](${baseUrl}/docs/`)
    .replace(/\]\(\/docs\/([^)]+)\)/g, `](${baseUrl}/docs/$1.md)`)
    .replace(/\]\((https?:\/\/flowbite-react\.com\/docs\/[^)]+)(?!\.md)\)/g, `]($1.md)`)
    .replace(/\]\(([^)]+)https:\/\/flowbite-react\.com\/docs\/([^)]+)\.md\)/g, `]($1$2.md)`);

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
