

const InputFormulario = ({ label, type, name }) => {
  return (
    <div className="flex-grow">
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        name={name}
        type={type}
        className="bg-transparent border-b w-full border-primary-textGris/80 outline-none text-sm text-primary-textGris"
      />
    </div>
  );
};

export default function Contacto() {
  return (
    <section
    id="contacto"
    className="bg-primary-200 min-h-screen w-full mx-auto flex flex-col items-center gap-y-5 justify-evenly py-10 ">
      <div className="bg-primary-500 w-11/12 md:w-1/2 rounded px-5 text-center shadow-lg ">
        <h2 className="text-3xl mx-auto font-medium my-14 w-full uppercase">Contacto</h2>
        <form action="" className="text-primary-100 flex text-left flex-col items-center gap-4">
          <div className="flex w-full gap-3  ">
            <InputFormulario name={"nombre"} label={"Nombre:"} type="text" />
            <InputFormulario name={"apellido"} label={"Apellido(s):"} type="text" />
          </div>
          <div className="flex w-full gap-3 ">
            <InputFormulario name={"email"} label={"Email:"} type="email" />
            <InputFormulario name={"asunto"} label={"Asunto:"} type="text" />
          </div>
          <div className="flex w-full gap-3 ">
            <div className="flex-grow flex flex-col">
              <label htmlFor="mensaje">Mensaje*</label>
              <textarea
                name="mensaje"
                id="mensaje"
                rows="2"
                className="bg-transparent border-b  border-primary-textGris/80  text-sm text-primary-textGris outline-none"
              ></textarea>
            </div>
          </div>
          <button className=" w-1/3 float-right border-primary-200 border text-primary-200  capitalize px-3 py-2 text-lg my-10 hover:bg-primary-200 hover:border-white hover:text-white duration-300">
            Enviar
          </button>
        </form>
      </div>
      <div className="md:w-1/2   w-11/12 overflow-hidden rounded"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6265.761144367748!2d-89.59241341050715!3d20.966812314476474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1689957350850!5m2!1ses!2sar" className="w-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </section>
  );
}
