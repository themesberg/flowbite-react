#!/usr/bin/env node
import fs from "fs";
import { cancel, group, intro, note, outro, select, spinner, text } from "@clack/prompts";
import { $ } from "execa";
import color from "picocolors";
import { rimraf } from "rimraf";
import packageJson from "../package.json";

const DEFAULT_PROJECT_NAME = "flowbite-react-app";
const REPOS: { key: string; name: string; url: string }[] = [
  { key: "nextjs", name: "Next.js", url: "https://github.com/themesberg/flowbite-react-template-nextjs.git" },
  { key: "remix", name: "Remix", url: "https://github.com/themesberg/flowbite-react-template-remix.git" },
  { key: "astro", name: "Astro", url: "https://github.com/themesberg/flowbite-react-template-astro.git" },
  { key: "vite", name: "Vite", url: "https://github.com/themesberg/flowbite-react-template-vite.git" },
  { key: "gatsby", name: "Gatsby", url: "https://github.com/themesberg/flowbite-react-template-gatsby.git" },
  { key: "laravel", name: "Laravel", url: "https://github.com/themesberg/flowbite-react-template-laravel.git" },
  { key: "parcel", name: "Parcel", url: "https://github.com/themesberg/flowbite-react-template-parcel.git" },
  { key: "redwoodjs", name: "RedwoodJS", url: "https://github.com/themesberg/flowbite-react-template-redwoodjs.git" },
  { key: "cra", name: "Create React App", url: "https://github.com/themesberg/flowbite-react-template-cra.git" },
];

async function main() {
  intro(color.blue(packageJson.name));
  note(`Scaffold a new React project using ${color.blue("Flowbite React")}`);

  // Get CLI data
  const data = await group(
    {
      projectName: () =>
        text({
          message: "What is your project named?",
          placeholder: DEFAULT_PROJECT_NAME,
          defaultValue: DEFAULT_PROJECT_NAME,
          validate(value) {
            // check empty
            if (value.length && !value.trim().length) return "Value is required!";

            // TODO: check regex

            // check if dir exists
            const dirs = fs.readdirSync("./");
            const computedValue = value || DEFAULT_PROJECT_NAME;

            if (dirs.includes(computedValue)) return "Folder already exists";
          },
        }),
      framework: ({}) =>
        select({
          message: "What framework would you like to use?",
          options: REPOS.map((repo) => ({ label: repo.name, value: repo.key })),
        }),
    },
    {
      onCancel: () => {
        cancel("Operation cancelled.");
        process.exit(0);
      },
    },
  );

  const repo = REPOS.find((repo) => repo.key === data.framework)!;

  // Clone the repo
  const s = spinner();

  try {
    s.start("Creating the project...");

    await $`git clone --depth 1 ${repo.url} ${data.projectName}`;
    await rimraf(`${data.projectName}/.git`);

    s.stop(color.green("Project created successfuly!"));
  } catch (error) {
    s.stop(error as string);
    process.exit(0);
  }

  // Next steps
  const commands = [`cd ${data.projectName}`, "npm i", "npm run dev"].join("\n");
  note(commands, "Next steps:");
  outro("Enjoy!");
}

main().catch(console.error);
