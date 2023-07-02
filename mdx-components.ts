import type { MDXComponents } from 'mdx/types';

export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    ...components,
  };
};
