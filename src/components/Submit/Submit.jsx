import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import {Form} from 'react-bootstrap';

const Submit = () => {
    return (
      <section id="submit">
      <Container>
          
      <Form className="sub">
       <Row className="submit-wrapper__info">
       <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Title title="Get Exclusive Updates And Deals" />
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      *Be The First To Sell And Get Additional Benefits And Tools. By Entering Your Email Address, You Accept Marketing Emails From NICHE*
      </Form.Text>
      </Form.Group>
      </Col>
      <Col>
      </Col>
      </Row>
      </Form>
      
      </Container>
    </section>
)
}

export default Submit