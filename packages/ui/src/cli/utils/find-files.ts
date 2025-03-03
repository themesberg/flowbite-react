import fs from "fs/promises";
import path from "path";

export interface FindFilesOptions {
  patterns: string[];
  startDir?: string;
  excludeDirs?: string[];
  parallel?: boolean;
  recursive?: boolean;
}

/**
 * Finds files matching specified patterns within a directory.
 *
 * This function recursively searches a directory for files that match the given patterns.
 * It can be configured to search in parallel or sequentially, and to exclude specific directories.
 *
 * @param {FindFilesOptions} options - The options for the file search.
 * @param {string[]} options.patterns - The patterns to match files against.
 * @param {string} [options.startDir="."] - The directory to start the search from.
 * @param {string[]} [options.excludeDirs=[]] - Directories to exclude from the search.
 * @param {boolean} [options.parallel=true] - Whether to search in parallel or sequentially.
 * @param {boolean} [options.recursive=true] - Whether to search recursively.
 * @returns {Promise<string[]>} A promise that resolves to an array of paths of files that match the patterns.
 */
export async function findFiles({
  patterns,
  startDir = ".",
  excludeDirs = [],
  parallel = true,
  recursive = true,
}: FindFilesOptions): Promise<string[]> {
  const results: string[] = [];

  // Helper function to check if the file matches a pattern
  function matchesPattern(fileName: string): boolean {
    return patterns.some((pattern) => {
      // Check if the pattern contains a wildcard and match extensions
      const patternParts = pattern.split("/");
      const patternFileName = patternParts[patternParts.length - 1];

      // Check if pattern has no wildcards (*), i.e., exact file name match
      if (patternFileName && !patternFileName.includes("*")) {
        return fileName === patternFileName; // Exact match for filenames like 'tailwind.config.js'
      }

      // If pattern includes wildcard, we match extensions (e.g., **/*.js, **/*.css)
      const fileExt = path.extname(fileName).slice(1); // Get file extension (e.g., js, ts)
      const patternExt = patternFileName.split(".").pop();

      return patternFileName.includes("*") && patternExt === fileExt;
    });
  }

  // Recursive search function
  async function search(directory: string): Promise<void> {
    // Skip excluded directories
    if (excludeDirs.some((dir) => directory.endsWith(dir))) {
      return;
    }

    try {
      const entries = await fs.readdir(directory, { withFileTypes: true });
      const tasks = entries.map(async (entry) => {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
          if (recursive) {
            return search(fullPath); // Recursive call for directories
          }
        } else {
          // Check if file matches the pattern
          if (matchesPattern(entry.name)) {
            results.push(fullPath); // Add matching file to results
          }
        }
      });

      // Control parallelism
      if (parallel) {
        await Promise.all(tasks); // Run directory/file checks in parallel
      } else {
        for (const task of tasks) {
          await task; // Run directory/file checks sequentially
        }
      }
    } catch (error) {
      console.error("Error reading directory:", error);
    }
  }

  await search(startDir);
  return results;
}
