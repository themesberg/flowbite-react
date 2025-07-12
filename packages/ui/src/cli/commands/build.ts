import { syncTailwindVersion } from "../utils/sync-tailwind-version";
import { generateClassList } from "./generate-class-list";
import { setupOutputDirectory } from "./setup-output-directory";

export async function build() {
  await setupOutputDirectory();
  await syncTailwindVersion();
  await generateClassList();
}
