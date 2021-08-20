import React, {useContext} from 'react';
import { Button,TextField,Checkbox } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';

export default function FourthStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        <div>
            
            <Button variant="contained" color="secondary" onClick={()=>setStep(3)}>Back</Button>
            <Button variant="contained" color="primary" onClick={()=>setStep(5)}>Next</Button>
        </div>
    )
}
