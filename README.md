<div align="center">
  <h1>:construction: flowbite-react (unreleased) :construction:</h1>
  <p>
    <a href="https://flowbite-react.com">
      <img alt="Flowbite - Tailwind CSS components" width="350" src=".github/assets/flowbite-react-github.png">
    </a>
  </p>
  <p>
    Build websites even faster with components on top of React and Tailwind CSS
  </p>
  <p>
    <a href="https://codecov.io/gh/themesberg/flowbite-react">
      <img src="https://codecov.io/gh/themesberg/flowbite-react/branch/main/graph/badge.svg?token=wnw40SeY4k"/>
    </a>
    <a href="https://discord.com/invite/4eeurUVvTy">
      <img src="https://img.shields.io/discord/902911619032576090?color=%237289da&label=Discord" alt="Discord">
    </a>
    <a href="https://www.npmjs.com/package/flowbite-react">
      <img src="https://img.shields.io/npm/dt/flowbite-react.svg" alt="Total Downloads">
    </a>
    <a href="https://badge.fury.io/js/flowbite-react">
      <img alt="Latest release" src="https://badge.fury.io/js/flowbite-react.svg">
    </a>
    <a href="https://flowbite.com/getting-started/license/">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese">
    </a>
  </p>
</div>

---

<div align="center">
  <p />
  <p>
    <img alt="https://flowbite-react.com" src="https://i.postimg.cc/d0DwHMJZ/Screenshot-2023-07-12-at-16-36-54-Flowbite-React-UI-Component-Library.png" />
  </p>
</div>

---

