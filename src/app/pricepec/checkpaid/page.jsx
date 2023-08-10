import Image from "next/image";
import logo from "../../../../public/logo.png";
import BotonCancelar from "../BotonCancelar";
import CompletarPago from "./CompletarPago";

export default function CheckPaid() {
  return (
    <main className=" w-screen min-h-screen h-full flex flex-col items-center justify-between text-primary-textGris relative">
      <nav className="w-full absolute z-40 flex items-center justify-between bg-primary-tonoBlanco h-20 px-16 top-0 left-0">
        {/* logo */}
        <div>
          {" "}
          <Image alt="logo" src={logo} width={50} height={50} quality={50} />
        </div>
        <BotonCancelar />
      </nav>
      <section className="min-h-screen w-full mx-auto flex flex-col items-start gap-y-5 mt-20 ">
        <div className=" w-3/4 h-[75vh] border shadow-md  flex items-stretch justify-between mx-auto my-20 ">
          <div className="flex flex-col p-5 items-start justify-normal bg-white w-1/2">
            <h2 className="text-3xl font-bold my-5 text-[#272020]">
              Detalles del Pedido
            </h2>
            <div className="flex items-center justify-normal gap-5 mb-10">
              <Image
                alt="logo"
                src={logo}
                width={100}
                height={100}
                quality={50}
              />
              <div>
                <h2 className="text-lg font-bold mb-2">
                  PEC <br />
                  PLAN ESTRATEGICO COMERCIAL
                </h2>
                <p className="text-sm font-semibold">
                  Metodología estructurada que esta conformada por todas las
                  actividades y temas involucrados en el área comercial
                </p>
              </div>
            </div>
            <p className="text-xs my-3">
              El precio establecido prácticamente es una aportación de
              recuperación, toda vez que cualquier diplomado, capacitación o
              consultoría similar representaría un costo mucho mayor.
            </p>
            <p className="text-xs my-3">
              Con esto cumplimos nuestro compromiso de ayudar a un gran número
              de personas y empresas que desean llevar a su proyecto o empresa
              al siguiente nivel
            </p>
          </div>
      <CompletarPago/>
        </div>
      </section>
    </main>
  );
}
