import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/play-store.png';
import AppStore from '../../images/app-store.png';
import { StaticImage } from 'gatsby-plugin-image';


const Hero = () => {
    return (
      <section id="hero" className="multi-bg-example">
      <Container>
        
        <Row className="hero-wrapper">
        
          <Col md={6} sm={12}>
            <Row>
            <Title title="Be Exclusive, Be " />
            <Title title="Divine, Be Yourself" />
              <div className="hero-wrapper__info">
                <p className="hero-wrapper__info-text">
                  {'Niche brings you the ultimate Sri Lankan Fashion experience at your fingertips. It is time for you to shine and show the true Sri Lankan in you !'}
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
          <div className="hero-wrapper__image">
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

export default Hero