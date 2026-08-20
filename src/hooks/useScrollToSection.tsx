import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    element?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
}

export default useScrollToSection;
