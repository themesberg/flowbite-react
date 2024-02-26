import arg from "arg";

export interface Context {
  projectName?: string;
  template?: string;
  help?: boolean;
}

export function getContext(argv: string[]): Context {
  const flags = arg(
    {
      "--template": String,
      "--help": Boolean,
      "-h": "--help",
    },
    { argv, permissive: true },
  );

  let cwd = flags["_"][0];
  let { "--template": template, "--help": help } = flags;

  return { projectName: cwd, template, help };
}
