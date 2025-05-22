import { getPackageJson } from "../utils/get-package-json";

/**
 * Requires Tailwind CSS to be installed in the project.
 */
export async function ensureTailwind() {
  // TODO: runtime check
  const packageJson = await getPackageJson();

  if (!(packageJson?.dependencies?.["tailwindcss"] || packageJson?.devDependencies?.["tailwindcss"])) {
    console.error("Install Tailwind CSS first.\n\nSee: https://tailwindcss.com/docs/installation");
    process.exit(1);
  }
}
