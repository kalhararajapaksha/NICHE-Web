import React, {useContext} from 'react'
import { Button,TextField,Checkbox } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';

export default function FirstStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
     
   /* State={
        Colornames:{
            kasun:false,
        }
    }
    chkclick=(e)=>{
        var{name,checked}
    }*/
    return (
        <div className="formsize">
            <div>
            <TextField label="First name" value={userData['firstname']} onChange={(e)=>setUserData({...userData,"firstname":e.target.value})} margin="normal" variant="filled" color="secondary"  />
            </div>
            
            <div>
            <TextField label="Brand Name" value={userData['brandname']} onChange={(e)=>setUserData({...userData,"brandname":e.target.value})} margin="normal" variant="filled" color="secondary" />
            </div>
            
            <div>
            <TextField label="Contact No" value={userData['contactno']} onChange={(e)=>setUserData({...userData,"contactno":e.target.value})} margin="normal" variant="filled" color="secondary" />
            </div>
            <div>
            <Checkbox label="check"  checked={userData['checkedA']} onChange={(e)=>setUserData({...userData,"checkedA":e.target.checked})} name="kasun" margin="normal" variant="outlined" color="secondary" />
            </div>
            
            <div>
            <Button variant="contained" color="primary" onClick={()=>setStep(2)}>Next</Button>
            </div>
            
        </div>
    )
}
