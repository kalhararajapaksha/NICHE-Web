import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';


const Fetures = () => {
    return (
      <section id="features_r">
      <Container>
        <Row className="about-wrapper">
          
          <Col md={6} sm={12}>
          <Row className="feature-title">
          <h1>order from anywhere</h1>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name">International Shipping</h3>
          <p className="feature-info">From Selected Brands</p>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name">To Your Door Step</h3>
          <p className="feature-info">Dispatched Within 3 Days Unless Notified Otherwise</p>
          </Row>
      
          </Col>
          <Col md={6} sm={12}>
          <StaticImage
          alt=""
          src='../../images/hero-phone.png'
         // width="50"
         // height="50"
          className="hero-phone"/>
          </Col >
        </Row>
      </Container>
    </section>
)
}
export default Fetures