import { spawn, type SpawnOptions } from "child_process";

/**
 * Runs a shell command asynchronously and captures its output.
 *
 * @param {string} command - The command to execute (e.g., "npm").
 * @param {string[]} [args=[]] - Arguments for the command (e.g., ["install", "package-name"]).
 * @param {SpawnOptions} [options={}] - Optional spawn configuration options.
 * @returns {Promise<{ stdout: string; stderr: string; exitCode: number }>} - Resolves with command output and exit code.
 * @throws {Error} If the process exits with a non-zero code.
 */
export function execCommand(
  command: string,
  args: string[] = [],
  options: SpawnOptions = {},
): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { ...options, shell: true });

    let stdout = "";
    let stderr = "";

    if (child.stdout) {
      child.stdout.on("data", (data) => {
        stdout += data.toString();
      });
    }

    if (child.stderr) {
      child.stderr.on("data", (data) => {
        stderr += data.toString();
      });
    }

    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr, exitCode: code || 0 });
      } else {
        reject(new Error(`Process exited with code ${code}: ${stderr}`));
      }
    });

    child.on("error", (err) => {
      reject(err);
    });
  });
}
