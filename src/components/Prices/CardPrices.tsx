import { FC } from "react";
import { transformNumberToMoney } from "../../utils/number";

interface ItemsPrices {
  subtitle: string;
  minutes: string;
  price: string;
}

export interface ICardPrices {
  title: string;
  monthPrice: number;
  AnualPrice: number;
  items: ItemsPrices[];
  isMonth?: boolean;
  index?: number;
}

export const CardPrices: FC<ICardPrices> = ({
  AnualPrice,
  items,
  monthPrice,
  title,
  isMonth,
  index,
}) => {
  const actualValue = isMonth ? monthPrice : AnualPrice;

  return (
    <div
      className={`${
        index === 1 && "xl:-translate-y-10"
      } hover:border-primary shadow-black flex flex-col select-none items-center justify-evenly drop-shadow-lg py-10 rounded-xl animation px-4 max-w-[380px] border-4 border-black bg-white`}
    >
      <h1 className="font-black text-5xl">{title}</h1>

      <div className="flex flex-col gap-4 mt-8 ">
        {items.map(({ subtitle, minutes, price }, i) => (
          <div key={i}>
            <p className="font-bold">{subtitle}</p>
            <div className="flex ">
              <p className="font-bold text-primary flex-1">
                {minutes}{" "}
                <b className="text-[#54555A] text-sm font-bold">{price}</b>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-end mt-5 mb-2">
        <h1 className="text-3xl">
          {actualValue !== 0
            ? transformNumberToMoney(actualValue)
            : "A combinar"}
        </h1>
        {actualValue !== 0 && <p>{isMonth ? "/mês" : "/anual"}</p>}
      </div>

      <button className="relative bg-primary font-[900] text-white border-[3px] border-black drop-shadow transition-all ease-in-out hover:tracking-widest duration-100 px-6 py-2 rounded-lg">
        CONTATO
      </button>
    </div>
  );
};
