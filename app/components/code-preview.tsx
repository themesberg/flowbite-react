'use client';

import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { Children } from 'react';
import type { Options } from 'react-element-to-jsx-string';
import reactElementToJSXString from 'react-element-to-jsx-string';

const reactElementToJSXStringOptions: Options = {
  filterProps: ['as', 'key'],
  functionValue: (fn) => fn.name,
  showFunctions: true,
  sortProps: true,
};

interface CodePreviewProps extends PropsWithChildren, ComponentProps<'div'> {
  code?: string;
  title: string;
}

export const CodePreview: FC<CodePreviewProps> = function ({ children, className, title }) {
  const childrenList = Children.toArray(children);
  let code = childrenList.map((child) => reactElementToJSXString(child, reactElementToJSXStringOptions)).join('\n');
  code = deleteJSXSpaces(code);
  code = deleteSVGs(code);
  code = replaceWebpackImportsOnComponents(code);
  code = replaceWebpackImportsOnFunctions(code);

  return (
    <div className="mb-12 flex w-full flex-col gap-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className={classNames('py-4', className)}>{children}</div>
      <pre className="language-jsx">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const deleteJSXSpaces = (str: string) => {
  return str.replaceAll(/{' '}/g, '');
};

const replaceWebpackImportsOnFunctions = (str: string) => {
  return str.replaceAll(/function (.*?) \(props\)(.*?);}/g, '<$1 />');
};

const replaceWebpackImportsOnComponents = (str: string) => {
  return str.replaceAll(/(.*?)\(props\)=>\/\*__PURE__(.*)\}(?!.*\})/g, 'SeeSourceCodeForBrokenComponent');
};

const deleteSVGs = (str: string) => {
  return str.replaceAll(/<svg[\s\S]*?<\/svg>/g, '<SeeSourceCodeForSVG />');
};
