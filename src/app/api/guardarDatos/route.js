import { connectDB } from "@/libs/mongoodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
const {formCarga,drivers,email}=await request.json()

console.log("formulario de datos:",formCarga)

try {
    await connectDB()
const userFind=await User.findOne({email})
if (!userFind) {
    return NextResponse.json({
        status:false,
        message:"usuario no encontrado"
    })
}
userFind.formCarga=formCarga
userFind.drivers=drivers
console.log("usuario entcntrado:",userFind)
await userFind.save()
return NextResponse.json({
    status:true,
    message:"datos guardados"
})

} catch (error) {
    console.log(error)
}
    
    
}