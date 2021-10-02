import React, { useState, useEffect } from 'react';

import Sellwithushero from './Sellwithus/sellwithushero';
import Sellwithusinfo from './Sellwithus/sellwithusinfo';
import Available from './Contactus/available';
import Joinwithus from './Contactus/Joinwithus';
import Sellwithus_Features from './Sellwithus/Sellwithus_Features';
import Sellwithus_testimonials from './Sellwithus/Sellwithus_testimonials';



import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function Sellwithus() {
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
      <Sellwithus_Features />
      {/* <Sellwithus_testimonials/> */}

    </PortfolioProvider>
  );
}

export default Sellwithus;