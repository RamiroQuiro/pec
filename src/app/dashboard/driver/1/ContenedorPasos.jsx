"use client"
import { useState } from "react";
import { Stepper } from "./Step";
import RenderPantalla from "./RenderPantalla";
import { contextUser } from "@/context/contextUser";
export default function ContenedorPasos() {
const {currentStep,user}=contextUser((state)=>({
  currentStep:state.currentStep,
  user:state.user
}))  
const setCurrentStep=contextUser((state)=>state.setCurrentStep)  
    const handleNext = () => {
      setCurrentStep((step) => step + 1);
    };
  
    const handleBack = () => {
      setCurrentStep((step) => step - 1);
    };
  

    return (
      <div className="w-10/12 h-full flex-grow items-center justify-between py-10 flex flex-col">
        <Stepper currentStep={currentStep} />
        <div className="rounded-lg border-2 h-full flex-grow w-full">
          {/* Aquí puedes mostrar el contenido del paso actual */}
         <RenderPantalla currentStep={currentStep}  />


        </div>
        {/* <div className="w-full flex items-center justify-between">
          {currentStep > 1 && <button onClick={handleBack}>Atrás</button>}
          {currentStep < 4 && <button onClick={handleNext}>Siguiente</button>}
        </div> */}
      </div>
    );
  }
  