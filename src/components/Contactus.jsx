import React, { useState, useEffect } from 'react';

import Contactus from './Contactus/Contactus';
import Contactinfo from './Contactus/Contactinfo';
import Joinwithus from './Contactus/Joinwithus';
import Footer from './Footer/Footer'

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
      <Joinwithus /> 
      <Footer />
    </PortfolioProvider>
  );
}

export default Contact;