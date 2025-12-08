---
"flowbite-react": patch
---

Use CSS variables for `tailwindcss@v4` instead of inline colors.

### Changes

- [x] automatically generate `tailwindcss@v4` config file
- [x] use css variables for the `v4` config

### Breaking changes

Only applicable to `tailwindcss@v4`:

before
`@plugin "flowbite-react/plugins/tailwindcss"` - this points to the legacy JS plugin (that uses inline colors)

after
`@import "flowbite-react/plugins/tailwindcss"` - this points to the CSS based plugin (that uses CSS variables)

The breaking change is self-managed once upgrading `flowbite-react` and starting/building the app, which runs the `flowbite-react dev` or respectively `flowbite-react build` command that triggers the patch/fix/migration automatically.
