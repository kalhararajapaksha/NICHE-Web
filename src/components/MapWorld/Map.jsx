import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';

const Map = () => {
    return (
      <section id="map">
      <Container>
        <Row className="map-wrapper">
          <Row className="map-wrapper__info">
          <Col m={3}><h1>20,000 +</h1></Col>
          <Col m={3}><h1>1000 +</h1></Col>
          <Col m={3}><h1>200 +</h1></Col>
          </Row>
          <Row>
          <StaticImage
          alt=""
          src='../../images/map.png'
          className="hero-phone"/>
          </Row>

        </Row>
      </Container>
    </section>
)
}
export default Map