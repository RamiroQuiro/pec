
function Step({ number, isCurrent }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <div

     className= "flex w-8 flex-initial items-center justify-center h-8 rounded-full bg-primary-textGris/10 text-primary-textGris text-xs font-bold mx-auto"
      >
        {number}
      </div> {number < 4 && (
        <div
        style={{
            width:100
        }}
        className=" h-0.5  bg-primary-textGris/10 my-2 mx-auto"
        />
      )}
     
    </div>
  );
}

export function Stepper({ currentStep }) {
  return (
    <div className="w-7/12 flex items-center justify-between mx-auto h" >
      {[1, 2, 3, 4].map((stepNumber) => (
        <Step key={stepNumber} number={stepNumber} isCurrent={stepNumber === currentStep} />
      ))}
    </div>
  );
}

