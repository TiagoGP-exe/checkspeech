import { FC, useState } from "react";
import Logo from "../assets/logo.svg";
import { Menu2 } from "tabler-icons-react";

const pages = [
  { name: "Solução", page: "#solution" },
  { name: "Clientes", page: "#client" },
  { name: "Preços", page: "#prices" },
  { name: "Contato", page: "#contact" },
];

export const Navbar: FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-white/75 sticky top-0 z-20 px-2 sm:px-4 py-4 rounded-b-xl backdrop-blur-sm">
      <div className="container flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
        <a href="/#" className="flex items-center">
          <img className="h-10" src={Logo} />
        </a>
        <div className="justify-between sm:w-min flex md:order-2 md:hidden">
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center color-gray-dark p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-10 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu2 />
          </button>
        </div>
        <div
          className={`${
            !isActive && "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1 animation `}
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            {pages.map(({ name, page }, index) => (
              <li key={index}>
                <a
                  href={`/${page}`}
                  onClick={() => setIsActive(false)}
                  className="block py-2 pr-4 pl-3 hover:tracking-widest animation text-black rounded md:bg-transparent  md:p-0 font-bold"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
