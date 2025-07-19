import fs from "fs/promises";
import path from "path";
import cjson from "comment-json";
import { vscodeDir } from "../consts";

/**
 * Sets up the VSCode configuration for the project.
 *
 * This function checks if the `.vscode` directory exists and creates it if it does not.
 * It then sets up the `settings.json` and `extensions.json` files with the necessary configuration for Flowbite React.
 */
export async function setupVSCode() {
  try {
    await fs.access(vscodeDir);
  } catch {
    console.log(`Creating ${vscodeDir} directory...`);
    await fs.mkdir(vscodeDir);
  }

  await setupVSCodeSettings();
  await setupVSCodeExtensions();
}

/**
 * Sets up the VSCode settings for the project.
 *
 * This function checks if the `settings.json` file exists and creates it if it does not.
 * It then sets up the `files.associations`, `tailwindCSS.classAttributes`, and `tailwindCSS.experimental.classRegex` settings.
 */
async function setupVSCodeSettings() {
  try {
    const vscodeSettingsFilePath = path.join(vscodeDir, "settings.json");

    let settings: {
      "files.associations"?: Record<string, string>;
      "tailwindCSS.classAttributes"?: string[];
      "tailwindCSS.experimental.classRegex"?: string[][];
    } = {};

    let exists = true;

    try {
      const content = await fs.readFile(vscodeSettingsFilePath, "utf-8");
      settings = cjson.parse(content) as typeof settings;
    } catch {
      exists = false;
    }

    const flowbiteReactSettings = {
      "files.associations": {
        "*.css": "tailwindcss",
      },
      "tailwindCSS.classAttributes": ["class", "className", "theme"],
      "tailwindCSS.experimental.classRegex": [
        ["twMerge\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
        ["createTheme(?:<\\w+>)?\\s*\\(([^)]*)\\)", "{?\\s?[\\w].*:\\s*?[\"'`]([^\"'`]*).*?,?\\s?}?"],
      ],
    };

    let needsUpdate = false;

    if (settings?.["files.associations"]) {
      if (!settings["files.associations"]["*.css"]) {
        settings["files.associations"]["*.css"] = flowbiteReactSettings["files.associations"]["*.css"];
        needsUpdate = true;
      }
    } else {
      settings["files.associations"] = flowbiteReactSettings["files.associations"];
      needsUpdate = true;
    }
    if (settings?.["tailwindCSS.classAttributes"]) {
      if (!settings["tailwindCSS.classAttributes"].includes("theme")) {
        settings["tailwindCSS.classAttributes"].push("theme");
        needsUpdate = true;
      }
    } else {
      settings["tailwindCSS.classAttributes"] = flowbiteReactSettings["tailwindCSS.classAttributes"];
      needsUpdate = true;
    }
    if (settings?.["tailwindCSS.experimental.classRegex"]) {
      for (const pattern of flowbiteReactSettings["tailwindCSS.experimental.classRegex"]) {
        if (
          !settings["tailwindCSS.experimental.classRegex"].some(
            (existing: string[]) => JSON.stringify(existing) === JSON.stringify(pattern),
          )
        ) {
          settings["tailwindCSS.experimental.classRegex"].push(pattern);
          needsUpdate = true;
        }
      }
    } else {
      settings["tailwindCSS.experimental.classRegex"] = flowbiteReactSettings["tailwindCSS.experimental.classRegex"];
      needsUpdate = true;
    }

    if (!needsUpdate) {
      return;
    }

    console.log(`${exists ? "Updating" : "Creating"} ${vscodeSettingsFilePath} with flowbite-react configuration...`);
    await fs.writeFile(vscodeSettingsFilePath, cjson.stringify(settings, null, 2));
  } catch (error) {
    console.error("Failed to setup VSCode settings:", error);
  }
}

async function setupVSCodeExtensions() {
  try {
    const vscodeExtensionsFilePath = path.join(vscodeDir, "extensions.json");

    let extensions: {
      recommendations?: string[];
    } = {};

    let exists = true;

    try {
      const content = await fs.readFile(vscodeExtensionsFilePath, "utf-8");
      extensions = cjson.parse(content) as typeof extensions;
    } catch {
      exists = false;
    }

    if (extensions?.recommendations?.includes("bradlc.vscode-tailwindcss")) {
      return;
    }

    const flowbiteReactExtensions = {
      recommendations: [
        "bradlc.vscode-tailwindcss",
        // TODO: only if eslint is installed
        // "dbaeumer.vscode-eslint",
        // TODO: only if prettier is installed
        // "esbenp.prettier-vscode",
      ],
    };

    if (extensions?.recommendations) {
      for (const recommendation of flowbiteReactExtensions.recommendations) {
        if (!extensions.recommendations.includes(recommendation)) {
          extensions.recommendations.push(recommendation);
        }
      }
    } else {
      extensions.recommendations = flowbiteReactExtensions.recommendations;
    }

    console.log(`${exists ? "Updating" : "Creating"} ${vscodeExtensionsFilePath} with flowbite-react configuration...`);
    await fs.writeFile(vscodeExtensionsFilePath, cjson.stringify(extensions, null, 2));
  } catch (error) {
    console.error("Failed to setup VSCode extensions:", error);
  }
}
