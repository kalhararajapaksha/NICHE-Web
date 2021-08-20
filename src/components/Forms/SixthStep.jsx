import React, {useContext} from 'react';
import { Button,TextField,Checkbox } from '@material-ui/core';
import {multiStepContext} from '../../StepContext'

export default function SixthStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        <div>
            <h1>Thank you</h1>
            <h4>Welcome To The Team</h4>
            <h4>We Look Forward To Work With You</h4>
            <p>We Are Teaming With The Best, To Offer Our Clients And App Users The Most Soothing Online Shopping Experience.</p>
             <Button variant="contained" color="secondary" onClick={()=>setStep(5)}>Back</Button>
            
            
        </div>
    )
}
