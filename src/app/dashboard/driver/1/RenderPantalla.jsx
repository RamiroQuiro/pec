import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const steps = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4
};

export default function RenderPantalla({ currentStep }) {
  const Step = steps[currentStep];
  return <Step />;
}
