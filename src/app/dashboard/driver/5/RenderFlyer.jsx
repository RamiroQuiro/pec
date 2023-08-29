// import { contextUser } from "@/context/contextUser";
// import Image from "next/image";
// import { shallow } from "zustand/shallow";

// const Flyer = ({ flyers, flyerActivo }) => {
//   if (flyers.length === 0) {
//     // Muestra un indicador de carga o una imagen de marcador de posición
//     return (
//       <div className="h-[100%] w-auto bg-gray-300/50 animate-pulse backdrop-blur-sm"></div>
//     );
//   } else {
//     // Muestra el componente Image
//     return (
//       <div className="h-[100%] w-auto animate-[aparecer_.5s]">
//         <Image
//           alt={flyers[flyerActivo - 1]?.title}
//           src={flyers[flyerActivo - 1]?.img}
//           fill
//           quality={100}
//           className="object- object-center h-[100%] animate-[aparecer_.5s]"
//         />
//       </div>
//     );
//   }
// };

// export default function RenderFlyer() {
//   const flyerActivo = contextUser((state) => state.flyerActivo, shallow);

//   const flyers = [];
//   for (let index = 2; index <= 25; index++) {
//     flyers.push({
//       id: index,
//       title: `Flyer ${index}`,
//       open: false,
//       img: `/driver5/Diapositiva${index}.webp`,
//     });
//   }

//   return <Flyer flyers={flyers} flyerActivo={flyerActivo} />;
// }

import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import { shallow } from "zustand/shallow";
import LoadingCss from '@/app/componentes/LoadingCss';

// Importa todas las imágenes a la vez usando una declaración de importación estática
import diapositiva2 from '../../../../../public/driver5/Diapositiva2.webp';
import diapositiva3 from '../../../../../public/driver5/Diapositiva3.webp';
import diapositiva4 from '../../../../../public/driver5/Diapositiva4.webp';
import diapositiva5 from '../../../../../public/driver5/Diapositiva5.webp';
import diapositiva6 from '../../../../../public/driver5/Diapositiva6.webp';
import diapositiva7 from '../../../../../public/driver5/Diapositiva7.webp';
import diapositiva8 from '../../../../../public/driver5/Diapositiva8.webp';
import diapositiva9 from '../../../../../public/driver5/Diapositiva9.webp';
import diapositiva10 from '../../../../../public/driver5/Diapositiva10.webp';
import diapositiva11 from '../../../../../public/driver5/Diapositiva11.webp';
import diapositiva12 from '../../../../../public/driver5/Diapositiva12.webp';
import diapositiva13 from '../../../../../public/driver5/Diapositiva13.webp';
import diapositiva14 from '../../../../../public/driver5/Diapositiva14.webp';
import diapositiva15 from '../../../../../public/driver5/Diapositiva15.webp';
import diapositiva16 from '../../../../../public/driver5/Diapositiva16.webp';
import diapositiva17 from '../../../../../public/driver5/Diapositiva17.webp';
import diapositiva18 from '../../../../../public/driver5/Diapositiva18.webp';
import diapositiva19 from '../../../../../public/driver5/Diapositiva19.webp';
import diapositiva20 from '../../../../../public/driver5/Diapositiva20.webp';
import diapositiva21 from '../../../../../public/driver5/Diapositiva21.webp';
import diapositiva22 from '../../../../../public/driver5/Diapositiva22.webp';
import diapositiva23 from '../../../../../public/driver5/Diapositiva23.webp';
import diapositiva24 from '../../../../../public/driver5/Diapositiva24.webp';
import diapositiva25 from '../../../../../public/driver5/Diapositiva25.webp';
// ... continúa importando el resto de las imágenes

const Flyer = ({ flyers, flyerActivo }) => {
  console.log(flyers[flyerActivo - 1]?.img)
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