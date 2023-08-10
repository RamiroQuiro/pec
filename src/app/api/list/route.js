import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const products = await stripe.products.list();
  const productData = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        ...product,
        prices: prices.data,
      };
    })
  );

  return NextResponse.json(productData);
}