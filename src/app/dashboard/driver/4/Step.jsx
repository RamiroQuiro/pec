function Step({ number, isCurrent ,span,isComplete}) {
  return (
    <div className="flex items-stretch justify gap-2 relative">
      <div className="flex flex-col w-32 gap-5 h-32">
        <div
          className={`${
            isComplete?
            " bg-primary-100 duration-300 text-white"
            :
            isCurrent
              ? " bg-primary-800 duration-300 text-white"
              : " bg-primary-textGris/10  text-primary-textGris"
          }  flex w-8 flex-initial items-center justify-center h-8 rounded-full   text-xs font-bold mx-auto`}
        >
          {number}
        </div>{" "}
        <span
        className={`${ isComplete?
          " text-primary-100 duration-300 "
          :
            isCurrent
              ? " text-primary-800 duration-300 "
              : " text-primary-textGris"
          }  flex flex-initial items-center text-center  -bottom-10 justify-center   text-xs font-light mx-auto`}
        >{span}</span>
      </div>
      {number < 4 && (
        <div
        style={{ width:100}}
        className={`${ isComplete?
          " bg-primary-100 duration-300/50 "
          :
        "bg-primary-textGris/10"
        } h-0.5  my-2 mx-auto`}
        />
      )}
    </div>
  );
}

const step=[
    {
        id:1,
        span:"Objetivo",
    },
    {
        id:2,
        span:"Lo que tienes que saber acerca del liderazgo en el equipo comercial",
    },
    {
        id:3,
        span:"Armemos tu modelo de liderazgo comercial",
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
