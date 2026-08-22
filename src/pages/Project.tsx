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
        <Link to="/#portfolio" className="text-primary underline">
          Voltar ao portfólio
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <MotionSection>galeria</MotionSection>

        <div>
          <MotionSection direction="right">
            <h2 className="text-2xl md:text-3xl font-black leading-tight text-foreground">
              {project.title}
            </h2>
            <p className="text-xs text-muted mt-2 mb-8 uppercase">
              {project.tags.join(", ")}
            </p>
          </MotionSection>
          {project.description.map((p, i) => (
            <MotionSection direction="right" delay={(i + 1) * 0.1}>
              <p className="mb-4" key={i}>
                {p}
              </p>
            </MotionSection>
          ))}
          <MotionSection direction="right">
            <div className="flex items-center justify-between mt-16">
              {previousProject ? (
                <Link
                  to={`/portfolio/${previousProject.slug}`}
                  className="cursor-pointer"
                >
                  previous
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  to={`/portfolio/${nextProject.slug}`}
                  className="cursor-pointer"
                >
                  next
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
