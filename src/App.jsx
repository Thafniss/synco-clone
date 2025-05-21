import Header from './components/Header'
import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
          <Hero />
          <About />
              <Features />
                    <Contact />
                    <Footer />
                    <FeatureSection />
                    <Testimonials />


    </>
  );
}

export default App;
