"use client";
import { contextUser } from "@/context/contextUser";
import SectionDash from "../../component/SectionDash";
import ContenedorPasos from "./ContenedorPasos";
import { usePathname, useRouter } from "next/navigation";

export default function Driver2() {
  const path = usePathname();
  const router = useRouter();
  const driver = path.split("/")[3];

  const { flyerActivo, currentDriver, isDriverComplete } = contextUser(
    (state) => ({
      flyerActivo: state.flyerActivo,
      currentDriver: state.currenbtDriver,
      isDriverComplete: state.isDriverComplete,
    })
  );
  const completadoDriverAnterior = isDriverComplete(driver - 1);

  if (!completadoDriverAnterior) {
    router.push(`/dashboard/driver/${driver - 1}`);
  } else
    return (
      <SectionDash>
        <div className="bg-white md:w-[78vw] md:h-[85vh] absolute right-10 top-24  flex flex-col items-center justify-center border shadow-md">
          <h2 className="text-2xl text-neutral-800 mt-8 font-medium">
            Empatía con la Producto
          </h2>

          <ContenedorPasos />
        </div>
      </SectionDash>
    );
}
