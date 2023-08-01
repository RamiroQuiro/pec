import Image from "next/image";
import logo from "../../../../public/logo.png";
import SVGLogin from "@/app/landing/component/SVGComponent";
import SidebarMenu from "./SidebarMenu";
import ButtonSignOut from "./ButtonSignOut";
import UserNameSidebar from "./UserNameSidebar";
export default function Sidebar() {
  return (
    <aside className="absolute top-0 left-0 bg-primary-tonoBlanco w-1/6 boder-r shadow-md min-h-screen h-full pb-20">
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
          <UserNameSidebar/>
        </div>
        <SidebarMenu />
        <ButtonSignOut/>        
      </div>
    </aside>
  );
}
