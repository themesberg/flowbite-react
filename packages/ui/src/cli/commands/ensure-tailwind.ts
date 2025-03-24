import { getPackageJson } from "../utils/get-package-json";

export async function ensureTailwind() {
  const packageJson = await getPackageJson();
  const tailwindVersion = packageJson?.dependencies?.["tailwindcss"] || packageJson?.devDependencies?.["tailwindcss"];

  if (!tailwindVersion) {
    console.error("Install Tailwind CSS first.\n\nSee: https://tailwindcss.com/docs/installation");
    process.exit(1);
  }
}
