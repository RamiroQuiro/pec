import Step from "../../component/ContenedorStep";

const step=[
    {
        id:1,
        span:"Objetivo",
    },
    {
        id:2,
        span:"Lo que tienes que saber acerca del mercado",
    },
    {
        id:3,
        span:"Analicemos tu mercado",
    },
    {
        id:4,
        span:"Referencias y lectura",
    },
]

export function Stepper({ currentStep ,isComplete}) {
  return (
    <div className="w- flex items-center justify-between mx-auto h">
      {step.map((stepNumber) => {
        
        return <Step
        isComplete={isComplete[`step${stepNumber?.id}`]}
          key={stepNumber.id}
          number={stepNumber.id}
          span={stepNumber.span}
          isCurrent={stepNumber.id === currentStep }
        />
      })}
    </div>
  );
}
