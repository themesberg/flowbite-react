import { createRequire } from "module";

/**
 * Gets the version of Tailwind CSS used in the project.
 *
 * This function attempts to read the version from the `tailwindcss/package.json` file.
 * If the file is not found, it will try to import the file asynchronously.
 *
 * @returns `3` if the version is 3.x, `4` if the version is 4.x.
 */
export async function getTailwindVersion(): Promise<3 | 4> {
  let tailwindcssPackageJson: { version: string };
  try {
    const require = createRequire(import.meta.url);
    tailwindcssPackageJson = require("tailwindcss/package.json");
  } catch {
    tailwindcssPackageJson = (await import("tailwindcss/package.json")).default;
  }

  const major = parseInt(tailwindcssPackageJson.version.split(".")[0], 10);
  if (major === 3 || major === 4) {
    return major;
  }

  throw new Error(`Unsupported Tailwind CSS major version: ${major}`);
}
