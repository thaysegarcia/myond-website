import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/NavItem";
import CtaButton from "./CtaButton";

const navItems: NavItem[] = [
  { label: "Home", hash: "hero" },
  { label: "Portfólio", hash: "portfolio" },
  { label: "Sobre", hash: "sobre" },
  { label: "Contato", hash: "contato" },
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
            key={item.hash}
            to={`/#${item.hash}`}
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
    </header>
  );
}

export default Header;
