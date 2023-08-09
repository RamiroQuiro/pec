import { getToken } from "@/libs/jwt";
import {
  getTemplate,
  mailOptions,
  sendMailer,
  transporter,
} from "@/libs/nodemailer";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  const { email } = await request.json();
  const code = uuidv4();
  const token = getToken({ email, code });
  const template = getTemplate(email, token);
  try {
    await sendMailer(
      email,
      "Restablecimiento de Contraseña de tu cuenta PEC",
      template
    );
    return NextResponse.json({
      message: "Email enviado al correo",
      code: "200",
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
