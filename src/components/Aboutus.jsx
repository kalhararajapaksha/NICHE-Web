import React, { useState, useEffect } from 'react';
import Aboutushero from './Aboutus/Aboutushero';
import Aboutuswhoweare_R from './Aboutus/Aboutuswhoweare_R';
import Aboutuswhoweare_L from './Aboutus/Aboutuswhoweare_L';
import Aboutuswhatwedo from './Aboutus/Aboutuswhatwedo';

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
      
    </PortfolioProvider>
  );
}

export default App;