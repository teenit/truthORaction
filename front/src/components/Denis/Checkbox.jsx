import React from "react";
const Checkbox = () =>{
    <div>
    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    </div>
}