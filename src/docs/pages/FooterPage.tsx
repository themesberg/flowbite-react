import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Footer } from '../../lib/components/Footer';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Footer',
      code: (
        <Footer>
          <Footer.Copyright href="#" createby="Flowbite™" year={2022} />
          <Footer.LinkBox className=" mt-3  flex-wrap items-center text-sm sm:mt-0">
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

            <Footer.LinkBox className="mt-3 flex-wrap items-center text-sm sm:mt-0">
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
    {
      title: 'Footer with social media icons',
      code: (
        <Footer className="flex flex-col">
          <div className="w-full justify-between sm:flex sm:justify-between">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <Footer.Col title="About">
                <Footer.LinkBox className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkBox>
              </Footer.Col>
              <Footer.Col title="Follow us">
                <Footer.LinkBox className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Gihub
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkBox>
              </Footer.Col>
              <Footer.Col title="Legal">
                <Footer.LinkBox className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkBox>
              </Footer.Col>
            </div>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" createby="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <BsDribbble className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Footer>
      ),
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
