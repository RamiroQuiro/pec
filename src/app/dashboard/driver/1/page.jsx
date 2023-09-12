"use client";
import SectionDash from "../../component/SectionDash";
import ContenedorPasos from "./ContenedorPasos";
import { contextUser } from "@/context/contextUser";
import Flyer1 from "./Flyer1";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Driver1() {
  const path = usePathname();
  const router = useRouter();
  const driver = path.split("/")[3];

  const { flyerActivo, drivers, videoBienvenida } = contextUser((state) => ({
    flyerActivo: state.flyerActivo,
    drivers: state.drivers,
    videoBienvenida: state.formCarga.videoBienvenida,
  }));
  useEffect(() => {
    if (!driver) return;
    if (!videoBienvenida) {
      router.push(`/dashboard/`);
    }
  }, [driver]);

  return (
    <SectionDash>
      <div className="bg-white mt-20 md:mt-0 md:w-[78vw] w-full md:min-h-[85vh] md:h-[95vh] h-auto md:absolute right-10 top-24  flex flex-col items-center justify-center border shadow-md">
        {flyerActivo > 0 ? (
          <Flyer1 />
        ) : (
          <>
            <h2 className="text-2xl text-neutral-800 mt-8 font-medium">
              Empatía con la Empresa
            </h2>

            <ContenedorPasos />
          </>
        )}
      </div>
    </SectionDash>
  );
}
