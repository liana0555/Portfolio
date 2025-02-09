import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Progect_another from "./pages/Project_another";
{
  /* router - for the links and moving to another windows */
}
{
  /* Routes - exactly element which rotes it would opened */
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<Progect_another />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
