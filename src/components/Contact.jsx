import React, { useState, useEffect } from 'react';
import About from './About/About';


import { PortfolioProvider } from '../context/context';

import {aboutData} from '../mock/data';

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {  
    setAbout({ ...aboutData });
  }, []);

  return (
    <PortfolioProvider value={{about}}>
      <Header />
      <About />   
    </PortfolioProvider>
  );
}

export default App;