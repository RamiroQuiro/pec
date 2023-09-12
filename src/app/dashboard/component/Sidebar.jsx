import { SVGLogin } from "@/app/landing/component/SVGComponent";
import SidebarMenu from "./SidebarMenu";
import ButtonSignOut from "./ButtonSignOut";
import UserNameSidebar from "./UserNameSidebar";
import LogoPecSidebar from "./LogoPecSidebar";
import ContenedorSidebar from "./ContenedorSidebar";
export default function Sidebar() {
  return (
    <ContenedorSidebar>
      <div className="flex md:flex-col w-full md:flex-nowrap gap-2 flex-wrap h-full md:items-start items-center justify-between">
        <LogoPecSidebar />
        <div className="h-20 flex md:w-full w- items-center md:justify-start md:my-10  justify-center px-5">
          <div className="w-10 h-10">
            <SVGLogin />
          </div>
          <UserNameSidebar />
        </div>
        <SidebarMenu />
        <ButtonSignOut />
      </div>
      </ContenedorSidebar>
  );
}
