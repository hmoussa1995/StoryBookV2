import { IsiCheckbox, IsiCheckboxGroup  } from '@hmoussa1995/react-button-lib-github';

export default {
    title: 'IsiCheckbox',
    component: IsiCheckboxGroup,
    argTypes: {
        theme: {control: { type: "select", options: ["light", "dark"]}},
        row: {control: { type: "select", options: [true,false]}}
    }
}


const Template = args => (
//     <div>
//   <span> <a href="https://codepen.io/juliangarnier/pen/krNqZO">See the Pen</a></span>
// <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
        <IsiCheckboxGroup {...args} >
            <IsiCheckbox label="Apples"/>
            <IsiCheckbox label="Oranges"/>
            <IsiCheckbox label="Bananas"/>
        </IsiCheckboxGroup>
    // </div>
)

export const Checkbox = Template.bind({})
Checkbox.args = {
    checked:false,
    theme:'light',
    row:true
}