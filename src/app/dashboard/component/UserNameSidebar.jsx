"use client"
import { useSession } from "next-auth/react";

export default function UserNameSidebar({className}) {
    const {data,status}=useSession()
  return (
    <div className={`${className}flex flex-col ml-3 items-start justify-center `}>
      <p className="font-medium text-sm text-gray-700 animate-aparecer ">{data?.user?.fullName}</p>
      <p className="text-xs text-primary-textGris animate-aparecer ">{data?.user?.email}</p>
    </div>
  );
}
