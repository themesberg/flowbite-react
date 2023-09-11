import type {FloatingLabelProps} from "~/src/components/FloatingLabel/FloatingLabel";
import { FloatingLabel } from './FloatingLabel';
import type {Meta, Story} from "@storybook/react";


export default {
    title: 'Components/FloatingLabel',
    component: FloatingLabel,
} as Meta;

const Template: Story<FloatingLabelProps> = (args) => <FloatingLabel {...args} />;

export const DefaultFilled = Template.bind({})
DefaultFilled.storyName = "Default Filled"
DefaultFilled.args = {
    buttonStyle: "filled",
    label: "Label"
}
export const DefaultOutlined = Template.bind({})
DefaultOutlined.storyName = "Default Outlined"
DefaultOutlined.args = {
    buttonStyle: "outlined",
    label: "Label"
}
export const DefaultStandard = Template.bind({})
DefaultStandard.storyName = "Default Standard"
DefaultStandard.args = {
    buttonStyle: "standard",
    label: "Label"
}

export const DisabledFilled = Template.bind({})
DisabledFilled.storyName = "Disabled Filled"
DisabledFilled.args = {
    buttonStyle: "filled",
    label: "Label",
    disabled: true
}
export const DisabledOutlined = Template.bind({})
DisabledOutlined.storyName = "Disabled Outlined"
DisabledOutlined.args = {
    buttonStyle: "outlined",
    label: "Label",
    disabled: true
}
export const DisabledStandard = Template.bind({})
DisabledStandard.storyName = "Disabled Standard"
DisabledStandard.args = {
    buttonStyle: "standard",
    label: "Label",
    disabled: true
}

export const FilledSuccess = Template.bind({})
FilledSuccess.storyName = 'Filled success'
FilledSuccess.args = {
    error: false,
    buttonStyle: "filled",
    label: "Label"
}
export const OutlinedSuccess = Template.bind({})
OutlinedSuccess.storyName = 'Outlined success'
OutlinedSuccess.args = {
    error: false,
    buttonStyle: "outlined",
    label: "Label"
}
export const StandardSuccess = Template.bind({})
StandardSuccess.storyName = 'Standard success'
StandardSuccess.args = {
    error: false,
    buttonStyle: "standard",
    label: "Label"
}
export const FilledError = Template.bind({})
FilledError.storyName = 'Filled Error '
FilledError.args = {
    error: true,
    buttonStyle: "filled",
    label: "Label"
}
export const OutlinedError = Template.bind({})
OutlinedError.storyName = 'Outlined Error'
OutlinedError.args = {
    error: true,
    buttonStyle: "outlined",
    label: "Label"
}
export const StandardError = Template.bind({})

StandardError.args = {
    error: true,
    buttonStyle: "standard",
    label: "Label"
}

export const SmallFilled = Template.bind({})
SmallFilled.storyName = "Small Filled"
SmallFilled.args = {
    buttonStyle: "filled",
    label: "Small Filled",
    sizing: "sm"
}
export const SmallOutlined = Template.bind({})
SmallOutlined.storyName = "Small Outlined"
SmallOutlined.args = {
    buttonStyle: "outlined",
    label: "Small Outlined",
    sizing: "sm"
}

export const SmallStandard = Template.bind({})
SmallStandard.storyName="Small Standard"
SmallStandard.args = {
    buttonStyle: "standard",
    label: "Small Standard",
    sizing: "sm"
}

export const HelperText = Template.bind({})
HelperText.storyName = "Helper Text"
HelperText.args = {
    buttonStyle: "filled",
    label: "Floating Helper",
    helperText: "Remember, contributions to this topic should follow our Community Guidelines."
}



