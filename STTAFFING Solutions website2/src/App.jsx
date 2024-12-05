import "./App.scss";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import OurTeam from "./Components/OurTeam/OurTeam";
import Clients from "./Components/Clients/Clients";
import ContactUs from "./Components/Contact/ContactUs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navigation/NavBar";

function App() {
  return (
    <div className="App">
      <section id="Home">
        <Navbar />
        <LandingPage />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Our Team">
        <OurTeam />
      </section>
      <section id="Clients">
        <Clients />
      </section>
      <section id="Contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
