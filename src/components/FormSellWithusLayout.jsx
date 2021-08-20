import React,{useContext} from 'react';
import FirstStep from './Forms/FirstStep';
import SecondStep from './Forms/SecondStep';
import ThirdStep from './Forms/ThirdStep';
import FourthStep from './Forms/FourthStep';
import Fifth from './Forms/FiveStep';
import Sixth from './Forms/SixthStep';
import {Stepper,StepLabel,Step} from '@material-ui/core';
import {multiStepContext} from '../StepContext';


function Form(){
      
    const {currentStep, finalData} = useContext(multiStepContext);
    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
            case 4:
                return <FourthStep />
            case 5:
                return <Fifth />
            case 6:
                return <Sixth />
        }
    }

    return(
          <div className="form">
              <header className="form-h">
                  <div>
                  <Stepper style={{width:'18%'}} activeStep={currentStep - 1} orientation="horizontal" >
                      <Step>
                          <StepLabel>

                          </StepLabel>
                      </Step>
                      <Step>
                          <StepLabel>
                              
                          </StepLabel>
                      </Step>
                      <Step>
                          <StepLabel>
                              
                          </StepLabel>
                      </Step>
                      <Step>
                          <StepLabel>
                              
                          </StepLabel>
                      </Step>
                      <Step>
                          <StepLabel>
                              
                          </StepLabel>
                      </Step>
                      <Step>
                          <StepLabel>
                              
                          </StepLabel>
                      </Step>

                  </Stepper>
                  </div>
                  { showStep(currentStep)}
        
              </header>
          </div>
    );
}
export default Form;