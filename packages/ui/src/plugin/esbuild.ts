import { createEsbuildPlugin } from "unplugin";
import { unpluginFactory } from "./index";

export default createEsbuildPlugin(unpluginFactory);
