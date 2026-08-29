import Container from "../../components/utilities/Container";
import CtaButton from "../../components/utilities/CtaButton";
import MotionSection from "../../components/utilities/MotionSection";
import {
  SectionTitle,
  SectionLabel,
} from "../../components/utilities/TextStyle";
import { whatsappUrl } from "../../data/contact";

function Contato() {
  return (
    <Container id="contato" className="flex flex-col items-center text-center">
      <MotionSection direction="up">
        <SectionLabel>Contato</SectionLabel>
        <SectionTitle>
          Vamos criar algo <em>memorável</em>
        </SectionTitle>
      </MotionSection>
      <MotionSection direction="up" delay={0.1}>
        <p className="w-full md:w-2xl mt-6 mb-8">
          Toda marca forte começa com uma boa conversa. Conta pra gente sobre o
          seu projeto e vamos construir juntos uma identidade que representa
          quem você é.
        </p>
      </MotionSection>
      <MotionSection direction="up" delay={0.2}>
        <CtaButton href={whatsappUrl} className="mt-8">
          Vamos conversar
        </CtaButton>
      </MotionSection>
    </Container>
  );
}

export default Contato;
