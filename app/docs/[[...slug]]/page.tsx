import { allDocs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import { Mdx } from '~/app/components/mdx';

interface Props {
  params: {
    slug: string[];
  };
}

function getDoc({ params }: Props) {
  const slug = params.slug?.join('/') || '';

  return allDocs.find((doc) => doc.url === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const doc = getDoc({ params });

  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
  };
}

export function generateStaticParams() {
  return allDocs.map((doc) => ({ slug: doc.url.split('/') }));
}

export default function DocPage({ params }: Props) {
  const doc = getDoc({ params });

  if (!doc) notFound();

  return (
    <DocsContentLayout title={doc.title} description={doc.description}>
      <Mdx code={doc.body.code} />
    </DocsContentLayout>
  );
}
