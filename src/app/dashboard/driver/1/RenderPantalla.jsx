import React from 'react'
import Step1 from './Step1';

export default function RenderPantalla({currentStep} ) {
  
    switch (currentStep) {
        case 1:
            return <Step1/>
            break;
    
        default:
            break;
    }
}
