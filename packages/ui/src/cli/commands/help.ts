export async function help(): Promise<void> {
  console.log(`
Usage: flowbite-react [command] [options]

Commands:
  build               Generate class list for components and write to .flowbite-react/class-list.json
  create <name>       Create a new component with proper structure and theming setup
  dev                 Start development server with real-time class generation
  help                Show this help message and command information
  init                Initialize Flowbite React with config files and necessary setup
  install             Install Flowbite React using your detected package manager
  migrate             Run code transformations to update to latest patterns and APIs
  register            Register Flowbite React process for development with automatic class generation
  setup <subcommand>  Setup additional features and configurations

Setup subcommands:
  plugin              Setup bundler-specific Flowbite React plugin
  tailwindcss         Configure Tailwind CSS with necessary plugins and settings
  vscode              Setup VS Code with recommended extensions and settings

Options:
  --help              Show this help message and command information
`);
}

export async function helpSetup(): Promise<void> {
  console.log(`
Usage: flowbite-react setup [subcommand]

Subcommands:
  plugin             Setup bundler-specific Flowbite React plugin
  tailwindcss        Configure Tailwind CSS with necessary plugins and settings
  vscode             Setup VS Code with recommended extensions and settings
`);
}
