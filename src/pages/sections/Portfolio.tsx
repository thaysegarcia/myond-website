import { Link } from "react-router-dom";
import Container from "../../components/utilities/Container";
import { projects } from "../../data/projects";
import MotionSection from "../../components/utilities/MotionSection";

function Portfolio() {
  return (
    <Container id="portfolio">
      <MotionSection direction="left">
        <h2 className="text-2xl md:text-3xl font-black leading-tight text-foreground">
          Projetos <em> selecionados</em>
        </h2>
      </MotionSection>
      <MotionSection direction="left">
        <p className="mt-2 mb-8 text-muted">
          Cada projeto pensado para contar a história única de cada marca.
        </p>
      </MotionSection>

      {projects.map((project, i) => (
        <MotionSection key={project.id} direction="left" delay={i * 0.1}>
          <Link
            to={`/portfolio/${project.slug}`}
            className="flex items-center justify-between border-b border-b-secondary py-6"
          >
            <div className="flex gap-4 items-end">
              <span className="text-xs text-muted">{project.id}</span>
              <h3 className="text-3xl md:text-4xl font-black leading-tight text-primary hover:text-muted transition-colors cursor-pointer duration-300">
                {project.title}
              </h3>
            </div>
            <p className="text-xs text-muted uppercase">
              {project.tags.join(", ")}
            </p>
          </Link>
        </MotionSection>
      ))}
    </Container>
  );
}

export default Portfolio;
