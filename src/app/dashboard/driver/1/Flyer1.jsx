
import { SVGDiskette, SvgNextVideo } from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import RenderFlyer from "./RenderFlyer";

export default function Flyer1() {
  const flyerActivo = contextUser((state) => state.flyerActivo);
  const activarFlyer = contextUser((state) => state.activarFlyer);
  const activeStep = contextUser((state) => state.activeStep);
 
  const setCurrentStep=contextUser((state)=>state.setCurrentStep)  

  const handleNextFlyer = () => {
    activarFlyer(flyerActivo + 1);
  };
  const handlePreviusFlyer = () => {
    activarFlyer(flyerActivo - 1);
};
const handleNextStep=()=>{
      activarFlyer(0);
    setCurrentStep(2)
    activeStep({driver1:{step1:true}})
  }
  return (
    <div className="w-full h-full flex relative">
   <RenderFlyer/>

      <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">
        <SvgNextVideo
          onClick={handlePreviusFlyer}
          className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer stroke-primary-textGris/50 "
        />
       {flyerActivo==2?
       <SVGDiskette
       onClick={handleNextStep}
          className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer stroke-primary-textGris/50"
       />
       
       : <SvgNextVideo
          onClick={handleNextFlyer}
          className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer stroke-primary-textGris/50"
        />}
      </div>
    </div>
  );
}
