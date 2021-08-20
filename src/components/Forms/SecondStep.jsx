import React,{useContext} from 'react'
import { Button,TextField } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';

export default function SecondStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        <div>
             <div>
            <TextField label="Email" value={userData['email']} onChange={(e)=>setUserData({...userData,"email":e.target.value})} margin="normal" variant="filled" color="secondary" />
            </div>
            
            <div>
            <TextField label="Postal Address1" value={userData['addressline1']} onChange={(e)=>setUserData({...userData,"addressline1":e.target.value})} margin="normal" variant="filled" color="secondary" />
            </div>
            
            <div>
            <TextField label="Postal Address2" value={userData['addressline2']} onChange={(e)=>setUserData({...userData,"addressline2":e.target.value})} margin="normal" variant="filled" color="secondary" />
            </div>
            
            <div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</Button>
            <Button variant="contained" color="primary" onClick={()=>setStep(3)}>Next</Button>
            </div>
            
        </div>
    )
}
