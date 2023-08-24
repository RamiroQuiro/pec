"use client"
import { useSession } from "next-auth/react";

export default function UserNameSidebar() {
    const {data,status}=useSession()
  return (
    <div className="flex flex-col ml-3 items-start justify-center">
      <p className="font-medium text-sm text-gray-700 ">{data?.user?.fullName}</p>
      <p className="text-xs text-primary-textGris ">{data?.user?.email}</p>
    </div>
  );
}
