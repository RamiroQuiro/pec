"use client";

import { SVGLogOut } from "@/app/componentes/SVGComponent";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonSignOut() {
  const router = useRouter();
  const handleSignOut = () => {
    signOut().then(() => {
      router.push("/");
    });
  };

  return (
    <div
      onClick={handleSignOut}
      className="flex items-center md:justify-normal justify-center gap-3 pl-3 py-3 text-primary-textGris  hover:text-primary-100 group font-semibold group cursor-pointer w-10/12 mx-auto"
    >
      <SVGLogOut className="w-6 h-6  group-hover:fill-primary-100 fill-primary-textGris" />{" "}
      <p className="text-sm font-medium ">Salir</p>
    </div>
  );
}
