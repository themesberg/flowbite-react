# Changelog

## 0.11.8

### Patch Changes

- [#1579](https://github.com/themesberg/flowbite-react/pull/1579) [`d44648d`](https://github.com/themesberg/flowbite-react/commit/d44648d0ab413fe670b8a1ce850788df94629d03) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix(Datepicker): switch hardcoded color `cyan` -> `primary`

## 0.11.7

### Patch Changes

- [#1556](https://github.com/themesberg/flowbite-react/pull/1556) [`f0724b9`](https://github.com/themesberg/flowbite-react/commit/f0724b96e68c61aba34a4371d9fd710d9c3b5cd9) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix(ui~cli): `patch` command windows support

## 0.11.6

### Patch Changes

- [#1552](https://github.com/themesberg/flowbite-react/pull/1552) [`bab6c75`](https://github.com/themesberg/flowbite-react/commit/bab6c75bad8f0ab2dcdd708dd3a2099cd33a679f) Thanks [@bigbyte-stuart](https://github.com/bigbyte-stuart)! - make drawer close button type button

- [#1555](https://github.com/themesberg/flowbite-react/pull/1555) [`2f461ea`](https://github.com/themesberg/flowbite-react/commit/2f461eae33284990c5d5d03bde0ad36f9001cc13) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - refactor(ui~convertUtilitiesToV4): drop `js-regexp-lookbehind` in favor of more simpler regex for improved browser support

## 0.11.5

### Patch Changes

- [#1549](https://github.com/themesberg/flowbite-react/pull/1549) [`7327e55`](https://github.com/themesberg/flowbite-react/commit/7327e55ef080068b3639c1c2ff8f1d291bb0ec9b) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix file watcher ignore directory logic leading to false positives

## 0.11.4

### Patch Changes

- [`c54183b`](https://github.com/themesberg/flowbite-react/commit/c54183bec1b6da47dee1519fabf1510cbfc48409) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - add orphan `className`s to the theme object

## 0.11.3

### Patch Changes

- [#1543](https://github.com/themesberg/flowbite-react/pull/1543) [`868e485`](https://github.com/themesberg/flowbite-react/commit/868e4857ad91e67b791bbef290b6334c7595639c) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - add new `migrate` CLI command

  - add new transformer from compound components to singular imports

    ```tsx
    import { Button } from "flowbite-react";

    // from
    <Button.Group>
      <Button>tab 1</Button>
      <Button>tab 2</Button>
      <Button>tab 3</Button>
    </Button.Group>

    // to
    import { Button, ButtonGroup } from "flowbite-react";

    <ButtonGroup>
      <Button>tab 1</Button>
      <Button>tab 2</Button>
      <Button>tab 3</Button>
    </ButtonGroup>
    ```

## 0.11.2

### Patch Changes

- [#1541](https://github.com/themesberg/flowbite-react/pull/1541) [`af49b10`](https://github.com/themesberg/flowbite-react/commit/af49b100f8412f1c8fcbb1ccb2c7d97e22c47d28) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix(ui~cli): path normalzation for windows support (setup plugins paths)

- [#1539](https://github.com/themesberg/flowbite-react/pull/1539) [`6caecce`](https://github.com/themesberg/flowbite-react/commit/6caeccedd7f5002c879f3c6c6ce6c6b38dcd7956) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - refactor(Alert): `onDismiss` prop

  - Changed the type of `onDismiss` prop in Alert component from boolean to a function type
  - Removed `onDismiss` default values from various Alert stories to align with the updated prop type

## 0.11.1

### Patch Changes

- [#1535](https://github.com/themesberg/flowbite-react/pull/1535) [`bd5ead5`](https://github.com/themesberg/flowbite-react/commit/bd5ead5d5cef14506a772e96001466cf52691ebd) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix `schema.json`: add missing `dark` field in `required`

## 0.11.0

### Minor Changes

- [#1498](https://github.com/themesberg/flowbite-react/pull/1498) [`169b5dd`](https://github.com/themesberg/flowbite-react/commit/169b5dd9ecae6878a411d4ec90d253265a5bba86) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - ## Summary

  This release brings massive improvements to Flowbite React's capabilities, introducing the first automatic Tailwind CSS class generation system and native support for both Tailwind CSS v3 and v4. Key highlights include:

  - **Automatic Class Generation**: First UI library to automatically detect and generate Tailwind CSS classes
  - **Tailwind CSS v4 Support**: Native compatibility with both Tailwind CSS v3 and v4
  - **Comprehensive Prefix Support**: Complete system for customizing class prefixes
  - **Enhanced CLI Tools**: New project initialization and component creation commands
  - **Expanded Framework Support**: 15 new framework integration guides and templates

  ## New Engine

  ### Automatic Class Generation

  - First UI library to implement automatic Tailwind CSS class detection
  - Only includes styles for components you actually import and use
  - Works like tree-shaking but for Tailwind CSS classes
  - Real-time class list updates during development
  - Optimized production builds with minimal CSS output

  Learn more about class generation in our [CLI documentation](https://flowbite-react.com/docs/getting-started/cli#cli-commands).

  ### One-Command Setup

  ```bash
  npx flowbite-react@latest init
  ```

  This single command:

  - Detects your project's environment
  - Installs necessary dependencies
  - Configures Tailwind CSS
  - Sets up the appropriate bundler plugin
  - Creates optimal VSCode configuration
  - Initializes the `.flowbite-react` directory

  See our [quickstart guide](https://flowbite-react.com/docs/getting-started/quickstart) for detailed setup instructions.

  ### Smart Version Handling

  - Automatic detection of Tailwind CSS version (v3 or v4)
  - No manual configuration needed
  - Adapts class generation to version-specific syntax
  - Ensures compatibility with both versions simultaneously

  Read more about version compatibility in our [compatibility guide](https://flowbite-react.com/docs/getting-started/compatibility).

  ## Major Features

  ### 1. Enhanced Integration Support

  - Added new framework integration guides and templates:
    - Blitz.js
    - Bun
    - ESBuild
    - Farm
    - Meteor.js
    - Modern.js
    - React Router
    - React Server
    - Rsbuild
    - Rspack
    - TanStack Router
    - TanStack Start
    - Vike
    - Waku
    - Webpack

  Explore all integration guides in our [framework guides section](https://flowbite-react.com/docs/guides).

  ### 2. Prefix Support System

  - Added support for customizing Tailwind CSS class prefixes
  - Different configuration options for Tailwind CSS v3 and v4:

    ```js
    // Tailwind CSS v3
    /** @type {import('tailwindcss').Config} */
    export default {
      prefix: "tw-",
      // ... rest of your config
    };

    // Tailwind CSS v4
    @import "tailwindcss" prefix(tw);
    ```

  - Prefix configuration in `.flowbite-react/config.json`:

    ```json
    {
      "$schema": "https://unpkg.com/flowbite-react/schema.json",
      "prefix": "tw"
    }
    ```

  - ThemeConfig component support for prefix configuration:

    ```tsx
    import { ThemeConfig } from "flowbite-react";

    export default function App() {
      return (
        <>
          <ThemeConfig prefix="tw" />
          {/* ... */}
        </>
      );
    }
    ```

  Learn more about prefix configuration in our [prefix documentation](https://flowbite-react.com/docs/customize/prefix).

  ### 3. CLI Enhancements

  - New project initialization command:

    ```bash
    npx flowbite-react@latest init
    ```

  Learn more about CLI features in our [CLI documentation](https://flowbite-react.com/docs/getting-started/cli).

  ### 4. Tailwind CSS Version Compatibility

  - Automatic version detection between Tailwind CSS v3 and v4
  - Seamless support for both versions without manual configuration
  - Improved class merging and prefix handling for each version

  ### 5. Configuration System

  - New `.flowbite-react/config.json` for centralized configuration (automatically generated):

    ```json
    {
      "$schema": "https://unpkg.com/flowbite-react/schema.json",
      "components": [],
      "dark": true,
      "path": "src/components",
      "prefix": "",
      "rsc": true,
      "tsx": true
    }
    ```

  Learn more about configuration options in our [config documentation](https://flowbite-react.com/docs/customize/config).

  ### 6. Custom Components

  #### Component Creation

  - Added CLI command for component generation:

    ```bash
    npx flowbite-react@latest create my-component
    ```

  - Automatic setup based on `.flowbite-react/config.json` configuration:
    - Component path location
    - React Server Components support
    - TypeScript/JavaScript selection

  #### Theme System Integration

  - Full theming system support for custom components:
    - Global theme inheritance
    - Component-level overrides
    - Provider-level props
    - Theme clearing and applying
    - Type safety with TypeScript

  ## Technical Improvements

  ### Build System

  - Improved bundler compatibility and performance
  - Added support for tree-shaking
  - Enhanced TypeScript configuration
  - Optimized production builds

  ### Component Updates

  - Improved component primitives
  - Enhanced type safety across components
  - Added extensive test coverage

  ### Developer Experience

  - Added comprehensive TypeScript types
  - Improved VSCode integration
  - Enhanced debugging capabilities

  ### Exports and Package Structure

  - All components, hooks, and utilities are now exported from the root package
  - Every internal part and primitive is exposed for advanced customization
  - Improved module resolution with better tree-shaking support
  - Direct access to component parts without compound components
  - TypeScript types for all exports are available

  ## Breaking Changes

  ### Component Changes

  - Deprecated compound components in favor of simpler component primitives:

    ```tsx
    // Before - Compound components
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Title 1</Accordion.Title>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Panel>
    </Accordion>

    // After - Simple primitives
    <AccordionRoot>
      <AccordionItem>
        <AccordionTitle>Title 1</AccordionTitle>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
    ```

  - Removed `helperText` prop from all form components in favor of using the `HelperText` component directly
  - Deprecated `href` prop in `Badge` component
  - Updated `Button` component to use new color system:
    - Added `default` and `alternative` colors
    - Changed default color from `blue` to `default`
    - Modified hover states to use primary colors
    - Moved theme size styles from inner span to root button element

  ### Theme System

  - Changed theme application behavior:
    - Enhanced `ThemeProvider` with deep merging of themes
    - Added support for granular theme resets using `clearTheme`
    - Improved theme resolution with better performance
    - Updated color schemes to use primary colors consistently
  - Modified component color schemes:
    - Updated default colors to use `primary` instead of specific colors (e.g., `cyan`)
    - Standardized color naming across components
    - Enhanced color inheritance and theme customization

  Learn more about theming in our [theme documentation](https://flowbite-react.com/docs/customize/theme).

  ### Package and Build System

  - Switched package type to `module`
  - Added new entry points for better module resolution
  - Removed `react-icons` dependency in favor of custom icon components
  - Added support for [Yarn Plug'n'Play (PnP)](https://yarnpkg.com/features/pnp):

  ### API Changes

  - Deprecated `<Flowbite>` component in favor of `ThemeProvider`
  - Removed `getStore()` export and limited to finite actions and getters
  - Added `forwardRef` to almost all components
  - Removed redundant `Flowbite` prefix from type names

  ## Migration Guide

  1. Update to the latest version:

     ```bash
     npm install flowbite-react@latest
     ```

  2. Initialize the new engine:

     ```bash
     npx flowbite-react@latest init
     ```

     This will:

     - Set up the `.flowbite-react` directory
     - Configure your bundler
     - Update VSCode settings
     - Create necessary configuration files

  3. Clean up your Tailwind configuration:

     ```diff
     - import flowbite from 'flowbite-react/tailwind';

     /** @type {import('tailwindcss').Config} */
     export default {
       content: [
     -    flowbite.content(),
     +    // The init command will add the correct content paths
       ],
       plugins: [
     -    flowbite.plugin(),
     +    // The init command will add the correct plugins
       ],
     }
     ```

  ## Fixed Issues and Pull Requests

  ### Resolved Issues

  - [#339](https://github.com/themesberg/flowbite-react/issues/339)
  - [#1197](https://github.com/themesberg/flowbite-react/issues/1197)
  - [#1286](https://github.com/themesberg/flowbite-react/issues/1286)
  - [#1389](https://github.com/themesberg/flowbite-react/issues/1389)
  - [#1447](https://github.com/themesberg/flowbite-react/issues/1447)
  - [#1454](https://github.com/themesberg/flowbite-react/issues/1454)
  - [#1473](https://github.com/themesberg/flowbite-react/issues/1473)
  - [#1489](https://github.com/themesberg/flowbite-react/issues/1489)
  - [#1508](https://github.com/themesberg/flowbite-react/issues/1508)
  - [#1523](https://github.com/themesberg/flowbite-react/issues/1523)

  ### Resolved Pull Requests

  - [#1155](https://github.com/themesberg/flowbite-react/pull/1155)

  ## Technical Requirements

  - Node.js 16+
  - Tailwind CSS v3 or v4
  - React 18+

  For detailed documentation on all new features and integrations, visit:

  ## Core Documentation

  - [Quickstart (Updated)](https://flowbite-react.com/docs/getting-started/quickstart)
  - [CLI (Updated)](https://flowbite-react.com/docs/getting-started/cli)
  - [Compatibility (New)](https://flowbite-react.com/docs/getting-started/compatibility)
  - [Editor Setup (Updated)](https://flowbite-react.com/docs/getting-started/editor-setup)
  - [Server Components (Updated)](https://flowbite-react.com/docs/getting-started/server-components)

  ## Customization

  - [Theme (Updated)](https://flowbite-react.com/docs/customize/theme)
  - [Config (New)](https://flowbite-react.com/docs/customize/config)
  - [Prefix (New)](https://flowbite-react.com/docs/customize/prefix)
  - [Colors (New)](https://flowbite-react.com/docs/customize/colors)
  - [Custom Components (New)](https://flowbite-react.com/docs/customize/custom-components)

## 0.10.2

### Patch Changes

- [#1190](https://github.com/themesberg/flowbite-react/pull/1190) [`25bb353`](https://github.com/themesberg/flowbite-react/commit/25bb353685c595c2b05f1a355a381c28fd57526a) Thanks [@ddiasfront](https://github.com/ddiasfront)! - ### Datepicker Component Updates

  The Datepicker has been enhanced with several improvements:

  1. **Controlled Inputs**: Supports controlled inputs via `value` and `defaultValue` props, enabling programmatic date updates without manual clicks.
  2. **State Management**: Optimized internal state management using `useMemo` and `useEffect`.
  3. **Documentation**: Added sections in documentation for controlled usage and handling `null` values.
  4. **Test Cases**: Comprehensive unit tests added for date handling.
  5. **Storybook**: Improved stories, showcasing different states (controlled/uncontrolled).

  ### Files Updated:

  - `apps/web/content/docs/components/datepicker.mdx`: Added controlled usage section.
  - `Datepicker.spec.tsx`: Added unit tests.
  - `Datepicker.stories.tsx`: Enhanced story variants.
  - `Datepicker.tsx`: Expanded `DatepickerProps`.
  - `DatepickerContext.tsx`: Adjusted `selectedDate` type.
  - `Decades.tsx`, `Months.tsx`, `Years.tsx`: Updated logic to check for `selectedDate`.

- [#1484](https://github.com/themesberg/flowbite-react/pull/1484) [`38913e5`](https://github.com/themesberg/flowbite-react/commit/38913e51536ecf1c8e924a6de571880cb91d2ea0) Thanks [@KRTirtho](https://github.com/KRTirtho)! - fix: autocomplete for string enums with dynamic value not working

## 0.10.1

### Patch Changes

- [#1433](https://github.com/themesberg/flowbite-react/pull/1433) [`a5d008e`](https://github.com/themesberg/flowbite-react/commit/a5d008eb62e216e7139ff26fc67a323bb6e54b32) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - add `AdonisJS` integration guide

## 0.10.0

### Minor Changes

- [#1413](https://github.com/themesberg/flowbite-react/pull/1413) [`26401bc`](https://github.com/themesberg/flowbite-react/commit/26401bc5e88ae6a42621fce474236d7055a67516) Thanks [@dhavalveera](https://github.com/dhavalveera)! - feat(components): add "Clipboard"

### Patch Changes

- [#1405](https://github.com/themesberg/flowbite-react/pull/1405) [`c8dba76`](https://github.com/themesberg/flowbite-react/commit/c8dba76e20e101a54999bb477adcba967057ecb3) Thanks [@dhavalveera](https://github.com/dhavalveera)! - Renamed the `Tabs` attribute from `style` to `variant` to allow the use of the `style` attribute, which was previously blocked.

- [#1430](https://github.com/themesberg/flowbite-react/pull/1430) [`83a055a`](https://github.com/themesberg/flowbite-react/commit/83a055ac66c5d3ac9f28b17361278465d87b5ddc) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix(ui): timeline - content - separate `TimelineContent` base styles from horizontal/vertical styles

- [#1428](https://github.com/themesberg/flowbite-react/pull/1428) [`b963b2c`](https://github.com/themesberg/flowbite-react/commit/b963b2c1be555522ea1a6bbc0d25c614ef75e17c) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix(ui): Toggle Switch - styles

  - RTL
  - broken switch when label too long
  - bring back animations

- [#1371](https://github.com/themesberg/flowbite-react/pull/1371) [`92cec6f`](https://github.com/themesberg/flowbite-react/commit/92cec6ff58ae980f34e32ea2b2dc19b151452a0e) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - Mega Menu - export all entities

- [#1423](https://github.com/themesberg/flowbite-react/pull/1423) [`4350ffb`](https://github.com/themesberg/flowbite-react/commit/4350ffb524cdecd23162c84b4222204bf8910b2c) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - update packages

- [#1346](https://github.com/themesberg/flowbite-react/pull/1346) [`92f41fe`](https://github.com/themesberg/flowbite-react/commit/92f41fe30540e580b51bc031f51bfb57226b33dc) Thanks [@dhavalveera](https://github.com/dhavalveera)! - feat: add `HR` component

## 0.9.0

### Minor Changes

- [#1368](https://github.com/themesberg/flowbite-react/pull/1368) [`1702f35`](https://github.com/themesberg/flowbite-react/commit/1702f35318313db85a6686b033d582e2cbe08c89) Thanks [@tulup-conner](https://github.com/tulup-conner)! - ## Introducing Drawer and Mega menu

  ### Summary

  Say hello to [Drawer](https://flowbite-react.com/docs/components/drawer) and [Mega menu](https://flowbite-react.com/docs/components/mega-menu)!

  These long-awaited components from the [vanilla Flowbite library](https://flowbite.com) have finally made their way to Flowbite React. Everything you need to get started - including full theme support, and the full set of examples to match the main Flowbite library - are ready at your fingertips.

  ### Changes

  - added Drawer component
  - added Mega menu component

## 0.8.0

### Minor Changes

- [#1344](https://github.com/themesberg/flowbite-react/pull/1344) [`bf1bdb0`](https://github.com/themesberg/flowbite-react/commit/bf1bdb0e1bf303d830990b3bf7c5d1a46af3648f) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - ## Rework build process using `rollup` and `tsc`

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

## 0.7.8

### Patch Changes

- [#1339](https://github.com/themesberg/flowbite-react/pull/1339) [`8430004`](https://github.com/themesberg/flowbite-react/commit/8430004736d16562598b3ec820b28b47dde8ff4a) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix package.json types path

## 0.7.7

### Patch Changes

- [#1336](https://github.com/themesberg/flowbite-react/pull/1336) [`b6ebb31`](https://github.com/themesberg/flowbite-react/commit/b6ebb312570630176bcc5adfed9b0d8598f93654) Thanks [@SutuSebastian](https://github.com/SutuSebastian)! - fix build step, export types and improve DX

## 0.7.6

### Patch Changes

- [`7a8933d`](https://github.com/themesberg/flowbite-react/commit/7a8933da69b56a72f41442d6a1d77ba11f54bca5) - export `createTheme` API

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.7.5](https://github.com/themesberg/flowbite-react/compare/v0.7.4...v0.7.5) (2024-03-20)

Re-publish, broken build in `0.7.4`.

### [0.7.4](https://github.com/themesberg/flowbite-react/compare/v0.7.3...v0.7.4) (2024-03-20)

### Bug Fixes

- **button:** fix: polymorphic component return types [button, dropdown item] ([#1308](https://github.com/themesberg/flowbite-react/issues/1308)) ([f8775d8](https://github.com/themesberg/flowbite-react/commit/a6698d48474595f2ee05a3f817ecbdb322aa7807)), closes [#962](https://github.com/themesberg/flowbite-react/issues/962)

### [0.7.3](https://github.com/themesberg/flowbite-react/compare/v0.7.2...v0.7.3) (2024-03-12)

### Features

- **component:** default to `type="text"` on `<TextInput>` ([#1206](https://github.com/themesberg/flowbite-react/issues/1206)) ([fbd57c8](https://github.com/themesberg/flowbite-react/commit/fbd57c85906d31b47911910330b51656c546f2e1))
- Popover component ([#1237](https://github.com/themesberg/flowbite-react/issues/1237)) ([dc48f2e](https://github.com/themesberg/flowbite-react/commit/dc48f2ee3edac79aae9399c22385b81f4cb683fa)), closes [#916](https://github.com/themesberg/flowbite-react/issues/916) [#878](https://github.com/themesberg/flowbite-react/issues/878)
- **table:** Wrap table components with forwardRef ([#1239](https://github.com/themesberg/flowbite-react/issues/1239)) ([4a26a50](https://github.com/themesberg/flowbite-react/commit/4a26a504a9589415735251e4076a9e15d4ee9dce))

### Bug Fixes

- **alert:** blue color on alert is cyan ([#1282](https://github.com/themesberg/flowbite-react/issues/1282)) ([c52184e](https://github.com/themesberg/flowbite-react/commit/c52184e7bb706b9393f6ae93fbd73162547d8b98))
- **badge:** blue color on badge is cyan ([#1227](https://github.com/themesberg/flowbite-react/issues/1227)) ([ee3749f](https://github.com/themesberg/flowbite-react/commit/ee3749f4173d99b15bcbd6a312ddc5da69ba6fcf))
- **button:** Button ring on focus ([#1238](https://github.com/themesberg/flowbite-react/issues/1238)) ([406ebe5](https://github.com/themesberg/flowbite-react/commit/406ebe53228871cc0ef89282919e314414e7ad94))
- **button:** Fixed Typescript error when using Next.js Link in the button `as` prop ([#1244](https://github.com/themesberg/flowbite-react/issues/1244)) ([a6698d4](https://github.com/themesberg/flowbite-react/commit/a6698d48474595f2ee05a3f817ecbdb322aa7807)), closes [#1002](https://github.com/themesberg/flowbite-react/issues/1002) [#1107](https://github.com/themesberg/flowbite-react/issues/1107)
- **ButtonGroup:** dynamic generated button with group wasn't styled properly ([#1273](https://github.com/themesberg/flowbite-react/issues/1273)) ([d0dc810](https://github.com/themesberg/flowbite-react/commit/d0dc81073eb14f5620c70e4f4bd6e9216a7b1272)), closes [#1269](https://github.com/themesberg/flowbite-react/issues/1269) [#1269](https://github.com/themesberg/flowbite-react/issues/1269)
- homepage - use Link for internal links ([#1246](https://github.com/themesberg/flowbite-react/issues/1246)) ([4fd01e5](https://github.com/themesberg/flowbite-react/commit/4fd01e5a5631c30ea65f90fd23856eae8014ccad))
- **modal:** modal overflowing bottom in chrome on ios ([#1270](https://github.com/themesberg/flowbite-react/issues/1270)) ([3671ced](https://github.com/themesberg/flowbite-react/commit/3671ced4564a5aa7d823d8c09756bb455d2969c1))
- **navbar:** on Mobile Screen Navbar remains open even page is changed ([#1247](https://github.com/themesberg/flowbite-react/issues/1247)) ([ce25791](https://github.com/themesberg/flowbite-react/commit/ce257913c9ee3c6d52b6acf829d5b4688f0a6fc4))
- **storybook:** fix the `argTypes.weekStart.mapping` on `Datepicker.stories.tsx` ([#1254](https://github.com/themesberg/flowbite-react/issues/1254)) ([79f6316](https://github.com/themesberg/flowbite-react/commit/79f631634c528a4b06b80a027a463d82c72697eb)), closes [#1167](https://github.com/themesberg/flowbite-react/issues/1167)
- **toggleswitch component:** added forwardRef to ToggleSwitch component ([#1198](https://github.com/themesberg/flowbite-react/issues/1198)) ([8e0b658](https://github.com/themesberg/flowbite-react/commit/8e0b658625cc29d729ce8ea19ee8afb6893c7f73)), closes [#1078](https://github.com/themesberg/flowbite-react/issues/1078)
- typo in fileInput.dropzone.tsx ([#1291](https://github.com/themesberg/flowbite-react/issues/1291)) ([2c2fa52](https://github.com/themesberg/flowbite-react/commit/2c2fa52b5c2e76f3e2e73309c14d453753c0fe7b))

### [0.7.2](https://github.com/themesberg/flowbite-react/compare/v0.7.1...v0.7.2) (2023-12-12)

### Bug Fixes

- absolute to relative import ([#1183](https://github.com/themesberg/flowbite-react/issues/1183)) ([3f0bebb](https://github.com/themesberg/flowbite-react/commit/3f0bebbdc863552a5d31c080c1d129a450870cc0))

### [0.7.1](https://github.com/themesberg/flowbite-react/compare/v0.7.0...v0.7.1) (2023-12-12)

### ⚠ BREAKING CHANGES

- **datepicker:** As the WeekStart enum changed order to be aligned with Javascript Date object, now
  you have to change your weekStart attribute to be -1, so for Monday you should put 1, instead of 2.
  But it wasn't working before as the values were incorrectly rendered in the first place.

### Features

- **list component:** develop new horizontal state of list component ([#1178](https://github.com/themesberg/flowbite-react/issues/1178)) ([1fbe6ca](https://github.com/themesberg/flowbite-react/commit/1fbe6ca69346b090f9007e0ae904213977ad6d6e))
- **list.stories.tsx:** add horizontal stories ([#1180](https://github.com/themesberg/flowbite-react/issues/1180)) ([7db683d](https://github.com/themesberg/flowbite-react/commit/7db683d939d08a465df6fbb1dc7cbfc5b7396bf4))

### Bug Fixes

- add empty space to `<Checkbox>` ring in dark mode ([#1160](https://github.com/themesberg/flowbite-react/issues/1160)) ([d0ccfde](https://github.com/themesberg/flowbite-react/commit/d0ccfde319642a9c62fcff8c04470e744d7ab7a7))
- **component:** fix `<DarkThemeToggle>` console warning ([#1172](https://github.com/themesberg/flowbite-react/issues/1172)) ([bdd7cdf](https://github.com/themesberg/flowbite-react/commit/bdd7cdfadd33ce39408cf50cbc42b199e7469457))
- **datepicker:** fix the inconsistent weekday labels ([#1173](https://github.com/themesberg/flowbite-react/issues/1173)) ([770ab9d](https://github.com/themesberg/flowbite-react/commit/770ab9db7fde1aca8c68a1c0e196841a3510039f)), closes [#1044](https://github.com/themesberg/flowbite-react/issues/1044)
- **footer>theme.ts:** adding margin to right in footer links ([#1153](https://github.com/themesberg/flowbite-react/issues/1153)) ([7c1275e](https://github.com/themesberg/flowbite-react/commit/7c1275e255f8dcbefcd73a7acec21b17e043273f)), closes [#1085](https://github.com/themesberg/flowbite-react/issues/1085)
- **pagination:** updating lastPage variable correctly for table layout ([#1151](https://github.com/themesberg/flowbite-react/issues/1151)) ([2259bf5](https://github.com/themesberg/flowbite-react/commit/2259bf55c720495ae72bb055f2fca8c3633e006c)), closes [#1150](https://github.com/themesberg/flowbite-react/issues/1150)

## [0.7.0](https://github.com/themesberg/flowbite-react/compare/v0.6.4...v0.7.0) (2023-11-24)

### Features

- `ThemeModeScript` - avoid page flicker on reload on SSR application (NextJS, Remix) ([#1056](https://github.com/themesberg/flowbite-react/issues/1056)) ([4f0399b](https://github.com/themesberg/flowbite-react/commit/4f0399b50b23ec24ded67681f3290a8fbf653920))
- **progress:** add missing colors for Progress component ([#1129](https://github.com/themesberg/flowbite-react/issues/1129)) ([f8853af](https://github.com/themesberg/flowbite-react/commit/f8853afb1cf404a0a07e446890bea92aa9ce22fb))

### Bug Fixes

- **button/theme.ts:** add the missing dark modifier for Button bg color ([#1047](https://github.com/themesberg/flowbite-react/issues/1047)) ([0050aef](https://github.com/themesberg/flowbite-react/commit/0050aef25e93bd38bd517b5da54344099f7eb4bf)), closes [#1045](https://github.com/themesberg/flowbite-react/issues/1045)
- docs dropdown - incorrect code preview ([#1059](https://github.com/themesberg/flowbite-react/issues/1059)) ([624932a](https://github.com/themesberg/flowbite-react/commit/624932a8ca34c74dba068415c6ccdbd695c77100))
- docs forms toggle switch - incorrect code preview ([#1061](https://github.com/themesberg/flowbite-react/issues/1061)) ([5733b12](https://github.com/themesberg/flowbite-react/commit/5733b12796ae75cfd9ae29200c2a710e2405d199))
- docs navbar - incorrect code preview ([#1062](https://github.com/themesberg/flowbite-react/issues/1062)) ([8c5bd0b](https://github.com/themesberg/flowbite-react/commit/8c5bd0bdceb466a4ac8b36b96e6a91b9c1fce83a))
- docs/getting started/contributing - invalid "bug tracker" url ([#1073](https://github.com/themesberg/flowbite-react/issues/1073)) ([c357c4f](https://github.com/themesberg/flowbite-react/commit/c357c4f0d9d83c8f4b728f24a026eaed19c97a4a))
- dropdown theme - granular control ([#1066](https://github.com/themesberg/flowbite-react/issues/1066)) ([cac6148](https://github.com/themesberg/flowbite-react/commit/cac614889e27ee95313dbe5a8af807eca6976649))
- homepage dark mode `Floating Label` - missing svg ([#1074](https://github.com/themesberg/flowbite-react/issues/1074)) ([df71241](https://github.com/themesberg/flowbite-react/commit/df71241cc26fca900014fd163370bb680bc4e3d6))
- layout overflow ([#1054](https://github.com/themesberg/flowbite-react/issues/1054)) ([7c5f136](https://github.com/themesberg/flowbite-react/commit/7c5f136035f20050fb14f97627b65fb86046873a))
- listItem disabled property ([#1126](https://github.com/themesberg/flowbite-react/issues/1126)) ([0f274d6](https://github.com/themesberg/flowbite-react/commit/0f274d6318b7693ae79bb8ced2483e82085c9ed4))
- remove alias import ([#1058](https://github.com/themesberg/flowbite-react/issues/1058)) ([bb60b18](https://github.com/themesberg/flowbite-react/commit/bb60b183b60e63f38eab7c711c0c775cd0739c55))

### [0.6.4](https://github.com/themesberg/flowbite-react/compare/v0.6.3...v0.6.4) (2023-10-03)

### Features

- Blockquote Component ([#997](https://github.com/themesberg/flowbite-react/issues/997)) ([9b91c29](https://github.com/themesberg/flowbite-react/commit/9b91c299dbf4ea22dc3b1617633cdb837552776d))
- checkbox colors ([#1032](https://github.com/themesberg/flowbite-react/issues/1032)) ([8ae697e](https://github.com/themesberg/flowbite-react/commit/8ae697ea50f8c35da4c3f746f8e2fa19bb78b249))

### Bug Fixes

- fix getWeekDays function ([#1040](https://github.com/themesberg/flowbite-react/issues/1040)) ([8822223](https://github.com/themesberg/flowbite-react/commit/8822223eb7417f34dbbe18d561858591cfaf420f))

### [0.6.3](https://github.com/themesberg/flowbite-react/compare/v0.6.2...v0.6.3) (2023-09-30)

### Bug Fixes

- Button color blue theme ([#1024](https://github.com/themesberg/flowbite-react/issues/1024)) ([11d8510](https://github.com/themesberg/flowbite-react/commit/11d8510875c0285e7634185ae05555ef64da3dcd))
- Floating Label theme import ([#1023](https://github.com/themesberg/flowbite-react/issues/1023)) ([160c24e](https://github.com/themesberg/flowbite-react/commit/160c24e0004b0c430a60493620c1dec4cdbdfedc))

### [0.6.2](https://github.com/themesberg/flowbite-react/compare/v0.6.1...v0.6.2) (2023-09-29)

### Features

- adds floating label ([#955](https://github.com/themesberg/flowbite-react/issues/955)) ([3fc7b88](https://github.com/themesberg/flowbite-react/commit/3fc7b88d8633977b4e1d5c9eadcb4ed25116d86f))
- **component:** toggleSwitch add sizing prop (sm|md|lg) ([#1009](https://github.com/themesberg/flowbite-react/issues/1009)) ([c3bf704](https://github.com/themesberg/flowbite-react/commit/c3bf704dd9775390a5efac638d84192b588fcbbd))

### Bug Fixes

- docs - avatar - render properly code example ([#1006](https://github.com/themesberg/flowbite-react/issues/1006)) ([48ce786](https://github.com/themesberg/flowbite-react/commit/48ce7863fcbc7d98b29c80b1c95c7f99a377ab95))
- documentation regressions ([#1021](https://github.com/themesberg/flowbite-react/issues/1021)) ([dbfb019](https://github.com/themesberg/flowbite-react/commit/dbfb01958e47b04de08b9c88a259bc54f0eb1b36))
- homepage - missing dark mode section functionality ([#989](https://github.com/themesberg/flowbite-react/issues/989)) ([63e04e2](https://github.com/themesberg/flowbite-react/commit/63e04e2ae52248adc86ead5298f11161af563cc9))
- issue [#846](https://github.com/themesberg/flowbite-react/issues/846) - docs dropdown - `custom trigger` section not render… ([#1005](https://github.com/themesberg/flowbite-react/issues/1005)) ([409c01c](https://github.com/themesberg/flowbite-react/commit/409c01c9a5831b444702c252cd6086c7caaddfe8))
- **toggleswitch:** disable + checked state and deprecated html event replacement ([#987](https://github.com/themesberg/flowbite-react/issues/987)) ([ce55df1](https://github.com/themesberg/flowbite-react/commit/ce55df1fc4b7a4c20a12957b052d8f359e8234a7)), closes [#986](https://github.com/themesberg/flowbite-react/issues/986)

### [0.6.1](https://github.com/themesberg/flowbite-react/compare/v0.6.0...v0.6.1) (2023-09-23)

### Bug Fixes

- `CodePreview` - show explicit false props ([#985](https://github.com/themesberg/flowbite-react/issues/985)) ([b1357c6](https://github.com/themesberg/flowbite-react/commit/b1357c6e44607fb1383393ec54ad37bd98712879))
- **button:** allow height of buttons stretch ([#906](https://github.com/themesberg/flowbite-react/issues/906)) ([10b54e3](https://github.com/themesberg/flowbite-react/commit/10b54e345b355201405bf948eae943b5cca94354))
- **button:** fix error Button cannot be used as a JSX component ([#974](https://github.com/themesberg/flowbite-react/issues/974)) ([b621601](https://github.com/themesberg/flowbite-react/commit/b62160116b26180023f15ed07804e9a48600180b)), closes [#962](https://github.com/themesberg/flowbite-react/issues/962)
- **component:** add custom theme to the carousel's default left and r… ([#910](https://github.com/themesberg/flowbite-react/issues/910)) ([ddff0e5](https://github.com/themesberg/flowbite-react/commit/ddff0e5e4353dbbeaba0312a317fe40e777b79f9))
- **datepicker.tsx:** fix theme and add onSelectedDate callback ([#970](https://github.com/themesberg/flowbite-react/issues/970)) ([fe9f63f](https://github.com/themesberg/flowbite-react/commit/fe9f63f0cdb04f5ed64baa9ff8755182ef6c8fce)), closes [#968](https://github.com/themesberg/flowbite-react/issues/968) [#964](https://github.com/themesberg/flowbite-react/issues/964)
- **datepicker:** button type ([#984](https://github.com/themesberg/flowbite-react/issues/984)) ([496ed1e](https://github.com/themesberg/flowbite-react/commit/496ed1e9e066edae1eec021d0f7a042a82467c55))
- **datepiker:** incorrect names of days of the week in the datepicker ([#963](https://github.com/themesberg/flowbite-react/issues/963)) ([e09a22a](https://github.com/themesberg/flowbite-react/commit/e09a22a4dc28aecefe7e09a2b6ac78a775083a9b)), closes [#960](https://github.com/themesberg/flowbite-react/issues/960)
- **labels:** default dark color of the input labels should be white ([#978](https://github.com/themesberg/flowbite-react/issues/978)) ([3d1d62e](https://github.com/themesberg/flowbite-react/commit/3d1d62eb80fa9475e0db70f05e8670bd8a6a9c9b))
- scroll to section blocking above content ([#983](https://github.com/themesberg/flowbite-react/issues/983)) ([5a9589b](https://github.com/themesberg/flowbite-react/commit/5a9589bd39dd39cfddc149ae509c1caa98a4ee24))
- **tabs:** added tabs container div style and theme ([#929](https://github.com/themesberg/flowbite-react/issues/929)) ([c0e9d66](https://github.com/themesberg/flowbite-react/commit/c0e9d66b88c259ef7cebfb67b44705aee7491fbc)), closes [#924](https://github.com/themesberg/flowbite-react/issues/924)
- **textarea:** default font size should be `text-sm` ([#958](https://github.com/themesberg/flowbite-react/issues/958)) ([ecf271a](https://github.com/themesberg/flowbite-react/commit/ecf271a8dcb64c7c25e24ad1cfb7c33b8ea3d3bd))

### [0.6.0](https://github.com/themesberg/flowbite-react/compare/v0.5.0...v0.6.0) (2023-09-09)

### Features

- add `<Banner>` component ([#949](https://github.com/themesberg/flowbite-react/issues/949)) ([ce05949](https://github.com/themesberg/flowbite-react/commit/ce059497cc8512db841fae4fdda82857c3b92911))
- add `<Datepicker>` component ([#835](https://github.com/themesberg/flowbite-react/issues/835)) ([ff12d41](https://github.com/themesberg/flowbite-react/commit/ff12d41e7f940ac2033f38df7951d1352933c3a0)), closes [#626](https://github.com/themesberg/flowbite-react/issues/626)
- **component:** new pauseOnHover prop to <Carousel>, provide quick information with chance to pause ([#918](https://github.com/themesberg/flowbite-react/issues/918)) ([f69e1a4](https://github.com/themesberg/flowbite-react/commit/f69e1a4e13047a552e31281fb9faadd956e899d8))
- **sidebar:** add custom chevron icon to collapse ([#891](https://github.com/themesberg/flowbite-react/issues/891)) ([d92c2cc](https://github.com/themesberg/flowbite-react/commit/d92c2cc690dd8f6886e35de84e6c1e3b93ef96ee))

### Bug Fixes

- **button.tsx:** Adding back displayName ([#890](https://github.com/themesberg/flowbite-react/issues/890)) ([8e24575](https://github.com/themesberg/flowbite-react/commit/8e245754b5057eb0b7cd27d95814f695c708a3de))
- **button.tsx:** Button `as` prop internal logic + TS props ([#885](https://github.com/themesberg/flowbite-react/issues/885)) ([942735e](https://github.com/themesberg/flowbite-react/commit/942735e7dcd2ceea00927a0420c9e92a6998926c)), closes [#865](https://github.com/themesberg/flowbite-react/issues/865)
- **pagination:** center selected page ([#931](https://github.com/themesberg/flowbite-react/issues/931)) ([cc1292d](https://github.com/themesberg/flowbite-react/commit/cc1292d1dc4aeb39b3e91b1243944121f456f49f)), closes [#908](https://github.com/themesberg/flowbite-react/issues/908)
- **select.tsx/badge.tsx:** With icon classes preference ([#877](https://github.com/themesberg/flowbite-react/issues/877)) ([ebe605e](https://github.com/themesberg/flowbite-react/commit/ebe605edd2a541ab542a45c51d776a3dd92b9c00)), closes [#869](https://github.com/themesberg/flowbite-react/issues/869)

## [0.5.0](https://github.com/themesberg/flowbite-react/compare/v0.4.11...v0.5.0) (2023-07-21)

### ⚠ BREAKING CHANGES

- **toast.tsx:** Removing "removed" theme support

### Features

- **card:** support custom renderImage functions for Card ([#730](https://github.com/themesberg/flowbite-react/issues/730)) ([594f187](https://github.com/themesberg/flowbite-react/commit/594f1870d7fc964521e8e9b56c1e64f39124248e)), closes [#706](https://github.com/themesberg/flowbite-react/issues/706)
- **modal.tsx:** Modal Accessibility ([#858](https://github.com/themesberg/flowbite-react/issues/858)) ([2b4a3ec](https://github.com/themesberg/flowbite-react/commit/2b4a3ec8b1243bde08a1211d5c48126f68fedf4a)), closes [#647](https://github.com/themesberg/flowbite-react/issues/647) [#701](https://github.com/themesberg/flowbite-react/issues/701)
- **toast.tsx:** Stateless Toast ([#860](https://github.com/themesberg/flowbite-react/issues/860)) ([bd4ad89](https://github.com/themesberg/flowbite-react/commit/bd4ad890c23c1c4446a2d8962ad3f694cc3dbb7a)), closes [#848](https://github.com/themesberg/flowbite-react/issues/848)

### Bug Fixes

- **button.tsx:** Relative Spinner size ([#868](https://github.com/themesberg/flowbite-react/issues/868)) ([3662d5e](https://github.com/themesberg/flowbite-react/commit/3662d5ec0f6318773524ddb8c2a55702574d1963)), closes [#850](https://github.com/themesberg/flowbite-react/issues/850)
- **modal.mdx:** fix spelling in modal documentation ([#862](https://github.com/themesberg/flowbite-react/issues/862)) ([380aa63](https://github.com/themesberg/flowbite-react/commit/380aa63752050858062cc61bd91bc4f6b691671c))
- **pagination theme file:** added enabled attribute for pagination ba… ([#856](https://github.com/themesberg/flowbite-react/issues/856)) ([ecc3f6e](https://github.com/themesberg/flowbite-react/commit/ecc3f6ef0156533f2eeb337aad913e0a8182b58d)), closes [#849](https://github.com/themesberg/flowbite-react/issues/849)

### [0.4.11](https://github.com/themesberg/flowbite-react/compare/v0.4.10...v0.4.11) (2023-07-10)

### Features

- **dropdown.tsx:** Dropdown Accessibility ([#840](https://github.com/themesberg/flowbite-react/issues/840)) ([65b13e7](https://github.com/themesberg/flowbite-react/commit/65b13e7dd5def51076348bd9e06b6505419167cd)), closes [#648](https://github.com/themesberg/flowbite-react/issues/648) [#793](https://github.com/themesberg/flowbite-react/issues/793)

### Bug Fixes

- **dropdown:** fix build ([2c0f9e5](https://github.com/themesberg/flowbite-react/commit/2c0f9e55b2210a4b4b28237fa25193580521e7f9))
- **modal:** backdrop height ([#839](https://github.com/themesberg/flowbite-react/issues/839)) ([e6e1b83](https://github.com/themesberg/flowbite-react/commit/e6e1b834ccd87b32f685c8e1c4f268f75274e1a7))

### [0.4.10](https://github.com/themesberg/flowbite-react/compare/v0.4.9...v0.4.10) (2023-07-03)

### Features

- **button.tsx:** Added as prop to button component ([#826](https://github.com/themesberg/flowbite-react/issues/826)) ([6384882](https://github.com/themesberg/flowbite-react/commit/6384882b754465aac2829dc9e634b0c30efce621)), closes [#655](https://github.com/themesberg/flowbite-react/issues/655)
- **carousel:** adds onSlideChange property ([#833](https://github.com/themesberg/flowbite-react/issues/833)) ([c80fb37](https://github.com/themesberg/flowbite-react/commit/c80fb37ca59d1a7ceff3fef978bea934baf43c46))
- **components/darkthemetoggle:** supports custom icons ([1d615c0](https://github.com/themesberg/flowbite-react/commit/1d615c0bfbef4fdc48d9f19c18c069a15c74e228))
- **components/sidebar:** theme access to list item element ([d7262ba](https://github.com/themesberg/flowbite-react/commit/d7262bab7c97c6e215431ff7d6ca6711e23570de))
- **dropdown:** adding custom trigger ([#834](https://github.com/themesberg/flowbite-react/issues/834)) ([70c7aec](https://github.com/themesberg/flowbite-react/commit/70c7aec813f208c179a74b6b49343faf18369964)), closes [#624](https://github.com/themesberg/flowbite-react/issues/624)

### Bug Fixes

- **button.tsx:** Disable Button hover state when button is disabled ([#830](https://github.com/themesberg/flowbite-react/issues/830)) ([2b45084](https://github.com/themesberg/flowbite-react/commit/2b45084a82851d7e96e21cf75a2c8a1d1fa94e10)), closes [#827](https://github.com/themesberg/flowbite-react/issues/827)
- **components/navbar:** fix theme interface ([bc280fc](https://github.com/themesberg/flowbite-react/commit/bc280fc4fc380ec61aa67b57090a1d8bed43a488))
- **textinput.tsx:** TextInput padding when having right/left icons ([#832](https://github.com/themesberg/flowbite-react/issues/832)) ([d616e66](https://github.com/themesberg/flowbite-react/commit/d616e66e894bd80d5c95965047ea5c67ba45df91)), closes [#828](https://github.com/themesberg/flowbite-react/issues/828)

### [0.4.9](https://github.com/themesberg/flowbite-react/compare/v0.4.7...v0.4.9) (2023-06-22)

### Features

- replace `classnames` by `tailwind-merge` ([#816](https://github.com/themesberg/flowbite-react/issues/816)) ([7461173](https://github.com/themesberg/flowbite-react/commit/7461173ddb2afae9f66b9a4475b4333adef1e163))

### Bug Fixes

- **paginationbutton.tsx:** button now has type button ([#811](https://github.com/themesberg/flowbite-react/issues/811)) ([470c359](https://github.com/themesberg/flowbite-react/commit/470c3594c26706fff17a4e9932850e51d6e3e4a5)), closes [#809](https://github.com/themesberg/flowbite-react/issues/809)
- **src/components/navbar:** change default `<Navbar.Toggle/>` icon ([#819](https://github.com/themesberg/flowbite-react/issues/819)) ([6bc0de9](https://github.com/themesberg/flowbite-react/commit/6bc0de946c093863eab6386c26efc38779cb48fe)), closes [#818](https://github.com/themesberg/flowbite-react/issues/818) [/stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport/73106019#73106019](https://github.com/themesberg//stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport/73106019/issues/73106019)

### [0.4.8](https://github.com/themesberg/flowbite-react/compare/v0.4.7...v0.4.8) (2023-06-22)

### Features

- replace `classnames` by `tailwind-merge` ([#816](https://github.com/themesberg/flowbite-react/issues/816)) ([7461173](https://github.com/themesberg/flowbite-react/commit/7461173ddb2afae9f66b9a4475b4333adef1e163))

### Bug Fixes

- **paginationbutton.tsx:** button now has type button ([#811](https://github.com/themesberg/flowbite-react/issues/811)) ([470c359](https://github.com/themesberg/flowbite-react/commit/470c3594c26706fff17a4e9932850e51d6e3e4a5)), closes [#809](https://github.com/themesberg/flowbite-react/issues/809)

### [0.4.7](https://github.com/themesberg/flowbite-react/compare/v0.4.4...v0.4.7) (2023-06-01)

### Features

- **pagination.tsx:** next and previous buttons should disable when on 1 and last page respectively ([#731](https://github.com/themesberg/flowbite-react/issues/731)) ([8e8531b](https://github.com/themesberg/flowbite-react/commit/8e8531b2a1dfefcf7c9871dfa8fd441337baae6e)), closes [#726](https://github.com/themesberg/flowbite-react/issues/726) [#726](https://github.com/themesberg/flowbite-react/issues/726)

### Bug Fixes

- **button.tsx:** make prop theme work ([#746](https://github.com/themesberg/flowbite-react/issues/746)) ([1b07a76](https://github.com/themesberg/flowbite-react/commit/1b07a760e5b1394c036ae212403f49d2a631d4fb))
- **component:** fix Label component disabled property not applying theme styles ([#763](https://github.com/themesberg/flowbite-react/issues/763)) ([8d6d79e](https://github.com/themesberg/flowbite-react/commit/8d6d79ef92ff4b3482151c5428ea3b4aa0b7e637)), closes [#762](https://github.com/themesberg/flowbite-react/issues/762)
- **dropdown:** add type button in dropdown ([#757](https://github.com/themesberg/flowbite-react/issues/757)) ([974c126](https://github.com/themesberg/flowbite-react/commit/974c126e7e72833e2fde1bb9a631e4fcea6aa7af)), closes [#756](https://github.com/themesberg/flowbite-react/issues/756)
- **dropdown:** fix dropdown menu items container width ([#714](https://github.com/themesberg/flowbite-react/issues/714)) ([d13c77c](https://github.com/themesberg/flowbite-react/commit/d13c77c68960ed97828b5f9592fdb6d870a8a74d)), closes [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575)
- making ToggleSwitch color prop as keyof FlowbiteColors ([#741](https://github.com/themesberg/flowbite-react/issues/741)) ([e3e2112](https://github.com/themesberg/flowbite-react/commit/e3e21126a4e38576c347f2815fb4ee51f1b1266b))
- **modal:** fixed a bug that disallowed users to set the position of a modal ([#766](https://github.com/themesberg/flowbite-react/issues/766)) ([5200ecd](https://github.com/themesberg/flowbite-react/commit/5200ecd9df760012eedb05cbe51359db2c60c8d1)), closes [#760](https://github.com/themesberg/flowbite-react/issues/760)
- **Modal:** modal scrollbar overflow style issue fixed ([#769](https://github.com/themesberg/flowbite-react/issues/769)) ([746098d](https://github.com/themesberg/flowbite-react/commit/746098d26dd3da47982e43e7e6d27044dde4a05a))
- **modal:** overflow bug fix ([#718](https://github.com/themesberg/flowbite-react/issues/718)) ([9e4e43a](https://github.com/themesberg/flowbite-react/commit/9e4e43abe17c7ea0d24b891003f41d11241f546f)), closes [#537](https://github.com/themesberg/flowbite-react/issues/537)
- pagination button not being highlighted correctly ([#725](https://github.com/themesberg/flowbite-react/issues/725)) ([53c1280](https://github.com/themesberg/flowbite-react/commit/53c1280f7b93c91413f0fb9fc2992e184591c6b3))
- **src/components/\*:** replace `tsconfig.json` `paths` by relative paths ([6efd448](https://github.com/themesberg/flowbite-react/commit/6efd448ddfa647e52c3bb0927285006ba06cffc8)), closes [#772](https://github.com/themesberg/flowbite-react/issues/772)
- **theme:** typo in bottom-center ([#717](https://github.com/themesberg/flowbite-react/issues/717)) ([89d58dc](https://github.com/themesberg/flowbite-react/commit/89d58dc03727d150e73ec753748eb98640bc84a3))
- **tsconfig.lib:** compile to react-jsx for npm ([389dd1d](https://github.com/themesberg/flowbite-react/commit/389dd1d414feb7f96c28cfd8fb6b00efc55355a9))

### [0.4.6](https://github.com/themesberg/flowbite-react/compare/v0.4.6-beta.1...v0.4.6) (2023-05-26)

### [0.4.5](https://github.com/themesberg/flowbite-react/compare/v0.4.4...v0.4.5) (2023-05-26)

### Features

- **pagination.tsx:** next and previous buttons should disable when on 1 and last page respectively ([#731](https://github.com/themesberg/flowbite-react/issues/731)) ([8e8531b](https://github.com/themesberg/flowbite-react/commit/8e8531b2a1dfefcf7c9871dfa8fd441337baae6e)), closes [#726](https://github.com/themesberg/flowbite-react/issues/726) [#726](https://github.com/themesberg/flowbite-react/issues/726)

### Bug Fixes

- **button.tsx:** make prop theme work ([#746](https://github.com/themesberg/flowbite-react/issues/746)) ([1b07a76](https://github.com/themesberg/flowbite-react/commit/1b07a760e5b1394c036ae212403f49d2a631d4fb))
- **component:** fix Label component disabled property not applying theme styles ([#763](https://github.com/themesberg/flowbite-react/issues/763)) ([8d6d79e](https://github.com/themesberg/flowbite-react/commit/8d6d79ef92ff4b3482151c5428ea3b4aa0b7e637)), closes [#762](https://github.com/themesberg/flowbite-react/issues/762)
- **dropdown:** add type button in dropdown ([#757](https://github.com/themesberg/flowbite-react/issues/757)) ([974c126](https://github.com/themesberg/flowbite-react/commit/974c126e7e72833e2fde1bb9a631e4fcea6aa7af)), closes [#756](https://github.com/themesberg/flowbite-react/issues/756)
- **dropdown:** fix dropdown menu items container width ([#714](https://github.com/themesberg/flowbite-react/issues/714)) ([d13c77c](https://github.com/themesberg/flowbite-react/commit/d13c77c68960ed97828b5f9592fdb6d870a8a74d)), closes [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575) [#575](https://github.com/themesberg/flowbite-react/issues/575)
- making ToggleSwitch color prop as keyof FlowbiteColors ([#741](https://github.com/themesberg/flowbite-react/issues/741)) ([e3e2112](https://github.com/themesberg/flowbite-react/commit/e3e21126a4e38576c347f2815fb4ee51f1b1266b))
- **Modal:** modal scrollbar overflow style issue fixed ([#769](https://github.com/themesberg/flowbite-react/issues/769)) ([746098d](https://github.com/themesberg/flowbite-react/commit/746098d26dd3da47982e43e7e6d27044dde4a05a))
- **modal:** overflow bug fix ([#718](https://github.com/themesberg/flowbite-react/issues/718)) ([9e4e43a](https://github.com/themesberg/flowbite-react/commit/9e4e43abe17c7ea0d24b891003f41d11241f546f)), closes [#537](https://github.com/themesberg/flowbite-react/issues/537)
- pagination button not being highlighted correctly ([#725](https://github.com/themesberg/flowbite-react/issues/725)) ([53c1280](https://github.com/themesberg/flowbite-react/commit/53c1280f7b93c91413f0fb9fc2992e184591c6b3))
- **theme:** typo in bottom-center ([#717](https://github.com/themesberg/flowbite-react/issues/717)) ([89d58dc](https://github.com/themesberg/flowbite-react/commit/89d58dc03727d150e73ec753748eb98640bc84a3))

### [0.4.4](https://github.com/themesberg/flowbite-react/compare/v0.4.1...v0.4.4) (2023-04-24)

### Features

- **/src/components/avatar:** allow custom sizes for `placeholderInitials` ([#659](https://github.com/themesberg/flowbite-react/issues/659)) ([#660](https://github.com/themesberg/flowbite-react/issues/660)) ([525b90d](https://github.com/themesberg/flowbite-react/commit/525b90dfd374f38e1c0a8527fcb92eabc849c186))
- **/src/components/progress:** fix unclear label usage ([#468](https://github.com/themesberg/flowbite-react/issues/468)) ([#547](https://github.com/themesberg/flowbite-react/issues/547)) ([f9cad02](https://github.com/themesberg/flowbite-react/commit/f9cad02d6d9b0f699c420167ccb0e373913ef1ce))
- **sidebar:** Allow to customize the Sidebar component with 'as' ([#703](https://github.com/themesberg/flowbite-react/issues/703)) ([54fc3c2](https://github.com/themesberg/flowbite-react/commit/54fc3c2046f45698542bb14fb95af467eafffa99))
- **Toast:** add onClick prop to Toast.Toggle ([#607](https://github.com/themesberg/flowbite-react/issues/607)) ([#666](https://github.com/themesberg/flowbite-react/issues/666)) ([9be39d0](https://github.com/themesberg/flowbite-react/commit/9be39d0f4c2f8da9bdd54003d9a6f2d983d16345))

### Bug Fixes

- **/lib/components/table:** prevent scrollbars around `<Table>`s ([#608](https://github.com/themesberg/flowbite-react/issues/608)) ([6f1869b](https://github.com/themesberg/flowbite-react/commit/6f1869bac86c1dcbda622413a197f67536803f53))
- **/src/lib/components/\*:** add `displayName` to Forms components ([#656](https://github.com/themesberg/flowbite-react/issues/656)) ([329cb5a](https://github.com/themesberg/flowbite-react/commit/329cb5ad6383244f38e11cac57050dc684d6c3c5)), closes [#641](https://github.com/themesberg/flowbite-react/issues/641)
- **/src/lib/components/\*:** allow `theme={}` to contain partials ([#649](https://github.com/themesberg/flowbite-react/issues/649)) ([863a789](https://github.com/themesberg/flowbite-react/commit/863a789ed169cbfcbe05d5de7e9021a074872063)), closes [#646](https://github.com/themesberg/flowbite-react/issues/646)
- **/src/lib/components/Flowbite:** fix `window is not defined` in `next.js` ([#652](https://github.com/themesberg/flowbite-react/issues/652)) ([8fd9ddc](https://github.com/themesberg/flowbite-react/commit/8fd9ddcc5fcd8d5926c0e871dd25493d5d2c255f))
- **/src/theme:** fix `<Modal>` vertical positioning ([#658](https://github.com/themesberg/flowbite-react/issues/658)) ([5fec3ca](https://github.com/themesberg/flowbite-react/commit/5fec3ca0710b1883a4de622453c896346c8ab8c0)), closes [#601](https://github.com/themesberg/flowbite-react/issues/601)
- added aria-label to solve Buttons do not have an accessible name… ([#711](https://github.com/themesberg/flowbite-react/issues/711)) ([65b0aef](https://github.com/themesberg/flowbite-react/commit/65b0aef13143d5efc0bb00bd2ab221573ec4c2ef))
- **button:** fixes outline button ([#654](https://github.com/themesberg/flowbite-react/issues/654)) ([eab6bbb](https://github.com/themesberg/flowbite-react/commit/eab6bbb6f78b46fb298e75344442b75f028d5cff))
- **component/models:** prevent scrolling of body when modal is shown ([#700](https://github.com/themesberg/flowbite-react/issues/700)) ([ab6e96a](https://github.com/themesberg/flowbite-react/commit/ab6e96a58bc5b39b0b80cdc898c634f9fbab7462)), closes [#604](https://github.com/themesberg/flowbite-react/issues/604)
- **component/progressbar:** fix progressbar showing label when progress == 0 ([#698](https://github.com/themesberg/flowbite-react/issues/698)) ([1fa7542](https://github.com/themesberg/flowbite-react/commit/1fa7542c687fc164f1cdbd6362fd35ac978942f1)), closes [#668](https://github.com/themesberg/flowbite-react/issues/668)
- **components/accordion:** allow opened panel to be closed [#684](https://github.com/themesberg/flowbite-react/issues/684) - add accordion tests ([#705](https://github.com/themesberg/flowbite-react/issues/705)) ([7de751e](https://github.com/themesberg/flowbite-react/commit/7de751e4a80b144edd7f3fdc7eaa4ca2ea655dad)), closes [#618](https://github.com/themesberg/flowbite-react/issues/618)
- group list styling ([#668](https://github.com/themesberg/flowbite-react/issues/668)) ([a4f39f5](https://github.com/themesberg/flowbite-react/commit/a4f39f5608a46f6c0d4661fa383e70583ab7d592))
- **lib/components/buttons:** Add `target` to `Button` props to open a link in new tab ([#631](https://github.com/themesberg/flowbite-react/issues/631)) ([ed74d13](https://github.com/themesberg/flowbite-react/commit/ed74d1361d03fd01f5eac2b3ca8faa382718afba))
- **sidebar:** adds missing className ([#657](https://github.com/themesberg/flowbite-react/issues/657)) ([12fce11](https://github.com/themesberg/flowbite-react/commit/12fce11aad6bb0d2ca5058ce9fffee629038e542))
- **tabs:** remove tab auto focus ([#712](https://github.com/themesberg/flowbite-react/issues/712)) ([6942943](https://github.com/themesberg/flowbite-react/commit/6942943639025a7310606af7fa6c2ffa68755d84)), closes [#612](https://github.com/themesberg/flowbite-react/issues/612) [#612](https://github.com/themesberg/flowbite-react/issues/612)

### [0.4.3](https://github.com/themesberg/flowbite-react/compare/v0.4.2...v0.4.3) (2023-04-05)

### Features

- **Toast:** add onClick prop to Toast.Toggle ([#607](https://github.com/themesberg/flowbite-react/issues/607)) ([#666](https://github.com/themesberg/flowbite-react/issues/666)) ([9be39d0](https://github.com/themesberg/flowbite-react/commit/9be39d0f4c2f8da9bdd54003d9a6f2d983d16345))

### [0.4.2](https://github.com/themesberg/flowbite-react/compare/v0.4.1...v0.4.2) (2023-03-08)

### Features

- **/src/components/avatar:** allow custom sizes for `placeholderInitials` ([#659](https://github.com/themesberg/flowbite-react/issues/659)) ([#660](https://github.com/themesberg/flowbite-react/issues/660)) ([525b90d](https://github.com/themesberg/flowbite-react/commit/525b90dfd374f38e1c0a8527fcb92eabc849c186))
- **/src/components/progress:** fix unclear label usage ([#468](https://github.com/themesberg/flowbite-react/issues/468)) ([#547](https://github.com/themesberg/flowbite-react/issues/547)) ([f9cad02](https://github.com/themesberg/flowbite-react/commit/f9cad02d6d9b0f699c420167ccb0e373913ef1ce))

### Bug Fixes

- **/src/lib/components/\*:** add `displayName` to Forms components ([#656](https://github.com/themesberg/flowbite-react/issues/656)) ([329cb5a](https://github.com/themesberg/flowbite-react/commit/329cb5ad6383244f38e11cac57050dc684d6c3c5)), closes [#641](https://github.com/themesberg/flowbite-react/issues/641)
- **/src/lib/components/\*:** allow `theme={}` to contain partials ([#649](https://github.com/themesberg/flowbite-react/issues/649)) ([863a789](https://github.com/themesberg/flowbite-react/commit/863a789ed169cbfcbe05d5de7e9021a074872063)), closes [#646](https://github.com/themesberg/flowbite-react/issues/646)
- **/src/lib/components/Flowbite:** fix `window is not defined` in `next.js` ([#652](https://github.com/themesberg/flowbite-react/issues/652)) ([8fd9ddc](https://github.com/themesberg/flowbite-react/commit/8fd9ddcc5fcd8d5926c0e871dd25493d5d2c255f))
- **/src/theme:** fix `<Modal>` vertical positioning ([#658](https://github.com/themesberg/flowbite-react/issues/658)) ([5fec3ca](https://github.com/themesberg/flowbite-react/commit/5fec3ca0710b1883a4de622453c896346c8ab8c0)), closes [#601](https://github.com/themesberg/flowbite-react/issues/601)
- **button:** fixes outline button ([#654](https://github.com/themesberg/flowbite-react/issues/654)) ([eab6bbb](https://github.com/themesberg/flowbite-react/commit/eab6bbb6f78b46fb298e75344442b75f028d5cff))
- **lib/components/buttons:** Add `target` to `Button` props to open a link in new tab ([#631](https://github.com/themesberg/flowbite-react/issues/631)) ([ed74d13](https://github.com/themesberg/flowbite-react/commit/ed74d1361d03fd01f5eac2b3ca8faa382718afba))
- **sidebar:** adds missing className ([#657](https://github.com/themesberg/flowbite-react/issues/657)) ([12fce11](https://github.com/themesberg/flowbite-react/commit/12fce11aad6bb0d2ca5058ce9fffee629038e542))

### [0.4.1](https://github.com/themesberg/flowbite-react/compare/v0.3.8...v0.4.1) (2023-03-03)

### ⚠ BREAKING CHANGES

- **/lib/components/flowbite:** ThemeProps no longer includes usePreferences
- **theme:** Like in #500, this version permanently changes the `FlowbiteTheme` for numerous
  components.

The philosophy is that themes will more clearly reflect the component's structure.

For example, an `<Accordion>` can contain any number of `<Accordion.Title>` or `<Accordion.Content>`
sections. The theme used to look like:

```js
accordion: {
  base: "..",
  content: "..",
  flush: "..",
  title: "..",
}
```

And now, the theme for an `<Accordion>` looks like:

```
js
accordion: {
  root: {
    base: "..",
    flush: "..",
  },
  content: "..",
  title: "..",
}
```

So now the options in the theme which apply to the `<Accordion>` itself will always be found under
`root`. Likewise, `<Accordion.Content>` can be themed via the `content` subsection.

This ultimately will apply to all components.

- ci(eslint): remove `prettier` plugins for `eslint`

Instead, use `prettier-plugin-tailwindcss`, which is sufficient.

- refactor(/lib/\*): use `yarn prettier` with `prettier-plugin-tailwindcss`

- fix(/lib/components/\*.spec): resolve test errors caused by migrating theme

- feat(/lib/components/\*): add `theme={}` attribute to components that need it

### Features

- **/lib/components/flowbite:** remove `usePreferences` ([#582](https://github.com/themesberg/flowbite-react/issues/582)) ([77cbc27](https://github.com/themesberg/flowbite-react/commit/77cbc27aa5d42bcff1bdd54c3b5c35e37ff039a0)), closes [#581](https://github.com/themesberg/flowbite-react/issues/581) [#565](https://github.com/themesberg/flowbite-react/issues/565) [#581](https://github.com/themesberg/flowbite-react/issues/581) [#565](https://github.com/themesberg/flowbite-react/issues/565)
- **/lib/components/timeline:** change `<Timeline.Body>` to a `<div>` ([#603](https://github.com/themesberg/flowbite-react/issues/603)) ([720c8ef](https://github.com/themesberg/flowbite-react/commit/720c8ef6c707837372dddf33e9e4a73d42caea1e)), closes [#602](https://github.com/themesberg/flowbite-react/issues/602)
- **/lib/theme:** add Tailwind CSS colors to `<Alert>`s ([#586](https://github.com/themesberg/flowbite-react/issues/586)) ([05bde49](https://github.com/themesberg/flowbite-react/commit/05bde49a7fe27e456b7e3da631424705beeaabb8)), closes [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473)
- **/lib/theme:** add Tailwind CSS colors to `<Badge>`s ([#617](https://github.com/themesberg/flowbite-react/issues/617)) ([f00628f](https://github.com/themesberg/flowbite-react/commit/f00628f95059f7e4e18bbe069ceb5573471dc36d))
- **/lib/theme:** add Tailwind CSS colors to `<Button>`s ([#598](https://github.com/themesberg/flowbite-react/issues/598)) ([e88cdab](https://github.com/themesberg/flowbite-react/commit/e88cdab07f481e6a8ca8a4d4bdd2b723ec3516f4)), closes [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473)
- **theme:** add `theme={}` attribute to components that need it ([#611](https://github.com/themesberg/flowbite-react/issues/611)) ([005d78a](https://github.com/themesberg/flowbite-react/commit/005d78ac281ab14876b3b528cf3f51976d4fa349)), closes [#500](https://github.com/themesberg/flowbite-react/issues/500) [#566](https://github.com/themesberg/flowbite-react/issues/566) [#594](https://github.com/themesberg/flowbite-react/issues/594) [#124](https://github.com/themesberg/flowbite-react/issues/124) [#609](https://github.com/themesberg/flowbite-react/issues/609)

### Bug Fixes

- **/components/modal:** Prevent `<Modal.Content>` from being truncated ([#601](https://github.com/themesberg/flowbite-react/issues/601)) ([dd19f33](https://github.com/themesberg/flowbite-react/commit/dd19f330831bf83ace4a353cfda09d4f21979703)), closes [#600](https://github.com/themesberg/flowbite-react/issues/600)
- **/docs:** remove `{' '}` literals from code examples ([#614](https://github.com/themesberg/flowbite-react/issues/614)) ([2f46d90](https://github.com/themesberg/flowbite-react/commit/2f46d90473470bd4b2fa7233fc2b6e87f8055fd6))
- **tsconfig:** noEmit is false ([44f4cd7](https://github.com/themesberg/flowbite-react/commit/44f4cd73dbddcc9812ca17993d1e0ec33cb3a65e))

## [0.4.0](https://github.com/themesberg/flowbite-react/compare/v0.1.0...v0.4.0) (2023-03-03)

### ⚠ BREAKING CHANGES

- **/lib/components/flowbite:** ThemeProps no longer includes usePreferences
- **theme:** Like in #500, this version permanently changes the `FlowbiteTheme` for numerous
  components.

The philosophy is that themes will more clearly reflect the component's structure.

For example, an `<Accordion>` can contain any number of `<Accordion.Title>` or `<Accordion.Content>`
sections. The theme used to look like:

```js
accordion: {
  base: "..",
  content: "..",
  flush: "..",
  title: "..",
}
```

And now, the theme for an `<Accordion>` looks like:

```
js
accordion: {
  root: {
    base: "..",
    flush: "..",
  },
  content: "..",
  title: "..",
}
```

So now the options in the theme which apply to the `<Accordion>` itself will always be found under
`root`. Likewise, `<Accordion.Content>` can be themed via the `content` subsection.

This ultimately will apply to all components.

- ci(eslint): remove `prettier` plugins for `eslint`

Instead, use `prettier-plugin-tailwindcss`, which is sufficient.

- refactor(/lib/\*): use `yarn prettier` with `prettier-plugin-tailwindcss`

- fix(/lib/components/\*.spec): resolve test errors caused by migrating theme

- feat(/lib/components/\*): add `theme={}` attribute to components that need it

### Features

- **/lib/components/flowbite:** remove `usePreferences` ([#582](https://github.com/themesberg/flowbite-react/issues/582)) ([77cbc27](https://github.com/themesberg/flowbite-react/commit/77cbc27aa5d42bcff1bdd54c3b5c35e37ff039a0)), closes [#581](https://github.com/themesberg/flowbite-react/issues/581) [#565](https://github.com/themesberg/flowbite-react/issues/565) [#581](https://github.com/themesberg/flowbite-react/issues/581) [#565](https://github.com/themesberg/flowbite-react/issues/565)
- **/lib/components/timeline:** change `<Timeline.Body>` to a `<div>` ([#603](https://github.com/themesberg/flowbite-react/issues/603)) ([720c8ef](https://github.com/themesberg/flowbite-react/commit/720c8ef6c707837372dddf33e9e4a73d42caea1e)), closes [#602](https://github.com/themesberg/flowbite-react/issues/602)
- **/lib/theme:** add Tailwind CSS colors to `<Alert>`s ([#586](https://github.com/themesberg/flowbite-react/issues/586)) ([05bde49](https://github.com/themesberg/flowbite-react/commit/05bde49a7fe27e456b7e3da631424705beeaabb8)), closes [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473)
- **/lib/theme:** add Tailwind CSS colors to `<Badge>`s ([#617](https://github.com/themesberg/flowbite-react/issues/617)) ([f00628f](https://github.com/themesberg/flowbite-react/commit/f00628f95059f7e4e18bbe069ceb5573471dc36d))
- **/lib/theme:** add Tailwind CSS colors to `<Button>`s ([#598](https://github.com/themesberg/flowbite-react/issues/598)) ([e88cdab](https://github.com/themesberg/flowbite-react/commit/e88cdab07f481e6a8ca8a4d4bdd2b723ec3516f4)), closes [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473) [#473](https://github.com/themesberg/flowbite-react/issues/473)
- **accordion:** add collapseAll prop ([#515](https://github.com/themesberg/flowbite-react/issues/515)) ([#524](https://github.com/themesberg/flowbite-react/issues/524)) ([d2206b5](https://github.com/themesberg/flowbite-react/commit/d2206b558f7d3a096f17226361d1c8b0aa52ce52))
- add theme prop ([#488](https://github.com/themesberg/flowbite-react/issues/488)) ([fb34230](https://github.com/themesberg/flowbite-react/commit/fb34230be5093d2dd5700b7253c08f3ab622f667))
- allow using initials as `Avatar` placeholder ([#375](https://github.com/themesberg/flowbite-react/issues/375)) ([e349d82](https://github.com/themesberg/flowbite-react/commit/e349d82ca1d0933ea037655022b38aa1b9836a33)), closes [#357](https://github.com/themesberg/flowbite-react/issues/357) [#357](https://github.com/themesberg/flowbite-react/issues/357) [#357](https://github.com/themesberg/flowbite-react/issues/357) [#357](https://github.com/themesberg/flowbite-react/issues/357)
- **avatar:** adds color prop and test case for it ([#439](https://github.com/themesberg/flowbite-react/issues/439)) ([104d6fb](https://github.com/themesberg/flowbite-react/commit/104d6fb83bd48de696c2b79138640e747e5b020f)), closes [#409](https://github.com/themesberg/flowbite-react/issues/409) [#409](https://github.com/themesberg/flowbite-react/issues/409)
- **Avatar:** Support overriding the Avatar img element. Fixes [#482](https://github.com/themesberg/flowbite-react/issues/482) ([#483](https://github.com/themesberg/flowbite-react/issues/483)) ([8f87019](https://github.com/themesberg/flowbite-react/commit/8f87019e58a320bc78c07b6a04fd6a99d6376d39))
- **breadcrumbitem:** add forwardRef to breadcrumb item ([#421](https://github.com/themesberg/flowbite-react/issues/421)) ([0e4ae62](https://github.com/themesberg/flowbite-react/commit/0e4ae62b2b93561c4857bea63df45fe9170f546e))
- **button:** added forwardRef to button component ([#391](https://github.com/themesberg/flowbite-react/issues/391)) ([3278c84](https://github.com/themesberg/flowbite-react/commit/3278c84ba15bc754032c4e248eb31e64d8bb53ff)), closes [#341](https://github.com/themesberg/flowbite-react/issues/341)
- **classname:** all components with classname access ([#405](https://github.com/themesberg/flowbite-react/issues/405)) ([99b4ceb](https://github.com/themesberg/flowbite-react/commit/99b4cebf5f92e8f3eb15851dcb0b6997c8606c47))
- **classname:** more missing classnames access ([#406](https://github.com/themesberg/flowbite-react/issues/406)) ([9e40115](https://github.com/themesberg/flowbite-react/commit/9e4011554cc132fd24bff286955b5f2d6861e1f8))
- **components:** export components types ([#434](https://github.com/themesberg/flowbite-react/issues/434)) ([45ea65a](https://github.com/themesberg/flowbite-react/commit/45ea65a4e1e376b398f462d07b9a1f1ea2ca114b)), closes [#433](https://github.com/themesberg/flowbite-react/issues/433)
- **Navbar:** add as prop ([#526](https://github.com/themesberg/flowbite-react/issues/526)) ([#528](https://github.com/themesberg/flowbite-react/issues/528)) ([21dab1f](https://github.com/themesberg/flowbite-react/commit/21dab1fe576a09d33c8ecd35cd10cf93eb332e9a))
- **RangeSlider:** range slider with custom theme, storybook, unit test and docs ([#548](https://github.com/themesberg/flowbite-react/issues/548)) ([5f01946](https://github.com/themesberg/flowbite-react/commit/5f0194679a0d6e2d75f7cbe8bdd05ac34d5ad873))
- **sidebaritem:** add forwardRef to sidebar item ([#420](https://github.com/themesberg/flowbite-react/issues/420)) ([faca797](https://github.com/themesberg/flowbite-react/commit/faca797b0b8ce7a94b40a44019c7323e721af5e5)), closes [#397](https://github.com/themesberg/flowbite-react/issues/397)
- TextInput with RightIcon ([#437](https://github.com/themesberg/flowbite-react/issues/437)) ([7d72e1e](https://github.com/themesberg/flowbite-react/commit/7d72e1eef07baf870a84a3e2eca950bb1814a316)), closes [#436](https://github.com/themesberg/flowbite-react/issues/436) [#436](https://github.com/themesberg/flowbite-react/issues/436) [#436](https://github.com/themesberg/flowbite-react/issues/436) [#436](https://github.com/themesberg/flowbite-react/issues/436)
- **theme:** add `theme={}` attribute to components that need it ([#611](https://github.com/themesberg/flowbite-react/issues/611)) ([005d78a](https://github.com/themesberg/flowbite-react/commit/005d78ac281ab14876b3b528cf3f51976d4fa349)), closes [#500](https://github.com/themesberg/flowbite-react/issues/500) [#566](https://github.com/themesberg/flowbite-react/issues/566) [#594](https://github.com/themesberg/flowbite-react/issues/594) [#124](https://github.com/themesberg/flowbite-react/issues/124) [#609](https://github.com/themesberg/flowbite-react/issues/609)
- **theme:** add tests for alert component ([#549](https://github.com/themesberg/flowbite-react/issues/549)) ([a62e84f](https://github.com/themesberg/flowbite-react/commit/a62e84fed43c0ee39e7b40f4e223ebcb11edd14a))
- **theme:** add theme support for Checkbox, Radio and ToggleSwitch ([#551](https://github.com/themesberg/flowbite-react/issues/551)) ([05c934a](https://github.com/themesberg/flowbite-react/commit/05c934adb2abf6af44784069388f13af2966ba38))
- **theme:** adding theme support per component ([#500](https://github.com/themesberg/flowbite-react/issues/500)) ([2f58ae2](https://github.com/themesberg/flowbite-react/commit/2f58ae2139359ef1acf7a417a1ffa337570ce221)), closes [#467](https://github.com/themesberg/flowbite-react/issues/467)
- **themecontext:** exported theme hooks and updated docs ([#390](https://github.com/themesberg/flowbite-react/issues/390)) ([37644b7](https://github.com/themesberg/flowbite-react/commit/37644b7247a35ce15df0379425139585bc8ae27f)), closes [#389](https://github.com/themesberg/flowbite-react/issues/389)

### Bug Fixes

- **/components/modal:** Prevent `<Modal.Content>` from being truncated ([#601](https://github.com/themesberg/flowbite-react/issues/601)) ([dd19f33](https://github.com/themesberg/flowbite-react/commit/dd19f330831bf83ace4a353cfda09d4f21979703)), closes [#600](https://github.com/themesberg/flowbite-react/issues/600)
- **/docs:** remove `{' '}` literals from code examples ([#614](https://github.com/themesberg/flowbite-react/issues/614)) ([2f46d90](https://github.com/themesberg/flowbite-react/commit/2f46d90473470bd4b2fa7233fc2b6e87f8055fd6))
- **avatar:** center avatar correctly ([#404](https://github.com/themesberg/flowbite-react/issues/404)) ([1027212](https://github.com/themesberg/flowbite-react/commit/1027212dc5e3d030c65b418c3710d07d577e4016))
- Button doesn't fit to its parent width ([#370](https://github.com/themesberg/flowbite-react/issues/370)) ([15571aa](https://github.com/themesberg/flowbite-react/commit/15571aa27e7fe96b8aae6e6eaec22e03cab17814))
- **button:** reduce the thickness of button outline ([#376](https://github.com/themesberg/flowbite-react/issues/376)) ([5ef0aef](https://github.com/themesberg/flowbite-react/commit/5ef0aeff0e90d4de47d1d1e9a954a792a473860d))
- **component:** add missing display name for checkbox, radio and select ([#328](https://github.com/themesberg/flowbite-react/issues/328)) ([8c307aa](https://github.com/themesberg/flowbite-react/commit/8c307aa1b072d82c2779d5de2dabb5609759689e))
- **component:** display text only on Sidebar.Item tooltip ([#315](https://github.com/themesberg/flowbite-react/issues/315)) ([9af5d13](https://github.com/themesberg/flowbite-react/commit/9af5d136a95cadd91c3212080bb060091ce3453d)), closes [#258](https://github.com/themesberg/flowbite-react/issues/258)
- **component:** remove "All Rights Reserved" from `<Footer.Copyright>` ([#317](https://github.com/themesberg/flowbite-react/issues/317)) ([c6524ee](https://github.com/themesberg/flowbite-react/commit/c6524eea31491480fe85870f22829a96c819c414))
- **component:** Remove `type="button"` when not a `<button>` ([#217](https://github.com/themesberg/flowbite-react/issues/217)) ([8c7012e](https://github.com/themesberg/flowbite-react/commit/8c7012e77b5ca2abde0b8d30ca1ad38cf70cbdd0))
- **component:** use 1st letter of text in collapsed Sidebar.Item with no icon ([#338](https://github.com/themesberg/flowbite-react/issues/338)) ([103d173](https://github.com/themesberg/flowbite-react/commit/103d17324d388fe60898697ed42811428af169bb)), closes [#81](https://github.com/themesberg/flowbite-react/issues/81)
- **DarkThemeToggle:** should toggle the theme with `usePreferences` is false ([#417](https://github.com/themesberg/flowbite-react/issues/417)) ([#424](https://github.com/themesberg/flowbite-react/issues/424)) ([37244ff](https://github.com/themesberg/flowbite-react/commit/37244ff2bbdaecbea8a0bcce0243c8d6f2ee9151))
- **dropdown:** close dropdown when item is selected ([#392](https://github.com/themesberg/flowbite-react/issues/392)) ([05f5534](https://github.com/themesberg/flowbite-react/commit/05f5534e972c750b979f6eaa225a5f0f98738ffb)), closes [#349](https://github.com/themesberg/flowbite-react/issues/349) [#349](https://github.com/themesberg/flowbite-react/issues/349) [#349](https://github.com/themesberg/flowbite-react/issues/349)
- **helpers/mergedeep:** fix potential cases when source or target obects can be mutated ([#476](https://github.com/themesberg/flowbite-react/issues/476)) ([765fedb](https://github.com/themesberg/flowbite-react/commit/765fedb3c966ea93e384339f6e121beda320c22f))
- **modal:** clear modal container ref on unmount ([#514](https://github.com/themesberg/flowbite-react/issues/514)) ([3387128](https://github.com/themesberg/flowbite-react/commit/338712844bf5d4831004ca3c0660a4180f14202b))
- **modal:** fix initial focus inside a modal ([#495](https://github.com/themesberg/flowbite-react/issues/495)) ([6965074](https://github.com/themesberg/flowbite-react/commit/69650741dcd0bdde710e6e2a6f3687431e44deaf))
- **package:** minimal react version is 18 ([#344](https://github.com/themesberg/flowbite-react/issues/344)) ([bc4fea7](https://github.com/themesberg/flowbite-react/commit/bc4fea7ecbc83dcbff61a5d01805008993a66a71))
- **pagination:** fix next button icon misalignment ([#346](https://github.com/themesberg/flowbite-react/issues/346)) ([0dd10d3](https://github.com/themesberg/flowbite-react/commit/0dd10d339a17961743c6d8a4ceb5c8e06677c0df)), closes [#330](https://github.com/themesberg/flowbite-react/issues/330)
- render border colors in Avatar with placeholder initials ([#521](https://github.com/themesberg/flowbite-react/issues/521)) ([3aa12c6](https://github.com/themesberg/flowbite-react/commit/3aa12c660a4327c043fae26966b273bbae28ba66))
- **sidebaritem:** fix sidebar item with next link ([#438](https://github.com/themesberg/flowbite-react/issues/438)) ([32f337b](https://github.com/themesberg/flowbite-react/commit/32f337bea352909b18d803cd7d39b1af46069945))
- **storybook:** fix welcome page ([#377](https://github.com/themesberg/flowbite-react/issues/377)) ([d2518ad](https://github.com/themesberg/flowbite-react/commit/d2518adf4ace2d062a2f370b18994cd44cebbb42))
- **textinput:** merge issue ([#499](https://github.com/themesberg/flowbite-react/issues/499)) ([f8eca21](https://github.com/themesberg/flowbite-react/commit/f8eca210c85adacd018e9ce9010295858b21251d))
- **theme:** add z-index to Dropdown floating component ([#314](https://github.com/themesberg/flowbite-react/issues/314)) ([77cb356](https://github.com/themesberg/flowbite-react/commit/77cb3560538751aa256b7c24e71df9fd6bec0c36)), closes [#308](https://github.com/themesberg/flowbite-react/issues/308)
- timeline-horizontal ([#510](https://github.com/themesberg/flowbite-react/issues/510)) ([89d2ff8](https://github.com/themesberg/flowbite-react/commit/89d2ff8ae64ddf334ec0d718ca9fa3ff3605be85))
- **toast:** ToastToggle must have className ([#471](https://github.com/themesberg/flowbite-react/issues/471)) ([5618b21](https://github.com/themesberg/flowbite-react/commit/5618b21626afa92fe64b99ef9b1f178724b61d4a))
- typo in navbar theme typedef ([#327](https://github.com/themesberg/flowbite-react/issues/327)) ([459a864](https://github.com/themesberg/flowbite-react/commit/459a8648f054b80fc4499ecd68689bc3d3d0c244))

### [0.3.8](https://github.com/themesberg/flowbite-react/compare/v0.3.7...v0.3.8) (2023-01-26)

### Features

- **accordion:** add collapseAll prop ([#515](https://github.com/themesberg/flowbite-react/issues/515)) ([#524](https://github.com/themesberg/flowbite-react/issues/524)) ([d2206b5](https://github.com/themesberg/flowbite-react/commit/d2206b558f7d3a096f17226361d1c8b0aa52ce52))
- add theme prop ([#488](https://github.com/themesberg/flowbite-react/issues/488)) ([fb34230](https://github.com/themesberg/flowbite-react/commit/fb34230be5093d2dd5700b7253c08f3ab622f667))
- **Avatar:** Support overriding the Avatar img element. Fixes [#482](https://github.com/themesberg/flowbite-react/issues/482) ([#483](https://github.com/themesberg/flowbite-react/issues/483)) ([8f87019](https://github.com/themesberg/flowbite-react/commit/8f87019e58a320bc78c07b6a04fd6a99d6376d39))
- **Navbar:** add as prop ([#526](https://github.com/themesberg/flowbite-react/issues/526)) ([#528](https://github.com/themesberg/flowbite-react/issues/528)) ([21dab1f](https://github.com/themesberg/flowbite-react/commit/21dab1fe576a09d33c8ecd35cd10cf93eb332e9a))
- **RangeSlider:** range slider with custom theme, storybook, unit test and docs ([#548](https://github.com/themesberg/flowbite-react/issues/548)) ([5f01946](https://github.com/themesberg/flowbite-react/commit/5f0194679a0d6e2d75f7cbe8bdd05ac34d5ad873))
- TextInput with RightIcon ([#437](https://github.com/themesberg/flowbite-react/issues/437)) ([7d72e1e](https://github.com/themesberg/flowbite-react/commit/7d72e1eef07baf870a84a3e2eca950bb1814a316)), closes [#436](https://github.com/themesberg/flowbite-react/issues/436) [#436](https://github.com/themesberg/flowbite-react/issues/436) [#436](https://github.com/themesberg/flowbite-react/issues/436) [#436](https://github.com/themesberg/flowbite-react/issues/436)
- **theme:** add tests for alert component ([#549](https://github.com/themesberg/flowbite-react/issues/549)) ([a62e84f](https://github.com/themesberg/flowbite-react/commit/a62e84fed43c0ee39e7b40f4e223ebcb11edd14a))
- **theme:** add theme support for Checkbox, Radio and ToggleSwitch ([#551](https://github.com/themesberg/flowbite-react/issues/551)) ([05c934a](https://github.com/themesberg/flowbite-react/commit/05c934adb2abf6af44784069388f13af2966ba38))
- **theme:** adding theme support per component ([#500](https://github.com/themesberg/flowbite-react/issues/500)) ([2f58ae2](https://github.com/themesberg/flowbite-react/commit/2f58ae2139359ef1acf7a417a1ffa337570ce221)), closes [#467](https://github.com/themesberg/flowbite-react/issues/467)

### Bug Fixes

- **helpers/mergedeep:** fix potential cases when source or target obects can be mutated ([#476](https://github.com/themesberg/flowbite-react/issues/476)) ([765fedb](https://github.com/themesberg/flowbite-react/commit/765fedb3c966ea93e384339f6e121beda320c22f))
- **modal:** clear modal container ref on unmount ([#514](https://github.com/themesberg/flowbite-react/issues/514)) ([3387128](https://github.com/themesberg/flowbite-react/commit/338712844bf5d4831004ca3c0660a4180f14202b))
- **modal:** fix initial focus inside a modal ([#495](https://github.com/themesberg/flowbite-react/issues/495)) ([6965074](https://github.com/themesberg/flowbite-react/commit/69650741dcd0bdde710e6e2a6f3687431e44deaf))
- render border colors in Avatar with placeholder initials ([#521](https://github.com/themesberg/flowbite-react/issues/521)) ([3aa12c6](https://github.com/themesberg/flowbite-react/commit/3aa12c660a4327c043fae26966b273bbae28ba66))
- **sidebaritem:** fix sidebar item with next link ([#438](https://github.com/themesberg/flowbite-react/issues/438)) ([32f337b](https://github.com/themesberg/flowbite-react/commit/32f337bea352909b18d803cd7d39b1af46069945))
- **textinput:** merge issue ([#499](https://github.com/themesberg/flowbite-react/issues/499)) ([f8eca21](https://github.com/themesberg/flowbite-react/commit/f8eca210c85adacd018e9ce9010295858b21251d))
- timeline-horizontal ([#510](https://github.com/themesberg/flowbite-react/issues/510)) ([89d2ff8](https://github.com/themesberg/flowbite-react/commit/89d2ff8ae64ddf334ec0d718ca9fa3ff3605be85))

### [0.3.7](https://github.com/themesberg/flowbite-react/compare/v0.3.6...v0.3.7) (2022-12-06)

### Bug Fixes

- **toast:** ToastToggle must have className ([#471](https://github.com/themesberg/flowbite-react/issues/471)) ([5618b21](https://github.com/themesberg/flowbite-react/commit/5618b21626afa92fe64b99ef9b1f178724b61d4a))

### [0.3.6](https://github.com/themesberg/flowbite-react/compare/v0.3.5...v0.3.6) (2022-12-02)

### Features

- **avatar:** adds color prop and test case for it ([#439](https://github.com/themesberg/flowbite-react/issues/439)) ([104d6fb](https://github.com/themesberg/flowbite-react/commit/104d6fb83bd48de696c2b79138640e747e5b020f)), closes [#409](https://github.com/themesberg/flowbite-react/issues/409) [#409](https://github.com/themesberg/flowbite-react/issues/409)

### [0.3.5](https://github.com/themesberg/flowbite-react/compare/v0.3.4...v0.3.5) (2022-11-17)

### Features

- **components:** export components types ([#434](https://github.com/themesberg/flowbite-react/issues/434)) ([45ea65a](https://github.com/themesberg/flowbite-react/commit/45ea65a4e1e376b398f462d07b9a1f1ea2ca114b)), closes [#433](https://github.com/themesberg/flowbite-react/issues/433)

### [0.3.4](https://github.com/themesberg/flowbite-react/compare/v0.3.3...v0.3.4) (2022-11-06)

### Bug Fixes

- **DarkThemeToggle:** should toggle the theme with `usePreferences` is false ([#417](https://github.com/themesberg/flowbite-react/issues/417)) ([#424](https://github.com/themesberg/flowbite-react/issues/424)) ([37244ff](https://github.com/themesberg/flowbite-react/commit/37244ff2bbdaecbea8a0bcce0243c8d6f2ee9151))

### [0.3.3](https://github.com/themesberg/flowbite-react/compare/v0.3.2...v0.3.3) (2022-11-04)

### Features

- **breadcrumbitem:** add forwardRef to breadcrumb item ([#421](https://github.com/themesberg/flowbite-react/issues/421)) ([0e4ae62](https://github.com/themesberg/flowbite-react/commit/0e4ae62b2b93561c4857bea63df45fe9170f546e))
- **sidebaritem:** add forwardRef to sidebar item ([#420](https://github.com/themesberg/flowbite-react/issues/420)) ([faca797](https://github.com/themesberg/flowbite-react/commit/faca797b0b8ce7a94b40a44019c7323e721af5e5)), closes [#397](https://github.com/themesberg/flowbite-react/issues/397)

### [0.3.2](https://github.com/themesberg/flowbite-react/compare/v0.3.1...v0.3.2) (2022-10-22)

### Features

- **classname:** more missing classnames access ([#406](https://github.com/themesberg/flowbite-react/issues/406)) ([9e40115](https://github.com/themesberg/flowbite-react/commit/9e4011554cc132fd24bff286955b5f2d6861e1f8))

### [0.3.1](https://github.com/themesberg/flowbite-react/compare/v0.3.0...v0.3.1) (2022-10-22)

### Features

- **classname:** all components with classname access ([#405](https://github.com/themesberg/flowbite-react/issues/405)) ([99b4ceb](https://github.com/themesberg/flowbite-react/commit/99b4cebf5f92e8f3eb15851dcb0b6997c8606c47))

### Bug Fixes

- **avatar:** center avatar correctly ([#404](https://github.com/themesberg/flowbite-react/issues/404)) ([1027212](https://github.com/themesberg/flowbite-react/commit/1027212dc5e3d030c65b418c3710d07d577e4016))

## [0.3.0](https://github.com/themesberg/flowbite-react/compare/v0.2.1...v0.3.0) (2022-10-22)

### [0.2.1](https://github.com/themesberg/flowbite-react/compare/v0.2.0...v0.2.1) (2022-10-19)

### Features

- allow using initials as `Avatar` placeholder ([#375](https://github.com/themesberg/flowbite-react/issues/375)) ([e349d82](https://github.com/themesberg/flowbite-react/commit/e349d82ca1d0933ea037655022b38aa1b9836a33)), closes [#357](https://github.com/themesberg/flowbite-react/issues/357) [#357](https://github.com/themesberg/flowbite-react/issues/357) [#357](https://github.com/themesberg/flowbite-react/issues/357) [#357](https://github.com/themesberg/flowbite-react/issues/357)
- **button:** added forwardRef to button component ([#391](https://github.com/themesberg/flowbite-react/issues/391)) ([3278c84](https://github.com/themesberg/flowbite-react/commit/3278c84ba15bc754032c4e248eb31e64d8bb53ff)), closes [#341](https://github.com/themesberg/flowbite-react/issues/341)
- **themecontext:** exported theme hooks and updated docs ([#390](https://github.com/themesberg/flowbite-react/issues/390)) ([37644b7](https://github.com/themesberg/flowbite-react/commit/37644b7247a35ce15df0379425139585bc8ae27f)), closes [#389](https://github.com/themesberg/flowbite-react/issues/389)

### Bug Fixes

- **dropdown:** close dropdown when item is selected ([#392](https://github.com/themesberg/flowbite-react/issues/392)) ([05f5534](https://github.com/themesberg/flowbite-react/commit/05f5534e972c750b979f6eaa225a5f0f98738ffb)), closes [#349](https://github.com/themesberg/flowbite-react/issues/349) [#349](https://github.com/themesberg/flowbite-react/issues/349) [#349](https://github.com/themesberg/flowbite-react/issues/349)

## [0.2.0](https://github.com/themesberg/flowbite-react/compare/v0.1.12...v0.2.0) (2022-10-11)

### Bug Fixes

- **button:** reduce the thickness of button outline ([#376](https://github.com/themesberg/flowbite-react/issues/376)) ([5ef0aef](https://github.com/themesberg/flowbite-react/commit/5ef0aeff0e90d4de47d1d1e9a954a792a473860d))
- **storybook:** fix welcome page ([#377](https://github.com/themesberg/flowbite-react/issues/377)) ([d2518ad](https://github.com/themesberg/flowbite-react/commit/d2518adf4ace2d062a2f370b18994cd44cebbb42))

### [0.1.12](https://github.com/themesberg/flowbite-react/compare/v0.1.11...v0.1.12) (2022-10-07)

### Bug Fixes

- Button doesn't fit to its parent width ([#370](https://github.com/themesberg/flowbite-react/issues/370)) ([15571aa](https://github.com/themesberg/flowbite-react/commit/15571aa27e7fe96b8aae6e6eaec22e03cab17814))

### [0.1.11](https://github.com/themesberg/flowbite-react/compare/v0.1.10...v0.1.11) (2022-09-13)

### Bug Fixes

- **package:** minimal react version is 18 ([#344](https://github.com/themesberg/flowbite-react/issues/344)) ([bc4fea7](https://github.com/themesberg/flowbite-react/commit/bc4fea7ecbc83dcbff61a5d01805008993a66a71))
- **pagination:** fix next button icon misalignment ([#346](https://github.com/themesberg/flowbite-react/issues/346)) ([0dd10d3](https://github.com/themesberg/flowbite-react/commit/0dd10d339a17961743c6d8a4ceb5c8e06677c0df)), closes [#330](https://github.com/themesberg/flowbite-react/issues/330)

### [0.1.10](https://github.com/themesberg/flowbite-react/compare/v0.1.9...v0.1.10) (2022-08-21)

### Bug Fixes

- **component:** use 1st letter of text in collapsed Sidebar.Item with no icon ([#338](https://github.com/themesberg/flowbite-react/issues/338)) ([103d173](https://github.com/themesberg/flowbite-react/commit/103d17324d388fe60898697ed42811428af169bb)), closes [#81](https://github.com/themesberg/flowbite-react/issues/81)

### [0.1.9](https://github.com/themesberg/flowbite-react/compare/v0.1.8...v0.1.9) (2022-08-19)

### [0.1.8](https://github.com/themesberg/flowbite-react/compare/v0.1.6...v0.1.8) (2022-08-17)

### Bug Fixes

- **component:** add missing display name for checkbox, radio and select ([#328](https://github.com/themesberg/flowbite-react/issues/328)) ([8c307aa](https://github.com/themesberg/flowbite-react/commit/8c307aa1b072d82c2779d5de2dabb5609759689e))

### [0.1.7](https://github.com/themesberg/flowbite-react/compare/v0.1.6...v0.1.7) (2022-08-11)

### [0.1.6](https://github.com/themesberg/flowbite-react/compare/v0.1.5...v0.1.6) (2022-08-11)

### Bug Fixes

- typo in navbar theme typedef ([#327](https://github.com/themesberg/flowbite-react/issues/327)) ([459a864](https://github.com/themesberg/flowbite-react/commit/459a8648f054b80fc4499ecd68689bc3d3d0c244))

### [0.1.5](https://github.com/themesberg/flowbite-react/compare/v0.1.4...v0.1.5) (2022-08-01)

### Bug Fixes

- **component:** remove "All Rights Reserved" from `<Footer.Copyright>` ([#317](https://github.com/themesberg/flowbite-react/issues/317)) ([c6524ee](https://github.com/themesberg/flowbite-react/commit/c6524eea31491480fe85870f22829a96c819c414))

### [0.1.4](https://github.com/themesberg/flowbite-react/compare/v0.1.3...v0.1.4) (2022-07-31)

### Bug Fixes

- **component:** display text only on Sidebar.Item tooltip ([#315](https://github.com/themesberg/flowbite-react/issues/315)) ([9af5d13](https://github.com/themesberg/flowbite-react/commit/9af5d136a95cadd91c3212080bb060091ce3453d)), closes [#258](https://github.com/themesberg/flowbite-react/issues/258)
- **theme:** add z-index to Dropdown floating component ([#314](https://github.com/themesberg/flowbite-react/issues/314)) ([77cb356](https://github.com/themesberg/flowbite-react/commit/77cb3560538751aa256b7c24e71df9fd6bec0c36)), closes [#308](https://github.com/themesberg/flowbite-react/issues/308)

### [0.1.4](https://github.com/themesberg/flowbite-react/compare/v0.1.3...v0.1.4) (2022-07-31)

### [0.1.3](https://github.com/themesberg/flowbite-react/compare/v0.1.2...v0.1.3) (2022-07-06)

### [0.1.2](https://github.com/themesberg/flowbite-react/compare/v0.1.1...v0.1.2) (2022-07-05)

### [0.1.1](https://github.com/themesberg/flowbite-react/compare/v0.1.0...v0.1.1) (2022-07-05)

### Bug Fixes

- **component:** Remove `type="button"` when not a `<button>` ([#217](https://github.com/themesberg/flowbite-react/issues/217)) ([8c7012e](https://github.com/themesberg/flowbite-react/commit/8c7012e77b5ca2abde0b8d30ca1ad38cf70cbdd0))

## [0.1.0](https://github.com/themesberg/flowbite-react/compare/v0.0.27...v0.1.0) (2022-06-30)

### ⚠ BREAKING CHANGES

- **inputs:** Adding theme support to the component blocks the access to className property
  directly

- fix(inputs): fix wrong default color name from `base` to `gray`

- **inputs:** adds theme support to TextInput and FileInput ([#246](https://github.com/themesberg/flowbite-react/issues/246)) ([366a119](https://github.com/themesberg/flowbite-react/commit/366a119fb91710709514dd8e790d0f2246401aa3))

### [0.0.27](https://github.com/themesberg/flowbite-react/compare/v0.0.26...v0.0.27) (2022-06-21)

### Features

- **component:** Add `Accordion.Title` theme for heading ([#184](https://github.com/themesberg/flowbite-react/issues/184)) ([45bc263](https://github.com/themesberg/flowbite-react/commit/45bc2639d03157db4eea5a0933321239596ceeb0))
- **component:** adding helpertext component ([#230](https://github.com/themesberg/flowbite-react/issues/230)) ([dd4e976](https://github.com/themesberg/flowbite-react/commit/dd4e976a64ca5877ed7cb89ae4af00a868a830ae))
- **component:** Allow `Button`s to have `href` ([#209](https://github.com/themesberg/flowbite-react/issues/209)) ([2f9f345](https://github.com/themesberg/flowbite-react/commit/2f9f34540bb86080003b504cc800f9857f8e4953))
- **component:** Allow `Label` as self-closing tag, resolves [#173](https://github.com/themesberg/flowbite-react/issues/173) ([#207](https://github.com/themesberg/flowbite-react/issues/207)) ([17f5e8e](https://github.com/themesberg/flowbite-react/commit/17f5e8e81bdd1c26930b4dd5166dc5f67fd8d761))
- **component:** theme support to darkthemetoggle ([#199](https://github.com/themesberg/flowbite-react/issues/199)) ([1ab7160](https://github.com/themesberg/flowbite-react/commit/1ab7160daa0423a593911a7e1b32aa27e3b25ca3))
- **component:** theme support to modal ([#197](https://github.com/themesberg/flowbite-react/issues/197)) ([3ed4551](https://github.com/themesberg/flowbite-react/commit/3ed455186fe15efadea0f21efaaca87a9292c5fb))
- **component:** theme support to pagination ([#195](https://github.com/themesberg/flowbite-react/issues/195)) ([80b7e2a](https://github.com/themesberg/flowbite-react/commit/80b7e2a364a557f54b94b512fe41c2e4839bd9bc))
- **component:** theme support to rating ([#191](https://github.com/themesberg/flowbite-react/issues/191)) ([c0daead](https://github.com/themesberg/flowbite-react/commit/c0daead778731585b2d6a9dd624eb3c3dbf51cc7))
- **component:** theme support to toast ([#192](https://github.com/themesberg/flowbite-react/issues/192)) ([2d5b556](https://github.com/themesberg/flowbite-react/commit/2d5b556507c234b3c77a7d7a2d1c542c2324f056))
- **component:** theme support to tooltip ([#198](https://github.com/themesberg/flowbite-react/issues/198)) ([957ea45](https://github.com/themesberg/flowbite-react/commit/957ea4569e1fb8802f5a5d0386607d12c682c2c0))
- **component:** Use `FlowbiteTheme` in `Sidebar`s, resolves [#143](https://github.com/themesberg/flowbite-react/issues/143) ([#200](https://github.com/themesberg/flowbite-react/issues/200)) ([59654eb](https://github.com/themesberg/flowbite-react/commit/59654eb1182e6df8f528d7a25ec8d817e6f18acc))
- **component:** Use theme in `ListGroup`s, resolves [#137](https://github.com/themesberg/flowbite-react/issues/137) ([#203](https://github.com/themesberg/flowbite-react/issues/203)) ([360a723](https://github.com/themesberg/flowbite-react/commit/360a7235625fc8e8da01a0bf0d70e18064e40d83))

### Bug Fixes

- `nanoid` requires Node `crypto` module ([#185](https://github.com/themesberg/flowbite-react/issues/185)) ([da59ccc](https://github.com/themesberg/flowbite-react/commit/da59ccca0900a14fd0e8720041dd4830aa04984c))
- **a11y:** Use darker text for `Breadcrumb.Item`s, resolves [#102](https://github.com/themesberg/flowbite-react/issues/102) ([b6fcf6a](https://github.com/themesberg/flowbite-react/commit/b6fcf6ac6c8107a7b6bdaa515f20e5bc6e252d20))
- **build:** Change `yarn lint` command to actually lint files ([#183](https://github.com/themesberg/flowbite-react/issues/183)) ([3471318](https://github.com/themesberg/flowbite-react/commit/34713188352c5da675de7e57ffabe92f9443cc61))
- **carousel:** carousel size depends on parent size ([#241](https://github.com/themesberg/flowbite-react/issues/241)) ([279eab4](https://github.com/themesberg/flowbite-react/commit/279eab494906de81c46b569115b9fe578d91a2cf))
- **component:** add displayName to TextInput ([#219](https://github.com/themesberg/flowbite-react/issues/219)) ([cb5ca89](https://github.com/themesberg/flowbite-react/commit/cb5ca8929d86e3c179d833ae246b1c9e35c63e51))
- **component:** add forwardRef to TextInput ([#212](https://github.com/themesberg/flowbite-react/issues/212)) ([596a445](https://github.com/themesberg/flowbite-react/commit/596a4453dd77adb361dd3dfea3b8d6650be5e91c))
- **component:** Allow `Card` to have `href` ([#194](https://github.com/themesberg/flowbite-react/issues/194)) ([3be9786](https://github.com/themesberg/flowbite-react/commit/3be9786471f5847e1307fa76319bea4e11eec718))
- **component:** Allow `Carousel`s to fill height, resolves [#168](https://github.com/themesberg/flowbite-react/issues/168) ([#208](https://github.com/themesberg/flowbite-react/issues/208)) ([9ccf0c2](https://github.com/themesberg/flowbite-react/commit/9ccf0c2a2499d50ae9c9da953a4bcbedb0cc41ca))
- **type:** Generate `FlowbiteTheme.d.ts` to builds ([#182](https://github.com/themesberg/flowbite-react/issues/182)) ([097d875](https://github.com/themesberg/flowbite-react/commit/097d8756c0130c663e3e1db15a016e8caa5316bf))
- update typo on Footer.Link from Gihub to Github ([#210](https://github.com/themesberg/flowbite-react/issues/210)) ([7ca9fcc](https://github.com/themesberg/flowbite-react/commit/7ca9fccd86d140ea89e52858bb59e288203bde47))

### [0.0.26](https://github.com/themesberg/flowbite-react/compare/v0.0.25...v0.0.26) (2022-06-13)

### Features

- **component:** Add `Accordion.Title` theme for heading ([#184](https://github.com/themesberg/flowbite-react/issues/184)) ([45bc263](https://github.com/themesberg/flowbite-react/commit/45bc2639d03157db4eea5a0933321239596ceeb0))
- **component:** Allow `Button`s to have `href` ([#209](https://github.com/themesberg/flowbite-react/issues/209)) ([2f9f345](https://github.com/themesberg/flowbite-react/commit/2f9f34540bb86080003b504cc800f9857f8e4953))
- **component:** Allow `Label` as self-closing tag, resolves [#173](https://github.com/themesberg/flowbite-react/issues/173) ([#207](https://github.com/themesberg/flowbite-react/issues/207)) ([17f5e8e](https://github.com/themesberg/flowbite-react/commit/17f5e8e81bdd1c26930b4dd5166dc5f67fd8d761))
- **component:** theme support to darkthemetoggle ([#199](https://github.com/themesberg/flowbite-react/issues/199)) ([1ab7160](https://github.com/themesberg/flowbite-react/commit/1ab7160daa0423a593911a7e1b32aa27e3b25ca3))
- **component:** theme support to modal ([#197](https://github.com/themesberg/flowbite-react/issues/197)) ([3ed4551](https://github.com/themesberg/flowbite-react/commit/3ed455186fe15efadea0f21efaaca87a9292c5fb))
- **component:** theme support to pagination ([#195](https://github.com/themesberg/flowbite-react/issues/195)) ([80b7e2a](https://github.com/themesberg/flowbite-react/commit/80b7e2a364a557f54b94b512fe41c2e4839bd9bc))
- **component:** theme support to rating ([#191](https://github.com/themesberg/flowbite-react/issues/191)) ([c0daead](https://github.com/themesberg/flowbite-react/commit/c0daead778731585b2d6a9dd624eb3c3dbf51cc7))
- **component:** theme support to toast ([#192](https://github.com/themesberg/flowbite-react/issues/192)) ([2d5b556](https://github.com/themesberg/flowbite-react/commit/2d5b556507c234b3c77a7d7a2d1c542c2324f056))
- **component:** theme support to tooltip ([#198](https://github.com/themesberg/flowbite-react/issues/198)) ([957ea45](https://github.com/themesberg/flowbite-react/commit/957ea4569e1fb8802f5a5d0386607d12c682c2c0))
- **component:** Use `FlowbiteTheme` in `Sidebar`s, resolves [#143](https://github.com/themesberg/flowbite-react/issues/143) ([#200](https://github.com/themesberg/flowbite-react/issues/200)) ([59654eb](https://github.com/themesberg/flowbite-react/commit/59654eb1182e6df8f528d7a25ec8d817e6f18acc))
- **component:** Use theme in `ListGroup`s, resolves [#137](https://github.com/themesberg/flowbite-react/issues/137) ([#203](https://github.com/themesberg/flowbite-react/issues/203)) ([360a723](https://github.com/themesberg/flowbite-react/commit/360a7235625fc8e8da01a0bf0d70e18064e40d83))

### Bug Fixes

- `nanoid` requires Node `crypto` module ([#185](https://github.com/themesberg/flowbite-react/issues/185)) ([da59ccc](https://github.com/themesberg/flowbite-react/commit/da59ccca0900a14fd0e8720041dd4830aa04984c))
- **a11y:** Use darker text for `Breadcrumb.Item`s, resolves [#102](https://github.com/themesberg/flowbite-react/issues/102) ([b6fcf6a](https://github.com/themesberg/flowbite-react/commit/b6fcf6ac6c8107a7b6bdaa515f20e5bc6e252d20))
- **build:** Change `yarn lint` command to actually lint files ([#183](https://github.com/themesberg/flowbite-react/issues/183)) ([3471318](https://github.com/themesberg/flowbite-react/commit/34713188352c5da675de7e57ffabe92f9443cc61))
- **component:** add displayName to TextInput ([#219](https://github.com/themesberg/flowbite-react/issues/219)) ([cb5ca89](https://github.com/themesberg/flowbite-react/commit/cb5ca8929d86e3c179d833ae246b1c9e35c63e51))
- **component:** add forwardRef to TextInput ([#212](https://github.com/themesberg/flowbite-react/issues/212)) ([596a445](https://github.com/themesberg/flowbite-react/commit/596a4453dd77adb361dd3dfea3b8d6650be5e91c))
- **component:** Allow `Card` to have `href` ([#194](https://github.com/themesberg/flowbite-react/issues/194)) ([3be9786](https://github.com/themesberg/flowbite-react/commit/3be9786471f5847e1307fa76319bea4e11eec718))
- **component:** Allow `Carousel`s to fill height, resolves [#168](https://github.com/themesberg/flowbite-react/issues/168) ([#208](https://github.com/themesberg/flowbite-react/issues/208)) ([9ccf0c2](https://github.com/themesberg/flowbite-react/commit/9ccf0c2a2499d50ae9c9da953a4bcbedb0cc41ca))
- **component:** Remove default export from `Breadcrumb` ([#150](https://github.com/themesberg/flowbite-react/issues/150)) ([511a86c](https://github.com/themesberg/flowbite-react/commit/511a86c8a55b6823f8dd80d916a20b49181705a5))
- Replace old colors on `Alerts` page & stories ([#156](https://github.com/themesberg/flowbite-react/issues/156)) ([4619168](https://github.com/themesberg/flowbite-react/commit/46191683cc2e28d0bdfce459c7eabeb10983e0f1))
- **type:** Generate `FlowbiteTheme.d.ts` to builds ([#182](https://github.com/themesberg/flowbite-react/issues/182)) ([097d875](https://github.com/themesberg/flowbite-react/commit/097d8756c0130c663e3e1db15a016e8caa5316bf))
- update typo on Footer.Link from Gihub to Github ([#210](https://github.com/themesberg/flowbite-react/issues/210)) ([7ca9fcc](https://github.com/themesberg/flowbite-react/commit/7ca9fccd86d140ea89e52858bb59e288203bde47))
- You may want the label to be the number 0 ([#157](https://github.com/themesberg/flowbite-react/issues/157)) ([396d8f3](https://github.com/themesberg/flowbite-react/commit/396d8f34ec6621a3936bee132de303c90acba1e5))

### [0.0.25](https://github.com/themesberg/flowbite-react/compare/v0.0.24...v0.0.25) (2022-05-20)

### Bug Fixes

- **component:** Check for `window` in components ([#124](https://github.com/themesberg/flowbite-react/issues/124)) ([4b3b8c5](https://github.com/themesberg/flowbite-react/commit/4b3b8c5f0419e0d3aa80d751ef71a01e8a075e93)), closes [#123](https://github.com/themesberg/flowbite-react/issues/123)

### [0.0.24](https://github.com/themesberg/flowbite-react/compare/v0.0.23...v0.0.24) (2022-05-15)

### [0.0.23](https://github.com/themesberg/flowbite-react/compare/v0.0.22...v0.0.23) (2022-05-12)

### [0.0.22](https://github.com/themesberg/flowbite-react/compare/v0.0.21...v0.0.22) (2022-05-10)

### Bug Fixes

- refactor sidebar item to accept a component as wrapper ([#96](https://github.com/themesberg/flowbite-react/issues/96)) ([c934624](https://github.com/themesberg/flowbite-react/commit/c9346248641253f16fa0b5424a6a25b2cb31b875))

### [0.0.21](https://github.com/themesberg/flowbite-react/compare/v0.0.19...v0.0.21) (2022-05-10)

### Features

- add tab component ([#87](https://github.com/themesberg/flowbite-react/issues/87)) ([e94cceb](https://github.com/themesberg/flowbite-react/commit/e94cceb0f88302a9681a2cc9555bff5d2a532df9))
- adds footer component ([#59](https://github.com/themesberg/flowbite-react/issues/59)) ([7799f15](https://github.com/themesberg/flowbite-react/commit/7799f15d4adf89e8cc21fef3b2553120c9a261db))
- **build:** Add `cypress` for end-to-end (integration) testing ([#85](https://github.com/themesberg/flowbite-react/issues/85)) ([4df13e6](https://github.com/themesberg/flowbite-react/commit/4df13e6dff826ae9af2859e4ba3b92abb5e4bb06))
- flowbite theme context provider ([#61](https://github.com/themesberg/flowbite-react/issues/61)) ([7274f5e](https://github.com/themesberg/flowbite-react/commit/7274f5e20a5111f1c7c43c63fd497c8a34a0950f))
- **route:** Add `Sidebar` examples page & stories, resolving [#53](https://github.com/themesberg/flowbite-react/issues/53) [#56](https://github.com/themesberg/flowbite-react/issues/56) ([#69](https://github.com/themesberg/flowbite-react/issues/69)) ([38b86bd](https://github.com/themesberg/flowbite-react/commit/38b86bd8b10fb4d5c310f0cf214c5e935021f3cd))

### Bug Fixes

- **docs:** Update `README` Components links to new URL pattern ([#84](https://github.com/themesberg/flowbite-react/issues/84)) ([39c2d91](https://github.com/themesberg/flowbite-react/commit/39c2d91c02528b56231e374de0b34d8593344d97))
- fix Carousel styles ([78060ea](https://github.com/themesberg/flowbite-react/commit/78060ea820f4b52c3b4e27acddd6d656ff91e5c7))
- improving flow handling ([#86](https://github.com/themesberg/flowbite-react/issues/86)) ([dc8af66](https://github.com/themesberg/flowbite-react/commit/dc8af66f24fa218f4152fff29c87d4620ada4bb3))
- refactor sidebar item to accept a component as wrapper ([1c964eb](https://github.com/themesberg/flowbite-react/commit/1c964eb1cbfa458d3595e2e0d367e6479dd65992))

### [0.0.20](https://github.com/themesberg/flowbite-react/compare/v0.0.19...v0.0.20) (2022-05-02)

### [0.0.19](https://github.com/themesberg/flowbite-react/compare/v0.0.18...v0.0.19) (2022-05-02)

### Features

- adds more alert stories ([a99abc9](https://github.com/themesberg/flowbite-react/commit/a99abc9dd192e860949797721b9a56b7aba32ff1))
- adds the addicional ([bcd268e](https://github.com/themesberg/flowbite-react/commit/bcd268e50efbee744f4167bf9c4b4a6f1c9582a0))
- **build:** Upgrade `@popperjs/*` to `@floating-ui/react-*` ([#67](https://github.com/themesberg/flowbite-react/issues/67)) ([9ba11ef](https://github.com/themesberg/flowbite-react/commit/9ba11ef1830b42c9c3279797c3166c78a2ec325d)), closes [#57](https://github.com/themesberg/flowbite-react/issues/57) [#69](https://github.com/themesberg/flowbite-react/issues/69)
- **component:** Add `alt` attribute to `Avatar`s ([d803781](https://github.com/themesberg/flowbite-react/commit/d80378129414957bf8b0126e63c825361aaf0adf))
- **content:** Add example `Avatar` with `alt` ([b619076](https://github.com/themesberg/flowbite-react/commit/b619076ce94d14117b23460c8a6072bcf956e8db))
- **content:** Add example `Card` with image with `alt` text ([7410610](https://github.com/themesberg/flowbite-react/commit/74106100888339d4febdb6a32bcaed57a5dae90e))

### Bug Fixes

- cleaning ([a7e1382](https://github.com/themesberg/flowbite-react/commit/a7e138286b1f9f6bda8e05d01ecf6cd698f2371e))
- **component:** Add `displayName`s for syntax highlighter, resolving [#70](https://github.com/themesberg/flowbite-react/issues/70) ([#73](https://github.com/themesberg/flowbite-react/issues/73)) ([6741a83](https://github.com/themesberg/flowbite-react/commit/6741a837a2a739b3f208594b0b1d24f39035c5a7))
- imports for alert component ([f7d6ce0](https://github.com/themesberg/flowbite-react/commit/f7d6ce03652a3d86a5a7f58fd686ba278b9315a1))
- the badge size ([14b25da](https://github.com/themesberg/flowbite-react/commit/14b25da43674dde62282b547a063624ccee201ee))
- use createPortal to render modals ([#77](https://github.com/themesberg/flowbite-react/issues/77)) ([e5e5e2e](https://github.com/themesberg/flowbite-react/commit/e5e5e2ea13285906caa4c5db9d4fc521a66fc2a7))

### [0.0.18](https://github.com/themesberg/flowbite-react/compare/v0.0.17...v0.0.18) (2022-04-20)

### Features

- add ability to drag to scroll for the Carousel component ([eb91078](https://github.com/themesberg/flowbite-react/commit/eb91078cd0a40e9411535af9a0cf3399c2cf7c0d))
- adds avatar group ([c1c3d48](https://github.com/themesberg/flowbite-react/commit/c1c3d483c33a931df74f5c55c0e11e8100b97738))
- adds the avatar component to the storybook ([e2f3a22](https://github.com/themesberg/flowbite-react/commit/e2f3a22ba76c832d65ddd667d2eb76fd314b3dee))

### Bug Fixes

- fix Carousel controls clicking behavior ([3fa9180](https://github.com/themesberg/flowbite-react/commit/3fa9180ff636038d75d499f6b9812dfa543d5d86))
- improvement the dropdown stories ([1ab98cc](https://github.com/themesberg/flowbite-react/commit/1ab98cc56120234442e46c1fd585e61c8598714c))
- remove unused import from Avatar.tsx ([ebe43ff](https://github.com/themesberg/flowbite-react/commit/ebe43ffcd54af8dacffae7a68b3e78c6d91ab534))

### [0.0.17](https://github.com/themesberg/flowbite-react/compare/v0.0.16...v0.0.17) (2022-04-14)

### Features

- add Table component ([7568ccc](https://github.com/themesberg/flowbite-react/commit/7568ccc3f299501e6042f2c93a44599677735d1c))

### Bug Fixes

- add missing dark class names of the progress component ([09cfef4](https://github.com/themesberg/flowbite-react/commit/09cfef49d6a52a01cca814e22ca35eef4ba65992))
- add missing label prop usage in the Button component ([5e8c291](https://github.com/themesberg/flowbite-react/commit/5e8c291351fec7c3ff327eea0b9635996bde534a))
- added 700 duration to Duration type ([efd4611](https://github.com/themesberg/flowbite-react/commit/efd461171eaff21c37be189acb6d0c66fce791c7))
- added PropsWithChildren ([3090117](https://github.com/themesberg/flowbite-react/commit/3090117cb0f177031da33e2db41287339663b847))
- added testid, merged imports, added duration record ([c5c9cd5](https://github.com/themesberg/flowbite-react/commit/c5c9cd538d76a7a19840ea18e9b6e48ae0a594f2))
- avatar bordered ([432d9f5](https://github.com/themesberg/flowbite-react/commit/432d9f594f8f5eba3e65a7c464ea49516c4c88bc))
- correctly renamed toast to Toast ([fd5d162](https://github.com/themesberg/flowbite-react/commit/fd5d162b5134cc0bda73a673ebc353514ebe9467))
- correctly renamed Toast.tsx to index.tsx ([53881df](https://github.com/themesberg/flowbite-react/commit/53881dfccd17f12af9c151c00792c4b0fd646f8a))
- exclude storybook stories while building the library ([648b110](https://github.com/themesberg/flowbite-react/commit/648b1107052ffe8ebe2c041dba427f62013e0185))
- export Size type and merged imports ([55c9cdf](https://github.com/themesberg/flowbite-react/commit/55c9cdf3835b93793b1a2696a4ac0cefcda4e0a9))
- fix Button component styling ([c0683cf](https://github.com/themesberg/flowbite-react/commit/c0683cf8365235b436331710bd2a84c61a9cdd3e))
- imported Size type from RatingContext ([bd8ebbb](https://github.com/themesberg/flowbite-react/commit/bd8ebbbd330de3afc2b64095ce875aa2822880ca))
- make arrow prop of Dropdown component much understandable ([cc1beff](https://github.com/themesberg/flowbite-react/commit/cc1beffb41a6146d1a38417cb3fbde3de787f938))
- make label prop of Button component as ReactNode ([59cee65](https://github.com/themesberg/flowbite-react/commit/59cee65a58623d138098fb3cfcc3c67d2a7e8d19))
- removed svg component props ([195b67e](https://github.com/themesberg/flowbite-react/commit/195b67eae27fe48a5c923a1b6cf789b7f9ff0482))
- removed Toast.tsx from src/ ([0f0c362](https://github.com/themesberg/flowbite-react/commit/0f0c36219b626b10da252dd58e3fb353f79cdbb7))
- removed unneeded imports ([249e40e](https://github.com/themesberg/flowbite-react/commit/249e40e7209ee614f71cee240f69397364151501))
- removed unneeded imports from stories ([a731a2c](https://github.com/themesberg/flowbite-react/commit/a731a2c4500a9ccc74a1491bf43cdb25cbc8ea7c))
- replaced star svg with HiStar icon ([259f345](https://github.com/themesberg/flowbite-react/commit/259f3457a9f7797cd0d6af4114b58282a14138a1))
- set tooltipArrow prop as false by default for the Dropdown component ([35ad443](https://github.com/themesberg/flowbite-react/commit/35ad443ab4bbc77cb1a2ab72e3ffd00805bcf073))
- simplify routes array ([52cb973](https://github.com/themesberg/flowbite-react/commit/52cb973c080f8ce6b5001ce3e33cea5c3f51d46a))

### [0.0.16](https://github.com/themesberg/flowbite-react/compare/v0.0.15...v0.0.16) (2022-04-08)

### Features

- add Modal components ([df5713c](https://github.com/themesberg/flowbite-react/commit/df5713ca60a8edcfc49337d8c5ac9db1ff03c42c))
- add React 18 support ([10ddd73](https://github.com/themesberg/flowbite-react/commit/10ddd73fe3c90efd98da61e362cd301353549fc5))
- Create Navbar ([253944a](https://github.com/themesberg/flowbite-react/commit/253944abb494e345c6a6693f18b4a42541a53165))
- Create Navbar example page ([670da6b](https://github.com/themesberg/flowbite-react/commit/670da6bc9fb644b6026c0f5cdc18a66449090db6))

### Bug Fixes

- added border for dark mode ([cfdf462](https://github.com/themesberg/flowbite-react/commit/cfdf462970ea31007725c9ab3ddf18dacbe935a0))
- changed navbar logo display name ([a0caa49](https://github.com/themesberg/flowbite-react/commit/a0caa493b29bd1bae903a1c4a0c95bfea1704eca))
- changed Navbar.Logo to Navbar.Brand ([5ecee8b](https://github.com/themesberg/flowbite-react/commit/5ecee8b0a069b8c5ed9da5b134a768e38a5d9464))
- misspelled NavbarComponent ([ad183a8](https://github.com/themesberg/flowbite-react/commit/ad183a88f0e4a41af85b8534183b19c670ec7a6e))
- removed commit for Tab component ([629d86c](https://github.com/themesberg/flowbite-react/commit/629d86c3938dea59ed219186014b0cac35644b7f))
- removed linter ignore ([950921a](https://github.com/themesberg/flowbite-react/commit/950921a3b8bdb79cdc849403b11f466773059321))
- removed linter ignore for hidden className ([7fe9e3e](https://github.com/themesberg/flowbite-react/commit/7fe9e3e8041f30a411626b87868eea30be4f663f))
- removed test link ([129c9e2](https://github.com/themesberg/flowbite-react/commit/129c9e29855463bdfe5105ad0e74b7d1c6f2228d))
- removed typo around a className ([d3fcd0f](https://github.com/themesberg/flowbite-react/commit/d3fcd0f5ca7e52a5ecf187120fde54175332013c))

### [0.0.15](https://github.com/themesberg/flowbite-react/compare/v0.0.14...v0.0.15) (2022-03-21)

### [0.0.14](https://github.com/themesberg/flowbite-react/compare/v0.0.13...v0.0.14) (2022-03-21)

### Features

- refactor ListGroup component ([0f18211](https://github.com/themesberg/flowbite-react/commit/0f182113f982cfbc8b5664f7946b8bcf6312cb8e))

### Bug Fixes

- fix ListGroup component ([5eda5ed](https://github.com/themesberg/flowbite-react/commit/5eda5ed993f4f7938ce332599166c2fbd2f837ee))

### [0.0.13](https://github.com/themesberg/flowbite-react/compare/v0.0.12...v0.0.13) (2022-03-17)

### Features

- add Dropdown component ([169b46e](https://github.com/themesberg/flowbite-react/commit/169b46e3bc59629a25f6badc1e6e8df0786b7ede))
- add Forms components ([51c2486](https://github.com/themesberg/flowbite-react/commit/51c248631ae4f844bc21cc54456b5ef202d7015e))
- refactor Accordion component ([16482e3](https://github.com/themesberg/flowbite-react/commit/16482e382a213af74797161ab1e75f5405a2312f))

### Bug Fixes

- fix Button styling ([c4aad36](https://github.com/themesberg/flowbite-react/commit/c4aad365d68ab3ea17e805c0fa0bc438a1d83924))
- fix onclick func and button focus in dark mode ([a8b6c92](https://github.com/themesberg/flowbite-react/commit/a8b6c92184115a6d2f967bf1bdaa2ca0a00d52b8))
- refactor Accordion component ([96dc14c](https://github.com/themesberg/flowbite-react/commit/96dc14c41530bd57db18b394fdf3a018c5463275))

### [0.0.12](https://github.com/themesberg/flowbite-react/compare/v0.0.11...v0.0.12) (2022-03-13)

### Features

- add Button group component ([1f8b8fd](https://github.com/themesberg/flowbite-react/commit/1f8b8fd6026d6cadc87263406c98c9202e5874ba))

### [0.0.11](https://github.com/themesberg/flowbite-react/compare/v0.0.10...v0.0.11) (2022-03-13)

### Features

- add light prop to Spinner component ([0590d66](https://github.com/themesberg/flowbite-react/commit/0590d66f6bd5046be13fa450bc6f5c575810cc08))

### Bug Fixes

- Remove extra icon content from Button component ([2762b55](https://github.com/themesberg/flowbite-react/commit/2762b5559d6404d1a50976643742891ee851cb9a))

### [0.0.10](https://github.com/themesberg/flowbite-react/compare/v0.0.9...v0.0.10) (2022-03-13)

### Features

- add Carousel component ([36014bc](https://github.com/themesberg/flowbite-react/commit/36014bc30d45033228150b9d78899b3be15bf181))

### Bug Fixes

- resolve issues ([118d301](https://github.com/themesberg/flowbite-react/commit/118d301e4a6e026eafdac4ef3dca9dda5aabf55d))
- resolve issues ([3294f5b](https://github.com/themesberg/flowbite-react/commit/3294f5bf024b207f829806abcf27e84df3f46199))
- resolve issues, change spinner sizes ([1b4668a](https://github.com/themesberg/flowbite-react/commit/1b4668a5adc7be8f2bb91b91c24d0e8c70709137))

### [0.0.9](https://github.com/themesberg/flowbite-react/compare/v0.0.6...v0.0.9) (2022-03-12)

### Features

- add Card component ([6c3d067](https://github.com/themesberg/flowbite-react/commit/6c3d067eb01022d5e444c38362b917aaa4c0f9d7))
- add spinner component ([61c417d](https://github.com/themesberg/flowbite-react/commit/61c417dcc73df86339d5e6499b79873db2fb8a30))
- use react-icons icons library ([236ba62](https://github.com/themesberg/flowbite-react/commit/236ba627fe2da61938cce05b16fc865c76a83e8a))
- use tooltips when sidebar is collapsed ([17ecd1a](https://github.com/themesberg/flowbite-react/commit/17ecd1a45a6dc6ad504e33dd4b1af968e7f97314))

### [0.0.8](https://github.com/themesberg/flowbite-react/compare/v0.0.6...v0.0.8) (2022-03-12)

### Features

- add spinner component ([f712228](https://github.com/themesberg/flowbite-react/commit/f7122285695db48eb6b2402f3f568a0d18cc95fd))
- use react-icons icons library ([236ba62](https://github.com/themesberg/flowbite-react/commit/236ba627fe2da61938cce05b16fc865c76a83e8a))

### [0.0.7](https://github.com/themesberg/flowbite-react/compare/v0.0.6...v0.0.7) (2022-03-12)

### Features

- use react-icons icons library ([236ba62](https://github.com/themesberg/flowbite-react/commit/236ba627fe2da61938cce05b16fc865c76a83e8a))

### [0.0.6](https://github.com/themesberg/flowbite-react/compare/v0.0.5...v0.0.6) (2022-03-12)

### Features

- add tooltip component ([d2edbb7](https://github.com/themesberg/flowbite-react/commit/d2edbb78f91d632a832c0ee5b993080f07de46c9))

### Bug Fixes

- Edit Accordion.tsx ([1110731](https://github.com/themesberg/flowbite-react/commit/1110731209c4976f1539cf4fca777b8587783bc0))
- use React state instead of data-\* attributes in Sidebar.tsx ([3942ddd](https://github.com/themesberg/flowbite-react/commit/3942ddd65111d67f465c421720ab9a4c24af5e4d))

### [0.0.5](https://github.com/themesberg/flowbite-react/compare/v0.0.4...v0.0.5) (2022-03-05)

### Features

- Add Badges and Breadcrumb ([7b7b288](https://github.com/themesberg/flowbite-react/commit/7b7b288763aee5d2baebc8052f370f60e8d9df3a))

### [0.0.4](https://github.com/themesberg/flowbite-react/compare/v0.0.3...v0.0.4) (2022-03-02)

### Bug Fixes

- fix Sidebar links ([c157d32](https://github.com/themesberg/flowbite-react/commit/c157d3224aa88a18b29090ecd03d71450a022fdd))

### [0.0.3](https://github.com/themesberg/flowbite-react/compare/v0.0.2...v0.0.3) (2022-03-02)

### Features

- add Alert component ([d3cb7b7](https://github.com/themesberg/flowbite-react/commit/d3cb7b7effd52d2180666bd5ed564ace6e8474af))

### [0.0.2](https://github.com/themesberg/flowbite-react/compare/v0.0.1...v0.0.2) (2022-02-28)

### 0.0.1 (2022-02-28)
