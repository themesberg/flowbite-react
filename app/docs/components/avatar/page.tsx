import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import AvatarPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the avatar component to show user profile images and placeholders in different sizes, colors and shapes based on React and Tailwind CSS',
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
