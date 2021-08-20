import React, {useState} from 'react';
import Forms from './components/FormSellWithusLayout';
 
export const multiStepContext =React.createContext();
const StepContext= () => {
    const [currentStep, setStep]=useState(1);
    const [userData, setUserData]=useState([]);
    const [finalData, setFinalData]=useState([]);

    function submitData(){
         setFinalData(finalData=>[...finalData,userData]);
         setUserData('');
         setStep(6);
    }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
                <Forms />
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext;
