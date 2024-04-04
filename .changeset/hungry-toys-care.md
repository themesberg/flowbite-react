---
"flowbite-react": minor
---

## Rework build process using `rollup` and `tsc`

### Summary

In order to bring more performance to the build process of `flowbite-react` package, we have to consider transpiling the files using other tools rather than `tsc`, which is very slow.

After evaluating various tools including `tsup`, `tshy`, and `bun build`, we chose `rollup` with the `esbuild` plugin for transpiling due to its performance and flexibility. We continue to use `tsc` solely for generating `*.d.ts` declaration files.

### Changes

- added `rollup` + `esbuild` for transpiling files
  - all files in the `cjs` directory now have `.cjs` extension
  - all files in the `esm` directory now have `.mjs` extension
  - declaration file types (`*.d.ts`) have been moved from `dist/esm` to `dist/types`
- changed the build output dir from `lib` to `dist`
- created a facade layer for easier management of the `content` path as well as the `plugin`
- fixed turbo repo dependency tree configs in order for `apps/web` to properly pipe and require the build output of `packages/ui` in certain script steps such as `build` and `dev`

### Breaking changes

`tailwind.config.js` `content` path:

old: `"node_modules/flowbite-react/lib/esm/**/*.js"`

new: `"node_modules/flowbite-react/dist/esm/**/*.mjs"` - (`flowbite.content()` returns it)

Before

```js {5,9}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
};
```

After

```js {1,7,11}
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
```
