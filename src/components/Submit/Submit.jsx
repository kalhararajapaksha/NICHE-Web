import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import {Form} from 'react-bootstrap';

const Submit = () => {
    return (
      <section id="submit">
      <Container>
        <div className="section-div">
      <Row className="submit-wrapper__info">
      <Form className="sub">
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Row className="email-heading">
           <h1>Don't fall behind</h1>
         </Row>
         
     <Row className="email-subheading">
      <h2 >Get Exclusive Updates And Deals</h2>
      </Row>
      <Row className="input">
      <Col xs={8} sm={8} md={8} lg={8} >
      <Form.Control type="email" placeholder="Enter your email"  className="input-email"/>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} >
      <button className="submitbtn">Sign Me Up</button>
      </Col>
      </Row> 
      <Row className="small-txt">
      <Form.Text className="text-muted">
      *Be The First To Sell And Get Additional Benefits And Tools. By Entering Your Email Address, You Accept Marketing Emails From NICHE*
      </Form.Text>
      </Row>
      </Form.Group>
      </Form>
      </Row>
     
      </div>
      </Container>
    </section>
)
}

export default Submit