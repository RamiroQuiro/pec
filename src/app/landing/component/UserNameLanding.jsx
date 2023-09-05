"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LinkLogin from "./LinkLogin";

export default function UserNameLanding() {
  const { data } = useSession();
  const router = useRouter();
  const handleClick = () => {
    router.push("/redirigiendo");
  };

  if (!data?.user) {
    return <LinkLogin onClick={()=>{
      router.push('/login')
    }} />;
  } else {
    return (
      <div
       
        className={`flex flex-col ml-3 items-center text-center cursor-pointer justify-center relative group h-14 duration-300 `}
      >
        <p 
         onClick={handleClick}
        className="font-medium text-sm text-primary-100 animate-aparecer ">
          {data?.user?.fullName}
        </p>
        <p className="text-xs text-primary-textGris animate-aparecer ">
          {data?.user?.email}
        </p>
        <div className="bg-white group-hover:flex items-center justify-normal absolute top-14 left-0 w-full hidden h-10 rounded drop-shadow-md cursor-pointer animate-[aparecer_.5s]">
          <p onClick={()=>{
            signOut()
          }} className="mx-auto text-xs font-thin text-primary-textGris  duration-200">
            Cerrar Sesion
          </p>
        </div>
      </div>
    );
  }
}
