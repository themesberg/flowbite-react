import { TailwindcssPatcher } from "tailwindcss-patch";

async function main() {
  try {
    const twPatcher = new TailwindcssPatcher({
      patch: {
        overwrite: true,
        basedir: process.cwd(),
        applyPatches: {
          exportContext: true,
          extendLengthUnits: false,
        },
      },
    });
    twPatcher.patch();
    // TODO: extract per component too
    await twPatcher.extract({
      output: {
        filename: "src/class-list.json",
        removeUniversalSelector: true,
        loose: true,
      },
      tailwindcss: {},
    });
  } catch (e) {
    console.log(e);
  }
}

main();
