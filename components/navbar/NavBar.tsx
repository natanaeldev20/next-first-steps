import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ActiveLink } from "../active-link/ActiveLink";

const ROUTES = [
  { id: 1, path: "/", text: "Inicio" },
  { id: 2, path: "/about", text: "Sobre Nosotros" },
  { id: 3, path: "/contact", text: "Contacto" },
  { id: 4, path: "/pricing", text: "Precios" },
];

export const NavBar = () => {
  return (
    <nav className="bg-purple-700 text-white flex flex-col justify-between px-4 py-2 gap-4 lg:gap-0 lg:px-16 lg:flex-row">
      <Link
        href="/"
        className="text-xl font-extrabold flex items-center justify-center gap-2 lg:justify-start"
      >
        <FaHome />
        FirstSteps
      </Link>
      <ul className="flex flex-col items-center gap-2 text-lg font-medium justify-center sm:flex-row lg:justify-start">
        {ROUTES.map((r) => (
          <ActiveLink key={r.id} {...r} />
        ))}
      </ul>
    </nav>
  );
};
