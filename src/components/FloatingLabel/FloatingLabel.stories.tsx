import type {FloatingLabelProps} from "~/src/components/FloatingLabel/FloatingLabel";
import { FloatingLabel } from './FloatingLabel';
import type {Meta, Story} from "@storybook/react";


export default {
    title: 'Components/FloatingLabel',
    component: FloatingLabel,
} as Meta;

const Template: Story<FloatingLabelProps> = (args) => <FloatingLabel {...args} />;

export const FilledSuccess = Template.bind({})
FilledSuccess.storyName = 'Filled success'
FilledSuccess.args = {
    color: "success",
    buttonStyle: "filled",
    label: "Label"
}
export const OutlinedSuccess = Template.bind({})
OutlinedSuccess.storyName = 'Outlined success'
OutlinedSuccess.args = {
    color: "success",
    buttonStyle: "outlined",
    label: "Label"
}
export const StandardSuccess = Template.bind({})
StandardSuccess.storyName = 'Standard success'
StandardSuccess.args = {
    color: "success",
    buttonStyle: "standard",
    label: "Label"
}
export const FilledError = Template.bind({})
FilledError.storyName = 'Filled Error '
FilledError.args = {
    color: "failure",
    buttonStyle: "filled",
    label: "Label"
}
export const OutlinedError = Template.bind({})
OutlinedError.storyName = 'Outlined Error'
OutlinedError.args = {
    color: "failure",
    buttonStyle: "outlined",
    label: "Label"
}
export const StandardError = Template.bind({})
StandardError.storyName = 'Standard Error'
StandardError.args = {
    color: "failure",
    buttonStyle: "standard",
    label: "Label"
}
