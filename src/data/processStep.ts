export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descoberta",
    description: "Mergulhamos no universo da sua marca",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Definimos o posicionamento e a narrativa da sua nova identidade",
  },
  {
    number: "03",
    title: "Criação",
    description: "Tornamos a visão que construímos juntos em realidade",
  },
];
