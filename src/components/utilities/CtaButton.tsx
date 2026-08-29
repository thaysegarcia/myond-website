import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

function CtaButton({ href, children, className = "" }: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-primary text-white px-6 py-3 rounded-md shadow-xl
            hover:bg-accent hover:scale-95 hover:shadow-sm transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
}

export default CtaButton;
