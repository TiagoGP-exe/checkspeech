import { FC } from "react";
import FirstSeparetion from "../assets/client-separation-1.svg";
import SecondSeparetion from "../assets/client-separation-2.svg";
import Client1 from "../assets/client-1.svg";
import Client2 from "../assets/client-2.svg";
import Client3 from "../assets/client-3.svg";
import Client4 from "../assets/client-4.svg";
import Client5 from "../assets/client-5.svg";

export const Client: FC = () => (
  <div
    id="client"
    className="flex flex-col items-center justify-between min-h-[70vh]   relative bg-[#151423]"
  >
    <img src={FirstSeparetion} className="w-full" />
    <h1 className="text-white font-black text-5xl pt-12">CLIENTES</h1>

    <div className="flex flex-wrap mt-8 ">
      <img
        className="h-20 opacity-50 hover:opacity-100 duration-200 ease-in-out select-none"
        src={Client1}
        alt="Terra"
      />
      <img
        className="h-20 opacity-50 hover:opacity-100 duration-200 ease-in-out select-none"
        src={Client2}
        alt="Mindfulness"
      />
      <img
        className="h-20 opacity-50 hover:opacity-100 duration-200 ease-in-out select-none"
        src={Client3}
        alt="Orbitc"
      />
      <img
        className="h-20 opacity-50 hover:opacity-100 duration-200 ease-in-out select-none"
        src={Client4}
        alt="Product"
      />
      <img
        className="h-20 opacity-50 hover:opacity-100 duration-200 ease-in-out select-none"
        src={Client5}
        alt="Prolin2"
      />
    </div>

    <img src={SecondSeparetion} className="w-full " />
  </div>
);
