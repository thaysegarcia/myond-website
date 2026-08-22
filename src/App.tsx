import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToSectionHandler from "./components/utilities/ScrollToSectionHandler";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSectionHandler />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:slug" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
