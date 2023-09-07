import { contextUser } from '@/context/contextUser';
import Image from "next/image";
import { shallow } from "zustand/shallow";


export default function RenderFlyer() {
  const flyerActivo = contextUser((state) => state.flyerActivo, shallow);
  return (
    <div className="h-[100%] w-auto animate-[aparecer_.5s]">
      <Image
        alt={`Diapositiva${flyerActivo+1}`}
        src={`/driver6/Diapositiva${flyerActivo+1}.webp`}
        fill
        quality={100}
        className="object- object-center h-[100%] animate-[aparecer_.5s]"
      />
    </div>
  );
}
  


