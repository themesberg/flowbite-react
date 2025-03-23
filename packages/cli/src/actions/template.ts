import * as p from "@clack/prompts";
import type { Context } from "../context.js";
import { REPOS, type Template } from "../data.js";

export async function getTemplate(context: Context): Promise<Template> {
  let names: string[] = [];

  if (context.template) {
    const result = findTemplateByPath(context.template);

    if (result.invalidPart) {
      const { value, available } = result.invalidPart;
      if (result.names.length) {
        p.log.info(`Using template: ${result.names.join(" » ")}`);
        p.log.error(
          `Invalid version "${value}" for ${result.names[result.names.length - 1]}. Available: ${available.join(", ")}`,
        );
      } else {
        p.log.error(`Invalid template "${value}". Available: ${available.join(", ")}`);
      }
      process.exit(0);
    }

    names = result.names;
    p.log.info(`Using template: ${names.join(" -> ")}`);

    if (result.template?.url) {
      return result.template;
    }

    return await promptForTemplate(result.template);
  }

  return await promptForTemplate();
}

function findTemplateByPath(path: string): {
  template: Template | undefined;
  names: string[];
  invalidPart?: {
    value: string;
    available: string[];
  };
} {
  const parts = path.split(".");
  let current: Template | undefined;
  const names: string[] = [];

  const rootTemplate = REPOS.find((repo) => repo.key === parts[0]);
  if (!rootTemplate || !parts[0]) {
    return {
      template: undefined,
      names,
      invalidPart: {
        value: parts[0] || "",
        available: REPOS.map((t) => t.key),
      },
    };
  }
  current = rootTemplate;
  names.push(current.name);

  for (let i = 1; i < parts.length && current; i++) {
    const versions: Template[] = current.versions || [];
    const part = parts[i];

    if (!part) {
      continue;
    }

    if (!versions.length) {
      return {
        template: undefined,
        names,
        invalidPart: {
          value: part,
          available: [],
        },
      };
    }

    const nextVersion: Template | undefined = versions.find((v: Template) => v.key === part);
    if (!nextVersion) {
      return {
        template: undefined,
        names,
        invalidPart: {
          value: part,
          available: versions.map((v: Template) => v.key),
        },
      };
    }
    current = nextVersion;
    names.push(nextVersion.name);
  }

  return {
    template: current,
    names,
  };
}

async function promptForTemplate(startFrom?: Template): Promise<Template> {
  let current = startFrom;

  while (true) {
    if (current?.url) {
      return current;
    }

    const options = current?.versions || REPOS;

    if (current) {
      current = await selectVersion(current);
      continue;
    }

    const selection = await p.select({
      message: "What template would you like to use?",
      options: options.map((template) => ({
        value: template.key,
        label: template.name,
        hint: template.description,
      })),
    });

    if (p.isCancel(selection)) {
      p.cancel("Operation cancelled.");
      process.exit(0);
    }

    const selected = options.find((t) => t.key === selection);
    if (!selected) {
      p.log.error("Selection not found");
      process.exit(0);
    }

    current = selected;
  }
}

async function selectVersion(current: Template): Promise<Template> {
  const selection = await p.select({
    message: `Select version for ${current.name}:`,
    options: current.versions!.map((version) => ({
      value: version.key,
      label: version.name,
      hint: version.description,
    })),
  });

  if (p.isCancel(selection)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  const version = current.versions!.find((v) => v.key === selection);
  if (!version) {
    p.log.error("Selection not found");
    process.exit(0);
  }

  return version;
}
