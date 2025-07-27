export interface Config {
  $schema: string;
  components: string[];
  dark: boolean;
  path: string;
  prefix: string;
  rsc: boolean;
  tsx: boolean;
  version: 3 | 4;
}

export function createConfig(input: Partial<Config> = {}): Config {
  return {
    $schema: input.$schema ?? "https://unpkg.com/flowbite-react/schema.json",
    components: input.components ?? [],
    dark: input.dark ?? true,
    path: input.path ?? "src/components",
    // TODO: infer from project
    prefix: input.prefix ?? "",
    rsc: input.rsc ?? true,
    tsx: input.tsx ?? true,
    version: input.version ?? 4,
  };
}
