import * as p from "@clack/prompts";
import { $ } from "execa";
import color from "picocolors";
import type { Template } from "../data.js";

export async function createProject({ projectName, template }: { projectName: string; template: Template }) {
  const s = p.spinner();

  if (!template.url) {
    s.stop("Invalid template configuration: missing URL");
    process.exit(0);
  }

  try {
    s.start("Creating the project...");

    await $`git clone --depth 1 ${template.url} ${projectName}`;
    await $`rm -rf ${projectName}/.git`;

    s.stop(color.green("Project created successfully!"));
  } catch (error) {
    s.stop(error as string);
    process.exit(0);
  }
}
