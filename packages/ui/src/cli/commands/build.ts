import { generateClassList } from "./generate-class-list";
import { setupOutputDirectory } from "./setup-output-directory";

export async function build() {
  await setupOutputDirectory();
  await generateClassList();
}
