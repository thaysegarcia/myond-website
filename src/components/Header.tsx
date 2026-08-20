import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/NavItem";

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
            className="text-muted hover:text-foreground hover:scale-95 transition-all duration-300"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
