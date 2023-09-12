"use client";

import { useState } from "react";

export default function ContenedorSidebar({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className="fixed top-0 md:left-0 right-0 z-[50]  bg-primary-tonoBlanco md:w-1/6 w-full boder-r shadow-md min-h-screen h-full pb-24">
        {children}
      </aside>
    </>
  );
}
