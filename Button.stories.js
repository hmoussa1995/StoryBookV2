// import Button from "../components/Button";
//import { Button } from '@hmoussa1995/react-button-lib-github';
import { IsiButton } from '@intuitive/rcl';
// import { AwesomeButton } from "react-awesome-button";
export default {
    title: 'IsiButton',
    component: Button,
    argTypes: {
        handleClick: { action: 'handleClick' },
        size: { control: { type: "select", options: ["large", "default", "small", "xsmall"] }},
        theme: {control: { type: "select", options: ["light", "dark"]}}
    }
}

const Template = args => <IsiButton {...args} />;

export const SolidHighContrast = Template.bind({})
SolidHighContrast.args = {
    id:'solidButton',
    name:'Solid-High-Contrast',
    label:'Solid High Contrast',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
}
export const SolidLowContrast = Template.bind({})
SolidLowContrast.args = {
    id:'solidButton',
    name:'Solid-Low-Contrast',
    label:'Solid Low Contrast',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
}

export const Outline = Template.bind({})
Outline.args = {
    id:'solidButton',
    name:'Outline',
    label:'Outline',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
}

export const Ghost = Template.bind({})
Ghost.args = {
    id:'solidButton',
    name:'Ghost',
    label:'Ghost',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
}