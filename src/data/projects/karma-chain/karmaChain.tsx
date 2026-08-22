import type { ProjectDetails } from "../../../types/ProjectDetails";

import capa from "./images/tablet-scaled.webp";
import image01 from "./images/Cracha-scaled.webp";
import image02 from "./images/celular-scaled.webp";

export const karmaChain: ProjectDetails = {
  id: 4,
  slug: "karma-chain",
  title: "Karma Chain",
  tags: ["Visual ID"],
  description: ["A proposta do Karma Chain é ser um aplicativo descentralizado que permite que as pessoas doem qualquer valor que desejarem, colocando-as na fila para receber da próxima pessoa que fizer uma doação. Além de serem posicionadas na fila para receber do próximo doador, elas também são inseridas em um pool para receber uma quantia maior do próprio aplicativo."],
  gallery: [capa, image01, image02],
};
