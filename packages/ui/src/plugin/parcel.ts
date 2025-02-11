import { Reporter } from "@parcel/plugin";
import { build, dev } from "../cli";

export default new Reporter({
  async report({ event }) {
    if (event.type === "buildStart") {
      await build();
    }
    if (event.type === "watchStart") {
      await dev();
    }
  },
});
