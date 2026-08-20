import CtaButton from "../../components/CtaButton";
import MotionSection from "../../components/MotionSection";

function Hero() {
  return (
    <section id="hero" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <MotionSection direction="left">
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
            Identidades visuais <em>únicas</em> e relevantes
          </h1>
          <p className="mt-6 text-lg text-muted">
            Criamos marcas com personalidade, que contam a própria história.
            Pensadas pra quem quer se destacar de verdade.
          </p>

          <CtaButton to="/contato" className="mt-8">
            Vamos conversar
          </CtaButton>
        </MotionSection>

        <MotionSection direction="right">
          <img
            src={""}
            alt="Mockup de identidade visual desenvolvida pela Myond"
            className="w-full rounded-lg shadow-lg"
          />
        </MotionSection>
      </div>
    </section>
  );
}

export default Hero;
