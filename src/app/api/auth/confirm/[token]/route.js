import { getTokenData } from "@/libs/jwt";
import { connectDB } from "@/libs/mongoodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { data } = await getTokenData(params.token);
    const { email, code, restablecer } = data;
    if (!data) {
      return NextResponse.json({
        status: 400,
        message: "error al obtener la data",
      });
    }
    if (restablecer) {
      const resetpass = new URL(`/resetpass/${email}`, request.url);
      return NextResponse.redirect(resetpass);
    }
    await connectDB()
    const userFind = await User.findOne({ email });
    if (!userFind) {
      return NextResponse.json({
        sucess: false,
        message: "no se encontro usuario",
      });
    }
    userFind.status = "VERIFIED";
    await userFind.save();
    const verifiedUrl = new URL("/verificado", request.url);
    return NextResponse.redirect(verifiedUrl);
  } catch (error) {}
  return NextResponse.json({ message: "ramiro" });
}
