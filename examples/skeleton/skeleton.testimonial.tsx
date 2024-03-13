import type { CodeData } from '~/components/code-demo';
import { SkeletonTestimonial } from '~/src';

const code = `
'use client';

import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton.Testimonial />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonVideo } from 'flowbite-react';

function Component() {
  return (
    <div>
      <SkeletonTestimonial />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonTestimonial />
    </div>
  );
}

export const testimonial: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'skeleton/skeleton.testimonial.tsx',
  component: <Component />,
};
