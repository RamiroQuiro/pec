import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default function RenderPantalla({currentStep} ) {
  
    switch (currentStep) {
        case 1:
            return <Step1/>
            break;
    
        case 2:
            return <Step2/>
            break;
    
        case 3:
            return <Step3/>
            break;
    
        case 4:
            return <Step4/>
            break;
    
        default:
            break;
    }
}
