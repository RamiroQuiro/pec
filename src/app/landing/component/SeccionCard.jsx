import React from 'react'

export  default function TarjetaInfomativa  ({ h3, children })  {
    return (
      <div className="flex-auto md:border-r md:border-b-0 border-b pb-10 md:pb-0 border-primary-textGris/40  text-center md:w-[30%] w-full  flex flex-col items-center justify-center px-4 md:text-sm">
        <h3 className="text-xl uppercase font-semibold my-4">{h3}</h3>
        <div className="md:px-5 text-center font-medium leading-relaxed flex flex-col items-center justify-evenly flex-grow">
          {children}
        </div>
      </div>
    );
  };