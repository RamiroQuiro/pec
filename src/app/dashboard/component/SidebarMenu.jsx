
"use client"
import { SvgHome, SVGPantalla } from "@/app/componentes/SVGComponent";

import { usePathname } from "next/navigation";
import LinksSidebarDachboard from "./LinksSidebarDachboard";

    const links = [
        {
          name: "Bienvenidos",
          path: "/dashboard",
          icon:(params,path)=> (
            <SvgHome className={`${params==path? "text-primary-100 fill-primary-100":"fill-primary-textGris text-primary-textGris"} w-5 h-5  group-hover:fill-primary-100`} />
          ),
          id: 1,
        },
      ];
      
      for (let i = 1; i <= 10; i++) {
        links.push({
          name: `Driver ${i}`,
          path: `/dashboard/driver/${i}`,
          icon:(isComplete,params,path)=> {
            return(
            <SVGPantalla 
            className={` w-5 h-5   `} />
          )
            },
          id: i + 1,
        });
      }
export default function SidebarMenu() {
  const params=usePathname()

      
  return (
    <div className="flex md:flex-col flex-wrap flex-shrink md:items-start items-center overflow-y-scroll md:overflow-visible pl-2 md:justify-center justify-evenly gap-5 md:w-10/12 w-full mx-auto ">

      
      {links?.map((link) => (
        <LinksSidebarDachboard
        params={params}
          name={link.name}
          path={link.path}
          driverPrevius={link.id-1}
          key={link.id}
          icon={link.icon(params,link.path)}
        />
      ))}
    </div>
  );
}