### `flowbite-react` is an open source collection of UI components, built in React, with utility classes from Tailwind CSS that you can use as a starting point for user interfaces and websites.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Documentation](#documentation)
- [Getting started](#getting-started)
  - [Setup Tailwind CSS](#setup-tailwind-css)
  - [Install Flowbite React](#install-flowbite-react)
  - [Try it out](#try-it-out)
  - [Next steps](#next-steps)
    - [Next.js](#nextjs)
    - [Dark mode](#dark-mode)
    - [Customization](#customization)
    - [Contributing](#contributing)
- [Components](#components)
- [Community](#community)
- [Contributing](#contributing-1)
- [Figma](#figma)
- [Copyright and license](#copyright-and-license)

## Documentation

Documentation for `flowbite-react` is not yet finished.

If you want to browse the components, visit [flowbite-react.com](https://flowbite-react.com/).

If you want to learn more about Flowbite, visit [Flowbite docs](https://flowbite.com/docs/getting-started/introduction/).

## Getting started

Learn how to get started with Flowbite React and start leveraging the interactive React components coupled with Flowbite and Tailwind CSS.

You'll need to be familiar with Node.js and `npm`, and have `npm` installed. You should be comfortable installing packages with `npm`, and experience creating web apps with React and Tailwind CSS will be very helpful.

### Setup Tailwind CSS

Install Tailwind CSS:

```bash
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

Point Tailwind CSS to files you have `className=".."` in:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind CSS to a CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install Flowbite React

1. Install Flowbite and Flowbite React:

```bash
npm i flowbite flowbite-react # or yarn add flowbite flowbite-react
```

2. Add the Flowbite plugin to `tailwind.config.js`, and include content from `flowbite-react`:

```javascript
module.exports = {
  content: [
    ...,
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [..., require('flowbite/plugin')],
  ...
};
```

### Try it out

How you use Flowbite React depends on your project setup. In general, you can just import the components you want to use from `flowbite-react` and use them in a React `.jsx` file:

```jsx
import { Button } from 'flowbite-react';

export default function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

### Next steps

#### Next.js

If you're using Next.js, you can follow the [Next.js install guide](/docs/getting-started/nextjs), which includes a [Next.js starter project](https://github.com/tulupinc/flowbite-next-starter) with Flowbite React already set up.

#### Dark mode

If you want to add a dark mode switcher to your app, you can follow the [dark mode guide](/docs/customize/dark-mode).

#### Customization

If you want to customize Flowbite React component, you can follow the [theme guide](/docs/customize/theme).

#### Contributing

If you want to contribute to Flowbite React, you can follow the [contributing guide](https://github.com/themesberg/flowbite-react/blob/main/CONTRIBUTING.md).

## Components

**Please note that some components in the vanilla Flowbite library are not yet available in Flowbite React.**

<table>
  <tr>
    <td width="33.3333%">Accordion</td>
    <td width="33.3333%">Alert</td>
    <td width="33.3333%">Avatar</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/accordion">
            <img alt="React Accordion" src="https://flowbite.s3.amazonaws.com/github/accordion.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/alert">
            <img alt="React Alert" src="https://flowbite.s3.amazonaws.com/github/alerts.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/avatar">
            <img alt="React Avatar" src="https://flowbite.s3.amazonaws.com/github/avatar.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Banner</td>
    <td width="33.3333%">Badge</td>
    <td width="33.3333%">Breadcrumb</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/banner">
            <img alt="React Banner" src="https://flowbite.s3.amazonaws.com/github/banner.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/badge">
            <img alt="React Badge" src="https://flowbite.s3.amazonaws.com/github/badge.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/breadcrumb">
            <img alt="React Breadcrumb" src="https://flowbite.s3.amazonaws.com/github/breadcrumbs.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Button</td>
    <td width="33.3333%">Button group</td>
    <td width="33.3333%">Card</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/button">
            <img alt="React Button" src="https://flowbite.s3.amazonaws.com/github/buttons.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/button-group">
            <img alt="React Button group" src="https://flowbite.s3.amazonaws.com/github/button-group.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/card">
            <img alt="React Card" src="https://flowbite.s3.amazonaws.com/github/cards.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Carousel</td>
    <td width="33.3333%">Datepicker</td>
    <td width="33.3333%">Dropdown</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/carousel/">
            <img alt="React Carousel" src="https://flowbite.s3.amazonaws.com/github/carousel.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/datepicker">
            <img alt="React Datepicker" src="https://flowbite.s3.amazonaws.com/github/datepicker.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/dropdown">
            <img alt="React Dropdown" src="https://flowbite.s3.amazonaws.com/github/dropdown.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Footer</td>
    <td width="33.3333%">Forms</td>
    <td width="33.3333%">List group</td>
  </tr>
  <tr>
  <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/footer">
            <img alt="React Footer" src="https://flowbite.s3.amazonaws.com/github/footer.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/forms">
            <img alt="React Forms" src="https://flowbite.s3.amazonaws.com/github/input-field.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/list-group">
            <img alt="React List group" src="https://flowbite.s3.amazonaws.com/github/list-group.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Modal</td>
    <td width="33.3333%">Navbar</td>
    <td width="33.3333%">Pagination</td>
  </tr>
  <tr>
   <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/modal">
            <img alt="React Modal" src="https://flowbite.s3.amazonaws.com/github/modal.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/navbar">
            <img alt="React Navbar" src="https://flowbite.s3.amazonaws.com/github/navbar.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/pagination">
            <img alt="React Pagination" src="https://flowbite.s3.amazonaws.com/github/pagination.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Progress bar</td>
    <td width="33.3333%">Rating</td>
    <td width="33.3333%">Sidebar</td>
  </tr>
  <tr>
  <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/progress-bar">
            <img alt="React Progress bar" src="https://flowbite.s3.amazonaws.com/github/progress.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/rating">
            <img alt="React Rating" src="https://flowbite.s3.amazonaws.com/github/rating.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/sidebar">
            <img alt="React Sidebar" src="https://flowbite.s3.amazonaws.com/github/sidebar.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Spinner</td>
    <td width="33.3333%">Table</td>
    <td width="33.3333%">Tabs</td>
  </tr>
  <tr>
  <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/spinner">
            <img alt="React Spinner" src="https://flowbite.s3.amazonaws.com/github/spinner.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/table">
            <img alt="React Table" src="https://flowbite.s3.amazonaws.com/github/tables.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/tabs">
            <img alt="React Tabs" src="https://flowbite.s3.amazonaws.com/github/tabs.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Tooltip</td>
    <td width="33.3333%">Timeline</td>
    <td width="33.3333%">Toast</td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/tooltip">
            <img alt="React Tooltip" src="https://flowbite.s3.amazonaws.com/github/tooltips.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/timeline">
            <img alt="React Timeline" src="https://flowbite.s3.amazonaws.com/github/timeline.jpg">
        </a>
    </td>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/toast">
            <img alt="React Toast" src="https://flowbite.s3.amazonaws.com/github/toast.jpg">
        </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Sticky Banner</td>
    <td width="33.3333%"></td>
    <td width="33.3333%"></td>
  </tr>
  <tr>
    <td width="33.3333%">
        <a href="https://flowbite-react.com/docs/components/banner">
            <img alt="React Banner" src="https://flowbite.s3.amazonaws.com/github/banner.jpg">
        </a>
    </td>
    <td width="33.3333%"></td>
    <td width="33.3333%"></td>
  </tr>
</table>

## Community

If you need help or just want to discuss about the library join the community on Github:

⌨️ [Discuss about Flowbite on GitHub](https://github.com/themesberg/flowbite/discussions)

For casual chatting with others using the library:

💬 [Join the Flowbite Discord Server](https://discord.gg/4eeurUVvTy)

## Contributing

Thank you for your interest in helping! Visit our [guide on contributing](https://github.com/themesberg/flowbite-react/blob/main/CONTRIBUTING.md) to get started.

## Figma

If you need the Figma files for the components you can check out our website for more information:

🎨 [Get access to the Figma design files](https://flowbite.com/figma/)

## Copyright and license

The Flowbite name and logos are trademarks of Bergside Srl.

📝 [Read about the licensing terms](https://flowbite.com/docs/getting-started/license/)
📀 [Brand guideline and trademark usage agreement](https://flowbite.com/brand/)
