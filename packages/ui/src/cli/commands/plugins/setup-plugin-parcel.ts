import fs from "fs/promises";
import path from "path";
import { outputDir, pluginName, pluginPath } from "../../consts";

export async function setupPluginParcel(configPath: string) {
  try {
    const content = await fs.readFile(configPath, "utf-8");
    const parsedContent: { extends?: string[] } = JSON.parse(content);

    const parcelConfigDir = path.join(outputDir, "parcel-config");
    const parcelReporterFile = "parcel-reporter.cjs";

    // setup `.flowbite-react/parcel-config` directory
    try {
      await fs.access(parcelConfigDir);
    } catch {
      console.log(`Creating ${parcelConfigDir} directory...`);
      await fs.mkdir(parcelConfigDir, { recursive: true });
    }

    // setup `.flowbite-react/parcel-config/index.json` file
    const parcelConfigFilePath = path.join(parcelConfigDir, "index.json");
    const parcelConfigFileContent = {
      reporters: [`./${parcelReporterFile}`, "..."],
    };

    try {
      const fileContent = await fs.readFile(parcelConfigFilePath, "utf-8");
      const parsedContent: { reporters?: string[] } = JSON.parse(fileContent);

      if (!parsedContent.reporters?.includes(parcelConfigFileContent.reporters[0])) {
        console.log(`Updating ${parcelConfigFilePath} file...`);
        await fs.writeFile(parcelConfigFilePath, JSON.stringify(parcelConfigFileContent, null, 2), "utf-8");
      }
    } catch {
      console.log(`Creating ${parcelConfigFilePath} file...`);
      await fs.writeFile(parcelConfigFilePath, JSON.stringify(parcelConfigFileContent, null, 2), "utf-8");
    }

    // setup `.flowbite-react/parcel-config/parcel-reporter.cjs` file
    const pluginImportPath = path.join(pluginPath, "parcel");
    const parcelReporterFileContent = `module.exports = require("${pluginImportPath}");`;
    const parcelReporterFilePath = path.join(parcelConfigDir, parcelReporterFile);

    try {
      const fileContent = await fs.readFile(parcelReporterFilePath, "utf-8");

      if (!fileContent.includes(parcelReporterFileContent)) {
        console.log(`Updating ${parcelReporterFilePath} file...`);
        await fs.writeFile(parcelReporterFilePath, parcelReporterFileContent, "utf-8");
      }
    } catch {
      console.log(`Creating ${parcelReporterFilePath} file...`);
      await fs.writeFile(parcelReporterFilePath, parcelReporterFileContent, "utf-8");
    }

    // setup `.parcelrc` config file
    if (!parsedContent.extends?.includes(parcelConfigFilePath)) {
      parsedContent.extends ||= [];
      parsedContent.extends.push(parcelConfigFilePath);

      console.log(`Updating ${configPath} with ${parcelConfigFilePath} config...`);
      await fs.writeFile(configPath, JSON.stringify(parsedContent, null, 2), "utf-8");
    }
  } catch (error) {
    console.error(`Failed to setup ${pluginName} plugin:`, error);
  }
}
