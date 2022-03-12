import { FC, ReactNode } from 'react';
import reactElementToJSXString, { Options } from 'react-element-to-jsx-string';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

import { Card } from '../components';

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
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      {examples.map(({ title, code, codeClassName, codeStringifierOptions }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{title}</span>
          <Card className={codeClassName}>
            {code}
            <SyntaxHighlighter language="tsx" style={dracula}>
              {reactElementToJSXString(code, {
                showFunctions: true,
                functionValue: (fn) => fn.name,
                sortProps: false,
                useBooleanShorthandSyntax: false,
                useFragmentShortSyntax: false,
                ...codeStringifierOptions,
              })}
            </SyntaxHighlighter>
          </Card>
        </div>
      ))}
    </div>
  );
};
