import { resolveCommand } from "package-manager-detector/commands";
import { detect } from "package-manager-detector/detect";
import { execCommand } from "../utils/exec-command";
import { getPackageJson } from "../utils/get-package-json";

/**
 * Installs `flowbite-react` package using the detected package manager.
 */
export async function installPackage() {
  const packageName = "flowbite-react";

  try {
    const packageJson = await getPackageJson();
    let pm = await detect();

    if (!pm) {
      console.error("Could not detect package manager");
    }

    pm ??= { agent: "npm", name: "npm" };

    const currentVersion = packageJson.dependencies?.[packageName] || packageJson.devDependencies?.[packageName];
    if (currentVersion) {
      const currentMajorMinor = currentVersion.split(".").slice(0, 2).join(".");

      // Upgrade to latest version if below 0.11.x since 0.11.x is the version with the new engine and CLI
      if (currentMajorMinor.localeCompare("0.11", undefined, { numeric: true }) < 0) {
        console.log(
          "The current version of flowbite-react is below 0.11.x, which is the version with the new engine and CLI.",
        );
        const { command = "", args } = resolveCommand(pm.agent, "add", [`${packageName}@latest`]) ?? {};
        console.log(`Updating ${packageName} to latest version using ${pm.name}...`);
        await execCommand(command, args);
      }
      return;
    }

    const { command = "", args } = resolveCommand(pm.agent, "add", [packageName]) ?? {};

    console.log(`Installing ${packageName} using ${pm.name}...`);
    await execCommand(command, args);
  } catch (error) {
    console.error(`Failed to install ${packageName}:`, error);
  }
}
