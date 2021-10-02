import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { StaticImage } from 'gatsby-plugin-image';


const Hero = () => {
    return (
      <section id="sellwithusinfo" className="multi-bg-example">
          <Container fluid className="whatwedo">
               <h3 className="text-center title-1" >SELL WITH NICHE</h3> 
               <Row className="d-flex justify-content-center text-center">
                    <Col lg="8">
                         <p className="whatwedo-para">
                         Niche is designed to build the relationship between truly talented Sri Lankan fashion artists aspiring to build their own brand and fashion aficionados who pursue an authentic Sri Lankan taste for clothing and accessories. Our ultimate purpose is to build a sustainable fashion ecosystem by connecting authentic Sri Lankan brands with the outside world. 
Niche comprise all leading Sri Lankan fashion brands that walk extra miles to satisfy customers. Through an app based fashion market place, brands will have access to in-app features such as product listing and maintenance, stock control, order tracker, revenue dashboards, exclusive promotional campaigns and many other seller tools.
The dedicated team at Niche ensures your brand is offered a unique marketplace with 360° seller support to reach out to a potential worldwide customer base. The marketplace will be available on Niche app, the first fashion app in Sri Lanka where brands meet their end customer directly. You can create, manage and contact your customers direct through your store at your fingertips. Embedded with an online payment gateway, PayHere and Niche technical team, IConn I/O ensure the customers confidentiality and privacy of data in online transactions are secured. We constantly monitor the brands and customer feedback to ensure Niche maintain the required standards. 

Niche aims to build a community of fashion lovers that could expressively transform the current traditional fashion lackluster of sustainability and ethicality by promoting the minute details of fashion richness. Unleash your fashion potential creating a stepping stone for your excellence with Niche. 
                         </p>
                         <p className="whatwedo-para-bold">
                         <strong>Join Niche now. </strong>
                         </p>
                    </Col>
               </Row>  
          </Container>
     </section>
)
}

export default Hero