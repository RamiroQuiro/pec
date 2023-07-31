import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/libs/nodemailer";

export async function POST(request) {
    const {body,mail} = await request.json();
    try {
        await transporter.sendMail({
         ...mailOptions,
         to:[mail,'ramiryexe@hotmail.com'],
          subject: `Mensaje PEC `,
          text:"Tu PEC completo",
          html: `
          
         <div
         style="whidth:75%;heigth:80vh;margin:auto;backgrounde:#f1f1f1"
         > <h1 style="Margin:0;line-height:46px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#333333">Felicitaciones!!!</h1>
          <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Terminaste tu primer driver del PEC, adjuntamos un pdf con tus respuestas.<br>Ahora puedes continuar con tu siguiente Driver<br></p>
          <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#e7812f;font-size:14px"><strong>RamiroCode </strong>| WebDeveloper.</p></div>
          `,

        });
        return NextResponse.json({
            message:"enviado con Exirto",
            
        })
      } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Ocurrió un error al enviar el correo electrónico' });
      }
    
}