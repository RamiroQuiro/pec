import Stripe from "stripe";
import { NextResponse } from "next/server";
import User from "@/models/user";



export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const { priceIds, email,promoId } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: priceIds.map((priceId) => ({
        price: priceId,
        quantity: 1,
      })),
      mode: "payment",
      discounts: promoId.length > 0 ? [{ coupon: promoId }] : undefined ,
      success_url: `http://localhost:3000/redirigiendo`,
      cancel_url: `http://localhost:3000/dashboard`,
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
