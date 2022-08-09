import { FC, useState } from "react";
import { Check } from "tabler-icons-react";

interface CheckboxProps {
  label: string;
  setEnabled: (enabled: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, setEnabled }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        setSelected(!selected), setEnabled(!selected);
      }}
      className="flex items-center mb-4 cursor-pointer"
    >
      <button
        type="button"
        className={`${
          selected ? " bg-primary" : "bg-white"
        } border-2 h-6 w-6 rounded-lg flex items-center justify-center border-black drop-shadow animation`}
      >
        {selected && <Check size={16} />}
      </button>
      <p className="ml-5 font-black ">{label}</p>
    </div>
  );
};
