import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  register?: any;
}

export const TextAreaInput: FC<TextInputProps> = (props) => {
  return (
    <div className="w-11/12">
      <h1 className="ml-2 text-xl uppercase">{props.label}</h1>

      <textarea
        {...props}
        {...props.register}
        className={`${
          props.error
            ? "border-red-500 focus:border-red-300  error"
            : "drop-shadow "
        } ${
          props.className
        } text-base py-2 px-4 rounded-xl w-full bg-white border-2 border-black focus:border-primary animation duration-200 resize-none`}
        type="text"
      />

      {props.error && (
        <p className="text-red-500 text-xs uppercase font-bold ml-2 mt-2">
          {props.error}
        </p>
      )}
    </div>
  );
};
