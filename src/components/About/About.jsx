import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
    return (
      <section id="about">
      <Container>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
          <StaticImage
          alt=""
          src='../../images/hero-phone.png'
         // width="50"
         // height="50"
          className="hero-phone"/>
          </Col>
          <Col md={6} sm={12}>
          <Title title="ABOUT NICHE" />
          <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {'NICHE delivers a stylish and trending collection of men and women apparel,sourced from Sri Lanka own fashion labels and reputed Sri Lankan fashion icons.NICHE provides you with everything from sarees to dresses, sarongs to jeans, Cosmetics and accessories.'}
                </p>
                <p className="about-wrapper__info-text">
                  {'Our incredible collection of products has something for everyone. With the availability of an ultra-modern collection of clothing and accessories online, NICHE is your one-stop shop for your wardrobe essentials'}
                </p>
                
              </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}
export default About