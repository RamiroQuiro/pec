import { SVGDiskette, SvgNextVideo } from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import RenderFlyer from "./RenderFlyer";

export default function Flyer1() {
  const flyerActivo = contextUser((state) => state.flyerActivo);
  const activarFlyer = contextUser((state) => state.activarFlyer);
  const activeStep = contextUser((state) => state.activeStep);
  const cargarSubPantallas = contextUser((state) => state.cargarSubPantallas);

  const setCurrentStep = contextUser((state) => state.setCurrentStep);

  const handleNextFlyer = () => {
    if (flyerActivo == 19) {
        activarFlyer(0)
      setCurrentStep(3);
      cargarSubPantallas(2)
      activeStep({ driver1: { step1: true, step2: true,  } });
    }else{

        activarFlyer(flyerActivo + 1);
    }
  };
  const handlePreviusFlyer = () => {
    if (flyerActivo == 3) {
      activarFlyer(0);
      setCurrentStep(2);
    } else {
      activarFlyer(flyerActivo - 1);
    }
  };
  const handleNextStep = () => {
    activarFlyer(0);
    if (flyerActivo == 2) {
      setCurrentStep(2);
      activeStep({ driver1: { step1: true } });
    }
    if (flyerActivo == 15) {
      setCurrentStep(3);
      activeStep({ driver1: { step1: true, step2: true } });
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
        {flyerActivo == 2 || flyerActivo == 15 || flyerActivo == 24 ? (
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
