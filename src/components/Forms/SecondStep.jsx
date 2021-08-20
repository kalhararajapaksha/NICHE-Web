import React,{useContext} from 'react'
import { Button,TextField } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';

export default function SecondStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    return (
        <div>
    
            <TextField label="Brand Name" value={userData['brandname']} onChange={(e)=>setUserData({...userData,"brandname":e.target.value})} margin="normal" variant="filled" color="secondary" />
   
            <TextField label="First name" value={userData['firstname']} onChange={(e)=>setUserData({...userData,"firstname":e.target.value})} margin="normal" variant="filled" color="secondary"  />

            <TextField label="Contact Name" value={userData['contactname']} onChange={(e)=>setUserData({...userData,"contactname":e.target.value})} margin="normal" variant="filled" color="secondary" />

            <TextField label="Contact No" value={userData['contactno1']} onChange={(e)=>setUserData({...userData,"contactno1":e.target.value})} margin="normal" variant="filled" color="secondary" />

            <TextField label="Alternate Contact No." value={userData['contactno2']} onChange={(e)=>setUserData({...userData,"contactno2":e.target.value})} margin="normal" variant="filled" color="secondary" />
        
            <TextField label="Postal Address1" value={userData['addressline1']} onChange={(e)=>setUserData({...userData,"addressline1":e.target.value})} margin="normal" variant="filled" color="secondary" />
          
            <TextField label="Postal Address2" value={userData['addressline2']} onChange={(e)=>setUserData({...userData,"addressline2":e.target.value})} margin="normal" variant="filled" color="secondary" />

            <TextField label="Email" value={userData['email']} onChange={(e)=>setUserData({...userData,"email":e.target.value})} margin="normal" variant="filled" color="secondary" />

            
            
            <div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</Button>
            <Button variant="contained" color="primary" onClick={()=>setStep(3)}>Next</Button>
            </div>
            
        </div>
    )
}
