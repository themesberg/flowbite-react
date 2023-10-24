'use client';

import { usePathname } from 'next/navigation';
import prismjs from 'prismjs';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { Children, useEffect, useState } from 'react';
import type { Options } from 'react-element-to-jsx-string';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { BsCheckLg, BsFillClipboardFill } from 'react-icons/bs';
import { HiMoon, HiSun } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from '~/src';

const reactElementToJSXStringOptions: Options = {
  filterProps: ['key', 'ref'],
  showFunctions: true,
  useBooleanShorthandSyntax: false,
};

interface CodePreviewProps extends PropsWithChildren, ComponentProps<'div'> {
  code?: string;
  functionBody?: string[];
  githubPage?: string;
  importExternal?: string;
  importFlowbiteReact?: string;
  title: string;
}

interface CodePreviewState {
  isDarkMode?: boolean;
  isExpanded?: boolean;
  isJustCopied?: boolean;
}

export const CodePreview: FC<CodePreviewProps> = ({
  children,
  className,
  code = '',
  functionBody,
  githubPage,
  importExternal,
  importFlowbiteReact,
  title,
}) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [isJustCopied, setJustCopied] = useState(false);

  const copyToClipboard = (toCopy: string) => {
    setJustCopied(true);
    navigator.clipboard.writeText(toCopy);
    setTimeout(() => setJustCopied(false), 2000);
  };

  const childrenList = Children.toArray(children);
  const isFragment = childrenList.length > 1;

  if (code === '') {
    code = childrenList.map((child) => reactElementToJSXString(child, reactElementToJSXStringOptions)).join('\n');
  }

  code = deleteJSXSpaces(code);
  code = deleteSVGs(code);
  code = replaceWebpackImportsOnFunctions(code);
  code = explicitTruthyPropsToShorthandSyntax(code);
  code = `'use client';

import { ${importFlowbiteReact ?? firstComponentDisplayName(code)} } from 'flowbite-react';
${importExternal ? `${importExternal}\n` : ''}
export default function ${titleCaseToUpperCamelCase(title)}() {${
    functionBody ? `${functionBody.map((line) => `\n  ${line}`).join('')}\n` : ''
  }
  return (
    ${isFragment ? '<>\n      ' : ''}${code.replaceAll(/\n/g, isFragment ? '\n      ' : '\n    ')}${
    isFragment ? '\n    </>' : ''
  }
  )
}\n\n\n`;

  useEffect(() => {
    prismjs.highlightAll();
  }, [code]);

  return (
    <div className="code-example mt-8">
      <div className="w-full rounded-t-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="grid grid-cols-2">
          <EditOnGithubButton githubPage={githubPage} title={title} />
          <div className="ml-auto">
            <ToggleDarkModeButton isDarkMode={isDarkMode} onClick={() => setDarkMode(!isDarkMode)} />
          </div>
        </div>
      </div>
      <div className={twMerge('code-preview-wrapper', isDarkMode && 'dark')}>
        <div className="code-preview flex border-x border-gray-200 bg-white bg-gradient-to-r p-0 dark:border-gray-600 dark:bg-gray-900">
          <div className="code-responsive-wrapper w-full">
            <div className="mx-auto w-full bg-white bg-gradient-to-r p-2 dark:bg-gray-900 sm:p-6">
              <div className={twMerge('py-4', className)}>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="code-syntax-wrapper">
        <div className="code-syntax relative border-x border-y border-gray-200 dark:border-gray-600">
          <div className="grid w-full grid-cols-2 rounded-t-md border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
            <ul className="flex text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <span className="inline-block w-full border-r border-gray-200 bg-gray-100 p-2 px-3 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                  React TypeScript
                </span>
              </li>
            </ul>
            <div className="flex justify-end">
              <CopyToClipboardButton isJustCopied={isJustCopied} onClick={() => copyToClipboard(code)} />
            </div>
          </div>
          <pre className={twMerge('language-tsx !overflow-y-hidden', !isExpanded && 'max-h-72')}>
            <code>{code}</code>
          </pre>
          <CollapseExpandButton isExpanded={isExpanded} onClick={() => setExpanded(!isExpanded)} />
        </div>
      </div>
    </div>
  );
};

const EditOnGithubButton: FC<CodePreviewProps> = ({ githubPage }) => {
  const pathname = usePathname();

  const githubSrcHref = 'https://github.com/themesberg/flowbite-react/blob/main/src/components/';
  const page = pathname.split('/').pop() ?? '';
  const component = slugToUpperCamelCase(page);
  const href = `${githubSrcHref}${githubPage ?? `${component}/${component}`}.tsx`;

  return (
    <a
      href={href}
      rel="noreferrer nofollow noopener"
      className="inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-700"
    >
      <svg
        aria-hidden
        fill="currentColor"
        viewBox="0 0 24 24"
        focusable="false"
        data-icon="github"
        role="img"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
      Edit on GitHub
    </a>
  );
};

const ToggleDarkModeButton: FC<ComponentProps<'button'> & CodePreviewState> = ({ isDarkMode, onClick }) => {
  return (
    <Tooltip content={isDarkMode ? 'Toggle light mode' : 'Toggle dark mode'}>
      <button
        onClick={onClick}
        className="flex items-center rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
      >
        <span className="sr-only">Toggle dark/light mode</span>
        {isDarkMode ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
      </button>
    </Tooltip>
  );
};

const CopyToClipboardButton: FC<ComponentProps<'button'> & CodePreviewState> = ({ isJustCopied, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="copy-to-clipboard-button flex items-center border-l border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
    >
      {isJustCopied ? (
        <BsCheckLg className="mr-2 h-4 w-4 text-green-500 dark:text-green-400" />
      ) : (
        <BsFillClipboardFill className="mr-2 h-3 w-3" />
      )}

      {isJustCopied ? 'Code copied!' : 'Copy code'}
    </button>
  );
};

const CollapseExpandButton: FC<ComponentProps<'button'> & CodePreviewState> = ({ isExpanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-0 left-0 z-30 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {isExpanded ? 'Collapse code' : 'Expand code'}
    </button>
  );
};

const firstComponentDisplayName = (str: string) => {
  const firstClosingTag = str.indexOf('>');
  const firstSpace = str.indexOf(' ');

  return str.substring(1, firstSpace > firstClosingTag ? firstClosingTag : firstSpace).replaceAll(/\s/g, '');
};

const deleteJSXSpaces = (str: string) => {
  return str.replaceAll(/{' '}/g, '');
};

const deleteSVGs = (str: string) => {
  return str.replaceAll(/<svg[\s\S]*?<\/svg>/g, '<SeeSourceCodeForSVG />');
};

const replaceWebpackImportsOnFunctions = (str: string) => {
  return str.replaceAll(/function (.*?)\s?\(props\)\s?{(.*)}/g, '$1}');
};

const titleCaseToUpperCamelCase = (str: string) => {
  return str
    .replaceAll(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
    .replaceAll(/\s+/g, '')
    .replaceAll(/-/g, '');
};

const slugToUpperCamelCase = (str: string) => {
  return str
    .replaceAll(/-/g, ' ')
    .replaceAll(/\b[a-z]/g, (letter) => letter.toUpperCase())
    .replaceAll(/\s/g, '');
};

const explicitTruthyPropsToShorthandSyntax = (str: string) => {
  return str.replaceAll(/={true}/g, '');
};
