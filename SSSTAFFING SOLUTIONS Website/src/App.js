import './global.css';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import ContactUs from './components/contact/ContactUs';
import Portfolio from './components/workdone/Portfolio';
import Solutions from './components/Solutions/Solutions'
import About from './components/About/About';
import SSSTAFFINGSOLUTIONSLANDINGP from './SSSTAFFINGSOLUTIONSLANDINGP';

function App() {

  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='About Us'>
        <About />
      </section>
      <section id='Our Work'><Parallax type="Our Work" /></section>
      <section ><Solutions /></section>
      <section id='Solutions'><Parallax type="Solutions" /></section>
      <Portfolio />
      <section id='Contact Us'><ContactUs /></section>
    </div>
  );

}

export default App;
