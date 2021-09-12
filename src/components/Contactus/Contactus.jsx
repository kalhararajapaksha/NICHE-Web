import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lot from '../../images/flower.png';
import {Form,Button} from 'react-bootstrap';
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";


const Contactus = () => {
    return (
      <section id="contactus">
        <Container>

          <Row>
            <Col lg={6} className="d-flex align-items-center">
              <div>
                <div className="header-txt" >
                  <h1>Get in touch</h1>
                  <div>
                    <p>
                      {'Feel Like Contacting Us? Submit Your Questions Here & We will Get To You As Soon As Possible '}
                    </p>
                  </div>
                </div>
                <div>
                  <button className="socialbtn"><TiSocialFacebook className="icon" /></button>
                  <button className="socialbtn ml-3"><AiFillInstagram className="icon" /></button>
                  <button className="socialbtn pl-3"><AiOutlineTwitter className="icon" /></button>
                </div>
              </div>
            </Col>
            <Col lg={6} >
              <div className="contactus-wrapper-form">
                <h2><FaPaperPlane className="planeicon"/> Send us a message </h2>
                <Form className="contactus-wrapper-form-form mt-5">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                    <Form.Control type="email"  size="sm" className="input-field" placeholder="Enter Name"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  size="sm" className="input-field" placeholder="Enter Email"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="email"  size="sm" className="input-field" placeholder="Enter Contact No"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"  size="sm" className="input-field" placeholder="Enter Subject"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text"  size="sm" className="input-field" placeholder="Enter Message"/>
                  </Form.Group>
                  <Form.Group  className="mb-3">
                    <Button type="submit" className="btn btn-primary">Send</Button>
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