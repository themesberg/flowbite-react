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
      title: 'Dismissable drawer',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('dismissible')}>Toggle drawer</Button>
          <Drawer dismissible show={openDrawer === 'dismissible'} onClose={() => setOpenDrawer(undefined)}>
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
      title: 'Pop-up drawer',
      code: (
        <>
          <Button onClick={() => setOpenDrawer('pop-up')}>Toggle drawer</Button>
          <Drawer show={openDrawer === 'pop-up'} onClose={() => setOpenDrawer(undefined)}>
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
              <Select defaultValue="center" onChange={(event) => setDrawerPlacement(event.target.value)}>
                <option value="center">Center</option>
                <option value="top-left">Top left</option>
                <option value="top-center">Top center</option>
                <option value="top-right">Top right</option>
                <option value="center-left">Center left</option>
                <option value="center-right">Center right</option>
                <option value="bottom-right">Bottom right</option>
                <option value="bottom-center">Bottom center</option>
                <option value="bottom-left">Bottom left</option>
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
  ];

  return <DemoPage examples={examples} />;
};

export default DrawerPage;
