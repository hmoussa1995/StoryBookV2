import { IsiRadio, IsiRadioGroup } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiRadio',
    component: IsiRadioGroup,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}}
    }
}


const Template = args => <IsiRadioGroup {...args} >
    <IsiRadio label="Male"/>
    <IsiRadio label="Female"/>
</IsiRadioGroup>;

export const Radio = Template.bind({})
Radio.args = {
    name:'test',
    theme:'light'
}
// export const RadioMain1 = Template.bind({})
// RadioMain1.args = {
//     id:'radio1',
//     label:'Male',
//     name:'test',
//     theme:'light'
// }

// export const RadioMain2 = Template.bind({})
// RadioMain2.args = {
//     id:'radio2',
//     label:'Female',
//     name:'test',
//     theme:'light'
// }