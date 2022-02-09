// import Button from "../components/Button";

import { IsiButton } from '@hmoussa1995/react-button-lib-github';
// import { AwesomeButton } from "react-awesome-button";
export default {
    title: 'AllButtons',
    component: IsiButton,
    argTypes: {
        handleClick: { action: 'handleClick' },
        size: { control: { type: "select", options: ["large", "default", "small", "xsmall"] }},
        theme: {control: { type: "select", options: ["light", "dark"]}}
    }
}

const TemplateLight = args => (
  <div className="main-container">
    <div className="all-solid-high-contrast" style={{marginBottom:40}}>
      <div className="default" style={{display:'flex', alignItems:'center', paddingBottom:20}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="default" style={{display:'flex', alignItems:'center', paddingBottom:20}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="default" style={{display:'flex', alignItems:'center', paddingBottom:20}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="default" style={{display:'flex', alignItems:'center'}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
    </div>
    <div className="all-solid-low-contrast" style={{marginBottom:40}}>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      
    </div>
    <div className="all-outline" style={{marginBottom:40}}>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      
    </div>
    <div className="all-ghost" style={{marginBottom:40}}>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="light"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
    </div>
</div>
);

// *******************************

const TemplateDark = args => (
  <div className="main-container">
    <div className="all-solid-high-contrast" style={{marginBottom:40}}>
      <div className="default" style={{display:'flex', alignItems:'center', paddingBottom:20}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton 
        id="solidButton"
        variant="Solid-High-Contrast"
        label="Solid High Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="default" style={{display:'flex', alignItems:'center', paddingBottom:20}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton 
        id="solidButton"
        variant="Solid-Low-Contrast"
        label="Solid Low Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="default" style={{display:'flex', alignItems:'center', paddingBottom:20}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        label="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="default" style={{display:'flex', alignItems:'center'}}>
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton style={{marginRight:10}}
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        label="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
    </div>
    <div className="all-solid-low-contrast" style={{marginBottom:40}}>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton 
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-High-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Solid-Low-Contrast"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      
    </div>
    <div className="all-outline" style={{marginBottom:40}}>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Outline"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
      
    </div>
    <div className="all-ghost" style={{marginBottom:40}}>
      <div className="large" style={{display:'flex', marginBottom:20, alignItems:'center'}}>
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="large"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="default"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="small"
      />
      <IsiButton
        id="solidButton"
        variant="Ghost"
        theme="dark"
        hasIcon={true}
        disabled={false}
        size="xsmall"
      />
      </div>
    </div>
</div>
);

export const AllButtonsLight = TemplateLight.bind({})

export const AllButtonsDark = TemplateDark.bind({})