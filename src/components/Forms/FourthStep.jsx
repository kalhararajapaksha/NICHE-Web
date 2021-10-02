import React, {useContext} from 'react';
import { Button,TextField,Checkbox} from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

export default function FourthStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    const [value, setValue] = React.useState('SrilankaPost');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <section>
            <Container>
                <Row>
           
  
                <h6>Delivery Method Used By The Brand To Dispatch Orders?</h6>
                <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Sri Lankan Post"  labelPlacement="end"  checked={userData['checkedS']} onChange={(e)=>setUserData({...userData,"checkedS":e.target.checked})} value={userData['checkedS']} name="SriLankanPost" margin="normal" variant="outlined" />
                </div>
                <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Aramex"  labelPlacement="end"  checked={userData['checkedO']} onChange={(e)=>setUserData({...userData,"checkedO":e.target.checked})} value={userData['checkedO']} name="Aramex" margin="normal" variant="outlined" />
                </div>
                <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Certis Lanka"  labelPlacement="end"  checked={userData['checkedP']} onChange={(e)=>setUserData({...userData,"checkedP":e.target.checked})} value={userData['checkedP']} name="CertisLanka" margin="normal" variant="outlined" />
                </div>
                <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Grasshopper"  labelPlacement="end"  checked={userData['checkedQ']} onChange={(e)=>setUserData({...userData,"checkedQ":e.target.checked})} value={userData['checkedQ']} name="Grasshopper" margin="normal" variant="outlined" />
                </div>
                <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Other"  labelPlacement="end"  checked={userData['checkedR']} onChange={(e)=>setUserData({...userData,"checkedR":e.target.checked})} value={userData['checkedR']} name="Other" margin="normal" variant="outlined" />
                </div>
                <div>
                <h6>Average orders per month</h6>
                <RadioGroup aria-label="orders" name="orders" value={userData['orders']} onChange={(e)=>setUserData({...userData,"orders":e.target.value})} >
                <FormControlLabel value="0-10" control={<Radio />} label="0-10" />
                <FormControlLabel value="11-25" control={<Radio />} label="11-25" />
                <FormControlLabel value="26-65" control={<Radio />} label="26-65" />
                <FormControlLabel value="51-100" control={<Radio />} label="51-100" />
                <FormControlLabel value="other 100" control={<Radio />} label="Over 100" />
                </RadioGroup>
                </div>
                </Row>
                <Row>
               

                </Row>
 
       
         
            </Container>
        </section>
    )
}
