import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import Mapimg from '../../images/map.png';
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { SiAnalogue } from "@react-icons/all-files/si/SiAnalogue";
import { FaFlagUsa } from "@react-icons/all-files/fa/FaFlagUsa";

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
          <Col  xs={4} sm={4} md={4} lg={4}><h1><FaUserAlt className="usericon"/>Users</h1></Col>
          <Col  xs={4} sm={4} md={4} lg={4}><h1><SiAnalogue className="brandicon"/>Brands to choose from</h1></Col>
          <Col  xs={4} sm={4} md={4} lg={4}><h1><FaFlagUsa className="flagicon"/>Countries</h1></Col>
          </Row>
          </Row>
          <Row>
          <img
          alt=""
          src={Mapimg}
          className="map-img"/>
          </Row>

        </Row>
      </Container>
    </section>
)
}
export default Map