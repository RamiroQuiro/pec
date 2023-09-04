import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET(request) {
    
    const session = await getServerSession( request );
  return NextResponse.json({message: session});


}