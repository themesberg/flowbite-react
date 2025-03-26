# create-flowbite-react

The easiest way to get started with `flowbite-react` is by using the `create-flowbite-react` CLI.

Easily scaffold a `flowbite-react` application using the most popular React frameworks and technologies available.

## Getting started

Run any of the following commands and answer the command prompt questions:

### Interactive

The CLI will prompt for the directory name, template to use, and whether to initialize a new git repository:

```bash
npx create-flowbite-react@latest
```

### Non-interactive

You can also pass command line arguments to set up a new project non-interactively. See `npx create-flowbite-react@latest --help`:

```bash
npx create-flowbite-react@latest <project-directory> [options]
```

Check out the full list of [official `flowbite-react` template examples](https://github.com/themesberg/flowbite-react-templates).

## Options

| Name                    | Description                     |
| ----------------------- | ------------------------------- |
| `--template, -t <name>` | Specify your template           |
| `--git`                 | Initialize a new git repository |
| `--help, -h`            | Display available flags         |
| `--version, -v`         | Display CLI version             |

## Templates

| \<name>           | Repository                                                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `adonisjs`        | [flowbite-react-template-adonisjs](https://github.com/themesberg/flowbite-react-template-adonisjs)                                 |
| `astro`           | [flowbite-react-template-astro](https://github.com/themesberg/flowbite-react-template-astro)                                       |
| `blitzjs`         | [flowbite-react-template-blitzjs](https://github.com/themesberg/flowbite-react-template-blitzjs)                                   |
| `bun`             | [flowbite-react-template-bun](https://github.com/themesberg/flowbite-react-template-bun)                                           |
| `esbuild`         | [flowbite-react-template-esbuild](https://github.com/themesberg/flowbite-react-template-esbuild)                                   |
| `farm`            | [flowbite-react-template-farm](https://github.com/themesberg/flowbite-react-template-farm)                                         |
| `gatsby`          | [flowbite-react-template-gatsby](https://github.com/themesberg/flowbite-react-template-gatsby)                                     |
| `laravel`         | [flowbite-react-template-laravel](https://github.com/themesberg/flowbite-react-template-laravel)                                   |
| `meteorjs`        | [flowbite-react-template-meteorjs](https://github.com/themesberg/flowbite-react-template-meteorjs)                                 |
| `modernjs`        | [flowbite-react-template-modernjs](https://github.com/themesberg/flowbite-react-template-modernjs)                                 |
| `nextjs`          | [flowbite-react-template-nextjs](https://github.com/themesberg/flowbite-react-template-nextjs)                                     |
| `parcel`          |                                                                                                                                    |
| ↳ `client`        | [flowbite-react-template-parcel-client](https://github.com/themesberg/flowbite-react-template-parcel-client)                       |
| ↳ `server-bun`    | [flowbite-react-template-parcel-server-bun](https://github.com/themesberg/flowbite-react-template-parcel-server-bun)               |
| ↳ `server-deno`   | [flowbite-react-template-parcel-server-deno](https://github.com/themesberg/flowbite-react-template-parcel-server-deno)             |
| ↳ `server`        | [flowbite-react-template-parcel-server](https://github.com/themesberg/flowbite-react-template-parcel-server)                       |
| `react-router`    |                                                                                                                                    |
| ↳ `framework`     | [flowbite-react-template-react-router-framework](https://github.com/themesberg/flowbite-react-template-react-router-framework)     |
| ↳ `data`          | [flowbite-react-template-react-router-data](https://github.com/themesberg/flowbite-react-template-react-router-data)               |
| ↳ `declarative`   | [flowbite-react-template-react-router-declarative](https://github.com/themesberg/flowbite-react-template-react-router-declarative) |
| `react-server`    | [flowbite-react-template-react-server](https://github.com/themesberg/flowbite-react-template-react-server)                         |
| `redwoodjs`       | [flowbite-react-template-redwoodjs](https://github.com/themesberg/flowbite-react-template-redwoodjs)                               |
| `remix`           | [flowbite-react-template-remix](https://github.com/themesberg/flowbite-react-template-remix)                                       |
| `rsbuild`         | [flowbite-react-template-rsbuild](https://github.com/themesberg/flowbite-react-template-rsbuild)                                   |
| `rspack`          | [flowbite-react-template-rspack](https://github.com/themesberg/flowbite-react-template-rspack)                                     |
| `tanstack-router` | [flowbite-react-template-tanstack-router](https://github.com/themesberg/flowbite-react-template-tanstack-router)                   |
| `tanstack-start`  | [flowbite-react-template-tanstack-start](https://github.com/themesberg/flowbite-react-template-tanstack-start)                     |
| `vike`            | [flowbite-react-template-vike](https://github.com/themesberg/flowbite-react-template-vike)                                         |
| `vite`            | [flowbite-react-template-vite](https://github.com/themesberg/flowbite-react-template-vite)                                         |
| `waku`            | [flowbite-react-template-waku](https://github.com/themesberg/flowbite-react-template-waku)                                         |
| `webpack`         | [flowbite-react-template-webpack](https://github.com/themesberg/flowbite-react-template-webpack)                                   |

## Examples

Create a new project with a specific template:

```bash
npx create-flowbite-react@latest my-app --template react-router
# or using shortcut
npx create-flowbite-react@latest my-app -t react-router
```

Create a new project with a specific template version:

```bash
# Using dot notation for nested versions
npx create-flowbite-react@latest my-app --template react-router.framework
# or using shortcut
npx create-flowbite-react@latest my-app -t react-router.framework
```
