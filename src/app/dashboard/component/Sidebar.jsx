
import {SVGLogin} from "@/app/landing/component/SVGComponent";
import SidebarMenu from "./SidebarMenu";
import ButtonSignOut from "./ButtonSignOut";
import UserNameSidebar from "./UserNameSidebar";
import LogoPecSidebar from "./LogoPecSidebar";
export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 bg-primary-tonoBlanco w-1/6 boder-r shadow-md min-h-screen h-full pb-24">
      <div className="flex flex-col w-full h-full items-start justify-between">
       <LogoPecSidebar/>
        <div className="h-20 flex w-full items-center justify-start px-5">
          <div className="w-10 h-10">
            <SVGLogin />
          </div>
          <UserNameSidebar />
        </div>
        <SidebarMenu />
        <ButtonSignOut />
      </div>
    </aside>
  );
}
