export async function main(argv: string[]) {
  const [command, subCommand] = argv.map((arg) => arg.trim());

  try {
    if (command === "build") {
      const { build } = await import("./commands/build");
      await build();
    }
    if (command === "create") {
      const { create } = await import("./commands/create");
      await create(subCommand);
    }
    if (command === "dev") {
      const { dev } = await import("./commands/dev");
      await dev();
    }
    if (command === "help" || command === "--help") {
      const { help } = await import("./commands/help");
      await help();
    }
    if (command === "init") {
      const { init } = await import("./commands/init");
      await init();
    }
    if (command === "install") {
      const { installFlowbiteReact } = await import("./commands/install");
      await installFlowbiteReact();
    }
    if (command === "patch") {
      const { patchTailwind } = await import("./commands/patch");
      await patchTailwind();
    }
    if (command === "register") {
      const { register } = await import("./commands/register");
      await register();
    }
    if (command === "setup") {
      if (subCommand === "plugin") {
        const { setupPlugin } = await import("./commands/setup-plugin");
        await setupPlugin();
      }
      if (subCommand === "tailwindcss") {
        const { setupTailwind } = await import("./commands/setup-tailwind");
        await setupTailwind();
      }
      if (subCommand === "vscode") {
        const { setupVSCode } = await import("./commands/setup-vscode");
        await setupVSCode();
      }
    }

    if (
      !["build", "create", "dev", "help", "--help", "init", "install", "patch", "register", "setup"].includes(command)
    ) {
      console.error(`Unknown command: ${command}`);
      const { help } = await import("./commands/help");
      await help();
      process.exit(1);
    }
    if (command === "setup" && !["plugin", "tailwindcss", "vscode"].includes(subCommand)) {
      console.error(`Unknown subcommand: ${subCommand}`);
      const { helpSetup } = await import("./commands/help");
      await helpSetup();
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error executing command ${command}:`, error);
    process.exit(1);
  }
}
