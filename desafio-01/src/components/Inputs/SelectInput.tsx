import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { UseFormRegister } from "react-hook-form";
import { ChevronsDown, Search } from "tabler-icons-react";
import { api } from "../../services/api";

interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  register?: any;
  setSelected: (value: string) => void;
}

interface countriesData {
  name: string;
  abreviation: string;
  flag: string;
}

export const SelectInput: FC<TextInputProps> = (props) => {
  const [countries, setCountries] = useState<countriesData[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<countriesData>();

  const countriesFilter = countries.filter((country) =>
    country.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const correctData = filter.length
    ? countriesFilter
    : countries.sort((a, b) => (a.name > b.name ? 1 : -1));

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/all");

      const newData = data.map((country: any) => {
        return {
          name: country.translations.por.common,
          abreviation: country.cca3,
          flag: country.flags.svg,
        };
      });
      setCountries(newData);
    })();
  }, []);

  return (
    <>
      <div className="w-full max-w-[20rem]">
        <h1 className="ml-2 text-xl uppercase">{props.label}</h1>

        <div className=" relative">
          <button
            onClick={() => setVisible(!visible)}
            type="button"
            className="relative z-40 w-full bg-white py-2 px-4 drop-shadow rounded-xl border-2 border-black"
          >
            <span className="flex items-center">
              {selected?.name ? (
                <>
                  <img
                    src={selected.flag}
                    alt=""
                    className="flex-shrink-0 h-6  rounded-md border-2 border-black"
                  />
                  <span className="ml-3 block  truncate uppercase font-black">
                    {selected.name}
                  </span>
                </>
              ) : (
                <>
                  <div className="h-6 w-10 bg-slate-200 rounded-md"></div>
                  <span className="ml-3 block truncate uppercase font-black">
                    {props.placeholder}
                  </span>
                </>
              )}
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronsDown />
            </span>
          </button>
          {visible && (
            <div className="flex flex-col absolute z-20 mt-4 w-full focus:outline-none sm:text-sm bg-white p-2 rounded-xl drop-shadow border-2 border-black gap-2">
              <div className="flex items-center relative">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  onChange={(e) => setFilter(e.target.value.trim())}
                  className=" py-2 px-4 rounded-xl border-2 border-black focus:border-primary w-full pl-8"
                />
                <Search
                  size={16}
                  className="absolute left-3 select-none pointer-events-auto"
                />
              </div>

              <ul className="flex flex-col w-full  max-h-[10rem] overflow-auto">
                {correctData.length > 0 ? (
                  <>
                    {correctData.map(({ abreviation, flag, name }) => (
                      <li
                        key={abreviation}
                        onClick={() => {
                          setSelected({ abreviation, flag, name }),
                            props.setSelected(abreviation);
                          setVisible(false), setFilter("");
                        }}
                        className="text-gray-900 cursor-pointer select-none relative pl-1 hover:bg-slate-200 py-1 rounded-xl transition-all ease-in-out duration-200"
                      >
                        <div className="flex items-center">
                          <img
                            src={flag}
                            alt=""
                            className="flex-shrink-0 h-6 w-8 object-cover  rounded-md border-2 border-black"
                          />

                          <span className="ml-3 block truncate uppercase font-black">
                            {name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </>
                ) : (
                  <p className="ml-2 uppercase font-bold">Não foi encontrado</p>
                )}
              </ul>
            </div>
          )}
        </div>

        {props.error && (
          <p className="text-red-500 text-xs uppercase font-bold ml-2 mt-2">
            {props.error}
          </p>
        )}
      </div>
      {visible && (
        <div
          onClick={() => {
            setVisible(false), setFilter("");
          }}
          className="w-full h-full fixed top-0"
        />
      )}
    </>
  );
};
