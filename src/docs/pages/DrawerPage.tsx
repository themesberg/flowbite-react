import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, Drawer } from '../../lib';
import { Checkbox } from '../../lib/components/Checkbox';
import { Label } from '../../lib/components/Label';
import { Select } from '../../lib/components/Select';
import { TextInput } from '../../lib/components/TextInput';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const DrawerPage: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<string | undefined>();
  const [drawerPlacement, setDrawerPlacement] = useState<string>('left');

  const examples: CodeExample[] = [
    {
      title: 'Default drawer',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('default')}>Toggle drawer</Button>
          <Drawer show={openDrawer === 'default'} onClose={() => setOpenDrawer(undefined)}>
            <Drawer.Header>Terms of Service</Drawer.Header>
            <Drawer.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its
                  citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                  meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                  users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
              </div>
            </Drawer.Body>
          </Drawer>
        </>
      ),
    },
    {
      title: 'Drawer Navigation',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('navigation')}>Show navigation</Button>
          <Drawer backdrop show={openDrawer === 'navigation'} onClose={() => setOpenDrawer(undefined)}>
            <Drawer.Header>Menu</Drawer.Header>
            <Drawer.Body>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">E-commerce</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      ></path>
                    </svg>
                  </button>
                  <ul id="dropdown-example" className="hidden space-y-2 py-2">
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Kanban</span>
                    <span className="ml-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
                    <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  </a>
                </li>
              </ul>
            </Drawer.Body>
          </Drawer>
        </>
      ),
    },
    {
      title: 'Backdrop drawer',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('backdrop')}>Toggle backdrop drawer</Button>
          <Drawer backdrop={true} show={openDrawer === 'backdrop'} onClose={() => setOpenDrawer(undefined)}>
            <Drawer.Header>Backdrop</Drawer.Header>
            <Drawer.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Incididunt cupidatat ut minim ea deserunt aute aliqua et adipisicing minim id. Amet esse dolore ipsum
                  nostrud irure nostrud ipsum. Velit irure anim occaecat duis deserunt do ut.
                </p>
              </div>
            </Drawer.Body>
          </Drawer>
        </>
      ),
    },
    {
      title: 'Form elements',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('form-elements')}>Toggle drawer</Button>
          <Drawer show={openDrawer === 'form-elements'} onClose={() => setOpenDrawer(undefined)}>
            <Drawer.Header />
            <Drawer.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput id="email" placeholder="name@company.com" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a href="/drawer" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button>Log in to your account</Button>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a href="/drawer" className="text-blue-700 hover:underline dark:text-blue-500">
                    Create account
                  </a>
                </div>
              </div>
            </Drawer.Body>
          </Drawer>
        </>
      ),
    },
    {
      title: 'Placement',
      code: (
        <>
          <div className="flex flex-wrap gap-4">
            <div className="w-40">
              <Select defaultValue="left" onChange={(event) => setDrawerPlacement(event.target.value)}>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </Select>
            </div>
            <Button onClick={() => setOpenDrawer('placement')}>Toggle drawer</Button>
          </div>
          <Drawer
            show={openDrawer === 'placement'}
            placement={drawerPlacement}
            onClose={() => setOpenDrawer(undefined)}
          >
            <Drawer.Header>Small drawer</Drawer.Header>
            <Drawer.Body>
              <div className="space-y-6 p-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its
                  citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                  meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                  users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
              </div>
            </Drawer.Body>
          </Drawer>
        </>
      ),
    },
    {
      title: 'Pop-up drawer',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('pop-up')}>Toggle drawer</Button>

          <Drawer placement={"right"} show={openDrawer === 'pop-up'} onClose={() => setOpenDrawer(undefined)}>
            <Drawer.Header />
            <Drawer.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => setOpenDrawer(undefined)}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenDrawer(undefined)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Drawer.Body>
          </Drawer>
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default DrawerPage;
