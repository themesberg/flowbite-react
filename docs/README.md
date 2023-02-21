# Flowbite React Documentation with Hugo

> **Warning** This still in WIP, we are moving the current documentation to Hugo.

## About the documentation

We are using Hugo for this documentation. If you are not familiar with the tool, the best thing that you can do is to check its official website.

The documentation `package.json` shares some dependencies with the library's `package.json` - `react`, `react-dom`, and `flowbite`.

It is important to note that it also uses the current development version of `flowbite-react`, not the latest from npm.

## Requirements

If you want to start developing and contributing to the documentation of Flowbite React you will need to first install and build the `flowbite-react` package from the root folder of the repository. 

Make sure that you have the latest stable version of HUGO installed globally - errors may appear pre-version `0.1`. Yarn and TypeScript is also required.

1. Run the following command to install project dependencies:

```
yarn install
```

2. Create a build using Yarn:

```
yarn build:lib
```

3. Now go to the `docs/` folder and install the local dependencies via NPM:

```
npm install
```

4. Finally, run a local development server for the HUGO docs:

```
npm run start
```

Now you're all set to develop and make contributions to the Flowbite React documentation!

## How to contribute?

@TODO

## Create a new example

@TODO