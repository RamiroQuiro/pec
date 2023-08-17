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
    if (flyerActivo == 8) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2);
    } 
    else  {
      activarFlyer(flyerActivo + 1);
    }
  };
  const handlePreviusFlyer = () => {
    if (flyerActivo == 3) {
      activarFlyer(0);
      setCurrentStep(2);
    } else if (flyerActivo == 16) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(0);
    } else if (flyerActivo == 20) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(4);
    } else {
      activarFlyer(flyerActivo - 1);
    }
  };
  const handleNextStep = async () => {
    activarFlyer(0);
    if (flyerActivo == 2) {
      setCurrentStep(2);
      updateState({drivers:{...drivers, driver3: { step1: true } }});
    }
    if (flyerActivo == 7) {
      setCurrentStep(3);
      updateState({drivers:{...drivers,driver3: { step1: true, step2: true }} });
    }
    if (flyerActivo == 11) {
      setCurrentStep(4);
      updateState({drivers:{...drivers,driver3: { step1: true, step2: true, step3: true }} });
    }
    else if (flyerActivo == 14) {
    
      updateState({drivers:{...drivers, driver3: { step1: true, step2: true, step3: true ,step4:true}} });
    }
  };
  return (
    <div className="w-full h-full flex relative">
      <RenderFlyer />

      <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">
        {flyerActivo === 18 && (
          <>
            <DownloadCloud className="w-10 h-14 fill-primary-600 absolute bottom-2 left-[56%] cursor-pointer hover:scale-105 duration-200  " />
            <UploadCloud className=" h-14 w-12 fill-primary-600 absolute -bottom-8 left-[68%] scale-110 cursor-pointer hover:scale-125 rota-90 duration-200  " />
          </>
        )}
        {flyerActivo === 19 && (
          <>
            <div className="flex flex-col items-center h-32 cursor-pointer justify-center  absolute bottom-5 left-[45%]">
              <UploadCloud className=" w-32 fill-[#FFFF08]     hover:scale-105 rota-90 duration-200  " />
              <p className="text-sm text-white font-medium -mt-8">
                Subir Grafica
              </p>
            </div>
            <div className="flex flex-col items-center h-32 cursor-pointer justify-center  absolute -bottom-5 right-[15%]">
            <p className="text text-white font-medium ">Ver un Ejemplo</p>
            <p className="text-sm text-white font-medium ">Click Aqui</p>
            </div>
          </>
        )}

        <SvgNextVideo
          onClick={handlePreviusFlyer}
          className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer  "
        />
        {flyerActivo == 2 || flyerActivo == 7 || flyerActivo == 11|| flyerActivo == 14 ? (
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
