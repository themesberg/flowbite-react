import type { FC, ReactNode } from 'react';
import { Card } from '../src';

export type CodeExample = {
  title: string;
  content?: ReactNode;
  code: ReactNode;
  rawCode?: string;
  showCode?: boolean;
  codeClassName?: string;
  codeStringifierOptions?: unknown;
};

export type DemoPageProps = {
  examples: CodeExample[];
};

const DemoPage: FC<DemoPageProps> = ({ examples }) => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
      {examples?.map(({ title, content, code, showCode = true, codeClassName }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{title}</span>
          {content && <div className="py-4">{content}</div>}
          <div className={codeClassName}>
            <Card>{showCode && code}</Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemoPage;
