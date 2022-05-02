import { FC, ReactNode } from 'react';
import reactElementToJSXString, { Options } from 'react-element-to-jsx-string';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

import { Card } from '../lib';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export type CodeExample = {
  title: string;
  code: ReactNode;
  codeClassName?: string;
  codeStringifierOptions?: Options;
};

export type DemoPageProps = {
  examples: CodeExample[];
};

export const DemoPage: FC<DemoPageProps> = ({ examples }) => {
  const SyntaxHighlighterFix = SyntaxHighlighter as any;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
      {examples.map(({ title, code, codeClassName, codeStringifierOptions }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{title}</span>
          <Card className={codeClassName}>
            {code}
            <SyntaxHighlighterFix language="tsx" style={dracula}>
              {reactElementToJSXString(code, {
                showFunctions: true,
                functionValue: (fn) => fn.name,
                sortProps: false,
                useBooleanShorthandSyntax: false,
                useFragmentShortSyntax: false,
                ...codeStringifierOptions,
              })}
            </SyntaxHighlighterFix>
          </Card>
        </div>
      ))}
    </div>
  );
};
