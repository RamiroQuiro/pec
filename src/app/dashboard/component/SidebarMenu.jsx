import { SvgHome, SVGPantalla } from "@/app/componentes/SVGComponent";
import Link from "next/link";
import React from "react";

const LinksSidebarDachboard = ({ name, path, icon }) => {
  return (
    <Link
      href={path}
      className="flex items-center justify-normal gap-3 text-primary-textGris hover:text-primary-100 font-semibold group cursor-pointer"
    >
      <div className="w-5 h-5">{icon}</div>
      <div className="text-sm">{name}</div>
    </Link>
  );
};
export default function SidebarMenu() {
    const links = [
        {
          name: "Bienvenidos",
          path: "/dashboard",
          icon: (
            <SvgHome className="w-5 h-5  group-hover:fill-primary-100 fill-primary-textGris" />
          ),
          id: 1,
        },
      ];
      
      for (let i = 1; i <= 10; i++) {
        links.push({
          name: `Driver ${i}`,
          path: `/dashboard/driver/${i}`,
          icon: (
            <SVGPantalla className="w-5 h-5  group-hover:fill-primary-100 fill-primary-textGris" />
          ),
          id: i + 1,
        });
      }
      
  return (
    <div className="flex flex-col flex-grow items-start justify-center gap-7 w-10/12 mx-auto pb-5">
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
