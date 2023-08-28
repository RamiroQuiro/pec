"use client";
import SectionDash from "../../component/SectionDash";
import ContenedorPasos from "./ContenedorPasos";
import { contextUser } from "@/context/contextUser";
import Flyer1 from "./Flyer1";

export default function Driver1() {
  const { flyerActivo, drivers } = contextUser((state) => ({
    flyerActivo: state.flyerActivo,
    drivers: state.drivers,
  }));

  return (
    <SectionDash>
      <div className="bg-white md:w-[78vw] md:min-h-[85vh] md:h-[95vh] absolute right-10 top-24  flex flex-col items-center justify-center border shadow-md">
            {
              flyerActivo>0 ?
              <Flyer1/>
              :
           (   <>
            <h2 className='text-2xl text-neutral-800 mt-8 font-medium'>Empatía con la Empresa</h2>
            
            <ContenedorPasos />
          </>
        )}
      </div>
    </SectionDash>
  );
}
