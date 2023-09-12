"use client";
import { SvgHome, SVGPantalla } from "@/app/componentes/SVGComponent";
import { usePathname } from "next/navigation";
export default function NavBarDash() {


  const path = usePathname();
  const driver = path.split("/")[3];
  // const driver = contextUser((state) => state.driver);
  return (
    <nav className="h-20 absolute bg-primary-tonoBlanco top-0 right-0 md:w-[83%] w-full border shadow-md z-40">
      <div className="flex items-center justify-between h-full md:px-10 px-5 gap-3">
        <div className="md:px-3 py-1">
          {!path.includes("driver") ? (
            <SvgHome className="md:w-8 md:h-8 w-6 h-6" />
          ) : (
            <SVGPantalla className="md:w-8 md:h-8 w-6 h-6" />
          )}
        </div>
        <div className=" text-primary-200 md:text-xl text-center md:w-1/3 font-semibold md:tracking-wide  ">
          <h2>
            {!path.includes("driver")
              ? "PEC (Plan Estrategico Comercial)"
              : `Driver ${driver}`}
          </h2>
          {!driver && <h3 className="capitalize">Ahora mas cerca de Tí</h3>}
        </div>
        <div>
          <p className="md:text-xl font-medium">Bienvenido</p>
        </div>
      </div>
    </nav>
  );
}
