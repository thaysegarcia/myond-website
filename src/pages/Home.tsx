import Contato from "./sections/Contato";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Sobre from "./sections/Sobre";

function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Sobre />
      <Contato />
    </>
  );
}

export default Home;
