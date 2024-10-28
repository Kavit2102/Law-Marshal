import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Careers from "./pages/careers";
import Products from "./pages/products";
import OurPartnersPage from "./pages/OurPartnersPage";
import Footer from "./components/footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/OurPartnersPage" element={<OurPartnersPage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
