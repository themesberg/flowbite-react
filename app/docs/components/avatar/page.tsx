import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AvatarPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes',
  title: 'React Avatar - Flowbite',
};

const AvatarPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <AvatarPageContent />
    </DocsContentLayout>
  );
};

export default AvatarPage;
