/* eslint-disable tailwindcss/no-custom-classname */
import Prism from "prismjs";
import { twMerge } from "tailwind-merge";
import { PreWithCopy } from "./code-block";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

Prism.manual = true;

const languages = ["bash", "css", "javascript", "js", "json", "jsx", "ts", "tsx", "typescript"] as const;

export type Language = (typeof languages)[number];

export interface CodeHighlightProps extends React.ComponentProps<"pre"> {
  code: string;
  language: Language;
  withCopy?: boolean;
}

export function CodeHighlight({ code, language, className, withCopy = false, ...props }: CodeHighlightProps) {
  const highlightedCode = Prism.highlight(code.trim(), Prism.languages[language], language);
  const Component = withCopy ? PreWithCopy : "pre";

  return (
    <Component className={twMerge(`language-${language}`, className)} {...props}>
      <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </Component>
  );
}
