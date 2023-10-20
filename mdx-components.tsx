// TODO: delete soon

import type { MDXComponents } from 'mdx/types';

export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    h2: (props) => (
      <h2 className="group relative z-20 scroll-mt-20 text-2xl font-bold text-gray-900" {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
        >
          #
        </a>
      </h2>
    ),
    h3: (props) => (
      <h3 className="group relative z-10 scroll-mt-20 text-2xl font-bold text-gray-900" {...props}>
        {props.children}
        <a
          aria-label={`Link to this section: ${props.children}`}
          href={`#${props.id}`}
          className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
        >
          #
        </a>
      </h3>
    ),
    ...components,
  };
};
