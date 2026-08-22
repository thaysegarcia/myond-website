import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/NavItem";

import logo from "../assets/myond-logo.webp";

const navItems: NavItem[] = [
  { label: "Home", hash: "" },
  { label: "Portfólio", hash: "portfolio" },
  { label: "Sobre", hash: "sobre" },
  { label: "Contato", hash: "contato" },
];

function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <span className="text-lg font-black">
        <NavLink to="/">
          <img src={logo} className="h-6" alt="Logo Myond" />
        </NavLink>
      </span>

      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.hash}
            to={`/#${item.hash}`}
            className="text-foreground decor hover:text-muted transition-colors duration-300"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
