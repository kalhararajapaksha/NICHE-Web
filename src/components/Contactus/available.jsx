import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';


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
          <Row className="download-btn">
            <Col sm={12} xs={12} md={12} lg={12} >    
            <img alt="" src={AppStore} width="200" height="50" className="btn"/>
            
           <img alt="" src={PlayStore} width="200" height="50" className="btn pl"/>
            </Col>
          </Row>
          </Col>

          <Col sm={12} xs={12} md={6} lg={6}>
          <div className="available-wrapper__image">
          <img
          alt=""
          src={HeroImg}
          className="hero-phone"/>
          </div>
          </Col>
        </Row>
     
      </Container>
     
    </section>
)
}

export default Available