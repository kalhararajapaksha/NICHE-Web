import React, {useContext} from 'react';
import { Button,TextField,Checkbox} from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function FourthStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    const [value, setValue] = React.useState('SrilankaPost');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <div>
            <h6>Delivery Method Used By The Brand To Dispatch Orders?</h6>
            <div>
            <RadioGroup aria-label="DeliveryMethod" name="DeliveryMethod" value={userData['DeliveryMethod']} onChange={(e)=>setUserData({...userData,"DeliveryMethod":e.target.value})} >
            <FormControlLabel value="SrilankaPost" control={<Radio />} label="Sri Lanka Post (Standard)" />
            <FormControlLabel value="ThirdPartyCourier" control={<Radio />} label="Third Party Courier" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </div>
            <h6>Volume Of Sales Per Month</h6>
            <TextField  value={userData['volume']} onChange={(e)=>setUserData({...userData,"volume":e.target.value})} margin="normal" variant="filled" color="secondary" />
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Ready-To-Wear"  checked={userData['checkedL']} onChange={(e)=>setUserData({...userData,"checkedL":e.target.checked})} name="Ready-To-Wear" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Customised"  checked={userData['checkedM']} onChange={(e)=>setUserData({...userData,"checkedM":e.target.checked})} name="Customised" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Pre-Order"  checked={userData['checkedN']} onChange={(e)=>setUserData({...userData,"checkedN":e.target.checked})} name="Pre-Order" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Other"  checked={userData['checkedO']} onChange={(e)=>setUserData({...userData,"checkedO":e.target.checked})} name="Other" margin="normal" variant="outlined" color="secondary" />
            </div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(3)}>Back</Button>
            <Button variant="contained" color="primary" onClick={()=>setStep(5)}>Next</Button>
        </div>
    )
}
