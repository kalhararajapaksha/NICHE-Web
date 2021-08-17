import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { StaticImage } from 'gatsby-plugin-image';


const Available = () => {
    return (
      <section id="available" className="multi-bg-example">
      <Container>
        
        <Row className="available-wrapper">
        
          <Col sm={12} xs={12} md={6} lg={6} >
            <Row className="app-heading">
            <h1>Will be available on</h1>
            
              <div className="available-wrapper__info">
                <p className="available-wrapper__info-text">
                  {'Niche will soon be available on both Android PlayStore and Apple AppStore for free download. Be ready to click the download button for an ultimate Sri Lankan fashion experience.'}
                </p>
              </div>
              </Row>
          <Row>
            <Col sm={6} xs={6} md={6} lg={6} >    
            <img alt="" src={AppStore} width="200" height="50" className="download-btn"/>
            </Col>
            <Col sm={6} xs={6} md={6} lg={6}>    
           <img alt="" src={PlayStore} width="200" height="50" className="download-btn"/>
            </Col>
          </Row>
          </Col>

          <Col sm={12} xs={12} md={6} lg={6}>
          <div className="available-wrapper__image">
          <StaticImage
          alt=""
          layout="constrained"
          src="../../images/hero-phone.png"
          className="hero-phone"/>
          </div>
          </Col>
        </Row>
     
      </Container>
     
    </section>
)
}

export default Available