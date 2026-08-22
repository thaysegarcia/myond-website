import type { ProjectDetails } from "../../../types/ProjectDetails";

import capa from "./images/Billboard-obras-scaled.webp";
import imagem01 from "./images/Agenda-scaled.webp";
import imagem02 from "./images/2-canecas-de-cafe-scaled.webp";

export const lopesRental: ProjectDetails = {
  id: "01",
  slug: "lopes-rental",
  title: "Lopes Rental",
  tags: ["Visual ID", "Website"],
  description: "some text",
  gallery: [capa, imagem01, imagem02],
};
