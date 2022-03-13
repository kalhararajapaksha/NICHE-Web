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
            <h1 className='mt-5 pt-5 pb-5'>Acceptable Use Policy</h1>
            <p className='mb-5'>
              NICHE is a commerce platform that provides the tools and technology for merchants to set an online store and sell products and services. There are some activities that are incompatible with our mission.
              This Acceptable Use Policy (AUP) describes activities that are prohibited in connection with your use of the Services.
              <br/><br/>
              The following activities are prohibited:
              <ol>
                <li>  <strong> Child exploitation: </strong>
                  You may not offer goods or services, or post or upload Materials that exploit or abuse children,
                  including not limited to images or depictions of child abuse or sexual abuse, or that presrnt childen in a sexual manner.
                </li>
                <li>  <strong> Covid-19: </strong>
                You may only offer goods and services in relation to COVID-19 that comply with the “Rules of Engagement for the Sale of COVID-19 Related Products”.
                </li>
                <li>  <strong> Harassment, bullying, defamation or threats: </strong>
                You may not offer goods or services, or post or upload Materials, that harass, bully, defame, or threaten a specific individual. 
                </li>
                <li>  <strong> Hateful content: </strong>
                You may not use the Services to promote or condone hate or violence against people based on race, ethnicity, colour, national origin, religion, age, gender, sexual orientation, disabilty, medical condition, veteran status or other forms of discriminatory intolerance. You may not use the Services to promote or support organisations, platforms or people that: 
                <br/> (i) promote or condone such hate; or 
                <br/> (ii) threaten or condone violence to further a cause. 
                </li>
                <li>  <strong> Illegal activities: </strong>
                You may not offer goods or services, or post or upload Materials, that contravene or that facilitate or promote activities that contravene, the laws of the jurisdictions in which you operate or do business. 
                </li>
                <li>  <strong> Intellectual property:</strong>
                You may not offer goods or services, or post or upload Materials, that infringe on the copyright or trademarks of others. 
                </li>
                <li>  <strong> Malicious and deceptive practices:</strong>
                You may not use the Services to transmit malware or host phishing pages. You may not perform activities or upload or distribute Materials that harm or disrupt the operation of the Services or other infrastructure of NICHE or others, including NICHE’s third party providers. You may not use the Services fo deceptive commercial practices or any other illegal or deceptive activities.
                </li>
                <li>  <strong>Personal, confidential, and protected health information:</strong>
                  You may not post or upload any Materials that contain personally identifiable information, sensitive personal information, or confidential information, such as credit card numbers, confidential national ID numbers, or account passwords unless you have consent from the personal to whom the information belongs or who is otherwise authorised to provide such consent. You may not use the Services to collect, store, or process any protected health information subject to the Health Insurance Portability and Accountability Act (HIPAA), any applicable health privacy regulation or any other applicable law governing the processing, use, or disclosure of protected health information. 
                </li>
                <li>  <strong>Restricted Items:</strong>
                You may not offer goods and services that are, or appear to be, Restricted items.
                </li>
                <li>  <strong>Self-harm:</strong>
                You may not offer goods and or services, or post or upload Materials, that promote self harm.
                </li>
                <li>  <strong>Spam:</strong>
                You may not use the Services to transmit unsolicited commercial electronic messages.
                </li>
                <li>  <strong>Terrorist organisations:</strong>
                You may not offer goods and services, or post or upload Materials, that imply or promote support or funding of, or membership in, a terrorist organisation.
                </li>
              </ol>
              <br/>
              We may, at any time and without notice, remove any Materials, and suspend or terminate your Account or your access to the Services if you engage in activities that violate the letter or spirit of this AUP, including activities outside of your use of the Services.
              <br/><br/>
              NICHE has the right, but not the obligation, to monitor or investigate any Materials and your use of the Service at any time for compliance with this AUP and the NICHE Terms of Service, or any other agreement between you and NICHE governing your use of the Services (collectively, the “Terms”). Our determination of whether a violation of this AUP has occurred will be final and binding, any action with respect to enforcing this AUP, including taking no action at all, will be at our sole discretion.
              <br/><br/>
              NICHE may modify this AUP, including the list of Restricted items, at any time by posting a revised version at <a href='https://www.niche.lk/aup'><strong>https://www.niche.lk/aup</strong></a> . By continuing to use the Services or access your Account after a revised version of the AUP has been posted, you agree to comply with the latest version of the AUP. In the event of a conflict between the AUP and the terms, this AUP will take precedence, but only to the extent required to resolve such conflict. Capitalised terms used but not defined in this AUP shall have the meanings set forth below:
              <br/><br/>
              “Materials” means any photo, image, video, graphic, written content, audio file, code, information, data or other content uploaded, collected, generated, stored, displayed, distributed, transmitted or exhibited on or in connection with your Account. 
            </p>
          </Col>
        </Row>      
      </Container>
    </PortfolioProvider>
  );
}

export default App;