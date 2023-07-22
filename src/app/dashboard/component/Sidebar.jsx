import Image from "next/image";
import logo from "../../../../public/logo.png";
import SVGLogin from "@/app/landing/component/SVGComponent";
import SidebarMenu from "./SidebarMenu";
import { SVGLogOut } from "@/app/componentes/SVGComponent";
export default function Sidebar() {
  return (
    <aside className="absolute top-0 left-0 bg-primary-tonoBlanco w-1/6 boder-r h-full pb-5">
      <div className="flex flex-col w-full h-full items-start justify-between">
        <div className="h-20 flex w-full items-center justify-between px-5">
          <h2 className="text-lg font-medium text-gray-700 uppercase">
            Mi Pec
          </h2>
          <Image alt="Logo" src={logo} width={50} height={50} quality={50} />
        </div>
        <div className="h-20 flex w-full items-center justify-start px-5">
          <div className="w-10 h-10">
            <SVGLogin />
          </div>
          <div className="flex flex-col ml-3 items-start justify-center">
            <p className="font-medium text-sm text-gray-700 ">Ramiro Quiroga</p>
            <p className="text-xs text-primary-textGris ">
              ramiryexe@hotmail.com
            </p>
          </div>
        </div>
        <SidebarMenu />
        <div className="flex items-center justify-normal gap-3 text-primary-textGris hover:text-primary-100 group font-semibold group cursor-pointer w-10/12 mx-auto">
          <SVGLogOut className="w-6 h-6  group-hover:fill-primary-100 fill-primary-textGris" />{" "}
          <p className="text-sm font-medium ">Salir</p>
        </div>
      </div>
    </aside>
  );
}
