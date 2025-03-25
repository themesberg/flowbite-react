import fs from "fs/promises";
import { pluginPath } from "../../consts";
import { addImport } from "../../utils/add-import";
import { joinNormalizedPath } from "../../utils/normalize-path";
import { wrapDefaultExport } from "../../utils/wrap-default-export";

export async function setupPluginNextjs(configPath: string) {
  const pluginName = "withFlowbiteReact";

  try {
    const content = await fs.readFile(configPath, "utf-8");

    let updatedContent = addImport({
      content,
      importName: pluginName,
      importPath: joinNormalizedPath(pluginPath, "nextjs"),
    });

    if (!content.includes(`${pluginName}(`)) {
      updatedContent = wrapDefaultExport(updatedContent, pluginName);
    }

    if (updatedContent !== content) {
      console.log(`Updating ${configPath} with ${pluginName} plugin...`);
      await fs.writeFile(configPath, updatedContent, "utf-8");
    }
  } catch (error) {
    console.error(`Failed to setup ${pluginName} plugin:`, error);
  }
}
