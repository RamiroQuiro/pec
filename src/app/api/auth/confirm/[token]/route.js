import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongoodb";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs";
import { getToken } from "@/libs/jwt";
import { getTemplate, sendMailer } from "@/libs/nodemailer";

export async function GET(request) {
//   const { token} = await request.json();
console.log(token)
  return NextResponse.json({
    message:'token recibido'
  })
}