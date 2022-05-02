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
      code: (
        <Footer className="flex flex-col">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />

            <Footer.LinkBox>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkBox>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <Footer.Copyright href="#" createby="Flowbite™" year={2022} />
        </Footer>
      ),
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
