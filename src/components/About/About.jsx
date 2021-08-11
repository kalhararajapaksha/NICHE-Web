import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';


const About = () => {
    return (
      <section id="about" className="multi-bg-example">
      <Container>
        <Title title="Be Exclusive, Be " />
        <Title title="Divine, Be Yourself" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
           
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'Niche brings you the ultimate Sri Lankan Fashion experience at your fingertips. It is time for you to shine and show the true Sri Lankan in you !'}
                </p>
              </div>

              <img
          alt=""
          src={Lot}
          width="50"
          height="50"
          className="bg-img"/>
          </Col>
          <Col>
         
          <img
          alt=""
          src={HeroImg}
          width="50"
          height="50"
          className="hero-phone"/>
          
          </Col>
        </Row>
      </Container>
    </section>
)
}

export default About