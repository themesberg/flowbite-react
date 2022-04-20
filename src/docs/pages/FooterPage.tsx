import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Footer } from '../../lib/components/Footer';

const FooterPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Footer',
      code: (
        <Footer>
          <Footer.Copyright href="#" createby="Flowbite™" year={2022} />
          <Footer.LinkBox>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkBox>
        </Footer>
      ),
    },
    {
      title: 'Footer with logo',
      code: <Footer></Footer>,
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
