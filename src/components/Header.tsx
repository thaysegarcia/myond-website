import { NavLink } from "react-router-dom";
import type { NavItem } from "../types/NavItem";

import logo from "../assets/myond-logo.webp";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navItems: NavItem[] = [
  { label: "Home", hash: "" },
  { label: "Portfólio", hash: "portfolio" },
  { label: "Sobre", hash: "sobre" },
  { label: "Contato", hash: "contato" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="relative flex items-center justify-between px-6 md:px-10 py-6">
      <span className="text-lg font-black">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} className="h-6" alt="Logo Myond" />
        </NavLink>
      </span>
      {/*desktop*/}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.hash}
            to={item.hash ? `/#${item.hash}` : "/"}
            className="text-foreground decor hover:text-muted transition-colors duration-300"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/*mobile*/}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="md:hidden z-20 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-full left-0 pl-6 w-full bg-background flex flex-col gap-6 py-8 md:hidden shadow-lg z-10"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.hash}
                to={item.hash ? `/#${item.hash}` : "/"}
                onClick={closeMenu}
                className="text-muted hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
