import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contato from "./pages/Contato";
import Equipe from "./pages/Equipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
