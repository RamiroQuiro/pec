"use client";

import { SVGMenu } from "@/app/landing/component/SVGComponent";
import { contextUser } from "@/context/contextUser";
import { shallow } from "zustand/shallow";

export default function ContenedorSidebar({ children }) {
  const { updateState, toogleMenu } = contextUser(
    (state) => ({
      toogleMenu: state.toogleMenu,
      updateState: state.updateState,
    }),
    shallow
  );

  return (
    <>
      <button
        onClick={() => {
          updateState({
            toogleMenu: !toogleMenu,
          });
        }}
        className={`${
          toogleMenu ? "rotate-180 scale-y-110" : ""
        } border bg-white/80 rounded-full w-20 active:shadow-sm active:scale-95 duration-300 h-20 flex items-center justify-center fixed bottom-4 right-4 z-50 md:hidden `}
      >
        <SVGMenu className="w-10 mx-auto fill" />
      </button>
      <aside
        className={`${
          toogleMenu
            ? "translate-y-0 translate-x-0 opacity-100 rounded-none md:opacity-100 md:translate-0"
            : "rounded-bl-3xl translate-x-full -translate-y-full opacity-0 md:opacity-100 md:transition-colors"
        } duration-500 fixed top-0 md:left-0 right-0 z-[40]  bg-primary-tonoBlanco md:w-1/6 w-full boder-r shadow-md min-h-screen h-full pb-24 `}
      >
        {children}
      </aside>
    </>
  );
}
