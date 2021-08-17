import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';


const Fetures = () => {
    return (
      <section id="features_l">
      <Container>
        <Row className="about-wrapper" >
          <Col md={6} sm={12} xs={{ order: '2' }} sm={{ order: '2' }} md={{ order: '1' }} lg={{ order: '1' }} >
          <StaticImage
          alt=""
          src='../../images/hero-phone.png'
         // width="50"
         // height="50"
          className="hero-phone"/>
          </Col >
          <Col md={6} sm={12} xs={{ order: '1' }} sm={{ order: '1' }} md={{ order: '2' }} lg={{ order: '2' }} >
          <Row className="feature-title">
          <h1>YOUR MONEY IS SECURED <br/>WITH US</h1>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name">100% Secure Checkout</h3>
          <p className="feature-info">Protect Buyer and Security</p>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name">7 Days Exchanges and Returns</h3>
          <p className="feature-info">Terms and Conditions Apply</p>
          </Row>
      
          </Col>
        </Row>
      </Container>
    </section>
)
}
export default Fetures