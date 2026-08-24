import type { ReactNode } from "react";

interface TextStyleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: TextStyleProps) {
  return (
    <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
      {children}
    </h2>
  );
}

export function SectionLabel({ children }: TextStyleProps) {
  return <span className="text-sm font-bold uppercase">{children}</span>;
}
