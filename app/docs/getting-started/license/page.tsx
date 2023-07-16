import type { Metadata, NextPage } from 'next';
import LicensePageContent from '.';

export const metadata: Metadata = {
  description: 'Learn more about the open-source licensing rights of the Flowbite React UI component library',
  title: 'License - Flowbite React',
};

const LicensePage: NextPage = () => {
  return <LicensePageContent />;
};

export default LicensePage;
