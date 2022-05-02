import { Meta, Story } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <Modal.Header>Terms of Service</Modal.Header>
    <Modal.Body className="space-y-6">
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
        companies around the world are updating their terms of service agreements to comply.
      </p>
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
        ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
        possible of high-risk data breaches that could personally affect them.
      </p>
    </Modal.Body>
    <Modal.Footer></Modal.Footer>
  </Modal>
);

export const DefaultModal = Template.bind({});
DefaultModal.storyName = 'Default';
DefaultModal.args = {
  show: true,
};
