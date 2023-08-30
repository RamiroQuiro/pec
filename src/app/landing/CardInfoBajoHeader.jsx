import React from "react";


const TarjetaInfomativa=({h3,children,onClick})=>{
   return <div className="flex-auto border-r border-primary-textGris/40 w-[30%]  flex flex-col items-center justify-center px-4 text-sm">
    <h3 className="text-xl uppercase font-semibold my-4">{h3}</h3>
    <p className="px-5">{children}</p>
    <button
    onClick={onClick}
    className=" border-primary-200 border text-primary-200  capitalize px-3 py-2 text-lg mt-16 hover:bg-primary-200 hover:border-white hover:text-white duration-300">
    Mas Información
    </button>
    </div>
}

export default function CardInfoBajoHeader() {


  return (
    <section className="h-screen w-11/12 container flex items-center justify-center py-24 text-primary-textGris mt-12">
      <div className="h-4/6 m-auto w-full container flex items-stretch justify-center flex-wrap text-primary-textGris">
        <div className="flex-auto border-r border-primary-textGris/40 w-[30%] flex flex-col items-center justify-center  px-4 text-sm">
          <h3 className="text-xl uppercase font-semibold my-4">Bienvenidos</h3>
          <div className=" rounded border">
            <video src="/landing.mp4"  autoPlay controls className="rounded shadow-md"></video>
          </div>
        </div>
        <TarjetaInfomativa
        h3={"Ver mi PEC"}
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            repudiandae fugiat unde repellendus debitis amet id eius est
            voluptate iure, labore delectus distinctio dolorem officiis
            molestias harum sunt cum blanditiis. Laboriosam quod ratione, iste
            eos aliquid expedita et a tempore facilis iure reiciendis
            consequuntur sapiente voluptatem. Beatae sapiente accusantium
            obcaecati tempora, quos illum mollitia veritatis debitis, impedit
            totam itaque sed! 
        </TarjetaInfomativa>
      
      
      
      </div>
    </section>
  );
}
