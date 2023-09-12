
import {SVGLogin} from "@/app/landing/component/SVGComponent";
import SidebarMenu from "./SidebarMenu";
import ButtonSignOut from "./ButtonSignOut";
import UserNameSidebar from "./UserNameSidebar";
import LogoPecSidebar from "./LogoPecSidebar";
export default function Sidebar() {
  return (
    <aside className="fixed md:top-0 md:left-0 right-0 top-10  bg-primary-tonoBlanco md:w-1/6 w-full boder-r shadow-md min-h-screen h-full pb-24">
      <div className="flex flex-col w-full h-full md:items-start items-center justify-between">
       <LogoPecSidebar/>
        <div className="h-20 flex w-full items-center md:justify-start my-10 md:mt-0 justify-center px-5">
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
