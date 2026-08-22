import { Link } from "react-router";
import Container from "../../components/utilities/Container";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <Container id="portfolio">
      <h2 className="text-3xl md:text-3xl font-black leading-tight text-foreground">
        Projetos <em> selecionados</em>
      </h2>
      <p className="mt-2 mb-8 text-muted">
        Cada projeto pensado para contar a história única de cada marca.
      </p>

      {projects.map((project) => (
        <Link
          to={`/#${project.slug}`}

          key={project.id}
          className="flex items-center justify-between border-b border-b-secondary py-6"
        >
          <div className="flex gap-4 items-end">
            <span className="text-xs">{project.id}</span>
            <h3 className="text-4xl md:text-4xl font-black leading-tight text-primary hover:text-muted hover:italic transition-colors cursor-pointer duration-300">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-muted ">{project.tags}</p>
        </Link>
      ))}
    </Container>
  );
}

export default Portfolio;
