import React, { useState, useEffect } from 'react';
import Aboutushero from './Aboutus/Aboutushero';
import Aboutuswhoweare_R from './Aboutus/Aboutuswhoweare_R';
import Aboutuswhoweare_L from './Aboutus/Aboutuswhoweare_L';
import Aboutuswhatwedo from './Aboutus/Aboutuswhatwedo';
import Features_L from './Features/Features_L';
import Features_R from './Features/Features_R';
import Features_LL from './Features/Features_LL';
import Willbeavailableon from './Contactus/available';
import Sellwithus from './Contactus/Joinwithus';

import { PortfolioProvider } from '../context/context';
import {aboutData} from '../mock/data';

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      
      <Aboutushero /> 
      <Aboutuswhoweare_R /> 
      <Aboutuswhoweare_L /> 
      <Aboutuswhatwedo /> 
      <Features_L /> 
      <Features_R /> 
      <Features_LL /> 
      <Willbeavailableon />
      <Sellwithus />

      
    </PortfolioProvider>
  );
}

export default App;