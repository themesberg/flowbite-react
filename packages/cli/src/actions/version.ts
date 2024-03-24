import packageJson from "../../package.json";

export function version() {
  console.log(packageJson.version);
}
