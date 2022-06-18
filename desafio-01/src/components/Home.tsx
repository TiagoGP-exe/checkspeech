import { FC } from "react";
import Separation from "../assets/home-separation.svg";

const Home: FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[90vh] pb-16 relative">
    <h1 className="leading-tight text-[3.25rem] w-1/2 text-center uppercase mb-5">
      Transforme falas em textos de acordo com a demanda
    </h1>
    <p className="w-1/3 text-center mb-10">
      CheckSpeech AI é um conjunto de APIs de conversão de fala em textos,
      <br />
      bem como a interpretação do sentimento dominante nos dizeres.
    </p>

    <div className="flex items-center justify-center gap-4">
      <a href="#solution">
        <button className="relative bg-white font-[900] text-black border-[3px] border-black drop-shadow transition-all ease-in-out hover:tracking-widest duration-100 px-6 py-2 rounded-lg">
          LER MAIS
        </button>
      </a>
      <a href="#contact">
        <button className="relative bg-primary font-[900] text-white border-[3px] border-black drop-shadow transition-all ease-in-out hover:tracking-widest duration-100 px-6 py-2 rounded-lg">
          CONTATO
        </button>
      </a>
    </div>

    <img className="absolute bottom-0 left-0 w-full h-auto" src={Separation} />
  </div>
);

export default Home;
