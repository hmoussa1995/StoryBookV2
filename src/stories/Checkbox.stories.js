import { IsiCheckbox } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiCheckbox',
    component: IsiCheckbox,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}},
        handleChange: { action: 'handleChange' },
    }
}


const Template = args => <IsiCheckbox {...args} />;

export const Checkbox = Template.bind({})
Checkbox.args = {
    label:'I confirm',
    disabled:false,
    checked:false,
    theme:'light'
}