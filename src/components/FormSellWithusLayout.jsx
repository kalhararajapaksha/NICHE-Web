import React,{useContext} from 'react';
import SecondStep from './Forms/SecondStep';
import ThirdStep from './Forms/ThirdStep';
import FourthStep from './Forms/FourthStep';
import Fifth from './Forms/FiveStep';
import Sixth from './Forms/SixthStep';
import {multiStepContext} from '../StepContext';
import Form from 'react-bootstrap/Form'



function Forms(){
    const {handleSubmit}=useContext(multiStepContext);
    return(
          <div className="form">
            <Form onSubmit={handleSubmit}>
           <SecondStep />
           <ThirdStep />
           <FourthStep />
           <Fifth />
           </Form>
           
          </div>
    );
}
export default Forms;