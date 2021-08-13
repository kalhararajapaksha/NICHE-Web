import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { StaticImage } from 'gatsby-plugin-image';

const Sellers = () => {
    return (
      <section id="sellers">
      <Container>
      <Title title="Best Sellers" />
        <Row>
          <Col md={4} sm={12}>
            <div className="sellers-wrapper__image"> 
              <StaticImage alt="" layout="constrained" src="../../images/Bass.png" className="hero-phone"/>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/COSRX.png" className=""/>
            </div>
           </Col>
          <Col md={4} sm={12}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/ReeD.png" className=""/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/COSRX.png" className=""/>
            </div>
          </Col>
          <Col>
            <div className="sellers-wrapper__image">
              <StaticImage alt="" layout="constrained" src="../../images/ReeD.png" className=""/>
            </div>
          </Col>
          <Col md={4} sm={12}>
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