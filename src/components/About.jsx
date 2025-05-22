import React from 'react';
import '../styles/About.css';
import useFadeIn from '../hooks/useFadeIn';

export default function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      className={`about ${isVisible ? 'fade-in' : 'fade-out'}`}
      id="about"
      ref={ref}
    >
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          We are a creative agency committed to crafting beautiful digital experiences that make a difference.
        </p>
      </div>
    </section>
  );
}
