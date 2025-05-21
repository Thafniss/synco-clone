import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, Empresa X",
    testimonial: "O serviço deles transformou nossa maneira de trabalhar, resultados incríveis!",
  },
  {
    name: "Carlos Souza",
    role: "CTO, Startup Y",
    testimonial: "Equipe muito competente e comprometida. Recomendo demais.",
  },
  {
    name: "Juliana Lima",
    role: "Designer, Freelancer",
    testimonial: "Trabalho profissional e entrega no prazo, fiquei muito satisfeita.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(({ name, role, testimonial }, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{testimonial}"</p>
              <p className="testimonial-name">{name}</p>
              <p className="testimonial-role">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
