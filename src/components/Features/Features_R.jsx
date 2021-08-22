import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { RiShipLine } from '@react-icons/all-files/ri/RiShipLine';
import { IoRocketOutline } from '@react-icons/all-files/io5/IoRocketOutline';

const Fetures = () => {
  return (
    <section id="features">
      <Container>
        <Row className="about-wrapper">
        
          <Col
            md={6}
            sm={12}
            className="d-flex align-items-center"
          >
            <div className="feature">
              <div className="feature-title">
                <h1 className="title-1">
                  order from anywhere
                </h1>
              </div>
              <div className="feature-group">
                <h3 className="feature-name">
                  <IoRocketOutline className="icon" /> 
                  <span>International Shipping</span>
                </h3>
                <p className="feature-info">From Selected Brands</p>
              </div>
              <div className="feature-group">
              <h3 className="feature-name">
              <RiShipLine className="icon" />
                <span>To Your Door Step</span>
              </h3>
              <p className="feature-info">Dispatched Within 3 Days Unless Notified Otherwise</p>
            </div>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
          >
            <img alt="" src={HeroImg} className="feature-image" />
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
export default Fetures;
