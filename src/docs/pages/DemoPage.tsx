import type { FC, ReactNode } from 'react';
import type { Options } from 'react-element-to-jsx-string';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from '../../lib';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export type CodeExample = {
  title: string;
  content?: ReactNode;
  code: ReactNode;
  rawCode?: string;
  showCode?: boolean;
  codeClassName?: string;
  codeStringifierOptions?: Options;
};

export type DemoPageProps = {
  examples: CodeExample[];
};

export const DemoPage: FC<DemoPageProps> = ({ examples }) => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
      {examples.map(
        ({ title, content, code, rawCode, showCode = true, codeClassName, codeStringifierOptions }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="text-2xl font-bold">{title}</span>
            {content && <div className="py-4">{content}</div>}
            <div className={codeClassName}>
              <Card>
                {showCode && code}
                <SyntaxHighlighter language="tsx" style={dracula}>
                  {rawCode ||
                    reactElementToJSXString(code, {
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
          </div>
        ),
      )}
    </div>
  );
};
