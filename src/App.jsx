import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import CardLinks from "./pages/CardLinks";
import Products from "./pages/Products";
import Skills from "./pages/Expertise";
import Experience from "./pages/Experience";
import heroBg from "./assets/hero.jpg";

function App() {
  const bgImageStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const bgImageStyleNoCenter = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Router>
      <div className="relative z-0 bg-primary  bg-cover bg-no-repeat bg-center">
        <div style={bgImageStyle}>
          <Navbar />
          <Hero />
        </div>

        <div style={bgImageStyleNoCenter}>
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
