"use client"
import Image from 'next/image'
import logo from "../../../public/logo.png";
import redirigiendo from "../../../public/redirigiendo.jpg";
import relojArena from "../../../public/relojArena.png";
import BotonCancelar from '../pricepec/BotonCancelar';
export default function Redirigiendo() {

    setTimeout(()=>{
window.location.replace('/dashboard')
    },2000)
  
    
  return (
    <main className=" w-screen min-h-screen h-full flex flex-col items-center justify-between text-primary-textGris relative">
      <nav className="w-full absolute z-40 flex items-center justify-between bg-primary-tonoBlanco h-20 px-16 top-0 left-0">
        {/* logo */}
        <div>  <Image alt="logo"
        src={logo}
        width={50}
        height={50}
        quality={50}
        /></div>
       <BotonCancelar/>
      </nav>
   
      <div className='w-screen h-screen overflow-hidden relative flex items-center justify-center'>
        <div className='absolute top-0 left-0 h-full w-full'>
            <Image
            alt='redirigiendo'
            src={redirigiendo}
            fill
            className='object-cover saturate-50'
            />
        </div>
        <div className='absolute top-0 left-0 h-full w-full   bg-white/40 backdrop-blur-[2px]'></div>

<div className='mx-auto z-10 flex flex-col items-center gap-14 animate-pulse justify-normals'>
    <h1 className='text-7xl font-medium tracking-wide text-primary-200 '>Redirigiendo a tu PEC</h1>
    <div>
        <Image
        alt="redir"
        src={relojArena}
        width={100}
        height={100}
        />
    </div>
</div>
    </div>

   
      </main>
    
  )
}
