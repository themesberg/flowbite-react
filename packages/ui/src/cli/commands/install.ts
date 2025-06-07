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

    if (packageJson.dependencies?.[packageName] || packageJson.devDependencies?.[packageName]) {
      // TODO: prompt to bump the version to latest
      return;
    }

    let pm = await detect();

    if (!pm) {
      console.error("Could not detect package manager");
    }

    pm ??= { agent: "npm", name: "npm" };

    const { command = "", args } = resolveCommand(pm.agent, "add", [packageName]) ?? {};

    console.log(`Installing ${packageName} using ${pm.name}...`);
    execCommand(command, args);
  } catch (error) {
    console.error(`Failed to install ${packageName}:`, error);
  }
}
