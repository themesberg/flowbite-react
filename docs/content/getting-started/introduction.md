---
layout: home
title: Flowbite - Tailwind CSS component library
description: Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS
group: getting-started
toc: true
cleanTitle: true

next: Quickstart
nextLink: getting-started/quickstart/
---

## Introduction

Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.

It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but also some more advanced interactive elements such as datepickers. 

All of the elements are built using the utility classes from Tailwind CSS and vanilla JavaScript.

<iframe width="100%" class="my-8 rounded-lg shadow-lg yt-video" src="https://www.youtube.com/embed/4bnJG2UDr9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here's a quick overview of the Flowbite ecosystem including the open source Tailwind components library, the Figma design files, and the pro version.

<div class="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
    <a href="{{< ref "getting-started/quickstart" >}}" class="block p-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quickstart</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Learn how to get started by downloading and configuring Flowbite locally on your machine and start developing.</p>
    </a>
    <a href="{{< ref "components/alerts" >}}" class="block p-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Components</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Explore the Tailwind CSS elements such as buttons, navbars, alerts, dropdowns and use them to build your website.</p>
    </a>
    <a href="{{< param homepage >}}/figma/" class="block p-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Figma design files</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Prototype and design your website before coding with the Flowbite Figma file which is based on the Tailwind CSS classes.</p>
    </a>
    <a href="{{< param homepage >}}/pro/" class="block p-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upgrade to Pro</h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">Take your Figma and Tailwind CSS development to the next level with thousands more elements and pages with Flowbite Pro.</p>
    </a>
</div>

## Using Flowbite

One of the disadvantages of Tailwind CSS compared to other frameworks is that it doesn't have a base set of components. This makes it really hard to quickly prototype a user interface. 

<span class="font-semibold text-gray-700 dark:text-gray-200">This is where Flowbite comes into play</span>: it's basically Tailwind CSS, but you get all of the components that you would normally get with a classic CSS framework like Bootstrap or Bulma.

There are at least 19 types of components including buttons, alerts, breadcrumbs, pagination, and navbars. Flowbite also includes some custom JavaScript that enables interactive components, such as dropdowns, modals, tooltips, and many more. 

## Getting started

React is one of the most popular front-end libraries in the world used by websites such as Facebook, Instagram, Yahoo Mail, Dropbox, and more built by the Meta (formerly Facebook) company.

Coupled with Tailwind CSS and the React components from Flowbite you will be able to develop applications faster than ever based on the [Flowbite React](https://flowbite-react.com) library.

## Install Tailwind CSS with React

Follow the next steps to install Tailwind CSS and Flowbite with Create React App.

1. Run the following command in your terminal to create a React application, if you don't already have one:

```bash
npx create-react-app my-project
cd my-project
```

2. Install Tailwind CSS by running the following two commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure the template paths inside the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Set up the Tailwind directives inside the `./src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Install Flowbite and Flowbite React by running the following command in your terminal:

```bash
npm i flowbite flowbite-react
```

6. Require Flowbite as a plugin inside your `tailwind.config.js` file:

```javascript
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

7. Additionally to your own `content` data you should add `flowbite` to apply the classes from the interactive elements in the `tailwind.config.js` file:

```javascript
module.exports = {

    content: [
        // ...
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ]

}
```

Now you can start the server by running `npm run start` or build the project using `npm run build`.

## Tailwind CSS 2.0

Flowbite is fully compatible with the 2.x versions of Tailwind CSS.

## Tailwind CSS 3.0

Feel free to upgrade to version 3 of Tailwind CSS as there are no breaking changes when using the components from Flowbite.

## Figma

The components from Flowbite are first conceptualized and designed in Figma using the latest features such as variants, auto-layout, grids, responsive layouts, and more.

Learn more by checking out <a href="{{< param homepage >}}/figma/">Flowbite's Figma design system</a> and start designing your Tailwind CSS projects before actually coding them.

## Pro version

If you want to take your Tailwind development workflow to the next level you can check out the [pro version of Flowbite]("{{< param homepage >}}/pro/") which includes fully coded pages and layouts for application, marketing, and e-commerce user interfaces.

## Licensing

The library of components from Flowbite is open source under the [MIT License]({{< ref "getting-started/license" >}}).

## Contributions

Flowbite is an open source library under the MIT license and anyone who would like to contribute to the codebase or design is welcome to do so. 

Please reach out to us via the <a href="https://github.com/themesberg/flowbite">official Github repository</a> and the main development team will get in touch as soon as possible.

## Discord community

Feel free to join our <a href="https://discord.gg/4eeurUVvTy" rel="nofollow">community on Discord</a> to receive help, contribute to the project, or just discuss about Flowbite, Tailwind CSS, and web development in general.

## Authors

- <a href="https://twitter.com/zoltanszogyenyi" rel="nofollow">Zoltán Szőgyényi</a> (web developer)
- <a href="https://twitter.com/RobertTanislav" rel="nofollow">Robert Tanislav</a> (web designer)
- <a href="https://twitter.com/victorcordos" rel="nofollow">Victor Cordos</a> (web developer)