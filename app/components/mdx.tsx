'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component />;
}
