import { getTokenData } from "@/libs/jwt";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {

    const data=await getTokenData(params.token)

    console.log(data)
    if (!data) {
        return NextResponse.json({
            status:400,
            message:'error al obtener la data'
        })
    }


    try {
        
    } catch (error) {
        
    }
  return NextResponse.json({message: "ramiro"});
}