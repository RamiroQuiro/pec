import Stripe from "stripe"; 
import { NextResponse } from "next/server";

export async function POST(request){
    const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
    const {priceId}=await request.json()
    const session=await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:[
            {
               price:priceId,quantity:1
            },
         
        ],
        mode:'payment',
        success_url:`https://localhost:3000/pagoCorrecto`,
        cancel_url:`https://localhost:3000/pagoIncorrecto`
    },
    
    
    )
    return NextResponse.json(session);
}