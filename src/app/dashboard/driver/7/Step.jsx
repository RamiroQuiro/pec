function Step({ number, isCurrent ,span,isComplete}) {
  return (
    <div className="flex w-full md:items-stretch   md:justify-normal gap-2 relative ">
      <div className="flex flex-col md:w-32 w-full items-center gap-5 h-32 mx-auto ">
              <div
                className={`${
                  isComplete
                    ? " bg-primary-100 duration-300 text-white"
                    : isCurrent
                    ? " bg-primary-800 duration-300 text-white"
                    : " bg-primary-textGris/10  text-primary-textGris"
                }  flex w-8 flex-initial items-center justify-center h-8 rounded-full   text-xs font-bold mx-auto`}
              >
                {number}
              </div>{" "}
              <span
                className={`${
                  isComplete
                    ? " text-primary-100 duration-300 "
                    : isCurrent
                    ? " text-primary-800 duration-300 "
                    : " text-primary-textGris"
                }  flex flex-initial items-center text-center  -bottom-10 justify-center  text-xs font-light mx-auto`}
              >
                {span}
              </span>
            </div>
      {number < 3 && (
        <div
        style={{ width:100}}
        className={`${ isComplete?
          " bg-primary-100 duration-300/50 "
          :
        "bg-primary-textGris/10"
        } h-0.5  my-2 mx-auto hidden md:block`}
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
        span:"Lo que tienes que saber acerca de los esquemas de motivación al equipo comercial.",
    },
    {
        id:3,
        span:"Armemos tu Player Project Life",
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
