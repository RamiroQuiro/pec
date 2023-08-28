"use client";
import {
  DownloadCloud,
  SVGDiskette,
  SvgNextVideo,
  UploadCloud,
} from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import RenderFlyer from "./RenderFlyer";
import { shallow } from "zustand/shallow";

import { useRouter } from "next/navigation";
import LoadingCss from "@/app/componentes/LoadingCss";
import { useState } from "react";

export default function Flyer1() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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
      updateState: state.updateState,
      setCurrentStep: state.setCurrentStep,
      flyerActivo: state.flyerActivo,
      activarFlyer: state.activarFlyer,
      activeStep: state.activeStep,
      cargarSubPantallas: state.cargarSubPantallas,
    }),
    shallow
  );

  const handleNextFlyer = () => {
    if (flyerActivo == 14) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2);
    } else if (flyerActivo == 21) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(3);
    } else {
      activarFlyer(flyerActivo + 1);
    }
  };
  const handlePreviusFlyer = () => {
    activarFlyer(flyerActivo - 1);
  };
  const handleNextStep = async () => {
    activarFlyer(0);
    if (flyerActivo == 4) {
      setCurrentStep(2);
      updateState({
        drivers: { ...drivers, driver7: { ...drivers.driver7, step1: true } },
      });
    }
    if (flyerActivo == 10) {
      setCurrentStep(3);
      cargarSubPantallas(0);
      updateState({
        drivers: { ...drivers, driver7: { ...drivers.driver7, step2: true } },
      });
    } else if (flyerActivo == 16) {
      setIsLoading(true);
      try {
        updateState({
          drivers: { ...drivers, driver7: { ...drivers.driver7, step3: true } },
        });
        setCurrentStep(1);
        activarFlyer(0);
        router.push("/dashboard/driver/7/drivercomplet");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      {isLoading && <LoadingCss />}
      <div className="w-full h-full flex relative">
        <RenderFlyer />

        <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">
          <SvgNextVideo
            onClick={handlePreviusFlyer}
            className="w-14 h-14 fill-primary-tonoBlanco rotate-180 cursor-pointer  "
          />
          {flyerActivo == 4 || flyerActivo == 10 || flyerActivo == 16 ? (
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
    </>
  );
}
