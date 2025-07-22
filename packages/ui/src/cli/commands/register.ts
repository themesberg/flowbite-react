import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import { automaticClassGenerationMessage, outputDir, processIdFile } from "../consts";
import { getConfig } from "../utils/get-config";
import { setupInit } from "./setup-init";
import { setupOutputDirectory } from "./setup-output-directory";

export async function register() {
  await setupOutputDirectory();
  const config = await getConfig();
  await setupInit(config);

  if (config.components.length) {
    console.warn(automaticClassGenerationMessage);
  }

  const processIdFilePath = path.join(outputDir, processIdFile);

  try {
    // clean up old process
    const pid = await fs.readFile(processIdFilePath, "utf8");
    process.kill(parseInt(pid, 10));
    await fs.unlink(processIdFilePath);
  } catch {
    //
  }

  try {
    // run `flowbite-react dev` in background
    const devProcess = spawn("flowbite-react", ["dev"], {
      stdio: "ignore",
      detached: true,
      shell: true,
    });

    if (devProcess.pid) {
      await fs.writeFile(processIdFilePath, devProcess.pid.toString());
    }
  } catch (error) {
    console.error("Failed to register flowbite-react", error);
  }

  process.exit();
}
