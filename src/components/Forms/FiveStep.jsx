import React, {useContext} from 'react';
import { Button,TextField,Checkbox} from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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
          
            <h6>Portfolio</h6>
            <Row>
            <Form.Group className="mb-3" controlId="formSocialMedia">
            <Form.Label>Social Media: (Instagram/Facebook)</Form.Label>
            <Form.Control type="text" placeholder="Instagram/Facebook" name="Instagram/Facebook"/>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" controlId="url">
            <Form.Label>Attach brand portfolio, brand website or social media URL here</Form.Label>
            <Form.Control type="text" placeholder="URL" name="URL"/>
            </Form.Group>
            </Row>
            <Form.Group controlId="pdf" className="mb-3">
            <Form.Label>Attach pdf</Form.Label>
            <Form.Control type="file" size="sm" />
            </Form.Group>
            <Row className="mt-5">
                <Col>
                    <Button variant="contained" color="primary"  type="submit" disabled={state.submitting}>Submit</Button>
                </Col>
            </Row>
            

         
            
            </Container>

        </section>
        

    )
}
