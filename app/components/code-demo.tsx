'use client';

import { PropsWithChildren, useState } from 'react';
import { CodeHighlight, Language } from './code-highlight';

interface CodeVariant {
  name: string;
  value: string;
}

export interface CodeItem {
  fileName: string;
  code: string | CodeVariant[];
  language: Language;
  githubSlug: string;
  component: React.ReactNode;
}

export type CodeData = CodeItem | CodeItem[];

interface CodeDemoProps {
  code: CodeData;
}

export function CodeDemo({ code }: CodeDemoProps) {
  const [index, setIndex] = useState(0);
  const [variant, setVariant] = useState(0);

  function getCurrent(code: CodeDemoProps['code'], index: number) {
    const computed = Array.isArray(code) ? code : [code];

    return computed[index];
  }

  function getCodeValue(item: CodeItem) {
    return typeof item.code === 'string' ? item.code : item.code[variant].value;
  }

  const current = getCurrent(code, index);

  return (
    <div className="code-example mt-8">
      <CodePreview>{current.component}</CodePreview>
      <CodeHighlight code={getCodeValue(current)} language={current.language} />
    </div>
  );
}

interface CodePreviewProps extends PropsWithChildren {
  // TODO:
}

function CodePreview({ children }: CodePreviewProps) {
  return <div className="p-3">{children}</div>;
}
