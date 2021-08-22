import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import Mapimg from '../../images/map.png';
import {  AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import {  AiOutlineFlag } from "@react-icons/all-files/ai/AiOutlineFlag";
import {  AiOutlineAppstore } from "@react-icons/all-files/ai/AiOutlineAppstore";


const Map = () => {
    return (
      <section id="map">
        <div className="map-info">
          <Container className="h-100">
            <Row className="h-100">
              <Col lg="4" className="d-flex align-items-center justify-content-center">
                <div className="insight-data">
                  <div className="icon">
                    <AiOutlineUser />
                  </div>
                  <div className="text">
                    <span>Users Worldwide</span>
                    <p>20,000 +</p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="d-flex align-items-center justify-content-center">
                <div className="insight-data">
                  <div className="icon">
                    <AiOutlineAppstore />
                  </div>
                  <div className="text">
                    <span>Brands</span>
                    <p>20,000 +</p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="d-flex align-items-center justify-content-center">
                <div className="insight-data">
                  <div className="icon">
                    <AiOutlineFlag />
                  </div>
                  <div className="text">
                    <span>Countries</span>
                    <p>20,000 +</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Row>
          <Col className="d-flex justify-content-center">
            <img alt="" src={Mapimg} className="map-img" />
            </Col>
        </Row>
      </section>
    );
}
export default Map