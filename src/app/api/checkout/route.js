import Stripe from "stripe";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { priceId, email } = await request.json();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/dashboard`,
      cancel_url: `http://localhost:3000/pricepec`,
    });
    const userFind = await User.findOne({ email });
    if (!userFind) {
      return NextResponse.json({
        success: false,
        message: "No se encontró usuario",
      });
    }
    userFind.sessionPaid = session.id;
    await userFind.save();
    return NextResponse.json(session);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}
