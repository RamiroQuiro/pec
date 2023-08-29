import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import { shallow } from "zustand/shallow";

// Importa todas las imágenes a la vez usando una declaración de importación estática
import diapositiva2 from '../../../../../public/Diapositiva2.jpg';
import diapositiva3 from '../../../../../public/Diapositiva3.jpg';
import diapositiva4 from '../../../../../public/Diapositiva4.jpg';
import diapositiva5 from '../../../../../public/Diapositiva5.jpg';
import diapositiva6 from '../../../../../public/Diapositiva6.jpg';
import diapositiva7 from '../../../../../public/Diapositiva7.jpg';
import diapositiva8 from '../../../../../public/Diapositiva8.jpg';
import diapositiva9 from '../../../../../public/Diapositiva9.jpg';
import diapositiva10 from '../../../../../public/Diapositiva10.jpg';
import diapositiva11 from '../../../../../public/Diapositiva11.jpg';
import diapositiva12 from '../../../../../public/Diapositiva12.jpg';
import diapositiva13 from '../../../../../public/Diapositiva13.jpg';
import diapositiva14 from '../../../../../public/Diapositiva14.jpg';
import diapositiva15 from '../../../../../public/Diapositiva15.jpg';
import diapositiva16 from '../../../../../public/Diapositiva16.jpg';
import diapositiva17 from '../../../../../public/Diapositiva17.jpg';
import diapositiva18 from '../../../../../public/Diapositiva18.jpg';
import diapositiva19 from '../../../../../public/Diapositiva19.jpg';
import diapositiva20 from '../../../../../public/Diapositiva20.jpg';
import diapositiva21 from '../../../../../public/Diapositiva21.jpg';
import diapositiva22 from '../../../../../public/Diapositiva22.jpg';
import diapositiva23 from '../../../../../public/Diapositiva23.jpg';
import diapositiva24 from '../../../../../public/Diapositiva24.jpg';
import diapositiva25 from '../../../../../public/Diapositiva25.jpg';
// ... continúa importando el resto de las imágenes

const Flyer = ({ flyers, flyerActivo }) => {
  if (flyers.length === 0) {
    // Muestra un indicador de carga o una imagen de marcador de posición
    return (
            <div className="h-[100%] w-auto bg-gray-300/50 animate-pulse backdrop-blur-sm"></div>
         );
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

  // Crea un array de imágenes importadas
  const diapositivas = [
    diapositiva2,
    diapositiva3,
    diapositiva4,
    diapositiva5,
    diapositiva6,
    diapositiva7,
    diapositiva8,
    diapositiva9,
    diapositiva10,
    diapositiva11,
    diapositiva12,
    diapositiva13,
    diapositiva14,
    diapositiva15,
    diapositiva16,
    diapositiva17,
    diapositiva18,
    diapositiva19,
    diapositiva20,
    diapositiva21,
    diapositiva22,
    diapositiva23,
    diapositiva24,
    diapositiva25,
    // ... continúa agregando el resto de las imágenes importadas
  ];

  const flyers = [];
  for (let index = 1; index <= 24; index++) {
    flyers.push({
      id: index,
      title: `Flyer ${index}`,
      open: false,
      img: diapositivas[index - 1],
    });
  }

  return <Flyer flyers={flyers} flyerActivo={flyerActivo} />;
}