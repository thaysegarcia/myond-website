import type { ProjectDetails } from "../../../types/ProjectDetails";

import capa from "./images/Billboard-obras-scaled.webp";
import imagem01 from "./images/Agenda-scaled.webp";
import imagem02 from "./images/2-canecas-de-cafe-scaled.webp";

export const lopesRental: ProjectDetails = {
  id: 1,
  slug: "lopes-rental",
  title: "Lopes Rental",
  tags: ["Visual ID", "Website"],
  description: [
    "A Lopes Rental nasceu com um propósito claro de atender ao mercado crescente de aluguel de maquinário compacto para a construção civil com uma abordagem focada na qualidade e confiabilidade. Seu fundador, Adelson Lopes, entende que o sucesso de uma obra depende não apenas da competência dos profissionais envolvidos, mas também das ferramentas e equipamentos que eles utilizam. Por isso, o compromisso constante em fornecer maquinários novos, de alta qualidade, que garantam o melhor desempenho para cada projeto.",
  ],
  gallery: [capa, imagem01, imagem02],
};
