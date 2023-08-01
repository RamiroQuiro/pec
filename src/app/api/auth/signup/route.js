import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongoodb";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs";
import { getToken } from "@/libs/jwt";
import { getTemplate, sendMailer } from "@/libs/nodemailer";

export async function POST(request) {
  const { fullName, email, password } = await request.json();

  if (!password || password.length < 6) {
    return NextResponse.json(
      {
        message: "La contraseña tiene q tener al menos 6 caracteres",
      },
      {
        status: 400,
      }
    );
  }

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound){
      return NextResponse.json(
        { message: "El correo ya existe" },
        { status: 400 }
      );
}
    const hasPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      fullName, 
      password: hasPassword,
    });

    const savedUser = await user.save();




    //generacion del token de confirmacion
const code= uuidv4()
const tokenConfirmacion=getToken({email,code})
const template=getTemplate(fullName,tokenConfirmacion)

await sendMailer(email,'mail de prueba',template)

    return NextResponse.json({
        email:savedUser.email,
        fullName:savedUser.fullName,
        _id:savedUser._id
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}
