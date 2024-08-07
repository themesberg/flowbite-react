export interface DocsSidebarSection {
  title: string;
  items: DocsSidebarItem[];
}

export interface DocsSidebarItem {
  title: string;
  href: string;
  isNew?: boolean;
  isExternal?: boolean;
}

export const DOCS_SIDEBAR: DocsSidebarSection[] = [
  {
    title: "getting started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction" },
      { title: "Quickstart", href: "/docs/getting-started/quickstart" },
      { title: "CLI", href: "/docs/getting-started/cli" },
      { title: "Editor Setup", href: "/docs/getting-started/editor-setup" },
      { title: "Server Components", href: "/docs/getting-started/server-components" },
      { title: "License", href: "/docs/getting-started/license" },
      { title: "Changelog", href: "https://github.com/themesberg/flowbite-react/releases", isExternal: true },
      { title: "Contributing", href: "/docs/getting-started/contributing" },
    ],
  },
  {
    title: "integration guides",
    items: [
      { title: "Next.js", href: "/docs/guides/next-js" },
      { title: "Remix", href: "/docs/guides/remix" },
      { title: "Astro", href: "/docs/guides/astro" },
      { title: "Gatsby", href: "/docs/guides/gatsby" },
      { title: "AdonisJS", href: "/docs/guides/adonis-js", isNew: true },
      { title: "RedwoodJS", href: "/docs/guides/redwood-js" },
      { title: "Laravel", href: "/docs/guides/laravel" },
      { title: "Vite", href: "/docs/guides/vite" },
      { title: "Parcel", href: "/docs/guides/parcel" },
      { title: "Create React App", href: "/docs/guides/create-react-app" },
    ],
  },
  {
    title: "customize",
    items: [
      { title: "Theme", href: "/docs/customize/theme" },
      { title: "Dark Mode", href: "/docs/customize/dark-mode" },
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
      { title: "Clipboard", href: "/docs/components/clipboard", isNew: true },
      { title: "Datepicker", href: "/docs/components/datepicker" },
      { title: "Device Mockups", href: "/docs/components/device-mockups", isNew: true },
      { title: "Drawer", href: "/docs/components/drawer", isNew: true },
      { title: "Dropdown", href: "/docs/components/dropdown" },
      { title: "Footer", href: "/docs/components/footer" },
      { title: "Forms", href: "/docs/components/forms" },
      { title: "KBD", href: "/docs/components/kbd" },
      { title: "List group", href: "/docs/components/list-group" },
      { title: "Mega menu", href: "/docs/components/mega-menu", isNew: true },
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
      { title: "List", href: "/docs/typography/list" },
      { title: "HR", href: "/docs/typography/hr", isNew: true },
    ],
  },
];
