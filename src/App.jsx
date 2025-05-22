import Header from './components/Header'
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header />
          <Hero />
          <About />
              <Features />
                    <Contact />
                    <FeatureSection />
                    <Testimonials />
                    <Blog />
                    <Product />
                    <Footer />


    </>
  );
}

export default App;
