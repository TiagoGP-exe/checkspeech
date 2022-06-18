import { FC } from "react";

export interface SoluctionsItemProps {
  title: string;
  description: string;
  variant?: "primary" | "white" | "secondary";
}

export const SoluctionItem: FC<SoluctionsItemProps> = ({
  description,
  title,
  variant = "white",
}) => (
  <div
    className={` drop-shadow-lg bg-${variant} p-4 rounded-xl border-4 border-black max-w-lg`}
  >
    <h3 className="font-black uppercase mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);
