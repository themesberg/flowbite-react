export async function help() {
  const commands = [
    { name: "build", description: "Generates the class list for your components" },
    { name: "create", description: "Creates a new component with the proper structure and theming setup" },
    { name: "dev", description: "Starts the development mode which watches for component changes" },
    { name: "help", description: "Show available commands" },
    { name: "init", description: "Initializes Flowbite React in your project" },
    { name: "install", description: "Installs Flowbite React in your project" },
    { name: "patch", description: "Patch Tailwind CSS for compatibility" },
    { name: "register", description: "Registers the Flowbite React process for development" },
    { name: "setup", description: "Setup specific features (plugin, tailwindcss, vscode)" },
  ];

  console.log("\nFlowbite React CLI\n");
  console.log("Available commands:\n");

  const longestName = Math.max(...commands.map((cmd) => cmd.name.length));

  commands.forEach((command) => {
    const padding = " ".repeat(longestName - command.name.length + 2);
    console.log(`  ${command.name}${padding}${command.description}`);
  });
}

export async function helpSetup() {
  console.log("\nAvailable setup subcommands:\n");
  console.log("  plugin       Sets up the appropriate bundler plugin for your project");
  console.log("  tailwindcss  Configures Tailwind CSS for use with Flowbite React");
  console.log("  vscode       Sets up VSCode for optimal development");
}
