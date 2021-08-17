import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import PlayStore from '../../images/play-store.png';
import AppStore from '../../images/app-store.png';
import {Form,Button} from 'react-bootstrap';


const Contactus = () => {
    return (
      <section id="contactus" className="multi-bg-example">
      <Container>
        
        <Row className="contactus-wrapper hdngone">
              
          <Col xs={12} sm={12} md={6} lg={6}>
            <Row className="header-txt" >
           <h1>Get in touch</h1>
            
              <div className="contactus-wrapper__info">
                <p className="contactus-wrapper__info-text">
                  {'Feel Like Contacting Us? Submit Your Questions Here & We will Get To You As Soon As Possible '}
                </p>
              </div>
              </Row>
          <Row>
            <Col xs={4} sm={4} md={2} lg={2} >    
           <button className="socialbtn"></button>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2} >    
           <button className="socialbtn"></button>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2} >    
           <button className="socialbtn"></button>
            </Col>
          </Row>
          </Col>
          

          <Col xs={12} sm={12} md={6} lg={6} >
          <div className="contactus-wrapper-form">
          <h2>Send us a message</h2>
          <Form className="contactus-wrapper-form-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Name</Form.Label>
              <Form.Control type="email"  size="sm" className="input-field"/>

             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
              <Form.Control type="email"  size="sm" className="input-field"/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Contact No</Form.Label>
              <Form.Control type="email"  size="sm" className="input-field"/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Subject</Form.Label>
              <Form.Control type="text"  size="sm" className="input-field" />
             </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text"  size="sm" className="input-field"/>
              </Form.Group>
             
              
              <Form.Group  className="mb-3">
             
              <Button type="submit" className="submitbtn">Send</Button>
          
              </Form.Group>
            
               </Form>
          </div>
          </Col>
        </Row>
        <img alt="" src={Lot} width="50" height="50" className="bg-img"/>


      </Container>
     
    </section>
)
}

export default Contactus