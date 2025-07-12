export interface DocsSidebarSection {
  title: string;
  items: DocsSidebarItem[];
}

export interface DocsSidebarItem {
  title: string;
  href: string;
  tag?: "new" | "updated";
}

export const DOCS_SIDEBAR: DocsSidebarSection[] = [
  {
    title: "getting started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Quickstart", href: "/docs/getting-started/quickstart", tag: "updated" },
      { title: "Compatibility", href: "/docs/getting-started/compatibility" },
      { title: "CLI", href: "/docs/getting-started/cli", tag: "updated" },
      { title: "Editor Setup", href: "/docs/getting-started/editor-setup" },
      { title: "AI Integration", href: "/docs/getting-started/ai-integration" },
      { title: "Server Components", href: "/docs/getting-started/server-components" },
      { title: "License", href: "/docs/getting-started/license" },
      { title: "Changelog", href: "https://github.com/themesberg/flowbite-react/releases" },
      { title: "Contributing", href: "/docs/getting-started/contributing" },
    ],
  },
  {
    title: "integration guides",
    items: [
      { title: "AdonisJS", href: "/docs/guides/adonisjs" },
      { title: "Astro", href: "/docs/guides/astro" },
      { title: "Blitz.js", href: "/docs/guides/blitzjs" },
      { title: "Bun", href: "/docs/guides/bun" },
      { title: "ESBuild", href: "/docs/guides/esbuild" },
      { title: "Farm", href: "/docs/guides/farm" },
      { title: "Gatsby", href: "/docs/guides/gatsby" },
      { title: "Laravel", href: "/docs/guides/laravel" },
      { title: "Meteor.js", href: "/docs/guides/meteorjs" },
      { title: "Modern.js", href: "/docs/guides/modernjs" },
      { title: "Next.js", href: "/docs/guides/nextjs" },
      { title: "Parcel", href: "/docs/guides/parcel" },
      { title: "React Router", href: "/docs/guides/react-router" },
      { title: "React Server", href: "/docs/guides/react-server" },
      { title: "RedwoodJS", href: "/docs/guides/redwoodjs" },
      { title: "Remix", href: "/docs/guides/remix" },
      { title: "Rsbuild", href: "/docs/guides/rsbuild" },
      { title: "Rspack", href: "/docs/guides/rspack" },
      { title: "TanStack Router", href: "/docs/guides/tanstack-router" },
      { title: "TanStack Start", href: "/docs/guides/tanstack-start" },
      { title: "Vike", href: "/docs/guides/vike" },
      { title: "Vite", href: "/docs/guides/vite" },
      { title: "Waku", href: "/docs/guides/waku" },
      { title: "Webpack", href: "/docs/guides/webpack" },
    ],
  },
  {
    title: "customize",
    items: [
      { title: "Colors", href: "/docs/customize/colors" },
      { title: "Config", href: "/docs/customize/config" },
      { title: "Custom Components", href: "/docs/customize/custom-components" },
      { title: "Dark Mode", href: "/docs/customize/dark-mode" },
      { title: "Prefix", href: "/docs/customize/prefix" },
      { title: "Theme", href: "/docs/customize/theme", tag: "updated" },
    ],
  },
  {
    title: "components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Banner", href: "/docs/components/banner" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Button group", href: "/docs/components/button-group" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Carousel", href: "/docs/components/carousel" },
      { title: "Clipboard", href: "/docs/components/clipboard" },
      { title: "Datepicker", href: "/docs/components/datepicker" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown", href: "/docs/components/dropdown" },
      { title: "Footer", href: "/docs/components/footer" },
      { title: "Forms", href: "/docs/components/forms" },
      { title: "KBD", href: "/docs/components/kbd" },
      { title: "List group", href: "/docs/components/list-group" },
      { title: "Mega menu", href: "/docs/components/mega-menu" },
      { title: "Modal", href: "/docs/components/modal" },
      { title: "Navbar", href: "/docs/components/navbar" },
      { title: "Pagination", href: "/docs/components/pagination" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress bar", href: "/docs/components/progress" },
      { title: "Rating", href: "/docs/components/rating" },
      { title: "Sidebar", href: "/docs/components/sidebar" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Timeline", href: "/docs/components/timeline" },
      { title: "Toast", href: "/docs/components/toast" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
  {
    title: "forms",
    items: [
      { title: "File Input", href: "/docs/forms/file-input" },
      { title: "Floating Label", href: "/docs/forms/floating-label" },
    ],
  },
  {
    title: "typography",
    items: [
      { title: "Blockquote", href: "/docs/typography/blockquote" },
      { title: "HR", href: "/docs/typography/hr" },
      { title: "List", href: "/docs/typography/list" },
    ],
  },
];
