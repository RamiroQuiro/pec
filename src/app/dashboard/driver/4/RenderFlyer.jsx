import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import { shallow } from "zustand/shallow";


const Flyer = ({ flyers, flyerActivo }) => {
  if (flyers.length === 0) {
    // Muestra un indicador de carga o una imagen de marcador de posición
    return  <div className="h-[100%] w-auto bg-gray-300/50 animate-pulse backdrop-blur-sm">
   
  </div>;
  } else {
    // Muestra el componente Image
    return (
      <div className="h-[100%] w-auto animate-[aparecer_.5s]">
        <Image
          alt={flyers[flyerActivo - 1]?.title}
          src={flyers[flyerActivo - 1]?.img}
          fill
          quality={100}
          className="object- object-center h-[100%] animate-[aparecer_.5s]"
        />
      </div>
    );
  }
};

export default function RenderFlyer() {
  const flyerActivo = contextUser((state) => state.flyerActivo, shallow);


  const flyers = [];
  for (let index = 2; index <= 46; index++) {
    flyers.push({
      id: index,
      title: `Flyer ${index}`,
      open: false,
      img:`/driver4/Diapositiva${index}.webp`,
    });
  }

  return <Flyer flyers={flyers} flyerActivo={flyerActivo} />;
}
