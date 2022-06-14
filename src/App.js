import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/portfolio";
import Qualifications from "./pages/Qualifications/qualifications";

/*
 * App.js
 * Main App unit, holds navigation routes to all other pages
 */

function App() {
  return (
    <div className="full-page">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/qualifications" element={<Qualifications />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
