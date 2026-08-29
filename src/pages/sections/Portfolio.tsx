import { Link } from "react-router-dom";
import Container from "../../components/utilities/Container";
import { projects } from "../../data/projects";
import MotionSection from "../../components/utilities/MotionSection";
import {
  SectionLabel,
  SectionTitle,
} from "../../components/utilities/TextStyle";

function Portfolio() {
  return (
    <Container id="portfolio">
      <MotionSection direction="left" delay={0.1}>
        <SectionLabel>Portfólio</SectionLabel>
        <SectionTitle>
          Projetos <em> selecionados</em>
        </SectionTitle>
      </MotionSection>
      <MotionSection direction="left" delay={0.2}>
        <p className="mt-6 mb-6">
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
              <span className="text-xs">{project.id}</span>
              <h3 className="text-xl md:text-4xl font-black leading-tight text-foreground hover:text-muted transition-colors cursor-pointer duration-300">
                {project.title}
              </h3>
            </div>
            <p className="text-xs uppercase">{project.tags.join(", ")}</p>
          </Link>
        </MotionSection>
      ))}
    </Container>
  );
}

export default Portfolio;
