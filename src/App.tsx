import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToSectionHandler from "./components/utilities/ScrollToSectionHandler";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSectionHandler />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
