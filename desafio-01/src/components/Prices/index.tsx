import { FC, useState } from "react";
import { CardPrices, ICardPrices } from "./CardPrices";
import { IPrices, SelectPrices } from "./SelectPrices";
import Separation from "../../assets/home-separation.svg";

const CardPricesData: ICardPrices[] = [
  {
    title: "Beginner",
    monthPrice: 29.99,
    AnualPrice: 328,
    items: [
      {
        subtitle: "Transcrição de Áudio Assíncrono",
        minutes: "120 minutos",
        price: "R$0,20 / minuto excedente",
      },
      {
        subtitle: "Transcrição de Áudio em tempo real",
        minutes: "90 minutos",
        price: "R$0,40 / minuto excedente",
      },
      {
        subtitle: "Identificação de Idiomas em áudios",
        minutes: "200 minutos",
        price: "R$0,05 / minuto excedente",
      },
      {
        subtitle: "Análise de sentimento a partir do áudio",
        minutes: "120 minutos",
        price: "R$0,40 / minuto excedente",
      },
    ],
  },
  {
    title: "Business",
    monthPrice: 44.99,
    AnualPrice: 499.99,
    items: [
      {
        subtitle: "Transcrição de Áudio Assíncrono",
        minutes: "200 minutos",
        price: "R$0,20 / minuto excedente",
      },
      {
        subtitle: "Transcrição de Áudio em tempo real",
        minutes: "120 minutos",
        price: "R$0,40 / minuto excedente",
      },
      {
        subtitle: "Identificação de Idiomas em áudios",
        minutes: "500 minutos",
        price: "R$0,05 / minuto excedente",
      },
      {
        subtitle: "Análise de sentimento a partir do áudio",
        minutes: "200 minutos",
        price: "R$0,40 / minuto excedente",
      },
    ],
  },
  {
    title: "Enterprise",
    monthPrice: 0,
    AnualPrice: 0,
    items: [
      {
        subtitle: "Transcrição de Áudio Assíncrono",
        minutes: "+200 minutos",
        price: "A combinar",
      },
      {
        subtitle: "Transcrição de Áudio em tempo real",
        minutes: "+120 minutos",
        price: "A combinar",
      },
      {
        subtitle: "Identificação de Idiomas em áudios",
        minutes: "+500 minutos",
        price: "A combinar",
      },
      {
        subtitle: "Análise de sentimento a partir do áudio",
        minutes: "+200 minutos",
        price: "A combinar",
      },
      {
        subtitle: "Preços especiais para grandes volumes",
        minutes: "",
        price: "",
      },
      {
        subtitle: "Prioridade no suporte técnico",
        minutes: "",
        price: "",
      },
      {
        subtitle: "Gestor de conta dedicado",
        minutes: "",
        price: "",
      },
    ],
  },
];

export const Prices: FC = () => {
  const [selected, setSelected] = useState("month");

  const SelectedData: IPrices[] = [
    {
      title: "mensal",
      onClick: () => setSelected("month"),
    },
    {
      title: "anual",
      onClick: () => setSelected("year"),
    },
  ];

  return (
    <div
      id="prices"
      className="flex flex-col  pt-[6rem]  items-center justify-between min-h-[70vh] -mt-1 relative bg-white "
    >
      <h1 className=" font-black text-5xl pt- mb-10">PREÇOS</h1>

      <SelectPrices prices={SelectedData} />

      <div className="flex justify-center flex-wrap mt-[5rem] gap-5 w-11/12 max-w-screen-xl">
        {CardPricesData.map((item, index) => (
          <CardPrices
            isMonth={selected === "month"}
            {...item}
            index={index}
            key={index}
          />
        ))}
      </div>

      <img className="w-full mt-10" src={Separation} />
    </div>
  );
};
