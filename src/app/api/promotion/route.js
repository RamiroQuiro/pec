import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const products = await stripe.promotionCodes.list();
  console.log(products)

  return NextResponse.json(products);
}
