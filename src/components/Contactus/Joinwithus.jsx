import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Designer from '../../images/designer.jpg';

const Joinwithus = () => {
    return (
      <section id="joinwithus">
        <Container>
            <Row>
              <Col lg={6} >
                <div className="w-100 seller-image">
                  <img src={Designer} className="" />
                </div>
              </Col>
              <Col lg={6} className="d-flex align-items-center pl-5">
                <div>
                    <h2 className="title-1">Sell with us</h2>
                    
                    <div className="joinwithus-wrapper__info">
                      <p>
                        {'Niche will help brands to create their own identity, enhance online traffic and sales. We are teaming with the best, to offer our clients and app users the most soothing online shopping experience. We invite you and your brand to join our team!'}
                      </p>
                      <p>
                        <strong> {'We invite you and your brand to join Our team!'}</strong>
                      </p>
                      <Link to="/sellwithusForm" className="btn btn-primary">Sell With Us</Link>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
    </section>
)
}

export default Joinwithus