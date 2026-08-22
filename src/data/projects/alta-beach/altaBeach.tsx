import type { ProjectDetails } from "../../../types/ProjectDetails";

import capa from "./images/garrafinha-scaled.webp";
import imagem01 from "./images/Bolsa-de-tecido-scaled (1).webp";
import imagem02 from "./images/cartao-de-visita-2-scaled.webp";

export const altaBeach: ProjectDetails = {
  id: "02",
  slug: "alta-beach",
  title: "Alta Beach",
  tags: ["Visual ID"],
  description: [
    "O Alta Beach chega com a proposta de proporcionar uma experiência única para os amantes do beach tennis, no melhor e mais lindo rooftop de São Paulo. É o primeiro espaço desse segmento em um rooftop e conta com restaurante, bar e club.",
    "Projetado para poder aproveitar com os amigos e familiares, é um espaço para o bem estar, diversão e lazer, além de contar com vista para o Sunset. O espaço tem uma atmosfera de praia, com referências de Ibiza e Mykonos, cores neutras, puxadas para um cinza, areia e branco.",
  ],
  gallery: [capa, imagem01, imagem02],
};
