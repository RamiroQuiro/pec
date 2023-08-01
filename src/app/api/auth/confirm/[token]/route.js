import { NextResponse } from "next/server";

export function GET(request,{params}) {
    console.log(params.token)
  return NextResponse.json({message: "ramiro"});
}