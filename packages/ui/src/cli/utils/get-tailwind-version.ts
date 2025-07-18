import { getModulePackageJson } from "./get-module-package-json";

/**
 * Gets the version of Tailwind CSS used in the project.
 *
 * This function attempts to read the version from the `tailwindcss/package.json` file.
 *
 * @throws {Error} If the detected Tailwind CSS major version is not 3 or 4
 * @returns {Promise<3 | 4>} `3` if the version is 3.x, `4` if the version is 4.x
 */
export async function getTailwindVersion(): Promise<3 | 4> {
  const tailwindcssPackageJson = await getModulePackageJson("tailwindcss");

  if (!tailwindcssPackageJson) {
    throw new Error("Tailwind CSS is not installed");
  }

  const major = parseInt(tailwindcssPackageJson.version.split(".")[0], 10);
  if (major === 3 || major === 4) {
    return major;
  }

  throw new Error(`Unsupported Tailwind CSS major version: ${major}`);
}
