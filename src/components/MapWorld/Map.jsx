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

          <Col  xs={4} sm={4} md={4} lg={4}>
            <Row> 
            <Col className="iconcol" xs={6} sm={6} md={6} lg={6}>
            <FaUserAlt className="usericon"/>
            </Col> 
            <Col className="txtcol" xs={6} sm={6} md={6} lg={6}>
            <h1>Users <br/>Worldwide</h1>
            </Col>
            </Row>
            </Col>

            <Col  xs={4} sm={4} md={4} lg={4}>
            <Row> 
            <Col className="iconcol" xs={6} sm={6} md={6} lg={6}>
            <SiAnalogue className="usericon"/>
            </Col> 
            <Col className="txtcol" xs={6} sm={6} md={6} lg={6}>
            <h1>Brands to<br/>choose from </h1>
            </Col>
            </Row>
            </Col>

            <Col  xs={4} sm={4} md={4} lg={4}>
            <Row> 
            <Col className="iconcol" xs={6} sm={6} md={6} lg={6}>
            <FaFlagUsa className="usericon"/>
            </Col> 
            <Col className="txtcol" xs={6} sm={6} md={6} lg={6}>
            <h1>Countries</h1>
            </Col>
            </Row>
            </Col>
            
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