"use client";
import { contextUser } from "@/context/contextUser";
import SectionDash from "../../component/SectionDash";
import ContenedorPasos from "./ContenedorPasos";
import { usePathname, useRouter } from "next/navigation";
import Flyer1 from "./Flyer1";
import { usePreviousDriver } from "@/hook/usePreviousDriver";
import { useEffect } from "react";
import ContenedorDriverPage from "../../component/ContenedorDriverPage";

export default function Driver4() {
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
    <ContenedorDriverPage>
        {flyerActivo > 0 ? (
          <Flyer1 />
        ) : (
          <>
            <h2 className="text-2xl text-neutral-800 mt-8 font-medium">
              {" Empatía con el Líder"}
            </h2>

            <ContenedorPasos />
          </>
        )}
    </ContenedorDriverPage>
  );
}
