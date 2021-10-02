import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import Mapimg from '../../images/map.png';
import {  AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import {  AiOutlineFlag } from "@react-icons/all-files/ai/AiOutlineFlag";
import {  AiOutlineAppstore } from "@react-icons/all-files/ai/AiOutlineAppstore";
import MapImage from '../../images/mapImage.png';

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
          <div className="container">
            <div className="map-container">
              <img src={MapImage}/>
              <div className="point venezuela tippy" title="Venezuela"></div>
              <div className="point brasil tippy" title="Brasil"></div>
              <div className="point argentina tippy" title="Argentina"></div>
              <div className="point colombia tippy" title="Colombia"></div>
              <div className="point panama tippy" title="Panamá"></div>
              <div className="point mexico tippy" title="Mexico"></div>
              <div className="point usa tippy" title="Estados Unidos"></div>
              <div className="point arabia tippy" title="Arabia Saudi"></div>
              <div className="point turquia tippy" title="Turquía"></div>     
              <div className="point rusia tippy" title="Rusia"></div>
              <div className="point china tippy" title="China"></div>
              <div className="point japon tippy" title="Japon"></div>
              <div className="point australia tippy" title="Australia"></div>
            </div>
          </div>
          </Col>
        </Row>
      </section>
    );
}
export default Map