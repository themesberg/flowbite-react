import * as p from "@clack/prompts";

export function nextSteps({ projectName }: { projectName: string }) {
  const commands = [`cd ${projectName}`, "npm i", "npm run dev"].join("\n");
  p.note(commands, "Next steps:");
  p.outro("Enjoy!");
}
