import { Link, useParams } from "react-router-dom";
import Container from "../components/utilities/Container";
import { projects } from "../data/projects";

function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container className="flex flex-col items-center gap-10 h-screen">
        <h2 className="text-5xl md:text-8xl font-black italic text-center">
          Projeto não encontrado
        </h2>
        <Link to="/#portfolio" className="text-primary underline">
          Voltar ao portfólio
        </Link>
      </Container>
    );
  }

  return <Container>teste</Container>;
}

export default Project;
