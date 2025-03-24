import { Reporter } from "@parcel/plugin";
import { build } from "../cli/commands/build";
import { dev } from "../cli/commands/dev";

export default new Reporter({
  async report({ event, options }) {
    if (event.type === "buildStart" && options.env.NODE_ENV === "production") {
      await build();
    }
    if (event.type === "watchStart") {
      await build();
      await dev();
    }
  },
});
