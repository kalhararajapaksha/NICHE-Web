import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { StaticImage } from 'gatsby-plugin-image';

const Sellers = () => {
    return (
      <section id="sellers">
      <Container>
        <Row className="bestsellers-title">
        <h1>Best Sellers</h1>
        </Row>
      
        <Row className="row1">
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image"> 
              <StaticImage alt="" layout="constrained" src="../../images/Bass.png" className="hero-phone"/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/COSRX.png" className=""/>
            </div>
           </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/ReeD.png" className=""/>
            </div>
          </Col>
        </Row>
        <Row className="row2">
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/COSRX.png" className=""/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/ReeD.png" className=""/>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="sellers-wrapper__image">
               <StaticImage alt="" layout="constrained" src="../../images/Bass.png" className=""/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
)
}

export default Sellers