import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password, passwordValidate } = await request.json();
  try {
    const userFind = await User.findOne({ email }).select("+password");
    if (!userFind) {
      return NextResponse.json({
        sucess: false,
        message: "no se encontro usuario",
      });
    }

    if (password !== passwordValidate) {
      return NextResponse.json({
        sucess: false,
        message: "Verificacion de password incorrecto",
      });
    }
    const hasPassword = await bcrypt.hash(password, 12);
    userFind.password = hasPassword;
    await userFind.save();
    return NextResponse.json({
        sucess: true,
        message: "Contraseña restablecida",
      });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ sucess: false, message: error });
  }
}
