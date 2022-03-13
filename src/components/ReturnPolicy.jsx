import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      <Container>
        <Row>
          <Col lg='12' className='mt-5'>
            <h1 className='mt-5 pt-5 pb-5'>Return Policy</h1>
            <p className='mb-5'>
              We have a 14 days return policy, which means you have 14 days after receiving your item to request a return.
              <br/><br/>  
              To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.
              <br/><br/> 
              If a customer wishes to return or exchange items based on incorrect size  and incorrect colour dispatched by the Brand, the customer is required to create a dispute through the NICHE mobile app within 14 days  after dispatched the order and raise the issue accordingly if enough evidence is provided to start the return process.
              <br/><br/>
              Customers are required to post the items they wish to return to the  relevant Brand  at customers expense and upon inspection, Brand  will be  required to dispatch the correct ordered size/colour on Brands expense or refund 100% of the sale price + original shipping charges to the customer, on the condition that the items  returned were of resalable quality.
              <br/><br/>      
              If the item required for an exchange is out of stock, the Brand will be required to refund 100% of the sale price + original shipping charges charged to dispatch the order to the customer, on the condition that the items returned were  of resalable quality. 
              <br/><br/>    
              To start a return, you can contact us through the NICHE mobile app/Profile/Orders/Get_Help. If your return is approved, we will send you instructions on how and where to send your package. Items sent back to us prior approval will not be accepted.
              <br/><br/>  
              You can always let us know about your concerns that you might have on item returns at support@niche.lk
            </p>
            <div className='mt-3 mb-3'>
              <h3>Damages and issues</h3>
              <p>
              Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
              <br/><br/>  
              You can create a bad quality dispute in our NICHE mobile app. We will raise the issue accordingly if enough evidence is provided to start the process. We will send you instructions on how and where to send your package. Items sent back to us prior approval will not be accepted. Brands will be required to refund 100% of the sale + original shipping charges charged to dispatch the order to the customer. 
              </p>
            </div>
            <div className='mb-3'>
              <h3>Exceptions / non-returnable items</h3>
              <p>
              Certain types of items cannot be returned, like perishable goods (such as, flowers, or plants), custom products (such as special orders or personalised items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gasses. Please get in touch if you have questions or concerns about your specific item.
              <br/><br/>  
              Unfortunately, we cannot accept returns on sale items or gift cards.
              <br/><br/>  
              Items sold as “Final Sale” or “Non-Returnable” or any other word that provide the same meaning to the above mentioned can not be returned or refunded.
              </p>
            </div>
            <div className='mb-5'>
              <h3>Refunds</h3>
              <p>
                We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.
              </p>
            </div>
          </Col>
        </Row>      
      </Container>
    </PortfolioProvider>
  );
}

export default App;