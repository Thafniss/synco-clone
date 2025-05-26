import Header from './components/Header'
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Features />
        <Contact />
        <FeatureSection />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
