import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Turn Your Ideas Into Reality",
    description:
      "We build innovative solutions to drive your business forward.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Innovate with Technology",
    description:
      "Empowering your business through cutting-edge tech solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    title: "Grow Your Potential",
    description:
      "Delivering scalable and robust solutions tailored for you.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`flex flex-col md:flex-row min-h-screen ${isVisible ? "fade-in" : "fade-out"}`}
      ref={ref}
      style={{ margin: 0, padding: 0, maxWidth: "100vw" }}
    >
      {/* Imagem esquerda */}
      <div className="w-full md:w-2/3 h-64 md:h-screen overflow-hidden">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover"
          key={slides[current].image}
        />
      </div>

      {/* Texto direita */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-6 md:px-12 py-6 md:py-0 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl font-extrabold leading-tight mb-6 font-inter">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-3xl text-gray-300 max-w-md mx-auto md:mx-0">
          {slides[current].description}
        </p>
      </div>
    </section>
  );
}
