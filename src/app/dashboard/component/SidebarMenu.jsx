
"use client"
import { SvgHome, SVGPantalla } from "@/app/componentes/SVGComponent";
import { contextUser } from "@/context/contextUser";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { shallow } from "zustand/shallow";

const LinksSidebarDachboard = ({ name, path, icon }) => {


const params=usePathname()
const {
  setCurrentStep,
  activarFlyer,
  cargarSubPantallas,
} = contextUser(
  (state) => ({
    setCurrentStep: state.setCurrentStep,
    flyerActivo: state.flyerActivo,
    activarFlyer: state.activarFlyer,
    activeStep: state.activeStep,
    cargarSubPantallas: state.cargarSubPantallas,
  }),
  shallow
);

const resetConfig=()=>{
  activarFlyer(0);
  setCurrentStep(1);
  cargarSubPantallas(0);
}
  return (
    <Link
      href={path}
      onClick={resetConfig}
      className={` ${params==path? "text-primary-100 fill-primary-100":"fill-primary-textGris text-primary-textGris"} flex items-center justify-normal gap-3 hover:text-primary-100 font-semibold group cursor-pointer `}
    >
      <div className="text-xs lg:text-sm w-5 h-5">{icon}</div>
      <div className="text-xs">{name}</div>
    </Link>
  );
};
export default function SidebarMenu() {
    const links = [
        {
          name: "Bienvenidos",
          path: "/dashboard",
          icon: (
            <SvgHome className={`$ w-5 h-5  group-hover:fill-primary-100 fill-primary-textGris`} />
          ),
          id: 1,
        },
      ];
      
      for (let i = 1; i <= 10; i++) {
        links.push({
          name: `Driver ${i}`,
          path: `/dashboard/driver/${i}`,
          icon: (
            <SVGPantalla className="w-5 h-5   group-hover:fill-primary-100 fill-primary-textGris" />
          ),
          id: i + 1,
        });
      }
      
  return (
    <div className="flex flex-col flex-shrink items-start pl-2 justify-center gap-5 w-10/12 mx-auto pb-5">
      {links?.map((link) => (
        <LinksSidebarDachboard
          name={link.name}
          path={link.path}
          key={link.id}
          icon={link.icon}
        />
      ))}
    </div>
  );
}
