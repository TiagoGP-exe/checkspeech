import { FC, useState } from "react";

export interface IPrices {
  title: string;
  onClick: () => void;
}

interface SelectPricesProps {
  prices: IPrices[];
}

export const SelectPrices: FC<SelectPricesProps> = ({ prices }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="drop-shadow-lg rounded-xl bg-white border-4 border-black">
      {prices.map(({ onClick, title }, index) => (
        <button
          onClick={() => {
            setSelected(index), onClick();
          }}
          className={`py-4 px-6 rounded-lg  animation ${
            selected === index ? "bg-primary text-white" : "bg-white"
          }`}
          key={index}
        >
          <h1 className="uppercase text-xl">{title}</h1>
        </button>
      ))}
    </div>
  );
};
