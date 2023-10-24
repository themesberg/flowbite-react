import rehypePrism from '@mapbox/rehype-prism';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import toc from 'markdown-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    toc: {
      type: 'markdown',
      resolve: (doc) => {
        function filterInlineToc(_, element) {
          return element.slug !== 'table-of-contents';
        }

        return toc(doc.body.raw, { filter: filterInlineToc }).content;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrism],
  },
});
