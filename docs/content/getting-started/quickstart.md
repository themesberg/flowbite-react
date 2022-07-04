---
layout: home
title: Flowbite - Quickstart
description: Get started with Flowbite by including it into your project using NPM or CDN
group: getting-started
toc: true

previous: Introduction
previousLink: getting-started/introduction/
next: License
nextLink: getting-started/license/
---

Flowbite is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

## Require via NPM

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow">Tailwind CSS</a> installed. 

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

Flowbite works with the 2.x version of Tailwind CSS.

## Tailwind CSS 3.0

Feel free to upgrade to version 3 of Tailwind CSS as there are no breaking changes when using the components from Flowbite.
