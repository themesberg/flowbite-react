import arg from "arg";

export interface Context {
  projectName?: string;
  template?: string;
  version?: boolean;
  help?: boolean;
}

export function getContext(argv: string[]): Context {
  const flags = arg(
    {
      "--template": String,
      "--version": Boolean,
      "--help": Boolean,
      "-v": "--version",
      "-h": "--help",
    },
    { argv, permissive: true },
  );

  let cwd = flags["_"][0];
  let { "--template": template, "--version": version, "--help": help } = flags;

  return { projectName: cwd, template, version, help };
}
