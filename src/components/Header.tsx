import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/NavItem";

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Sobre", path: "/sobre" },
];

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <span className="text-xl font-black">
        <NavLink to="/">Myond</NavLink>
      </span>

      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-medium"
                : "text-gray-500 hover:text-gray-900 transition-colors"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <NavLink
        to="/contato"
        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        Fale conosco
      </NavLink>
    </header>
  );
}

export default Header;
