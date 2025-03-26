export const DEFAULT_PROJECT_NAME = "flowbite-react-app";

export interface Template {
  key: string;
  name: string;
  description?: string;
  url?: string;
  versions?: Template[];
}

export const REPOS: Template[] = [
  {
    key: "adonisjs",
    name: "AdonisJS",
    url: "https://github.com/themesberg/flowbite-react-template-adonisjs.git",
  },
  {
    key: "astro",
    name: "Astro",
    url: "https://github.com/themesberg/flowbite-react-template-astro.git",
  },
  {
    key: "blitzjs",
    name: "Blitz.js",
    url: "https://github.com/themesberg/flowbite-react-template-blitzjs.git",
  },
  {
    key: "bun",
    name: "Bun",
    url: "https://github.com/themesberg/flowbite-react-template-bun.git",
  },
  {
    key: "esbuild",
    name: "ESBuild",
    url: "https://github.com/themesberg/flowbite-react-template-esbuild.git",
  },
  {
    key: "farm",
    name: "Farm",
    url: "https://github.com/themesberg/flowbite-react-template-farm.git",
  },
  {
    key: "gatsby",
    name: "Gatsby",
    url: "https://github.com/themesberg/flowbite-react-template-gatsby.git",
  },
  {
    key: "laravel",
    name: "Laravel",
    url: "https://github.com/themesberg/flowbite-react-template-laravel.git",
  },
  {
    key: "meteorjs",
    name: "Meteor.js",
    url: "https://github.com/themesberg/flowbite-react-template-meteorjs.git",
  },
  {
    key: "modernjs",
    name: "Modern.js",
    url: "https://github.com/themesberg/flowbite-react-template-modernjs.git",
  },
  {
    key: "nextjs",
    name: "Next.js",
    url: "https://github.com/themesberg/flowbite-react-template-nextjs.git",
  },
  {
    key: "parcel",
    name: "Parcel",
    description: "Client Mode, Server Mode",
    versions: [
      {
        key: "client",
        name: "Client Mode",
        description: "Client-side only React app",
        url: "https://github.com/themesberg/flowbite-react-template-parcel-client.git",
      },
      {
        key: "server",
        name: "Server Mode",
        description: "React Server Components setup",
        url: "https://github.com/themesberg/flowbite-react-template-parcel-server.git",
      },
      {
        key: "server-bun",
        name: "Server Mode (Bun)",
        description: "React Server Components setup with Bun",
        url: "https://github.com/themesberg/flowbite-react-template-parcel-server-bun.git",
      },
      {
        key: "server-deno",
        name: "Server Mode (Deno)",
        description: "React Server Components setup with Deno",
        url: "https://github.com/themesberg/flowbite-react-template-parcel-server-deno.git",
      },
    ],
  },
  {
    key: "react-router",
    name: "React Router",
    description: "Framework Mode, Data Mode, Declarative Mode",
    versions: [
      {
        key: "framework",
        name: "Framework Mode",
        description: "Full-featured with SSR, code-splitting, and type safety",
        url: "https://github.com/themesberg/flowbite-react-template-react-router-framework.git",
      },
      {
        key: "data",
        name: "Data Mode",
        description: "Data loading and actions with pending states",
        url: "https://github.com/themesberg/flowbite-react-template-react-router-data.git",
      },
      {
        key: "declarative",
        name: "Declarative Mode",
        description: "Basic routing with BrowserRouter",
        url: "https://github.com/themesberg/flowbite-react-template-react-router-declarative.git",
      },
    ],
  },
  {
    key: "react-server",
    name: "React Server",
    url: "https://github.com/themesberg/flowbite-react-template-react-server.git",
  },
  {
    key: "redwoodjs",
    name: "RedwoodJS",
    url: "https://github.com/themesberg/flowbite-react-template-redwoodjs.git",
  },
  {
    key: "remix",
    name: "Remix",
    url: "https://github.com/themesberg/flowbite-react-template-remix.git",
  },
  {
    key: "rsbuild",
    name: "Rsbuild",
    url: "https://github.com/themesberg/flowbite-react-template-rsbuild.git",
  },
  {
    key: "rspack",
    name: "Rspack",
    url: "https://github.com/themesberg/flowbite-react-template-rspack.git",
  },
  {
    key: "tanstack-router",
    name: "TanStack Router",
    url: "https://github.com/themesberg/flowbite-react-template-tanstack-router.git",
  },
  {
    key: "tanstack-start",
    name: "TanStack Start",
    url: "https://github.com/themesberg/flowbite-react-template-tanstack-start.git",
  },
  {
    key: "vike",
    name: "Vike",
    url: "https://github.com/themesberg/flowbite-react-template-vike.git",
  },
  {
    key: "vite",
    name: "Vite",
    url: "https://github.com/themesberg/flowbite-react-template-vite.git",
  },
  {
    key: "waku",
    name: "Waku",
    url: "https://github.com/themesberg/flowbite-react-template-waku.git",
  },
  {
    key: "webpack",
    name: "Webpack",
    url: "https://github.com/themesberg/flowbite-react-template-webpack.git",
  },
];
