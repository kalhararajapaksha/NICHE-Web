import React, {useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button,TextField,Checkbox } from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Title from '../Title/Title';

export default function FirstStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
     
    return (
        <div className="formsize">
            <Row>
                <Col>
                   <Title>BUILD YOUR BRAND,  </Title>
                   <Title>BUILD YOUR ONLINE PRESENCE,</Title>
                   <Title>BUILD YOUR STORE...</Title>
                </Col>
                <Col>
                <Title>Ayubowan</Title>
                <h4>Fill in the form & request invitation to sell with NICHE.</h4>
                <p>Focus on the things you love and let us handle the rest</p>
                <p>Your online business managed</p>
                <p>Be the first to join with NICHE and get extra merchant benefits</p>
                </Col>
            </Row>
          
            
            <div>
            <Button variant="contained" color="primary" onClick={()=>setStep(5)}>Continue</Button>
            </div>
            
        </div>
    )
}
