'use client';

import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { Card } from '~/src';

interface CodePreviewProps extends PropsWithChildren, ComponentProps<'div'> {
  code?: string;
  title: string;
}

export const CodePreview: FC<CodePreviewProps> = function ({ children, className, title }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className={classNames('py-4', className)}>
        <Card>{children}</Card>
      </div>
    </div>
  );
};
