import { IsiRadio } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'Radio',
    component: IsiRadio,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}}
    }
}


const Template = args => <IsiRadio {...args} />;

export const RadioMain1 = Template.bind({})
RadioMain1.args = {
    id:'radio1',
    label:'Male',
    name:'test',
    theme:'dark'
}

export const RadioMain2 = Template.bind({})
RadioMain2.args = {
    id:'radio2',
    label:'Female',
    name:'test',
    theme:'light'
}