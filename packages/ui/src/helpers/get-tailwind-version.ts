import version from "tailwindcss/version";

/**
 * Gets the major version number of the installed Tailwind CSS
 *
 * @returns The major version number (3 or 4) or undefined if not found
 */
export function getTailwindVersion(): 3 | 4 | undefined {
  try {
    return parseInt(version.split(".")[0], 10) as 3 | 4;
  } catch (_) {
    return;
  }
}
