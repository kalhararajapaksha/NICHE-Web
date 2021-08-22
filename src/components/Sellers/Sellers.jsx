import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Bassimg from '../../images/Bass.png';
import Reedimg from '../../images/ReeD.png';
import Cosrximg from '../../images/COSRX.png';


const Sellers = () => {
    return (
      <section id="sellers">
      <Container>
        <Row>
          <Col><h1 className="title-1 text-center">Best Sellers</h1></Col>
        </Row>
      
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image"> 
              <img alt=""  src={Bassimg} className="hero-phone"/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <img alt="" src={Cosrximg} className=""/>
            </div>
           </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <img alt="" src={Reedimg} className=""/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <img alt="" src={Cosrximg} className=""/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <img alt="" src={Reedimg} className=""/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
               <img alt="" src={Bassimg} className=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}

export default Sellers