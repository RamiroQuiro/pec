import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import { shallow } from "zustand/shallow";


export default function RenderFlyer() {
  const flyerActivo = contextUser((state) => state.flyerActivo, shallow);
  return (
    <div className="md:h-[100%] h-[80vh]  animate-[aparecer_.5s]">
      <Image
        alt={`Diapositiva${flyerActivo+1}`}
        src={`/driver3/Diapositiva${flyerActivo+1}.webp`}
        fill
        quality={100}
        className="object-contain md:object-fill object-center animate-[aparecer_.5s]"
      />
    </div>
  );
}
  


