import * as p from "@clack/prompts";
import color from "picocolors";
import packageJson from "../../package.json";

export function intro() {
  p.intro(color.blue(packageJson.name));
  p.note(`Scaffold a new React project using ${color.blue("Flowbite React")}`);
}
