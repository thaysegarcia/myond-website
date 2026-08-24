import Container from "../../components/utilities/Container";
import MotionSection from "../../components/utilities/MotionSection";
import {
  SectionTitle,
  SectionLabel,
} from "../../components/utilities/TextStyle";

function Contato() {
  return (
    <Container id="contato">
      <MotionSection direction="up">
        <SectionLabel>Contato</SectionLabel>
        <SectionTitle>Dê vida à sua visão</SectionTitle>
      </MotionSection>
    </Container>
  );
}

export default Contato;
