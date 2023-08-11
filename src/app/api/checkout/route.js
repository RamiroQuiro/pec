import Stripe from "stripe";
import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongoodb";




export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { priceIds, email,promoId } = await request.json();
console.log("precio: ",priceIds,"email :",email,"codigo de promo :",promoId)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: priceIds.map((priceId) => ({
        price: priceId,
        quantity: 1,
      })),
      mode: "payment",
      success_url: `http://localhost:3000/redirigiendo`,
      cancel_url: `http://localhost:3000/dashboard`,
    });
    if (promoId.length>0) {
      session.discount=[{ coupon: promoId}]
    }
    await connectDB()
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
