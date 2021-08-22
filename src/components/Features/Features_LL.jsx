import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { RiShoppingBag3Line } from '@react-icons/all-files/ri/RiShoppingBag3Line';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';

const Fetures = () => {
  return (
    <section id="features" className="color-background">
      <Container>
        <Row className="about-wrapper">
          <Col
            md={6}
            sm={12}
            xs={{ order: '2' }}
            sm={{ order: '2' }}
            md={{ order: '1' }}
            lg={{ order: '1' }}
          >
            <img alt="" src={HeroImg} className="feature-image" />
          </Col>
          <Col
            md={6}
            sm={12}
            xs={{ order: '1' }}
            sm={{ order: '1' }}
            md={{ order: '2' }}
            lg={{ order: '2' }}
            className="d-flex align-items-center"
          >
            <div className="feature">
              <div className="feature-title">
                <h1 className="title-1">
                EVERYTHING YOU NEED <br />
                AT YOUR FINGERTIPS
                </h1>
              </div>
              <div className="feature-group">
                <h3 className="feature-name">
                <RiShoppingBag3Line className="icon" />
                  <span> Shop and Explore</span>
                </h3>
                <p className="feature-info">Shop Women's , Men's , Kids And Cosmetics</p>
              </div>
              <div className="feature-group">
              <h3 className="feature-name">
              <IoPersonOutline className="icon" /> 
                <span>Buy Direct</span>
              </h3>
              <p className="feature-info">Buy Direct From The People Who Made It</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Fetures;
