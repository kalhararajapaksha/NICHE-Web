import React,{useContext} from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

export default function SecondStep() {
   
    return (
        <section>
            <Container>
                <Row>
                <Form.Group className="mb-3" controlId="formBrandName">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Brand Name" name="Brand Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="FirstName"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContactName">
                <Form.Label>Contact Name</Form.Label>
                <Form.Control type="text" placeholder="Contact Name" name="ContactName" />
                </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formContactNo">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="text" placeholder="Contact No" name="ContactNo" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPostalAddress1">
                        <Form.Label>Postal Address1</Form.Label>
                        <Form.Control type="text" placeholder="PostalAddress1" name="PostalAddress1"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formAlternateContactNo">
                        <Form.Label>Alternate Contact No.</Form.Label>
                        <Form.Control type="text" placeholder="Alternate Contact No" name="AltrContactNo" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPostalAddress2">
                        <Form.Label>Postal Address2</Form.Label>
                        <Form.Control type="text" placeholder="Postal Address2" name="PostalAddress2" />
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
