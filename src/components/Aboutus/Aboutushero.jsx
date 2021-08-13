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
      <section id="aboutus-hero" className="multi-bg-example">
      <Container fluid className="hero-gradient">
        
        <Row className="aboutus-heading-row">
        
             <Col md={12} sm={12} lg={12}>
              <h1 className="aboutus-heading" > NICHE</h1> 
             </Col>
        </Row>
              
        <Row className="aboutus-subheading-row">
        <Col md={12} sm={12} lg={12}>
            <h3 className="aboutus-subheading">We're NICHE , Where There's Something For <br />Everyone </h3>
        </Col> 
        </Row>

        <Row className="justify-content-lg-center downbtn-row">
        <Col  xs={{ span: 4, offset: 5 }} sm={{ span: 4, offset: 3 }} md={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 3 }}  >
         <button className="downbtn"></button>
         </Col>
        </Row>
        <img alt="" src={Lot} width="50" height="50" className="bg-img"/>
        
      </Container>
     
    </section>
)
}

export default Hero