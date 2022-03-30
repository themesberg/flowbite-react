import { FC, useState } from 'react';
import { HiOutlineExclamationCircle, HiX } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button, Checkbox, Label, Modal, TextInput } from '../components';

const ModalPage: FC = () => {
  const [openModal, setOpenModal] = useState<number | undefined>();

  const examples: CodeExample[] = [
    {
      title: 'Default modal',
      code: (
        <div>
          <Button onClick={() => setOpenModal(0)}>Toggle modal</Button>
          <Modal show={openModal === 0} onClose={() => setOpenModal(undefined)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its
                citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
              <Button color="alternative" onClick={() => setOpenModal(undefined)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ),
    },
    {
      title: 'Pop-up modal',
      code: (
        <div>
          <Button onClick={() => setOpenModal(1)}>Toggle modal</Button>
          <Modal show={openModal === 1} size="md" popup onClose={() => setOpenModal(undefined)}>
            <Modal.Header />
            <Modal.Body className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                onClick={() => setOpenModal(undefined)}
                type="button"
              >
                {"Yes, I'm sure"}
              </button>
              <button
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setOpenModal(undefined)}
                type="button"
              >
                No, cancel
              </button>
            </Modal.Body>
          </Modal>
        </div>
      ),
    },
    {
      title: 'Form elements',
      code: (
        <div>
          <Button onClick={() => setOpenModal(2)}>Toggle modal</Button>
          <Modal show={openModal === 2} size="md" popup onClose={() => setOpenModal(undefined)}>
            <Modal.Header />
            <Modal.Body className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <div>
                <Label className="mb-2 block" htmlFor="email">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  className="dark:border-gray-500 dark:bg-gray-600"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="password">
                  Your password
                </Label>
                <TextInput id="password" className="dark:border-gray-500 dark:bg-gray-600" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" className="dark:border-gray-500 dark:bg-gray-600" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="#/modal" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                  Lost Password?
                </a>
              </div>
              <Button className="w-full">Log in to your account</Button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{' '}
                <a href="#/modal" className="text-blue-700 hover:underline dark:text-blue-500">
                  Create account
                </a>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ModalPage;
