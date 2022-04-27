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
          <Footer.LinkGroup className=" mt-3  flex-wrap items-center text-sm sm:mt-0">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
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

            <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
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
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <Footer.Col title="About">
                <Footer.LinkGroup className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Flowbite
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </Footer.Col>
              <Footer.Col title="Follow us">
                <Footer.LinkGroup className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Gihub
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </Footer.Col>
              <Footer.Col title="Legal">
                <Footer.LinkGroup className="flex-col">
                  <Footer.Link className="mb-4" href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link className="mb-4" href="#">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </Footer.Col>
            </div>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" createby="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.IconContent href="#" className="hover:text-gray-900">
                <BsFacebook className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="hover:text-gray-900">
                <BsInstagram className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="hover:text-gray-900">
                <BsTwitter className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="hover:text-gray-900">
                <BsGithub className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="hover:text-gray-900">
                <BsDribbble className="h-5 w-5" />
              </Footer.IconContent>
            </div>
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer sitemap links',
      code: (
        <Footer className="flex flex-col bg-gray-800">
          <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <Footer.Col className="text-gray-400" title="Company">
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  About
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Careers
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Brand Center
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </Footer.Col>
            <Footer.Col className="text-gray-400" title="Help Center">
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Discord Server
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Twitter
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Facebook
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </Footer.Col>
            <Footer.Col className="text-gray-400" title="Legal">
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Licensing
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </Footer.Col>
            <Footer.Col className="text-gray-400" title="Download">
              <Footer.LinkGroup className="flex-col">
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  iOS
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Android
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  Windows
                </Footer.Link>
                <Footer.Link className="mb-4 text-gray-300" href="#">
                  MacOS
                </Footer.Link>
              </Footer.LinkGroup>
            </Footer.Col>
          </div>
          <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="w-full sm:flex sm:items-center  sm:justify-between  ">
            <Footer.Copyright className="text-gray-300" href="#" createby="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.IconContent href="#" className="text-gray-400 hover:text-white ">
                <BsFacebook className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="text-gray-400 hover:text-white ">
                <BsInstagram className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="text-gray-400 hover:text-white ">
                <BsTwitter className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="text-gray-400 hover:text-white ">
                <BsGithub className="h-5 w-5" />
              </Footer.IconContent>
              <Footer.IconContent href="#" className="text-gray-400 hover:text-white ">
                <BsDribbble className="h-5 w-5" />
              </Footer.IconContent>
            </div>
          </div>
        </Footer>
      ),
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
