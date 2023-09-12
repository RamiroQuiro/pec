"use client";
import { contextUser } from "@/context/contextUser";
import Link from "next/link";
import React from "react";
import { shallow } from "zustand/shallow";

const LinksSidebarDachboard = ({ name, path, icon, params, driverPrevius }) => {
  const { setCurrentStep, activarFlyer, cargarSubPantallas, isDriverComplete } =
    contextUser(
      (state) => ({
        setCurrentStep: state.setCurrentStep,
        flyerActivo: state.flyerActivo,
        activarFlyer: state.activarFlyer,
        activeStep: state.activeStep,
        cargarSubPantallas: state.cargarSubPantallas,
        isDriverComplete: state.isDriverComplete,
      }),
      shallow
    );

  const resetConfig = () => {
    activarFlyer(0);
    setCurrentStep(1);
    cargarSubPantallas(0);
  };

  const isComplete =
    driverPrevius >= 2 ? isDriverComplete(driverPrevius - 1) : true;

  return (
    <Link
      href={isComplete ? path : "#"}
      onClick={isComplete ? resetConfig : undefined}
      className={` ${
        !isComplete
          ? "fill-gray-200 text-gray-200 cursor-default"
          : params == path
          ? "text-primary-100 font-bold ml-1 fill-primary-100"
          : "fill-primary-textGris text-primary-textGris"
      } flex items-center justify-normal gap-3 hover:text-primary-100 w-1/3 md:w-auto font-semibold group cursor-pointer duration-300`}
    >
      <div
        className={` ${
          !isComplete
            ? "fill-gray-300 text-gray-300 hover:text-gray-300"
            : params == path
            ? "text-primary-100 font-bold ml-1 fill-primary-100"
            : "fill-primary-textGris text-primary-textGris group-hover:fill-primary-100"
        } flex items-center justify-normal gap-3  font-semibold group cursor-pointer duration-300`}
      >
        {icon}
      </div>
      <div className={` ${
          !isComplete
            ? "fill-gray-300 text-gray-300 hover:text-gray-300"
            : params == path
            ? "text-primary-100 font-bold ml-1 fill-primary-100 hover:text-primary-100"
            : "fill-primary-textGris text-primary-textGris hover:text-primary-100"
        } md:text-xs`}
      >{name}</div>
    </Link>
  );
};

export default LinksSidebarDachboard;
