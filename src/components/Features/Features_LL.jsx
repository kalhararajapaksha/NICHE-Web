import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { RiShoppingBag3Line } from "@react-icons/all-files/ri/RiShoppingBag3Line";
import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";




const Fetures = () => {
    return (
      <section id="features_ll">
      <Container>
        <Row className="about-wrapper">
          <Col md={6} sm={12} xs={{ order: '2' }} sm={{ order: '2' }} md={{ order: '1' }} lg={{ order: '1' }}>
          <img
          alt=""
          src={HeroImg}
          className="hero-phone"/>
          </Col >
          <Col md={6} sm={12} xs={{ order: '1' }} sm={{ order: '1' }} md={{ order: '2' }} lg={{ order: '2' }} >
          <Row className="feature-title">
          <h1>EVERYTHING YOU NEED <br/>AT YOUR FINGERTIPS</h1>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name"><RiShoppingBag3Line className="icon" />Shop and Explore</h3>
          <p className="feature-info">Shop Women's , Men's , Kids And Cosmetics</p>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name"><IoPersonOutline className="icon" />Buy Direct</h3>
          <p className="feature-info">Buy Direct From The People Who Made It</p>
          </Row>
      
          </Col>
        </Row>
      </Container>
    </section>
)
}
export default Fetures