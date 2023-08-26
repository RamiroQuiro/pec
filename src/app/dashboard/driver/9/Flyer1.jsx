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
   
      activarFlyer(flyerActivo + 1);
    
  };
  const handlePreviusFlyer = () => {
   
      activarFlyer(flyerActivo - 1);
    
  };
  const handleNextStep = async () => {
    activarFlyer(0);
    if (flyerActivo == 3) {
      setCurrentStep(2);
      updateState({drivers:{...drivers, driver9: {...drivers.driver9, step1: true } }});
    }
    if (flyerActivo == 11) {
      setCurrentStep(3);
      cargarSubPantallas(0)
      updateState({drivers:{...drivers,driver9: { ...drivers.driver9, step2: true }} });
    }  if (flyerActivo == 15) {
      setCurrentStep(4);
      cargarSubPantallas(0)
      updateState({drivers:{...drivers,driver9: { ...drivers.driver9, step3: true }} });
    }
  
    else if (flyerActivo == 18) {
    
      updateState({drivers:{...drivers, driver9: { ...drivers.driver9, step4: true }} });
    }
  };
  return (
    <div className="w-full h-full flex relative">
      <RenderFlyer />

      <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">

        <SvgNextVideo
          onClick={handlePreviusFlyer}
          className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer  "
        />
        {flyerActivo == 3 || flyerActivo == 11 || flyerActivo == 15|| flyerActivo == 18 ? (
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
