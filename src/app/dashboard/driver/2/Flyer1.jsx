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
    if (flyerActivo == 10) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2);
      updateState({
        drivers: { ...drivers, driver2: { ...drivers.driver2, step2: true } },
      });
    } else if (flyerActivo == 13) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2);
      updateState({
        drivers: { ...drivers, driver2: { ...drivers.driver2, step2: true } },
      });
    } else if (flyerActivo == 23) {
      activarFlyer(0);
      setCurrentStep(4);
      cargarSubPantallas(42);
      updateState({
        drivers: { ...drivers, driver2: { ...drivers.driver2, step3: true } },
      });
    } else {
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
    if (flyerActivo == 2) {
      activarFlyer(0);
      setCurrentStep(2);
      updateState({
        drivers: { ...drivers, driver2: { ...drivers.driver2, step1: true } },
      });
    }
    if (flyerActivo == 10) {
      activarFlyer(0);
      setCurrentStep(3);
      updateState({
        drivers: { ...drivers, driver2: { ...drivers.driver2, step2: true } },
      });
    }
    if (flyerActivo == 19) {
      activarFlyer(0);
      setCurrentStep(4);
      updateState({
        drivers: { ...drivers, driver2: { ...drivers.driver2, step3: true } },
      });
    }
    if (flyerActivo == 22) {
      setIsLoading(true);
      try {
        updateState({
          drivers: { ...drivers, driver2: { ...drivers.driver2, step4: true } },
        });
        setCurrentStep(1);
        activarFlyer(0);
        router.push("/dashboard/driver/2/drivercomplet");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <div className="w-full h-full flex relative">
        {
          isLoading&&<LoadingCss/>
        }
        <RenderFlyer />

        <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">
          {flyerActivo === 18 && (
            <>
              <DownloadCloud className="w-10 h-14 fill-primary-600 absolute md:bottom-2 md:left-[56%] left-1/3 cursor-pointer hover:scale-105 duration-200  " />
              <UploadCloud className=" h-14 w-12 fill-primary-600 absolute md:-bottom-8 md:left-[68%] left-1/2 scale-110 cursor-pointer hover:scale-125 rota-90 duration-200  " />
            </>
          )}
          {flyerActivo === 19 && (
            <>
              <div className="flex flex-col items-center h-32 cursor-pointer justify-center  absolute bottom-5 left-1/3 md:left-[45%]">
                <UploadCloud className=" md:w-32 fill-[#FFFF08]     hover:scale-105 rota-90 duration-200  " />
                <p className="text-sm md:text-white text-primary-textGris font-medium -mt-8">
                  Subir Grafica
                </p>
              </div>
              <div className="flex flex-col items-center h-32 cursor-pointer justify-center  absolute md:-bottom-5 left-1/3 md:right-[15%]">
                <p className="text md:text-white text-primary-textGris font-medium ">Ver un Ejemplo</p>
                <p className="text-sm md:text-white text-primary-textGris font-medium ">Click Aqui</p>
              </div>
            </>
          )}

          <SvgNextVideo
            onClick={handlePreviusFlyer}
            className="w-14 h-14 md:fill-primary-tonoBlanco fill-gray-500 rotate-180 cursor-pointer   "
          />
          {flyerActivo == 2 ||
          flyerActivo == 10 ||
          flyerActivo == 19 ||
          flyerActivo == 22 ? (
            <SVGDiskette
              onClick={handleNextStep}
              className="w-14 h-14 md:fill-primary-tonoBlanco fill-gray-500 cursor-pointer "
            />
          ) : (
            <SvgNextVideo
              onClick={handleNextFlyer}
              className="w-14 h-14 md:fill-primary-tonoBlanco fill-gray-500 cursor-pointer md:border-none "
            />
          )}
        </div>
      </div>
    </>
  );
}
