import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/libs/nodemailer";

export async function POST(request) {
    const {body,mail} = await request.json();
    try {
        await transporter.sendMail({
         ...mailOptions,
         to:[mail,'ramiryexe@hotmail.com'],
          subject: `Nuevo mensaje de Ramita`,
          text:"hola men",
          html: `
          <h1 style="color: #00A1A5; font-family: Arial, sans-serif;">Feliciataciones!!! Driver 1 Completado</h1>
          <p>Descarga el Archivo con tu PEC del primer Driver</>`,

        });
        return NextResponse.json({
            message:"enviado con Exirto",
            
        })
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Ocurrió un error al enviar el correo electrónico' });
      }
    
}