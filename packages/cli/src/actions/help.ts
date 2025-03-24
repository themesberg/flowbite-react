import color from "picocolors";
import packageJson from "../../package.json";
import { REPOS } from "../data.js";

export function help() {
  let help = color.bold("Usage:\n");

  const options = ["--template, -t <name>", "--git", "--version, -v", "--help, -h"];

  help += ` ${color.blue(packageJson.name)} ${color.yellow("<project-directory> [options]")}`;
  help += "\n\n";
  help += color.bold("Options:");
  help += "\n";
  help += color.yellow(options.join("\n"));
  help += "\n\n";
  help += color.bold("Templates:");
  help += "\n";
  help += REPOS.map((repo) => color.yellow(` ${repo.key}`) + color.gray(` - ${repo.name} (${repo.url})`)).join("\n");

  console.log(help);
}
