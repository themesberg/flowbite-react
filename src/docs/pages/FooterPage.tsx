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
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-3 sm:mt-0">
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer with logo',
      code: (
        <Footer>
          <div className="flex w-full flex-col">
            <div className="justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
              <div className="mt-3 sm:mt-0">
                <Footer.LinkGroup>
                  <Footer.Link href="#">About</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Licensing</Footer.Link>
                  <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer with social media icons',
      code: (
        <Footer>
          <div className="flex flex-col">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="m-6">
                <Footer.Brand
                  href="https://flowbite.com"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  name="Flowbite"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div className="flex">
                  <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">About</h2>
                  <Footer.LinkGroup>
                    <Footer.Link href="#">Flowbite</Footer.Link>
                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>

                  <Footer.LinkGroup>
                    <div className="mb-4">
                      <Footer.Link href="#">Gihub</Footer.Link>
                    </div>
                    <div className="mb-4">
                      <Footer.Link className="mb-4" href="#">
                        Discord
                      </Footer.Link>
                    </div>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                  <Footer.LinkGroup col>
                    <div>
                      <Footer.Link href="#">Privacy Policy</Footer.Link>
                    </div>
                    <div className="mb-4">
                      <Footer.Link className="mb-4" href="#">
                        Terms &amp; Conditions
                      </Footer.Link>
                    </div>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Flowbite™" year={2022} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                {/* className="text-gray-400 hover:text-gray-900" */}
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer sitemap links',
      code: (
        <Footer>
          <div className="flex flex-col bg-gray-800">
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>
                <Footer.LinkGroup col>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">About</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Careers</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Brand Center</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Blog</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Help Center</h2>

                <Footer.LinkGroup col>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#"> Discord Server</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Twitter</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Facebook</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Contact Us</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
                <Footer.LinkGroup col>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#"> Privacy Policy</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Licensing</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
                <Footer.LinkGroup col>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#"> iOS</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Android</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">Windows</Footer.Link>
                  </div>
                  <div className="mb-4 text-gray-300">
                    <Footer.Link href="#">MacOS</Footer.Link>
                  </div>
                </Footer.LinkGroup>
              </div>
            </div>
            <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              {/* className="text-gray-300" */}
              <Footer.Copyright href="#" by="Flowbite™" year={2022} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                {/* className="text-gray-400 hover:text-white" */}
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      ),
    },
  ];
  return <DemoPage examples={examples} />;
};
export default FooterPage;
