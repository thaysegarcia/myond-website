import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface CtaButtonProps {
  to: string;
  children: ReactNode;
  className?: string;
}

function CtaButton({ to, children, className = "" }: CtaButtonProps) {
  return (
    <NavLink
      to={to}
      className={`inline-block bg-primary text-white px-6 py-3 rounded-md shadow-xl
            hover:bg-accent hover:scale-95 hover:shadow-s transition-all duration-300 ${className}`}
    >
      {children}
    </NavLink>
  );
}

export default CtaButton;
