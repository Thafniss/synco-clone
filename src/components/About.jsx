import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const aboutImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      ref={ref}
      className={`flex flex-col md:flex-row items-center max-w-full mx-0 gap-0 min-h-screen transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      id="about"
    >
      {/* Imagem grande à esquerda sem padding/margin */}
      <div className="w-full md:w-2/3 h-64 md:h-screen overflow-hidden">
        <img
          src={aboutImage}
          alt="About us"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Texto do About à direita, com padding só no texto */}
      <div className="w-full md:w-1/3 text-center md:text-left px-6 md:px-16 py-8 md:py-16">
        <h2 className="text-4xl md:text-8xl font-extrabold leading-tight mb-6 md:mb-8 font-inter">
          About Us
        </h2>
        <p className="text-lg md:text-3xl text-gray-300 max-w-sm mx-auto md:mx-0">
          We are a creative agency committed to crafting beautiful digital experiences that make a difference.
        </p>
      </div>
    </section>
  );
}
