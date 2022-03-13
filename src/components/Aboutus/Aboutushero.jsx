import * as React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
              <Col lg={12}>
                <h1 className="aboutus-heading" > NICHE</h1> 
              </Col>
          </Row>
          <Row className="aboutus-subheading-row">
            <Col >
                <h3 className="aboutus-subheading">We Are Niche, the only authentic Sri Lankan Fashion <br />Marketplace</h3>
            </Col> 
          </Row>
          <Row>
            <Col lg={12} className="d-flex justify-content-center mt-5">
              <div className="downbtn-wrap">
                <Button className="downbtn"><IoIosArrowDown className="arrowdown"/></Button>
              </div>
            </Col>
          </Row>
        <img alt="" src={Lot} width="50" height="50" className="bg-img"/>
        </div>
      </Container>
     
    </section>
)
}

export default Hero