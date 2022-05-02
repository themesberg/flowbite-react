import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story = () => (
  <Footer>
    <Footer.Copyright href="#" createby="Flowbite™" year={2022} />
    <Footer.LinkGroup className=" mt-3  flex-wrap items-center text-sm sm:mt-0">
      <Footer.Link href="#">About</Footer.Link>
      <Footer.Link href="#">Privacy Policy</Footer.Link>
      <Footer.Link href="#">Licensing</Footer.Link>
      <Footer.Link href="#">Contact</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
);

export const DefaultFooter = Template.bind({});
DefaultFooter.storyName = 'Derfault';
DefaultFooter.args = {};
