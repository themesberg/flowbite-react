import fs from "fs/promises";
import path from "path";

/**
 * Patches Tailwind CSS installation to ensure version files exist and are correctly configured.
 *
 * This function:
 * - Resolves the Tailwind CSS module path
 * - Reads the Tailwind package.json to get the actual version
 * - Creates or updates version files (version.js, version.mjs, version.d.ts, version.d.mts)
 * - Updates package.json exports if necessary
 *
 * @returns {Promise<void>} A promise that resolves when patching is complete
 */
export async function patchTailwind(): Promise<void> {
  try {
    let tailwindPath: string | undefined;

    try {
      let tailwindModulePath;
      if (typeof require !== "undefined") {
        tailwindModulePath = require.resolve("tailwindcss/package.json", {
          paths: [process.cwd()],
        });
        tailwindPath = path.dirname(tailwindModulePath);
      } else {
        const { createRequire } = await import("module");
        const require = createRequire(import.meta.url);
        tailwindModulePath = require.resolve("tailwindcss/package.json", {
          paths: [process.cwd()],
        });
        tailwindPath = path.dirname(tailwindModulePath);
      }
    } catch {
      console.warn("Could not resolve Tailwind CSS module path. Skipping version patch.");
      return;
    }

    const tailwindPackageJsonPath = path.join(tailwindPath, "package.json");
    let tailwindPackageJson: {
      version: string;
      exports?: Record<string, unknown>;
    };

    try {
      const packageJsonContent = await fs.readFile(tailwindPackageJsonPath, "utf-8");
      tailwindPackageJson = JSON.parse(packageJsonContent);
    } catch {
      console.warn("Could not read Tailwind CSS `package.json`. Skipping version patch.");
      return;
    }

    const actualVersion = tailwindPackageJson.version;

    // Check if version files exist and have the correct version
    const versionFilePath = path.join(tailwindPath, "version.js");
    const versionMjsFilePath = path.join(tailwindPath, "version.mjs");
    const versionDtsFilePath = path.join(tailwindPath, "version.d.ts");
    const versionDmtsFilePath = path.join(tailwindPath, "version.d.mts");

    let patchesApplied = false;

    // create `version.js`, `version.mjs`, `version.d.ts` and `version.d.mts` files if needed
    try {
      let filesCreated = false;

      // Check and create `version.js` file (CJS)
      if (await shouldUpdateFile(versionFilePath, actualVersion)) {
        const versionContent = `"use strict";\n\nconst version = "${actualVersion}";\nmodule.exports = version;\n`;
        await fs.writeFile(versionFilePath, versionContent, "utf-8");
        filesCreated = true;
      }

      // Check and create `version.mjs` file (ESM)
      if (await shouldUpdateFile(versionMjsFilePath, actualVersion)) {
        const versionMjsContent = `const version = "${actualVersion}";\nexport default version;\n`;
        await fs.writeFile(versionMjsFilePath, versionMjsContent, "utf-8");
        filesCreated = true;
      }

      // Check and create `version.d.ts` file
      if (await shouldUpdateFile(versionDtsFilePath)) {
        const versionDtsContent = `declare const version: string;\nexport = version;\n`;
        await fs.writeFile(versionDtsFilePath, versionDtsContent, "utf-8");
        filesCreated = true;
      }

      // Check and create `version.d.mts` file
      if (await shouldUpdateFile(versionDmtsFilePath)) {
        const versionDmtsContent = `declare const version: string;\nexport default version;\n`;
        await fs.writeFile(versionDmtsFilePath, versionDmtsContent, "utf-8");
        filesCreated = true;
      }

      if (filesCreated) {
        patchesApplied = true;
      }
    } catch {
      console.warn("Could not create Tailwind CSS version files. Skipping version patch.");
    }

    // patch package.json.exports
    try {
      if (tailwindPackageJson.exports) {
        if (!tailwindPackageJson.exports["./version"] || !tailwindPackageJson.exports["./version.js"]) {
          tailwindPackageJson.exports = {
            ...tailwindPackageJson.exports,
            "./version": {
              require: "./version.js",
              import: "./version.mjs",
            },
            "./version.js": {
              require: "./version.js",
              import: "./version.mjs",
            },
          };
          await fs.writeFile(tailwindPackageJsonPath, JSON.stringify(tailwindPackageJson, null, 2), "utf-8");
          patchesApplied = true;
        }
      }
    } catch {
      console.warn("Could not patch Tailwind CSS `package.json.exports`. Skipping version patch.");
    }

    if (patchesApplied) {
      console.log("Patched Tailwind CSS");
    }
  } catch (error) {
    console.error("Failed to patch Tailwind CSS:", error);
  }
}

/**
 * Determines whether a file should be updated based on its existence and content.
 *
 * @param filePath - The path to the file to check
 * @param actualVersion - Optional version string to check for in the file content
 * @returns {Promise<boolean>} True if the file doesn't exist or doesn't contain the actual version
 */
async function shouldUpdateFile(filePath: string, actualVersion?: string): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    if (actualVersion !== undefined) {
      return !content.includes(actualVersion);
    }
    return false;
  } catch {
    // File doesn't exist
    return true;
  }
}
