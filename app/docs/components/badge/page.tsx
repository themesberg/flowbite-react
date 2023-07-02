import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BadgePageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the badge component to add labels or counters inside paragraphs, buttons, and inputs based on multiple colors and sizes from React and Tailwind CSS',
  title: 'React Badge - Flowbite',
};

const AvatarPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <BadgePageContent />
    </DocsContentLayout>
  );
};

export default AvatarPage;
