import React,{useContext} from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {multiStepContext} from '../../StepContext';

export default function SecondStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    const [value, setValue] = React.useState('Mr');
   
    return (
        <section>
            <Container>
            <div>
              <h1 className="title-1">Fill the form</h1>
            </div>
                <Row>
                <Form.Label>Title</Form.Label>

                <div>
                <RadioGroup aria-label="Title" name="Title" value={userData['Title']} onChange={(e)=>setUserData({...userData,"Title":e.target.value})} >
                <FormControlLabel value="Mr" control={<Radio />} label="Mr" />
                <FormControlLabel value="Mrs" control={<Radio />} label="Mrs" />
                <FormControlLabel value="Miss" control={<Radio />} label="Miss" />
                </RadioGroup>
                </div>
                </Row>

                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name="FirstName"/>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" name="LastName"/>
                    </Form.Group>
                </Col>

                    <Form.Group className="mb-3" controlId="formBrandName">
                        <Form.Label>Brand Name</Form.Label>
                        <Form.Control type="text" placeholder="Brand Name" name="Brand Name" />
                    </Form.Group>

                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formContactNo">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="text" placeholder="Contact No" name="ContactNo" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
           </Container>              
        </section>
    )
}
