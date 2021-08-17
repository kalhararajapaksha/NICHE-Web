import React, { useState, useEffect } from 'react';

import Contactus from './Contactus/Contactus';
import Contactinfo from './Contactus/Contactinfo';
import Available from './Contactus/available';
import Joinwithus from './Contactus/Joinwithus';


import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function Contact() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
        
      <Contactus />
      <Contactinfo /> 
      <Available />
      <Joinwithus /> 
      
    </PortfolioProvider>
  );
}

export default Contact;