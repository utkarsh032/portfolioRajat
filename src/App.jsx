import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import CardLinks from "./pages/CardLinks";
import Products from "./pages/Products";
import Skills from "./pages/Expertise";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary  bg-cover bg-no-repeat bg-center">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat ">
          <About />
          <Products />

          <div className="bg-[#2d002b]">
            <Skills />
          </div>
          <Experience />
        </div>
        <CardLinks />
      </div>
    </Router>
  );
}

export default App;
