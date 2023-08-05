import User from "@/models/user";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
  const { email } = await request.json();

  try {
    const userFind =await  User.findOne({ email });
    if (!userFind) {
      console.log("no se encontro usuario");
      return NextResponse.json({
        status: 405,
        message: "No se encontro usuario disponible",
      });
    }
    const sessionPaid = userFind.sessionPaid;
  

    const session = await stripe.checkout.sessions.retrieve(sessionPaid);
    if (session.payment_status === "paid") {
      // El pago fue exitoso
      // Aquí puede actualizar el estado del pedido o realizar otras acciones necesarias
      return NextResponse.json({
        success: true,
        message: "El pago fue exitoso",
      });
    } else {
      // El pago no fue exitoso
      return NextResponse.json({
        success: false,
        message: "El pago no fue exitoso",
      });
    }


  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "ramiro" });
}
