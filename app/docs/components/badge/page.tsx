import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import BadgePageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes',
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
