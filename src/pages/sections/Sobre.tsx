import Container from "../../components/utilities/Container";
import CtaButton from "../../components/utilities/CtaButton";
import MotionSection from "../../components/utilities/MotionSection";
import { processSteps } from "../../data/processStep";
import {
  SectionTitle,
  SectionLabel,
} from "../../components/utilities/TextStyle";
import { whatsappUrl } from "../../data/contact";

function Sobre() {
  return (
    <Container id="sobre">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <MotionSection direction="left" delay={0.1}>
            <SectionLabel>Sobre</SectionLabel>
            <SectionTitle>
              Design além da <em> estética</em>
            </SectionTitle>
          </MotionSection>
          <MotionSection direction="left" delay={0.2}>
            <p className="mt-6">
              Cada marca carrega uma história. Nosso trabalho é traduzir essa
              narrativa em uma linguagem visual que gera{" "}
              <strong className="text-primary">significado</strong> e provoca
              <strong className="text-primary"> impacto</strong>.
            </p>
            <p className="mt-6">
              Combinamos estratégia, pesquisa de mercado e criatividade para
              construir identidades que transcendem tendências e criam conexões
              genuínas com o público.
            </p>
            <p className="mt-6">
              Gostou do nosso processo e gostaria de trabalhar conosco?
            </p>
          </MotionSection>
          <MotionSection delay={0.3}>
            <CtaButton href={whatsappUrl} className="mt-8">
              Vamos conversar
            </CtaButton>
          </MotionSection>
        </div>
        <div className="flex flex-col w-full ">
          {processSteps.map((step, index) => (
            <MotionSection
              key={step.number}
              direction="right"
              delay={(index + 1) * 0.1}
            >
              <div className="py-6 px-4 border-b-2 border-b-secondary">
                <span className="text-sm uppercase">{step.number}</span>
                <h3 className="text-2xl text-foreground font-bold mb-2">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Sobre;
