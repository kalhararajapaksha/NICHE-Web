import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';


const Fetures = () => {
    return (
      <section id="Fetures">
      <Container>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
          <StaticImage
          alt=""
          src='../../images/hero-phone.png'
         // width="50"
         // height="50"
          className="hero-phone"/>
          </Col >
          <Col md={6} sm={12}>
          <Title title="YOUR MONEY IS SECURED WITH US" />
          <div className="about-wrapper__info">
          
                <p className="about-wrapper__info-text">
                  {'Terms & Conditions Apply'}
                </p>
                <p className="about-wrapper__info-text">
                  {'100% Secure Checkout'}
                </p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}
export default Fetures