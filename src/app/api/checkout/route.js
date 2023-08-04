import Stripe from "stripe"; 
import { NextResponse } from "next/server";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
export async function GET(){
    

const product=await stripe.prices.list()


    // const session=await stripe.checkout.sessions.create({
    //     line_items:[
    //         {
    //             price_data:{
    //                 currency: 'usd',
    //                 product_data:{
    //                     name:'my-product',
    //                     description:"mi producto",
    //                 },
    //                 unit_amount:20000,
    //             },
    //             quantity:5
    //         },
         
    //     ],
    //     mode:'payment',
    //     success_url:`https://localhost:3000/pagoCorrecto`,
    //     cancel_url:`https://localhost:3000/pagoIncorrecto`
    // },
    
    
    // )
    return NextResponse.json(product.data);
}