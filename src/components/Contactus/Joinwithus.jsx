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
                    <h2 className="title-1">Sell with Niche</h2>
                    
                    <div className="joinwithus-wrapper__info">
                      <p>
                        {'Niche helps brands to create their own identity, boost sales and manage their unique online fashion store. Teamed with best, Niche offers its app users the seamless online shopping experience. A world of fashion aficionados await to see your brand'}
                      </p>
                      <p>
                        <strong> {'Join with Niche now!'}</strong>
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