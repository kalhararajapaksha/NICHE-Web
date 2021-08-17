import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";


const Footer = () => {
    return (
      <section id="footer" className="multi-bg-example">
      <Container>
        
        <Row className="footer-wrapper footrdetails">
        
          <Col md={6} sm={12}>
            <Row>
            <Title title="Reach us on " />
            
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

          <Col md={6} sm={12}>
          <Row>
            <Title title="Follow us " />
            </Row>
            <Row>
            <Col >    
           
            </Col>
            <Col>    
            <TiSocialFacebook />
            </Col>
            <Col>    
            
            </Col>
</Row>
               
          
          </Col>
          <Row>
          <p className="footer-wrapper__info-text ftrunderpart">
                  {'Copyright © NICHE 2021'}
                 
                </p>
            </Row>
        </Row>

        
      </Container>
     
    </section>
)
}

export default Footer