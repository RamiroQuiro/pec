import React from "react";
import TarjetaInfomativa from "./SeccionCard";
import BotonTestimonio from "./BotonTestimonio";

export default function CardTestimonios() {
  return (
    <TarjetaInfomativa h3={"Ver mi PEC"}>
      <p className="italic md:p-5 font-thin text">
        {
          '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe at commodi, ut quas repellat odit similique reprehenderit culpa in veniam provident odio illum itaque esse dicta consequatur dolores delectusAspernatur natus provident doloribus quidem repellendus perferendis autem, deleniti, deserunt mollitia sequi ratione, rem molestiae laudantium minima cum blanditiis. Doloremque voluptatem, dignissimos error cum magni Obcaecati et dolorem voluptatibus"'
        }
      </p>
      <span className="text-primary-200 font-medium">
        {`"Director General"`}
      </span>
      <p className="text-primary-textGris font-thin">{` "Erick Brambila"`}</p>
    <BotonTestimonio/>
    </TarjetaInfomativa>
  );
}
