import { getPackageJson } from "../utils/get-package-json";

/**
 * Requires Tailwind CSS to be installed in the project.
 */
export async function ensureTailwind() {
  const packageJson = await getPackageJson();
  const packageName = "tailwindcss";

  if (!(packageJson?.dependencies?.[packageName] || packageJson?.devDependencies?.[packageName])) {
    console.error("Install Tailwind CSS first.\n\nSee: https://tailwindcss.com/docs/installation");
    process.exit(1);
  }
}
