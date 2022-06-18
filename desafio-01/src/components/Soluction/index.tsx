import { FC } from "react";
import { SoluctionItem, SoluctionsItemProps } from "./SoluctionItem";

const dataOfSoluction: SoluctionsItemProps[] = [
  {
    title: "Transcrição de Áudio Assíncrono (áudio pré-gravado)",
    description:
      "API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.",
  },
  {
    title: "Análise de sentimento a partir do áudio (áudio pré-gravado)",
    description:
      "API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.",
  },
  {
    title: "Transcrição de Áudio em tempo real (streaming)",
    description:
      "O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.",
  },
  {
    title:
      "Identificação de Idiomas em áudiosIdentificação de Idiomas em áudios",
    description:
      "Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.",
    variant: "primary",
  },
];

export const Soluctions: FC = () => {
  return (
    <div
      id="solution"
      className="flex flex-col items-center bg-secondary pt-[6rem] pb-12 -mt-1 px-4 min-h-[100vh]"
    >
      <h1 className="text-[3.25rem] w-1/2 text-center uppercase mb-5">
        Soluções
      </h1>
      <p className=" w-1/3 text-center">
        Nossa solução é treinada em mais de 500.000 horas de áudios, transcritos
        por humanos de uma ampla variedade de idades, nacionalidades, sotaques e
        níveis de instruções A API é comercializada no modelo SAAS (software as
        a service).
      </p>

      <div className="flex max-w-screen-lg items-start justify-center mt-10 gap-6">
        <div className="flex flex-col gap-6">
          {dataOfSoluction.slice(0, 3).map((item) => (
            <SoluctionItem key={item.title} {...item} />
          ))}
        </div>

        <div
          className={`text-white drop-shadow-lg bg-primary p-4 rounded-xl border-4 border-black max-w-lg min-h-[10rem] sticky top-20 left-0`}
        >
          <h3 className="font-black mb-2 uppercase">
            {dataOfSoluction[3].title}
          </h3>
          <p className="text-sm">{dataOfSoluction[3].description}</p>
        </div>
      </div>
    </div>
  );
};
