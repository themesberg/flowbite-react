import Image from 'next/image';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import Markdown from 'react-markdown';
import { Doc, allDocs } from '~/.contentlayer/generated';
import { CarbonAds } from '~/app/components/carbon-ads';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import { Footer } from '~/src';

interface Props {
  params: {
    slug: string[];
  };
}

function getDoc({ params }: Props) {
  const slug = params.slug?.join('/') || '';

  return allDocs.find((doc) => doc.url === slug);
}

export default function DocLayout({ children, params }: PropsWithChildren<Props>) {
  const doc = getDoc({ params });

  if (!doc) return null;

  return (
    <div className="flex">
      <div className="pb:12 mx-auto flex min-w-0 max-w-4xl flex-col px-4 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
        <main>
          <DocsContentLayout title={doc.title} description={doc.description}>
            {children}
          </DocsContentLayout>
        </main>
        <DocFooter />
        <CarbonAds />
      </div>
      <ToC doc={doc} />
    </div>
  );
}

function DocFooter() {
  return (
    <Footer className="rounded-none px-4 pb-8 pt-16 shadow-none dark:bg-gray-900 lg:px-0">
      <div className="w-full">
        <div className="grid w-full justify-between md:grid-cols-2">
          <div className="mb-4 max-w-sm lg:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image alt="" height="32" src="/favicon.svg" width="32" className="h-8 w-8" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Flowbite React</span>
            </Link>
            <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a
              Figma design system and other resources.
            </p>
            <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Code licensed{' '}
              <a
                href="https://github.com/themesberg/flowbite-react/blob/main/LICENSE"
                className="text-cyan-600 hover:underline"
              >
                MIT
              </a>
              , docs{' '}
              <a
                href="https://creativecommons.org/licenses/by/3.0/"
                rel="nofollow noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
                CC BY 3.0
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="Resources"
                className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col className="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://github.com/themesberg/flowbite-react" className="text-base">
                  GitHub
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/" className="text-base">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="https://tailwindcss.com/" className="text-base">
                  Tailwind CSS
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/figma/" className="text-base">
                  Figma
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Help & Support"
                className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col className="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://discord.gg/4eeurUVvTy" className="text-base">
                  Discord
                </Footer.Link>
                <Footer.Link href="https://github.com/themesberg/flowbite-react/discussions" className="text-base">
                  Github Discussions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Legal"
                className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col className="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://flowbite.com/license/" className="text-base">
                  License
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/brand/" className="text-base">
                  Brand guideline
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            by="All Rights Reserved. Flowbite™ is a registered trademark."
            href="/"
            year={2023}
            className="text-base"
          />
        </div>
      </div>
    </Footer>
  );
}

function ToC({ doc }: { doc: Doc }) {
  return (
    <div className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
        <div className="mb-8">
          <h4 className="my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
            On this page
          </h4>
          <nav id="visible-table-of-contents">
            <Markdown>{doc.toc}</Markdown>
          </nav>
        </div>
      </div>
    </div>
  );
}
