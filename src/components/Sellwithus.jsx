import React, { useState, useEffect } from 'react';

import Sellwithushero from './Sellwithus/sellwithushero';
import Sellwithusinfo from './Sellwithus/sellwithusinfo';
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
        
      <Sellwithushero />
      <Sellwithusinfo /> 
      <Available />
      <Joinwithus /> 
      
    </PortfolioProvider>
  );
}

export default Contact;