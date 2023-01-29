import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';
import { TextInput } from '../TextInput';
import type { ModalProps } from './Modal';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    show: false,
  },
} as Meta;

const Template: Story<ModalProps> = ({ children, show, ...rest }): JSX.Element => {
  return (
    <Modal show={show} onClose={action('handleModalCloseCallback')}>
      <Modal.Trigger>
        <Button>Toggle modal</Button>
      </Modal.Trigger>
      <Modal.Content {...rest}>{children}</Modal.Content>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
            companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
            soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Close>
          <Button>I accept</Button>
        </Modal.Close>
        <Modal.Close>
          <Button color="gray">Decline</Button>
        </Modal.Close>
      </Modal.Footer>
    </>
  ),
};

export const InitialyOpened = Template.bind({});
InitialyOpened.args = {
  ...Default.args,
  show: true,
};

export const PopUp = Template.bind({});
PopUp.storyName = 'Pop-up modal';
PopUp.args = {
  children: (
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 text-gray-400 h-14 w-14 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <div className="flex justify-center gap-4">
          <Modal.Close>
            <Button color="failure">{"Yes, I'm sure"}</Button>
          </Modal.Close>
          <Modal.Close>
            <Button color="gray">No, cancel</Button>
          </Modal.Close>
        </div>
      </div>
    </Modal.Body>
  ),
};

export const FormElements = Template.bind({});
FormElements.args = {
  children: (
    <>
      <Modal.Header />
      <Modal.Body>
        <div className="px-6 pb-4 space-y-6 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <div>
            <div className="block mb-2">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" placeholder="name@company.com" required />
          </div>
          <div>
            <div className="block mb-2">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="/modal" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </div>
          <div className="w-full">
            <Button>Log in to your account</Button>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{' '}
            <a href="/modal" className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </a>
          </div>
        </div>
      </Modal.Body>
    </>
  ),
};
