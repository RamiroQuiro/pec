function Step({ number, isCurrent ,span}) {
  return (
    <div className="flex items-stretch justify gap-2 relative">
      <div className="flex flex-col w-32 gap-5 h-32">
        <div
          className={`${
            isCurrent
              ? " bg-primary-800 duration-300 text-white"
              : " bg-primary-textGris/5"
          }  flex w-8 flex-initial items-center justify-center h-8 rounded-full text-primary-textGris text-xs font-bold mx-auto`}
        >
          {number}
        </div>{" "}
        <span
        className={`${
            isCurrent
              ? " text-primary-800 duration-300 "
              : " text-primary-textGris"
          }  flex flex-initial items-center text-center  -bottom-10 justify-center  text-primary-textGris text-xs font-light mx-auto`}
        >{span}</span>
      </div>
      {number < 4 && (
        <div
        style={{ width:100}}
        className=" h-0.5  bg-primary-textGris/10 my-2 mx-auto"
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
        span:"Lo que tienes que saber sobre cultura organizacional",
    },
    {
        id:3,
        span:"Arma tu propia cultura organizacional",
    },
    {
        id:4,
        span:"Referencias y lectura",
    },
]

export function Stepper({ currentStep }) {
  return (
    <div className="w- flex items-center justify-between mx-auto h">
      {step.map((stepNumber) => (
        <Step
          key={stepNumber.id}
          number={stepNumber.id}
          span={stepNumber.span}
          isCurrent={stepNumber.id === currentStep}
        />
      ))}
    </div>
  );
}
