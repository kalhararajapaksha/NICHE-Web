import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/play-store.png';
import AppStore from '../../images/app-store.png';
import { StaticImage } from 'gatsby-plugin-image';


const Available = () => {
    return (
      <section id="available" className="multi-bg-example">
      <Container>
        
        <Row className="available-wrapper">
        
          <Col md={6} sm={12} >
            <Row>
            <Title title="Will Be Available On " />
            
              <div className="available-wrapper__info">
                <p className="available-wrapper__info-text">
                  {'Niche will soon be available on both Android PlayStore and Apple AppStore for free download. Be ready to click the download button for an ultimate Sri Lankan fashion experience.'}
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
          <div className="available-wrapper__image">
          <StaticImage
          alt=""
          layout="constrained"
          src="../../images/hero-phone.png"
          className="hero-phone"/>
          </div>
          </Col>
        </Row>
        <img alt="" src={Lot} width="50" height="50" className="bg-img"/>
      </Container>
     
    </section>
)
}

export default Available