import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { IoIosMailOpen } from '@react-icons/all-files/io/IoIosMailOpen';

const Submit = () => {
  return (
    <section id="submit">
      <Container>
        <Row className="submit-wrapper__info">
          <Col lg="12">
            <div className="email-heading">
              <h1>
                <IoIosMailOpen className="mailicon" /> Don't fall behind
              </h1>
            </div>
            <div>
              <h2 className="title-1">Get Exclusive Updates And Deals</h2>
            </div>
            <Row className="w-100">
              <Col xs={8} sm={8} md={8} lg={8} >
                <Form className="subscribe-form">
                  <Form.Group controlId="formBasicEmail">
                    <InputGroup>
                      <FormControl
                        placeholder="Enter your email"
                        aria-label="email"
                        aria-describedby="email"
                      />
                      <Button variant="primary" id="button-addon2">
                        Let Me Know
                      </Button>
                    </InputGroup>
                    <Form.Text className="text-muted  text-center">
                      *Be The First To Sell And Get Additional Benefits And Tools. By Entering Your Email
                      Address, You Accept Marketing Emails From NICHE*
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>

             

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Submit;
