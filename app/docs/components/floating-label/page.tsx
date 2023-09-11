import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import FloatingLabelContent from ".";

export const metadata: Metadata = {
    description:
        'Use the floating label style for the input field elements to replicate the Material UI design system from Google and choose from multiple styles and sizes',
    title: 'Tailwind CSS Floating Label - Flowbite',
};
const FloatingLabelPage: NextPage = () => {
    return (
        <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
            <FloatingLabelContent />
        </DocsContentLayout>
    );
};

export default FloatingLabelPage;
