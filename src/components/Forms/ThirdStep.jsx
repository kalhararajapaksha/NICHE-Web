import React,{useContext} from 'react';
import { Button,TextField } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function ThirdStep() {
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext);
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <div>
             <div>
            <TextField label="volume" value={userData['volume']} onChange={(e)=>setUserData({...userData,"volume":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <RadioGroup aria-label="gender" name="gender1" value={userData['gender']} onChange={(e)=>setUserData({...userData,"gender":e.target.value})} >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          
            </RadioGroup>
            </div>
            
           
            
            <div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(2)}>Back</Button>
            <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
            </div>
        </div>
    )
}
