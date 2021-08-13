import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/play-store.png';
import AppStore from '../../images/app-store.png';
import { StaticImage } from 'gatsby-plugin-image';


const Footer = () => {
    return (
      <section id="footer" className="multi-bg-example">
      <Container>
        
        <Row className="footer-wrapper footrdetails">
        
          <Col md={6} sm={12}>
            <Row>
            <Title title="Reach us on " />
            
              <div className="hero-wrapper__info">
                <p className="hero-wrapper__info-text">
                  {'Niche Support:support@niche.lk'}
                </p>
                <p className="hero-wrapper__info-text">
                  {'Niche Vendor Support:bussiness@niche.lk'}
                </p>
                <p className="hero-wrapper__info-text">
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
            <img alt="" src={AppStore} width="200" height="50" className="download-btn"/>
            </Col>
            <Col>    
           <img alt="" src={PlayStore} width="200" height="50" className="download-btn"/>
            </Col>
          </Row>
         
          
          </Col>
        </Row>
        
      </Container>
     
    </section>
)
}

export default Footer