import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <footer className="min-h-[80vh] w-full bg-primary-200/5 flex md:flex-row flex-col md:pb-8 pb-20 ">
      <div className="container flex md:flex-row flex-col items-stretch justify-between h-full m-auto gap-8">
        <div className="md:w-1/3 flex-auto px-10 flex flex-col  text-gray-800 md:items-center md:justify-start items-center justify-between text-center md:mt-0 mt-16  h-4/6 gap-10">
          <h3 className=" uppercase text-xl text-primary-200">
            Consultora KREATIVIUM
          </h3>
          <p className=" text-gray-800">
            Av. 10 de Mayo. Col, Las Limas 10 00789, Insurgentes Sur, CDMX,
            México. Mail:hector.avila@kreativium.mx Tel:+52477-309-18-41
          </p>
          <Image alt="logo" src={logo} width={180} height={180} />
        </div>
        <div className="md:w-1/3 flex-auto px-10 flex flex-col  text-gray-800 items-start justify-start  h-4/6 md:gap-8 gap-3">
          <h3 className=" uppercase text-xl text-primary-200">Menú</h3>
          <ul className="flex md:flex-col flex-wrap items-start justify-between md:gap-2 gap-6 text-sm text-gray-800 font-medium">
            <li className="hover:text-primary-200 duration-200"><a href="#nosotros"> Nosotros</a></li>
            <li className="hover:text-primary-200 duration-200"><a href="#misionVision">Mision y Vision</a></li>
            <li className="hover:text-primary-200 duration-200"><a href="#nosotros">Aviso de Privacidad</a></li>
            <li className="hover:text-primary-200 duration-200"><a href="#contacto">Contacto</a></li>
            <li className="hover:text-primary-200 duration-200"><a href="#nosotros">Terminos y Condiciones</a></li>
          </ul>
        </div>
        <div className="md:w-1/3 flex-auto px-10 flex md:flex-col flex-wrap  text-gray-800 items-start justify-start  h-4/6 md:gap-8 gap-3">
          <h3 className=" uppercase text-xl text-primary-200">REDES</h3>
          <div className="w-1/2 flex items-center justify-start gap-5">
            <div className="w-10 h-10">
              <svg
                fill="#000000"
                viewBox="-5.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>facebook</title>{" "}
                  <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path>{" "}
                </g>
              </svg>
            </div>
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <span>creado por KREATIVIUM.MX</span>
        </div>
      </div>
    </footer>
  );
}
