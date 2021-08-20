import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/flower.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import {Form,Button} from 'react-bootstrap';
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";


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
           <button className="socialbtn"><TiSocialFacebook className="icon" /></button>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2} >    
           <button className="socialbtn"><AiFillInstagram className="icon" /></button>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2} >    
           <button className="socialbtn"><AiOutlineTwitter className="icon" /></button>
            </Col>
          </Row>
          </Col>
          

          <Col xs={12} sm={12} md={6} lg={6} >
          <div className="contactus-wrapper-form">
          <h2>Send us a message <FaPaperPlane className="planeicon"/></h2>
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
             
              <Button type="submit" className="submitbtn"><FaPaperPlane className="planeiconbtn"/>Send</Button>
          
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