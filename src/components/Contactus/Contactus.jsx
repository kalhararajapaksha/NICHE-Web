import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/play-store.png';
import AppStore from '../../images/app-store.png';
import { StaticImage } from 'gatsby-plugin-image';


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
          <div className="contactus-wrapper__image">
          <StaticImage
          alt=""
          layout="constrained"
          src="../../images/hero-phone.png"
          className="contactus-phone"/>
          </div>
          </Col>
        </Row>
        <img alt="" src={Lot} width="50" height="50" className="bg-img"/>
      </Container>
     
    </section>
)
}

export default Contactus