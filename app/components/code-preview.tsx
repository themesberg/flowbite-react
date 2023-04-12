import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { Card } from '~/src';

const CodePreviewContainer: FC<PropsWithChildren> = function ({ children }) {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const CodePreviewCard: FC<PropsWithChildren & ComponentProps<'div'>> = function ({ children, className }) {
  return (
    <div className={className}>
      <Card>{children}</Card>
    </div>
  );
};

const CodePreviewContent: FC<PropsWithChildren> = function ({ children }) {
  return <div className="py-4">{children}</div>;
};

const CodePreviewTitle: FC<PropsWithChildren> = function ({ children }) {
  return <span className="text-2xl font-bold">{children}</span>;
};

export const CodePreview = Object.assign(CodePreviewContainer, {
  Card: CodePreviewCard,
  Content: CodePreviewContent,
  Title: CodePreviewTitle,
});
