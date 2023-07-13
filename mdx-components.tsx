import type { MDXComponents } from 'mdx/types';

export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    h2: (props) => (
      <h2
        className="group relative z-20 text-2xl font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-[''] before:dark:text-white"
        {...props}
      >
        {props.children}
        <a
          className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
          href={`#${props.id}`}
          aria-label={`Link to this section: ${props.children}`}
        >
          #
        </a>
      </h2>
    ),
    h3: (props) => (
      <h3
        className="group relative z-10 text-2xl font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-[''] before:dark:text-white"
        {...props}
      >
        {props.children}
        <a
          className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
          href={`#${props.id}`}
          aria-label={`Link to this section: ${props.children}`}
        >
          #
        </a>
      </h3>
    ),
    ...components,
  };
};
