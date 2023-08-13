import { connectDB } from "@/libs/mongoodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
const {drivers,email}=await request.json()

console.log("drivers:",drivers)
try {
    await connectDB()
const userFind=await User.findOne({email})
if (!userFind) {
    return NextResponse.json({
        status:false,
        message:"usuario no encontrado"
    })
}

userFind.drivers=drivers
console.log(userFind)
await userFind.save()
return NextResponse.json({
    status:true,
    message:"datos guardados"
})

} catch (error) {
    console.log(error)
}
    
    
}