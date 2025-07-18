import { resolveCommand } from "package-manager-detector/commands";
import { detect } from "package-manager-detector/detect";
import { execCommand } from "../utils/exec-command";
import { getModulePackageJson } from "../utils/get-module-package-json";

/**
 * Installs `flowbite-react` package using the detected package manager.
 */
export async function installPackage() {
  const packageName = "flowbite-react";

  try {
    let pm = await detect();

    if (!pm) {
      console.error("Could not detect package manager");
    }

    pm ??= { agent: "npm", name: "npm" };

    const currentPackage = await getModulePackageJson(packageName);

    if (currentPackage) {
      if (currentPackage.version.localeCompare("0.11", undefined, { numeric: true }) < 0) {
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
