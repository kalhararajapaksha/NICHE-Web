import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/flower.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";

const Hero = () => {
    return (
      <section id="aboutus-hero" className="multi-bg-example">
      <Container fluid className="hero-gradient">
        <div className="section-div">
        <Row className="aboutus-heading-row">
        
             <Col md={12} sm={12} lg={12}>
              <h1 className="aboutus-heading" > NICHE</h1> 
             </Col>
        </Row>
              
        <Row className="aboutus-subheading-row">
        <Col md={12} sm={12} lg={12}>
            <h3 className="aboutus-subheading">We Are Niche, the only authentic Sri Lankan Fashion <br />Marketplace</h3>
        </Col> 
        </Row>

        <Row className="justify-content-lg-center justify-content-md-center justify-content-xs-center justify-content-sm-center downbtn-row">
        <Col  xs={{ span: 4, offset: 5 }} sm={{ span: 4, offset: 3 }} md={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 3 }}  >
         <button className="downbtn"><IoIosArrowDown className="arrowdown"/></button>
         </Col>
        </Row>
        <img alt="" src={Lot} width="50" height="50" className="bg-img"/>
        </div>
      </Container>
     
    </section>
)
}

export default Hero