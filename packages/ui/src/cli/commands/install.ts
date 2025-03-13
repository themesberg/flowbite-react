import { resolveCommand } from "package-manager-detector/commands";
import { detect } from "package-manager-detector/detect";
import { execCommand } from "../utils/exec-command";
import { getPackageJson } from "../utils/get-package-json";

export async function installFlowbiteReact() {
  try {
    const packageJson = await getPackageJson();

    if (packageJson.dependencies?.["flowbite-react"] || packageJson.devDependencies?.["flowbite-react"]) {
      return;
    }

    let pm = await detect();

    if (!pm) {
      console.error("Could not detect package manager");
    }

    pm ??= { agent: "npm", name: "npm" };

    const packageName = "flowbite-react";
    const { command = "", args } = resolveCommand(pm.agent, "add", [packageName]) ?? {};

    console.log(`Installing ${packageName} using ${pm.name}...`);
    execCommand(command, args);
  } catch (error) {
    console.error("Failed to install flowbite-react:", error);
  }
}
