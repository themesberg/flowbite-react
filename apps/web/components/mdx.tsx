import { Alert, List, ListItem, theme } from "flowbite-react";
import type { MDXComponents } from "mdx/types";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import * as examples from "~/examples";
import { CodeDemo, type CodeData } from "./code-demo";
import { CodeHighlight } from "./code-highlight";
import { IntegrationGuides } from "./quickstart/integration-guides";
import { TextDivider } from "./text-divider";

const components: MDXComponents = {
  Alert,
  TextDivider,
  IntegrationGuides,
  a: ({ ref, href = "", ...props }) => {
    const isLocal = href.startsWith("/");

    return (
      <Link
        {...props}
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(!isLocal && { target: "_blank", rel: "noreferrer" })}
      />
    );
  },
  ul: (props) => <List {...props} />,
  ol: (props) => <List ordered {...props} />,
  li: (props) => <ListItem {...props} />,
  // TODO: revisit
  h2: (props) => (
    <h2 className="group relative z-20 scroll-mt-20 text-2xl font-bold text-gray-900 dark:text-white" {...props}>
      {props.children}
      <a
        href={`#${props.id}`}
        aria-label={`Link to this section: ${props.children}`}
        className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
      >
        #
      </a>
    </h2>
  ),
  // TODO: revisit
  h3: (props) => (
    <h3 className="group relative z-10 scroll-mt-20 text-2xl font-bold text-gray-900 dark:text-white" {...props}>
      {props.children}
      <a
        href={`#${props.id}`}
        aria-label={`Link to this section: ${props.children}`}
        className="ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-500"
      >
        #
      </a>
    </h3>
  ),
  Example: ({ name }: { name: string }) => {
    function pick<T extends object>(obj: T, path: string): CodeData | undefined {
      if (!path) return obj as CodeData;
      const properties = path.split(".");
      const key = properties.shift() as keyof typeof obj;
      if (!(key in obj)) return;
      return pick(obj[key] as T, properties.join("."));
    }

    const codeData = pick(examples, name);

    if (!codeData) return <>{`<Example name="${name}" />`}</>;

    return <CodeDemo data={codeData} />;
  },
  Theme: ({ name }: { name: keyof typeof theme }) => {
    if (!(name in theme)) return <>{`<Theme name="${name}" />`}</>;

    return <CodeHighlight code={JSON.stringify(theme[name], null, 2)} language="json" />;
  },
};

export function Mdx({ code }: { code: string }) {
  const Component = getMDXComponent(code);

  return <Component components={components} />;
}
