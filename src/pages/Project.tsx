import { Link, useParams } from "react-router-dom";
import Container from "../components/utilities/Container";
import { projects } from "../data/projects";
import MotionSection from "../components/utilities/MotionSection";

function Project() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];
  const nextProject = projects[currentIndex + 1];
  const previousProject = projects[currentIndex - 1];

  if (!project) {
    return (
      <Container className="flex flex-col items-center gap-10 h-screen">
        <h2 className="text-5xl md:text-8xl font-black italic text-center">
          Projeto não encontrado
        </h2>
        <Link to="/#portfolio" className="text-foreground border-b border-b-muted hover:text-muted">
          Voltar ao portfólio
        </Link>
      </Container>
    );
  }

  return (
    <Container key={slug}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <MotionSection>galeria</MotionSection>

        <div>
          <MotionSection direction="right">
            <h2 className="text-2xl md:text-3xl font-black leading-tight text-foreground">
              {project.title}
            </h2>
            <p className="text-xs mt-2 mb-8 uppercase">
              {project.tags.join(", ")}
            </p>

            {project.description.map((p, i) => (
              <p className="mb-4" key={i}>
                {p}
              </p>
            ))}
          </MotionSection>
          <MotionSection direction="up">
            <div className="flex items-center justify-between mt-16">
              {previousProject ? (
                <Link
                  to={`/portfolio/${previousProject.slug}`}
                  className="text-foreground hover:text-muted transition-colors duration-300 cursor-pointer"
                >
                  <span> ← {previousProject.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  to={`/portfolio/${nextProject.slug}`}
                  className="text-foreground hover:text-muted transition-colors duration-300 cursor-pointer "
                >
                  <span>{nextProject.title} →</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </MotionSection>
        </div>
      </div>
    </Container>
  );
}

export default Project;
