import type { ReactNode } from "react";

interface ContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

function Container({ id, className = "", children }: ContainerProps) {
  return (
    <section id={id} className={`px-6 py-8 md:py-32 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

export default Container;
