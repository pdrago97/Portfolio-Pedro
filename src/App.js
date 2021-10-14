import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "square",
              stroke: {
                width: 10,
                color: "#7027A0",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      {/* <Portfolio />
      <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
