import React from 'react'
import { SVGDownload, SVGGit, SVGInfinity, SVGPantalla, SVGPremio } from '../componentes/SVGComponent'
import Stripe from "stripe"; 
import ButtonPago from './ButtonPago';

 async function getDataStripe(){
  const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
const product=await stripe.prices.list()

return product.data
 }

export default async function CardPrice() {

    const prices=await getDataStripe()
  return (
    <div className="md:w-[450px] h-[850px] bg-white shadow-lg  absolute right-44 top-20 mt-20 border">
          <div className="flex flex-col items-start justify-center">
            <div className="h-[230px] bg-gray-700 w-full p-2">
              <video src=""></video>
            </div>
            <div className="flex flex-col items-start mt-7 justify-center px-7 gap-4 w-full">
              <p className="text-2xl font-black text-[#000028] tracking-wide uppercase ">
               {new Intl.NumberFormat("de-DE").format(prices[0].unit_amount/100)} {prices[0].currency}
              </p>
             <ButtonPago priceId={prices[0].id}/>
              <span className="text-xs text-center w-full">
                Garantía de reembolso de 10 dias
              </span>
              <div>
                <h3 className="text-lg font-bold my-5 text-[#000028] tracking-wide">
                  Tu PEC incluye:
                </h3>
                <ul className="w-full flex flex-col items-start justify-center font- gap-4">
                  <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                    <SVGPantalla className="w-5" />
                    <p>Drivers dinámicos.</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                    <SVGInfinity className="w-5" />
                    <p>Acceso de por vida</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                    <SVGGit className="w-5" /> <p>Guia de uso de plataforma</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                    <SVGDownload className="w-5 h-5" />{" "}
                    <p>Recursos descargables</p>
                  </li>
                  <li className="w-full flex items-center justify-start  gap-2 hover:gap-4 duration-300">
                    <SVGPremio className="w-5" /> <p>Certificado final</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>)
}
