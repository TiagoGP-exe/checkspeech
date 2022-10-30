import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { normalizePhoneNumber } from "../utils/string";
import { Checkbox } from "./Inputs/Checkbox";
import { SelectInput } from "./Inputs/SelectInput";
import { TextAreaInput } from "./Inputs/TextAreaInput";
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
    country: yup.string().required("O país é obrigatório"),
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

  const [enabled, setEnabled] = useState(false);

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
      className="flex flex-col items-center justify-center min-h-[90vh] bg-secondary  relative -mt-1"
    >
      <h1 className=" font-black text-5xl py-12">CONTATO</h1>

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
          label="Email"
          register={{ ...register("email") }}
          type="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          className="w-full"
        />
        <div className="flex flex-col md:flex-row w-full md:w-11/12 items-center gap-3 justify-center ">
          <SelectInput
            setSelected={setCountrie}
            label="País"
            placeholder="Selecione o país"
            error={errors.country?.message}
          />
          <TextInput
            label="Telefone"
            register={{ ...register("phone") }}
            placeholder="Digite seu telefone"
            className="w-full"
            error={errors.phone?.message}
          />
        </div>
        <TextAreaInput
          label="mensagem"
          register={{ ...register("description") }}
          placeholder="Digite sua mensagem"
        />
        <Checkbox
          setEnabled={setEnabled}
          label="Eu concordo com a Política de Privacidade."
        />
        <button
          disabled={!enabled}
          type="submit"
          className="relative disabled:bg-slate-400 disabled:opacity-70 disabled:cursor-not-allowed bg-primary font-[900] text-white border-[3px] border-black drop-shadow transition-all ease-in-out hover:enabled:tracking-widest duration-100 px-6 py-2 rounded-lg"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};
