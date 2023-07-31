import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/libs/nodemailer";

export async function POST(request) {
    const {body,mail} = await request.json();
    try {
        await transporter.sendMail({
         ...mailOptions,
         to:mail,
          subject: `Nuevo mensaje de Ramita`,
          text:"hola men",
          html: `<p>Tienes un nuevo mensaje de Ramita :</p><br/><p>Estamos Ready Meeeeeeen</p>`,
        });
        return NextResponse.json({
            message:"enviado con Exirto",
            
        })
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Ocurrió un error al enviar el correo electrónico' });
      }
    
}