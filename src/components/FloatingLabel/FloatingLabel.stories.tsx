import type {FloatingLabelProps} from "~/src/components/FloatingLabel/FloatingLabel";
import { FloatingLabel } from './FloatingLabel';
import type {Meta, Story} from "@storybook/react";


export default {
    title: 'Components/FloatingLabel',
    component: FloatingLabel,
} as Meta;

const Template: Story<FloatingLabelProps> = (args) => <FloatingLabel {...args} />;

export const Default = Template.bind({})
Default.storyName = 'Default label';
Default.args = {
    /*to be replaced with the actual args which will be a placeholder, boolean and value*/
    color: "success"
};
