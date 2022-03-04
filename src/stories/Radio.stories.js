import { IsiRadio, IsiRadioGroup } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiRadio',
    component: IsiRadioGroup,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}},
        row: {control: { type: "select", options: [true,false]}}
    }
}


const TemplateRadioGroup = args => <IsiRadioGroup {...args} >
    <IsiRadio label="Male" id="test1"/>
    <IsiRadio label="Female" id="test2"/>
    <IsiRadio label="Other" id="test3"/>
</IsiRadioGroup>;

// remove below code to go back to original
const TemplateRadio = args => (
    <>
    <IsiRadio name="qwe" label="Male" id="test1"/>
    </>
);
// till here

export const RadioGroup = TemplateRadioGroup.bind({})
RadioGroup.args = {
    name:'test',
    theme:'light',
    row:true
}

// remove below code to go back to original
export const Radio = TemplateRadio.bind({})
Radio.args = {
    name:'test',
    theme:'light'
}
// till here