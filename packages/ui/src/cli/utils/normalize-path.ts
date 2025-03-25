import path from "path";

/**
 * Normalizes a path for use in import statements, ensuring forward slashes are used
 * regardless of the operating system.
 *
 * @param importPath - The path to normalize
 * @returns The normalized path with forward slashes
 */
export function normalizeImportPath(importPath: string): string {
  return importPath.replace(/\\/g, "/");
}

/**
 * Joins path segments and normalizes the result to use forward slashes.
 * This is useful for paths that need to be used in import statements or URLs.
 *
 * @param segments - Path segments to join
 * @returns The normalized path with forward slashes
 */
export function joinNormalizedPath(...segments: string[]): string {
  return normalizeImportPath(path.join(...segments));
}
