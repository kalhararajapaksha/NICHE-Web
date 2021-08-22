import React, {useContext} from 'react';
import { Button,TextField,Checkbox} from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container, Row, Col } from 'react-bootstrap';

export default function FiveStep() {
    const {setStep,userData,setUserData,submitData,state}=useContext(multiStepContext);
    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <section>
        <Container>
            <Row>
            <div>
            <h6>Do You Offer Free Shipping On All Orders?</h6>
            </div>
            <div>
            <RadioGroup aria-label="Free Shipping" name="FreeShipping" value={userData['FreeShipping']} onChange={(e)=>setUserData({...userData,"FreeShipping":e.target.value})} >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />      
            </RadioGroup>
            </div>
            </Row>
            <Row>
            <h6>How Did You Hear About Us?</h6>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Instagram"  checked={userData['checkedP']} onChange={(e)=>setUserData({...userData,"checkedP":e.target.checked})} value={userData['checkedP']} name="Instagram" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Facebook"  checked={userData['checkedQ']} onChange={(e)=>setUserData({...userData,"checkedQ":e.target.checked})} value={userData['checkedQ']} name="Facebook" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Word Of Mouth"  checked={userData['checkedR']} onChange={(e)=>setUserData({...userData,"checkedR":e.target.checked})} value={userData['checkedR']} name="WordOfMouth" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Friend"  checked={userData['checkedS']} onChange={(e)=>setUserData({...userData,"checkedS":e.target.checked})} value={userData['checkedS']} name="Friend" margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <FormControlLabel  control={<Checkbox color="secondary" />} label="Other"  checked={userData['checkedT']} onChange={(e)=>setUserData({...userData,"checkedT":e.target.checked})} value={userData['checkedT']} name="Other" margin="normal" variant="outlined" color="secondary" />
            </div>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                <Button variant="contained" color="primary"  type="submit" disabled={state.submitting}>Submit</Button>
                </Col>
                <Col>
                </Col>
            </Row>
            

         
            
            </Container>

        </section>
        

    )
}
