import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { normalizePhoneNumber } from "../utils/string";
import { SelectInput } from "./Inputs/SelectInput";
import { TextInput } from "./Inputs/TextInput";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
  description: string;
  country: string;
}

const rePhoneNumber = /[^\d]/g;

const schema = yup
  .object({
    name: yup.string().required("O Nome é obrigatório"),
    phone: yup
      .string()
      .required("O telefone é obrigatório")
      .matches(rePhoneNumber, "O telefone é inválido")
      .min(10, "O telefone é inválido"),
    email: yup
      .string()
      .email("O email é inválido")
      .required("O email é obrigatório"),
    description: yup.string().required("A descrição é obrigatória"),
  })
  .required();

export const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const setCountrie = (text: string) => {
    setValue("country", text);
  };

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[90vh] bg-secondary pb-16 relative -mt-1"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-screen-md w-full items-center"
      >
        <TextInput
          label="Nome"
          register={{ ...register("name") }}
          placeholder="Digite seu nome"
          error={errors.name?.message}
          className="w-full"
        />
        <TextInput
          label="Telefone"
          register={{ ...register("phone") }}
          className="w-full"
          placeholder="Digite seu telefone"
          error={errors.phone?.message}
        />

        <SelectInput
          setSelected={setCountrie}
          label="País"
          placeholder="Selecione o país"
        />

        <button
          type="submit"
          className="relative bg-primary font-[900] text-white border-[3px] border-black drop-shadow transition-all ease-in-out hover:tracking-widest duration-100 px-6 py-2 rounded-lg"
        >
          CONTATO
        </button>
      </form>
    </div>
  );
};
