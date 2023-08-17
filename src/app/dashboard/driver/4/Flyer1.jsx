import {
  DownloadCloud,
  SVGDiskette,
  SvgNextVideo,
  UploadCloud,
} from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import RenderFlyer from "./RenderFlyer";
import { shallow } from "zustand/shallow";

export default function Flyer1() {
  const {
    setCurrentStep,
    activarFlyer,
    activeStep,
    cargarSubPantallas,
    flyerActivo,
    updateState,
    drivers,
  } = contextUser(
    (state) => ({
      drivers: state.drivers,
      updateState:state.updateState,
      setCurrentStep: state.setCurrentStep,
      flyerActivo: state.flyerActivo,
      activarFlyer: state.activarFlyer,
      activeStep: state.activeStep,
      cargarSubPantallas: state.cargarSubPantallas,
    }),
    shallow
  );

  const handleNextFlyer = () => {
    if (flyerActivo == 41) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2)
    }
    else  {
      activarFlyer(flyerActivo + 1);}
    
  };
  const handlePreviusFlyer = () => {
    // if (flyerActivo == 3) {
    //   activarFlyer(0);
    //   setCurrentStep(2);
    // } else if (flyerActivo == 16) {
    //   activarFlyer(0);
    //   setCurrentStep(3);
    //   cargarSubPantallas(0);
    // } else if (flyerActivo == 20) {
    //   activarFlyer(0);
    //   setCurrentStep(3);
    //   cargarSubPantallas(4);
    // } else {
      activarFlyer(flyerActivo - 1);
    // }
  };
  const handleNextStep = async () => {
    activarFlyer(0);
    if (flyerActivo == 2) {
      setCurrentStep(2);
      updateState({drivers:{...drivers, driver4: { step1: true } }});
    }
    if (flyerActivo == 39) {
      setCurrentStep(3);
      cargarSubPantallas(0)
      updateState({drivers:{...drivers,driver4: { step1: true, step2: true }} });
    }
  
    // else if (flyerActivo == 14) {
    
    //   updateState({drivers:{...drivers, driver4: { step1: true, step2: true, step3: true ,step4:true}} });
    // }
  };
  return (
    <div className="w-full h-full flex relative">
      <RenderFlyer />

      <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">

        <SvgNextVideo
          onClick={handlePreviusFlyer}
          className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer  "
        />
        {flyerActivo == 2 || flyerActivo == 39 ? (
          <SVGDiskette
            onClick={handleNextStep}
            className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer "
          />
        ) : (
          <SvgNextVideo
            onClick={handleNextFlyer}
            className="w-14 h-14 fill-primary-tonoBlanco cursor-pointer "
          />
        )}
      </div>
    </div>
  );
}
