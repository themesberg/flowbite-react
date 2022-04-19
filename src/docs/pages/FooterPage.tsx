import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Footer } from '../../lib/components/Footer';

const FooterPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Footer',
      code: <Footer></Footer>,
    },
    {
      title: 'Footer with logo',
      code: <Footer></Footer>,
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
