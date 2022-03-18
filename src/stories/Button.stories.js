// import Button from "../components/Button";
import { IsiButton } from '@hmoussa1995/react-button-lib-github';
// import { AwesomeButton } from "react-awesome-button";
export default {
    title: 'IsiButton',
    component: IsiButton,
    argTypes: {
        handleClick: { action: 'handleClick' },
        size: { control: { type: "select", options: ["large", "default", "small", "xsmall"] }},
        theme: {control: { type: "select", options: ["light", "dark"]}},
        children:''
        }
}

const Template = (args) => <IsiButton {...args} />;

export const SolidHighContrast = Template.bind({})
SolidHighContrast.args = {
    id:'solidButton',
    variant:'Solid-High-Contrast',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
    children:'Solid High Contrast'
}
export const SolidLowContrast = Template.bind({})
SolidLowContrast.args = {
    id:'solidButton',
    variant:'Solid-Low-Contrast',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
    children:'Solid Low Contrast'
}

export const Outline = Template.bind({})
Outline.args = {
    id:'solidButton',
    variant:'Outline',
    label:'Outline',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
    children:'Outline'
}

export const Ghost = Template.bind({})
Ghost.args = {
    id:'solidButton',
    variant:'Ghost',
    label:'Ghost',
    size:'large',
    theme:'light',
    hasIcon: true,
    disabled:false,
    children:'Ghost'
}