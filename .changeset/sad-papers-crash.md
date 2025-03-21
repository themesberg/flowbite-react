---
"flowbite-react": minor
---

## Summary

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

### 3. CLI Enhancements

- New project initialization command:

  ```bash
  npx flowbite-react@latest init
  ```

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
