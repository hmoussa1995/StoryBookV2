import { IsiCheckbox, IsiCheckboxGroup } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiCheckbox',
    component: IsiCheckboxGroup,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}},
        orientation: {control: { type: "select", options: ["horizontal", "vertical"]}}
    }
}


const Template = args => <IsiCheckboxGroup {...args} >
    <IsiCheckbox label="Apples"/>
    <IsiCheckbox label="Oranges"/>
    <IsiCheckbox label="Bananas"/>
</IsiCheckboxGroup>;

export const Checkbox = Template.bind({})
Checkbox.args = {
    checked:false,
    theme:'light',
    orientation:'vertical'
}