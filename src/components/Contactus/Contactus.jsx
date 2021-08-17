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
              
          <Col md={6} sm={12}>
            <Row>
            <Title title="GET IN TOUCH" />
            
              <div className="contactus-wrapper__info">
                <p className="contactus-wrapper__info-text">
                  {'Feel Like Contacting Us? Submit Your Questions Here & We will Get To You As Soon As Possible '}
                </p>
              </div>
              </Row>
          <Row>
            <Col >    
            <img alt="" src={AppStore} width="200" height="50" className="download-btn"/>
            </Col>
            <Col>    
           <img alt="" src={PlayStore} width="200" height="50" className="download-btn"/>
            </Col>
          </Row>
          </Col>
          

          <Col md={6} sm={12}>
          <div className="contactus-wrapper-form">
          <Title title="Send Us A Message" />
          <Form className="contactus-wrapper-form-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size="sm" />

             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size="sm"/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Contact No</Form.Label>
              <Form.Control type="email" placeholder="Enter email" size="sm"/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter email" size="sm" />
             </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Password" size="sm"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              
              <Form.Group  className="mb-3">
             
              <Button type="submit">Sign in</Button>
          
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