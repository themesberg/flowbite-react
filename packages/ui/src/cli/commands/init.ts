import { ensureTailwind } from "./ensure-tailwind";
import { installFlowbiteReact } from "./install";
import { patchTailwind } from "./patch";
import { setupConfig } from "./setup-config";
import { setupGitIgnore } from "./setup-gitignore";
import { setupOutputDirectory } from "./setup-output-directory";
import { setupPatch } from "./setup-patch";
import { setupPlugin } from "./setup-plugin";
import { setupRegister } from "./setup-register";
import { setupTailwind } from "./setup-tailwind";
import { setupVSCode } from "./setup-vscode";

export async function init() {
  try {
    // require `tailwindcss`
    await ensureTailwind();

    // patch `tailwindcss`
    await patchTailwind();

    // install `flowbite-react`
    await installFlowbiteReact();

    // setup patch script in `package.json`
    await setupPatch();

    // setup `tailwindcss`
    await setupTailwind();

    // setup `.flowbite-react` directory
    await setupOutputDirectory();

    // setup `.flowbite-react/config.json` file
    await setupConfig();

    // setup `.flowbite-react/.gitignore` file
    await setupGitIgnore();

    // setup VSCode intellisense
    await setupVSCode();

    // setup plugin based on bundler
    const hasBundler = await setupPlugin();

    if (!hasBundler) {
      // setup register script in `package.json`
      await setupRegister();
    }

    console.log("\n✅ Flowbite React has been successfully initialized!");
  } catch (error) {
    console.error("An error occurred during initialization:", error);
    process.exit(1);
  }
}
