"use client";
import { contextUser } from "@/context/contextUser";
import SectionDash from "../../component/SectionDash";
import ContenedorPasos from "./ContenedorPasos";
import { usePathname, useRouter } from "next/navigation";
import Flyer1 from "./Flyer1";
import { useEffect } from "react";

export default function Driver9() {
  const path = usePathname();
  const router = useRouter();
  const driver = path.split("/")[3];

  const { flyerActivo ,isDriverComplete} = contextUser((state) => ({
    flyerActivo: state.flyerActivo,
        isDriverComplete: state.isDriverComplete,
  }));

  useEffect(() => {
    if (!driver) return;

    const previousDriver = driver - 1;
    const isPreviousDriverComplete = isDriverComplete(previousDriver);
    if (!isPreviousDriverComplete) {
      router.push(`/dashboard/driver/${previousDriver}`);
    }
    
  }, [driver]);

  return (
    <SectionDash>
      <div className="bg-white md:w-[78vw] md:min-h-[85vh] md:h-[90vh] absolute right-10 top-24  flex flex-col items-center justify-center border shadow-md">
        {flyerActivo > 0 ? (
          <Flyer1 />
        ) : (
          <>
            <h2 className="text-2xl text-neutral-800 mt-8 font-medium">
         {"Metodología de Seguimiento Efectivo"}
            </h2>

            <ContenedorPasos />
          </>
        )}
      </div>
    </SectionDash>
  );
}
