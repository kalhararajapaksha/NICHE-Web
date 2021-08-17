import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';

const Map = () => {
    return (
      <section id="map">
      <Container fluid>
        <Row className="map-wrapper">
          <Row className="map-info">
          <Row className="map-wrapper__info">
          <Col xs={4} sm={4} md={4} lg={4}><h1>20,000 +</h1></Col>
          <Col xs={4} sm={4} md={4} lg={4}><h1>1000 +</h1></Col>
          <Col  xs={4} sm={4} md={4} lg={4}><h1>200 +</h1></Col>
          </Row>
          <Row className="map-wrapper__text">
          <Col  xs={4} sm={4} md={4} lg={4}><h1>Users</h1></Col>
          <Col  xs={4} sm={4} md={4} lg={4}><h1>Brands to choose<br/> from</h1></Col>
          <Col  xs={4} sm={4} md={4} lg={4}><h1>Countries</h1></Col>
          </Row>
          </Row>
          <Row>
          <StaticImage
          alt=""
          src='../../images/map.png'
          className="map-img"/>
          </Row>

        </Row>
      </Container>
    </section>
)
}
export default Map