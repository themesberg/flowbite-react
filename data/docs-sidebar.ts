export interface DocsSidebarSection {
  title: string;
  href: string;
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
    title: 'getting started',
    href: '/getting-started/',
    items: [
      { title: 'Introduction', href: '/docs/getting-started/introduction' },
      { title: 'Quickstart', href: '/docs/getting-started/quickstart' },
      { title: 'Next.js', href: '/docs/getting-started/nextjs', isNew: true },
      { title: 'Server Components', href: '/docs/getting-started/server-components', isNew: true },
      { title: 'TypeScript', href: '/docs/getting-started/typescript' },
      { title: 'License', href: '/docs/getting-started/license' },
      { title: 'Changelog', href: 'https://github.com/themesberg/flowbite-react/releases', isExternal: true },
      { title: 'Contributing', href: '/docs/getting-started/contributing' },
    ],
  },
  {
    title: 'customize',
    href: '/customize/',
    items: [
      { title: 'Theme', href: '/docs/customize/theme' },
      { title: 'Dark mode', href: '/docs/customize/dark-mode' },
    ],
  },
  {
    title: 'components',
    href: '/components/',
    items: [
      { title: 'Accordion', href: '/docs/components/accordion' },
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Banner', href: '/docs/components/banner', isNew: true },
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Button group', href: '/docs/components/button-group' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Carousel', href: '/docs/components/carousel' },
      { title: 'Datepicker', href: '/docs/components/datepicker', isNew: true },
      { title: 'Dropdown', href: '/docs/components/dropdown' },
      { title: 'Footer', href: '/docs/components/footer' },
      { title: 'Forms', href: '/docs/components/forms' },
      { title: 'KBD', href: '/docs/components/kbd', isNew: true },
      { title: 'List group', href: '/docs/components/list-group' },
      { title: 'Mega menu', href: '/docs/components/mega-menu', isNew: true },
      { title: 'Modal', href: '/docs/components/modal' },
      { title: 'Navbar', href: '/docs/components/navbar' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Progress bar', href: '/docs/components/progress' },
      { title: 'Rating', href: '/docs/components/rating' },
      { title: 'Sidebar', href: '/docs/components/sidebar' },
      { title: 'Spinner', href: '/docs/components/spinner' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Timeline', href: '/docs/components/timeline' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
    ],
  },
  {
    title: 'forms',
    href: '/forms/',
    items: [
      { title: 'File Input', href: '/docs/forms/file-input' },
      { title: 'Floating Label', href: '/docs/forms/floating-label', isNew: true },
    ],
  },
  {
    title: 'typography',
    href: '/typography/',
    items: [
      { title: 'Blockquote', href: '/docs/typography/blockquote', isNew: true },
      { title: 'List', href: '/docs/typography/list', isNew: true },
    ],
  },
];
