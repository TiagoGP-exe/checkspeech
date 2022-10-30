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
      className="flex items-center mb-4 cursor-pointer justify-between pl-4 gap-5"
    >
      <div>
        <button
          type="button"
          className={`${
            selected ? " bg-primary" : "bg-white"
          } border-2 h-6 w-6 rounded-lg flex items-center justify-center border-black drop-shadow animation`}
        >
          {selected && <Check size={14} />}
        </button>
      </div>
      <p className="font-black text-sm">{label}</p>
    </div>
  );
};
