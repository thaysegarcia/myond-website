import MotionSection from "../../components/utilities/MotionSection";
import Container from "../../components/utilities/Container";
import CtaButton from "../../components/utilities/CtaButton";
import CardStack from "../../components/CardStack";
import { identityCards } from "../../data/VisualIDCards";

function Hero() {
  return (
    <Container id="hero">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <MotionSection>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-foreground">
              Identidades visuais <em>únicas</em> e relevantes
            </h1>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="mt-6 text-lg">
              Criamos marcas com personalidade, que contam a própria história.
              Pensadas pra quem quer se destacar de verdade.
            </p>
          </MotionSection>
          <MotionSection delay={0.2}>
            <CtaButton to="/contato" className="mt-8">
              Vamos conversar
            </CtaButton>
          </MotionSection>
        </div>

        <MotionSection direction="right">
          <div className="overflow-x-clip lg:overflow-visible">

          <CardStack cards={identityCards} />
          </div>
        </MotionSection>
      </div>
    </Container>
  );
}

export default Hero;
