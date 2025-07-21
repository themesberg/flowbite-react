---
"flowbite-react": minor
---

# Breaking changes

- removed `flowbite-react patch` CLI command

## Changes

- `flowbite-react/.gitignore`, `flowbite-react/config.json` self manages, regenerates and repairs
- new file `init.(jsx|tsx)` in `.flowbite-react/` directory that syncs up values from `config.json` that also are needed in React app runtime (similar to how a React context works)
  - synced on CLI commands: `init`, `build`, `dev`, `register`
- If you have custom configuration in `.flowbite-react/config.json` (different `dark`/`prefix`/`version` values), you must render `<ThemeInit />` at the root level of your app to sync runtime with node config values

## Migration Guide

1. Remove `flowbite-react patch` from your `package.json`

   ```diff
   {
     "scripts": {
   -   "postinstall": "flowbite-react patch"
     }
   }
   ```

2. Add `<ThemeInit />` (import from `.flowbite-react/init.(jsx|tsx)`) at the root level of your app if you have custom configuration in `.flowbite-react/config.json` (different `dark`/`prefix`/`version` values).
