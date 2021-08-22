import React, {useState} from 'react';
import Forms from './components/FormSellWithusLayout';
import { useForm, ValidationError } from '@formspree/react';
import { Modal } from './components/Modal/Modal';
 
export const multiStepContext =React.createContext();
const StepContext= () => {
    

    const [currentStep, setStep]=useState(1);
    const [userData, setUserData]=useState([]);
    const [finalData, setFinalData]=useState([]);
    const [showModal, setShowModal] = useState(true);
   
    const [state, handleSubmit] = useForm("mayalanl");
   if (state.succeeded) {
           submitData();
    }
     
    function submitData(){
       if (state.succeeded) {
        return(
            <Modal showModal={showModal} setShowModal={setShowModal} />
           );
       }
        
    }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData,submitData,state,handleSubmit,showModal,setShowModal}}>
                <Forms />
                { submitData()}
            </multiStepContext.Provider>
            
        </div>
    )
}
export default StepContext;
