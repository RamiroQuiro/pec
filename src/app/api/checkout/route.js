import Stripe from "stripe"; 
import { NextResponse } from "next/server";

const stripe=new Stripe('sk_test_51LjSelDun25aE8vwI00mtOiDCJ4uQTTTIJb6wvZ94uo2THYZVHjGmNkritR8fuAATdXsnojpXHpiSVeplBlhpx1500FcQSAGs0')
export async function GET(){
    

    const session=await stripe.checkout.sessions.create({
        line_items:[
            {
                price_data:{
                    currency: 'usd',
                    product_data:{
                        name:'my-product',
                        description:"mi producto",
                    },
                    unit_amount:20000,
                },
                quantity:5
            },
            {
                price_data:{
                    currency: 'usd',
                    product_data:{
                        name:'my-product2',
                        description:"mi producto2",
                    },
                    unit_amount:50000,
                },quantity:5
            },
        ],
        mode:'payment',
        success_url:`https://localhost:3000/pagoCorrecto`,
        cancel_url:`https://localhost:3000/pagoIncorrecto`
    },
    
    
    )
    return NextResponse.json(session);
}