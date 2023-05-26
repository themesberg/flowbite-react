import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import ButtonPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows',
  title: 'React Buttons - Flowbite',
};

const ButtonPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <ButtonPageContent />
    </DocsContentLayout>
  );
};

export default ButtonPage;
