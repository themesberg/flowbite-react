import { createRequire } from "module";

/**
 * Gets the package.json contents for a given package.
 *
 * @param packageName - The name of the package to get the package.json from
 * @returns The contents of the package.json file or null if the package is not installed
 */
export async function getModulePackageJson<T extends { name: string; version: string } & Record<string, unknown>>(
  packageName: string,
): Promise<T | null> {
  try {
    const require = createRequire(import.meta.url);
    return require(`${packageName}/package.json`);
  } catch {
    try {
      return (await import(`${packageName}/package.json`)).default;
    } catch {
      return null;
    }
  }
}
