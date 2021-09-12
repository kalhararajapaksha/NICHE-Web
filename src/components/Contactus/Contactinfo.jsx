import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Contactinfo = () => {
    return (
      <section id="contactinfo" className="mt-5">
        <Container>
        <div className="section-contact">
            <div>
                <div>
                    <h2 className="title-1 text-center">Contact Info</h2>
                </div>
                <Row className="">
                  <Col lg={6}> 
                        <p className="label">
                          {'Nich Support:'}
                        </p>
                        <p className="label">
                          {'Nich Vendor Support:'}
                        </p>
                        <p className="label">
                          {'Nich Support:'}
                        </p>
                    </Col>
                  <Col lg={6}>
                      <p className="value">
                        {'support@niche.lk'}
                        </p>
                        <p className="value">
                        {'bussines@niche.lk'}
                        </p>
                        <p className="value">
                        {'+9476 728 2246'}
                        </p>
                  </Col>
                </Row>
            </div>
          </div>
        </Container>
    </section>
)
}

export default Contactinfo