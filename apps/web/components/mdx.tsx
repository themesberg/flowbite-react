import {
  Alert,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  theme,
} from "flowbite-react";
import type { MDXComponents } from "mdx/types";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import * as examples from "~/examples";
import { pick } from "~/helpers/pick";
import { CodeDemo, type CodeData } from "./code-demo";
import { CodeHighlight } from "./code-highlight";
import { PreWithCopy } from "./pre-with-copy";
import { IntegrationGuides } from "./quickstart/integration-guides";
import { TextDivider } from "./text-divider";

const components: MDXComponents = {
  Alert,
  TextDivider,
  IntegrationGuides,
  pre: PreWithCopy,

  // Table component
  table: (props) => (
    <div className="relative mb-4 max-h-[40rem] overflow-auto rounded-lg shadow-md">
      <Table {...props} />
    </div>
  ),
  thead: (props) => <TableHead {...props} className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-700" />,
  tbody: (props) => (
    <TableBody {...props} className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800" />
  ),
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableHeadCell {...props} className="px-6 py-3 text-gray-500 dark:text-gray-400" />,
  td: (props) => <TableCell {...props} className="px-6 py-4" />,

  // Paragraph component
  p: (props) => <p {...props} className="mb-4 leading-7 text-gray-600 dark:text-gray-400" />,

  // Inline code component
  code: (props) => {
    // Only apply these styles to inline code, not code blocks
    const isInlineCode = typeof props.className !== "string" || !props.className.includes("language-");

    return isInlineCode ? (
      <code
        {...props}
        className="whitespace-nowrap break-all rounded border border-primary-100 bg-gray-50 px-1 text-sm text-primary-700 dark:border-gray-800 dark:bg-gray-900 dark:text-primary-400"
      />
    ) : (
      <code {...props} />
    );
  },

  // Link component with external link handling
  a: ({ ref, href = "", ...props }) => {
    const isLocal = href.startsWith("/") || href.startsWith("#");

    return (
      <Link
        {...props}
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(!isLocal && { target: "_blank", rel: "noreferrer" })}
        className="font-medium text-gray-900 underline decoration-primary-700 decoration-1 underline-offset-2 hover:decoration-2 dark:text-white dark:decoration-primary-700 dark:hover:text-white"
      />
    );
  },

  // List components
  ul: (props) => (
    <List {...props} className="my-4 ml-5 list-outside list-disc space-y-3 text-gray-600 dark:text-gray-400" />
  ),
  ol: (props) => (
    <List
      {...props}
      className="my-4 ml-5 list-outside list-decimal space-y-3 text-gray-600 dark:text-gray-400"
      ordered
    />
  ),
  li: (props) => <ListItem {...props} className="pl-1.5 leading-relaxed dark:text-gray-400" />,

  // Heading components
  h2: (props) => (
    <Heading {...props} as="h2" className="z-10 mb-4 mt-12 text-2xl font-bold text-gray-900 dark:text-white" />
  ),
  h3: (props) => (
    <Heading {...props} as="h3" className="z-10 mb-4 mt-8 text-xl font-bold text-gray-900 dark:text-white" />
  ),
  h4: (props) => (
    <Heading {...props} as="h4" className="z-10 mb-4 mt-6 text-lg font-bold text-gray-900 dark:text-white" />
  ),

  // Example component
  Example: ({ name }: { name: string }) => {
    const codeData = pick<CodeData>(examples, name);

    if (!codeData) {
      return <>{`<Example name="${name}" />`}</>;
    }

    return <CodeDemo data={codeData} />;
  },

  // Theme component
  Theme: ({ name }: { name: keyof typeof theme }) => {
    if (!(name in theme)) {
      return <>{`<Theme name="${name}" />`}</>;
    }

    return <CodeHighlight code={JSON.stringify(theme[name], null, 2)} language="json" withCopy />;
  },
};

/**
 * A heading component with an anchor link
 */
function Heading({
  as: Component,
  className,
  ...props
}: {
  as: React.ElementType;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component className={`group scroll-mt-20 ${className || ""}`} {...props}>
      {props.children}
      <a
        href={`#${props.id}`}
        aria-label={`Link to this section: ${props.children}`}
        className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
      >
        #
      </a>
    </Component>
  );
}

export function Mdx({ code }: { code: string }) {
  const Component = getMDXComponent(code);

  return <Component components={components} />;
}
