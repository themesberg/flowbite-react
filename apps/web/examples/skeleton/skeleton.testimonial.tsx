import { SkeletonTestimonial } from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
'use client';

import { Skeleton } from "flowbite-react";

function Component() {
  return (
    <div>
      <Skeleton.Testimonial />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonTestimonial } from "flowbite-react";

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
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "skeleton/skeleton.testimonial.tsx",
  component: <Component />,
};
