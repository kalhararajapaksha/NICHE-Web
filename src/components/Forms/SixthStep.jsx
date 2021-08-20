import React, {useContext} from 'react';
import { Button,TextField,Checkbox } from '@material-ui/core';
import {multiStepContext} from '../../StepContext'

export default function SixthStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        <div>
            <h1>Thank you</h1>
             <Button variant="contained" color="secondary" onClick={()=>setStep(5)}>Back</Button>
            
            
        </div>
    )
}
