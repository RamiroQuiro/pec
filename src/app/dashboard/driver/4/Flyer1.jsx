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
    if (flyerActivo == 41) {
      activarFlyer(0);
      setCurrentStep(3);
      cargarSubPantallas(2);
    } else {
      activarFlyer(flyerActivo + 1);
    }
  };
  const handlePreviusFlyer = () => {
    activarFlyer(flyerActivo - 1);
  };
  const handleNextStep = async () => {
    activarFlyer(0);
    if (flyerActivo == 2) {
      setCurrentStep(2);
      updateState({
        drivers: { ...drivers, driver4: { ...drivers.driver4, step1: true } },
      });
    }
    if (flyerActivo == 39) {
      setCurrentStep(3);
      cargarSubPantallas(0);
      updateState({
        drivers: { ...drivers, driver4: { ...drivers.driver4, step2: true } },
      });
    } else if (flyerActivo == 45) {
      setIsLoading(true);
      async function updateData() {
        try {
          await updateState({
            drivers: { ...drivers, driver4: { ...drivers.driver4, step4: true } },
          });
          setCurrentStep(1);
          activarFlyer(0);
          router.push("/dashboard/driver/4/drivercomplet");
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      updateData();
    }
  };
  if (isLoading) {
    return(
     <LoadingCss/>
    ) 
   }
   else if(!isLoading){
   return (
    <>
      <div className="w-full h-full flex relative">
        <RenderFlyer />

        <div className="w-full absolute bottom-20 left-3 z-30 flex items-center justify-between px-10 gap-3">
          <SvgNextVideo
            onClick={handlePreviusFlyer}
            className="w-14 h-14 md:fill-primary-tonoBlanco fill-gray-500  cursor-pointer rotate-180  "
          />
          {flyerActivo == 2 || flyerActivo == 39 || flyerActivo == 45 ? (
            <SVGDiskette
              onClick={handleNextStep}
              className="w-14 h-14 md:fill-primary-tonoBlanco fill-gray-500  cursor-pointer   "
            />
          ) : (
            <SvgNextVideo
              onClick={handleNextFlyer}
              className="w-14 h-14 md:fill-primary-tonoBlanco fill-gray-500  cursor-pointer   "
            />
          )}
        </div>
      </div>
    </>
  );
}}
