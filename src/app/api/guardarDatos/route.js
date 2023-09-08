import { connectDB } from "@/libs/mongoodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { formCarga, drivers, email } = await request.json();

  try {
    await connectDB();
    const userFind = await User.findOne({ email });
    if (!userFind) {
      return NextResponse.json({
        status: false,
        message: "usuario no encontrado",
      });
    }
    userFind.formCarga = formCarga;
    userFind.drivers = drivers;
    await userFind.save();
    return NextResponse.json({
      status: true,
      message: "datos guardados",
    });
  } catch (error) {
    console.log(error);
  }
}
