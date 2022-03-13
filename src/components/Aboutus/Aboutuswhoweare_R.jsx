import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Shehan from '../../images/shehan.jpg';
import Shero from '../../images/sheronica.jpg';



const Hero = () => {
    return (
      <section id="aboutus-whoweare-r" className="multi-bg-example">
      <Container>
        
        <Row>
             <Col lg={12}>
              <h3 className="title-1" > Who we are</h3> 
             </Col>
        </Row>

        <Row className="d-flex justify-content-between mt-5">
          <Col lg={4}>
            <div className="graphic-side">
              <div className="background"/>
              <div className="image">
                <img alt="" src={Shehan} />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="bio-ceo">
                <div className="bio-name">
                  <h3>Mr.Shehan Livera</h3>
                </div>
                <div className="bio-position">
                  <h4>CEO and Co-Founder</h4>
                </div>
                <div className="bio-desc">
                    <p className="bio-para">
                      NICHE was designed and developed with the goal of creating a fashion eco-system where unique Sri Lankan fashion brands with deep Lankan roots could have a platform to seamlessly reach their customers. NICHE is equipped with the state-of-the-art business tools to easily manage a brands’ online sales and will constantly invest in improving our services to provide the best experience for all app users. We emphasis on “Freedom” and we want everyone to freely express the best version of themselves. At NICHE, it’s about the people and their brands. We will continue to empower ‘our people’, ‘our customers’, and ‘our partners’, who together make Niche a possibility. As one of the co-founders of NICHE I believe that by empowering local fashion brands and encouraging the adaptation of sustainable production methods, we could create a one stop destination for Sri Lanka’s premium and sustainable designer wear. The apparel and fashion industry is also one of the most significant contributors to the Sri Lankan economy each year and we aim to take the initiation to develop and recuperate interest in Sri Lankan designer wear industry in the international market. Revolutionising the Sri Lankan designer wear industry is our prime motive to uplift the Lankan economy and display sustainably produced Sri Lankan designer wear on a global platform.
                    </p>
                </div>  
            </div>
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-between">
          <Col lg={4} className="order-sm-1">
            <div className="graphic-side">
              <div className="background"/>
              <div className="image">
                <img alt="" src={Shero} />
              </div>
            </div>
          </Col>
          <Col lg={7} className="bio-ceo order-sm-12">
            <div className="bio-ceo text-right">
              <div className="bio-name">
                <h3>Ms.Sheronica Fernando</h3>
              </div>
              <div className="bio-position">
                <h4>Managing Director and Cofounder</h4>
              </div>
              <div className="bio-desc">
                  <p className="bio-para">
                  NICHE will provide the best e-commerce platform for all Sri Lankan home grown fashion
                  brands. The best value will be delivered as a combination of competitive pricing, high
                  quality, customised products, speedy delivery and continuous improvements. NICHE mainly
                  focuses on women’s, men’s and kids wear, accessories, shoes, bags, cosmetics and other
                  fashion items. We will provide designers the opportunities such as detailed photo shoots,
                  market researches, workshops and campaigns. We entrust designers with technical support
                  and social media marketing support. As one of the cofounders and managing director of
                  NICHE, I hope to break the shackles of being restricted to the local market, and conquer the
                  international markets as well, for the success of our designers. So we, the NICHE team hope
                  to empower our designers and take them towards the next level. <br/> <br/>
                  We invite all the creative minds of our country to join hands and walk with us in this journey
                  towards success.
                  </p>
              </div>  
            </div>
           
          </Col>
        </Row>
              
        
      </Container>
     
    </section>
)
}

export default Hero