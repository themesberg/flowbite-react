import { Alert, List, ListItem, theme } from "flowbite-react";
import type { MDXComponents } from "mdx/types";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import * as examples from "~/examples";
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

  // Link component with external link handling
  a: ({ ref, href = "", ...props }) => {
    const isLocal = href.startsWith("/") || href.startsWith("#");

    return (
      <Link
        {...props}
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(!isLocal && { target: "_blank", rel: "noreferrer" })}
      />
    );
  },

  // List components
  ul: (props) => <List {...props} />,
  ol: (props) => <List ordered {...props} />,
  li: (props) => <ListItem {...props} />,

  // Heading components
  h2: (props) => <Heading as="h2" className="z-10 text-2xl" {...props} />,
  h3: (props) => <Heading as="h3" className="z-10 text-2xl" {...props} />,
  h4: (props) => <Heading as="h4" className="z-10" {...props} />,

  // Example component
  Example: ({ name }: { name: string }) => {
    const codeData = pick(examples, name);

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

/**
 * Recursively picks a nested value from an object using a dot-separated path string
 * @template T - The type of the input object
 * @param {T} obj - The object to pick from
 * @param {string} path - Dot-separated path to the desired value (e.g. "foo.bar.baz")
 * @returns {CodeData | undefined} The value at the specified path, or undefined if not found
 */
function pick<T extends object>(obj: T, path: string): CodeData | undefined {
  if (!path) {
    return obj as CodeData;
  }

  const properties = path.split(".");
  const key = properties.shift() as keyof typeof obj;

  if (!(key in obj)) {
    return;
  }

  return pick(obj[key] as T, properties.join("."));
}

export function Mdx({ code }: { code: string }) {
  const Component = getMDXComponent(code);

  return <Component components={components} />;
}
