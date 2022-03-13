import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { IoIosMailOpen } from '@react-icons/all-files/io/IoIosMailOpen';
import Accordion from 'react-bootstrap/Accordion'

const FAQ = () => {
  return (
    <section id="faq">
      <Container>
        <Row className="submit-wrapper__info">
          <Col lg="12">
                <div className="app-heading">
                  <h1 className="title-1">FAQ</h1>
                </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Our Delivery Options</Accordion.Header>
              <Accordion.Body>
              We have allowed our partnered brands to select the method of delivery they wish to dispatch the orders (Sri Lankan Post and other Courier Services). The Brand has the responsibility of dispatching the orders within 3 business days unless it’s mentioned otherwise on the respective Brand profile or on product description.
              <br/>
              Personalised or customised items may take longer than 3 business days and will be notified in product description.
              <br/><br/>
              For international deliveries, the Brand needs to enable the international shipping feature and should allow purchases for respective countries for a customer to purchase products from a specific country other than Sri Lanka.
              <br/><br/>
              Delivery charges are calculated on the rates provided by the respective Brand.
              <br/><br/>
              The status of the order is displayed on NICHE app, user profile, orders page.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Return Policy</Accordion.Header>
              <Accordion.Body>
              If a customer wishes to return an item or items based on the conditions provided by us, the customer will be eligible for a return, exchange or a refund. Refer to our Return policy. 
              <br/><br/>
              To be eligible or a return, refund or an exchange:
              <br/><br/>
              <ul>
                <li>The dispute needs to be created and submitted within 14 days from the order delivered date.</li>
                <li>The item is not listed as “Final Sale”, “Non-Returnable”, or any other which provides the same meaning at the time of purchase.</li>
                <li>Faulty or Defective</li>
                <li>The item must be unworn and unused. The original tags must be still attached. Items that are sealed for hygiene reasons can only be returned if the seal is still intact.</li>
              </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How Can I Contact NICHE Customer Service?</Accordion.Header>
              <Accordion.Body>
              The NICHE support team is dedicatedly here to help. Drop us an email to support@niche.lk
              <br/><br/>
              We do not accept calls but rest assured, if we need to, we’ll call you.
              <br/><br/>
              You may experience longer than usual response and wait times when contacting the NICHE support team this busy season. If you have an urgent request, we suggest you chat with us on our social media accounts (Instagram and Facebook). 
              We will get back to you as soon as possible and are ready to address your concerns.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Exchanges</Accordion.Header>
              <Accordion.Body>
              The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
