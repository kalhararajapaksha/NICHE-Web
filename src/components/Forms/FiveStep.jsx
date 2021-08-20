import React, {useContext} from 'react';
import { Button,TextField,Checkbox } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';

export default function FiveStep() {
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext);
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div>
            
            <Button variant="contained" color="secondary" onClick={()=>setStep(4)}>Back</Button>
            <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
        </div>
    )
}
