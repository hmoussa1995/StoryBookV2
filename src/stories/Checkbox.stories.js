import { IsiCheckbox, IsiCheckboxGroup } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiCheckbox',
    component: IsiCheckboxGroup,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}},
    }
}


const Template = args => <IsiCheckboxGroup {...args} >
    <IsiCheckbox label="I Confirm"/>
    <IsiCheckbox label="I Agree"/>
    <IsiCheckbox label="I have read the terms and conditions"/>
</IsiCheckboxGroup>;

export const Checkbox = Template.bind({})
Checkbox.args = {
    checked:false,
    theme:'light'
}