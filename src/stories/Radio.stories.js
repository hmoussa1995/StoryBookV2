import { IsiRadio, IsiRadioGroup } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiRadio',
    component: IsiRadioGroup,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}},
        orientation: {control: { type: "select", options: ["horizontal", "vertical"]}}
    }
}


const TemplateRadioGroup = args => <IsiRadioGroup {...args} >
    <IsiRadio label="Male"/>
    <IsiRadio label="Female"/>
    <IsiRadio label="Other"/>
</IsiRadioGroup>;

// remove below code to go back to original
const TemplateRadio = args => (
    <>
    <IsiRadio name="test" label="Male"/>
    <IsiRadio name="test" label="Female"/>
    <IsiRadio name="test" label="Other"/>
    </>
);
// till here

export const RadioGroup = TemplateRadioGroup.bind({})
RadioGroup.args = {
    name:'test',
    theme:'light',
    orientation:'vertical'
}

// remove below code to go back to original
export const Radio = TemplateRadio.bind({})
Radio.args = {
    name:'test',
    theme:'light'
}
// till here