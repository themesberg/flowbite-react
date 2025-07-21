import { ensureTailwind } from "./ensure-tailwind";
import { installPackage } from "./install";
import { setupClassList } from "./setup-class-list";
import { setupConfig } from "./setup-config";
import { setupGitIgnore } from "./setup-gitignore";
import { setupInit } from "./setup-init";
import { setupOutputDirectory } from "./setup-output-directory";
import { setupPlugin } from "./setup-plugin";
import { setupRegister } from "./setup-register";
import { setupTailwind } from "./setup-tailwind";
import { setupVSCode } from "./setup-vscode";

export async function init() {
  try {
    await ensureTailwind();
    await installPackage();
    await setupOutputDirectory();
    await setupGitIgnore();
    await setupClassList();
    const config = await setupConfig();
    await setupInit(config);
    await setupVSCode();
    await setupTailwind();
    const hasBundler = await setupPlugin();
    if (!hasBundler) {
      await setupRegister();
    }
    console.log("\n✅ Flowbite React has been successfully initialized!");
  } catch (error) {
    console.error("An error occurred during initialization:", error);
    process.exit(1);
  }
}
