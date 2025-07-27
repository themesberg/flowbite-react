---
"flowbite-react": patch
---

Search for `<ThemeInit />` in the project and warn if it's not found instead of warning all the time

### Changes

- during commands `build` and `dev` check files content for custom configuration and display a warning if `<ThemeInit />` is not found
- switch tests `src/cli` `src/helpers` from `vitest` -> `bun:test`
