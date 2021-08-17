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
        
          <Col xs={12} sm={12} md={6} lg={6}>
            <Row className="hero-heading">
            <h1>Be Exclusive, Be <br/> Divine, Be Yourself </h1>
              <div className="hero-wrapper__info">
                <p className="hero-wrapper__info-text">
                  {'Niche brings you the ultimate Sri Lankan Fashion experience at your fingertips. It is time for you to shine and show the true Sri Lankan in you !'}
                </p>
              </div>
              </Row>
          <Row>
            <Col  xs={12} sm={12} md={3} lg={3} className="colappstorebtn">    
          {/* <img alt="" src={AppStore} width="200" height="50" className="download-btn"/>*/}
          <button className="appstorebtn"><p>Available on<p className="btnname">app store</p></p></button>
            </Col>
            <Col  xs={12} sm={12} md={3} lg={3} className="colplaystorebtn">    
           {/*  <img alt="" src={PlayStore} width="200" height="50" className="download-btn"/> */}
           <button className="playstorebtn"><p>Available on<p className="btnname">playstore</p></p></button>
            </Col>
          </Row>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="col-hero-wrapper__image">
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