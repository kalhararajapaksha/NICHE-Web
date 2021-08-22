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
                <RadioGroup aria-label="DeliveryMethod" name="DeliveryMethod" value={userData['DeliveryMethod']} onChange={(e)=>setUserData({...userData,"DeliveryMethod":e.target.value})} >
                <FormControlLabel value="SrilankaPost" control={<Radio />} label="Sri Lanka Post (Standard)" />
                <FormControlLabel value="ThirdPartyCourier" control={<Radio />} label="Third Party Courier" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </div>
                </Row>
                <Row>
                <h6>Volume Of Sales Per Month</h6>
                <div>
                <Form.Group className="mb-3" controlId="formVolume">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Volume" name="Volume" />
                </Form.Group>
                </div>
                </Row>
                <Row>
                    <Col>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Ready-To-Wear"  checked={userData['checkedL']} onChange={(e)=>setUserData({...userData,"checkedL":e.target.checked})} value={userData['checkedL']} name="Ready-To-Wear" margin="normal" variant="outlined" color="secondary" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Customised"  checked={userData['checkedM']} onChange={(e)=>setUserData({...userData,"checkedM":e.target.checked})} value={userData['checkedM']} name="Customised" margin="normal" variant="outlined" color="secondary" />
                    </div>
                    </Col>
                    <Col>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Pre-Order"  checked={userData['checkedN']} onChange={(e)=>setUserData({...userData,"checkedN":e.target.checked})} value={userData['checkedN']} name="Pre-Order" margin="normal" variant="outlined" color="secondary" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Other"  checked={userData['checkedO']} onChange={(e)=>setUserData({...userData,"checkedO":e.target.checked})} value={userData['checkedO']} name="Other" margin="normal" variant="outlined" color="secondary" />
                    </div>
                    </Col>
                </Row>
       
         

            </Container>
        </section>
    )
}
