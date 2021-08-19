import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";

const Footer = () => {
    return (
      <section id="footer" className="multi-bg-example">
      <Container fluid>
        <div className="footer-div">
        
        <Row className="footer-wrapper footrdetails">
        
          <Col xs={12} sm={12} md={6} lg={6} >
            <Row className="footer-details">
            <h2>Reach us on</h2>
              <div className="footer-wrapper__info">
                <p className="footer-wrapper__info-text">
                  {'Niche Support:support@niche.lk'}
                </p>
                <p className="footer-wrapper__info-text">
                  {'Niche Vendor Support:bussiness@niche.lk'}
                </p>
                <p className="footer-wrapper__info-text">
                  {'Contact Number:+9476 728 2246'}
                  
                </p>
              </div>
              </Row>
         
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} >
          <Row className="footer-details-follow">
           <h2>Follow Us</h2>
            </Row>
            <Row className="social-row">
            <Col xs={4} sm={4} md={2} lg={2} className="social-col" >    
           <button className="socialbtn"><TiSocialFacebook className="icon" /></button>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2} className="social-col" >    
           <button className="socialbtn"><AiFillInstagram className="icon"/></button>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2} className="social-col" >    
           <button className="socialbtn"><AiOutlineTwitter className="icon" /></button>
            </Col>
</Row>
               
          
          </Col>
          <Row>
          <p className="footer-wrapper__info-text ftrunderpart">
                  {'Copyright © NICHE 2021'}
                 
                </p>
            </Row>
        </Row>

        </div>
      </Container>
     
    </section>
)
}

export default Footer