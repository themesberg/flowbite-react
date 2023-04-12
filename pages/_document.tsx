import type { NextPage } from 'next';
import type { DocumentProps } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

const DocumentPage: NextPage<DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default DocumentPage;
