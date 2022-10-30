import { FC } from "react";
import { Link, Mail, MapPin, Phone } from "tabler-icons-react";
import FirstSeparetion from "../assets/client-separation-1.svg";
import Logo from "../assets/logo-white.svg";

export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <div
      id="client"
      className="flex flex-col items-center   relative bg-[#151423]"
    >
      <img src={FirstSeparetion} className="w-full" />
      <div className="flex flex-wrap mt-12 items-center md:items-start justify-center md:justify-between max-w-screen-xl w-11/12 text-white">
        <img className="h-10" src={Logo} />

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">LINK RÁPIDOS</h3>
          <p>Soluções</p>
          <p>Clientes</p>
          <p>Preços</p>
          <p>Contato</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">CONTATO</h3>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="text-primary" />
            <p>+99 (99) 9999-999</p>m
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="text-primary" />
            <p>comercial@check.com.br</p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="text-primary" />
            <p>
              Rua Desembargador Edésio Fernandes, 148 Conj 208
              <br />
              Estoril - Belo Horizonte / MG-Brasil <br />
              CEP: 30494-450
            </p>
          </div>
        </div>
      </div>
      <div className="text-white text-center mt-16 bg-[#0C0B12] w-full font-bold py-4">
        <a href="https://github.com/TiagoGP-exe">
          <p>{year} © CHECKSPEECH. POR TIAGO GUIMARÃES PINTO.</p>
        </a>
      </div>
    </div>
  );
};
