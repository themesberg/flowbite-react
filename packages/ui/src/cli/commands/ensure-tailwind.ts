import { getModulePackageJson } from "../utils/get-module-package-json";

/**
 * Requires Tailwind CSS to be installed in the project.
 */
export async function ensureTailwind() {
  const tailwindcssPackageJson = await getModulePackageJson("tailwindcss");

  if (!tailwindcssPackageJson) {
    console.error("Install Tailwind CSS first.\n\nSee: https://tailwindcss.com/docs/installation");
    process.exit(1);
  }
}
