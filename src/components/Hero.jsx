import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Turn Your Ideas Into Reality",
    description: "We build innovative solutions to drive your business forward.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Innovate with Technology",
    description: "Empowering your business through cutting-edge tech solutions.",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    title: "Grow Your Potential",
    description: "Delivering scalable and robust solutions tailored for you.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto p-6 gap-8 min-h-screen">
      {/* Imagem super grande */}
      <div className="w-full md:w-2/3 h-screen rounded-xl overflow-hidden shadow-xl">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          key={slides[current].image}
        />
      </div>

      {/* Texto ao lado */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 font-inter">
          {slides[current].title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-sm">
          {slides[current].description}
        </p>
      </div>
    </section>
  );
}
