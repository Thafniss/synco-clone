import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "James Sadler",
    role: "CEO, Synco Ventures",
    testimonial: "Synco Ventures has been instrumental in bridging the gap between creators and commerce, turning influence into scalable growth.",
  },
  {
    name: "Matt Slevin",
    role: "COO, Synco Ventures",
    testimonial: "Our approach focuses on real-time trend adaptation and agile supply chains, ensuring our ventures stay ahead in the creator economy.",
  },
  {
    name: "Jake Walsh",
    role: "Founding Partner, Synco Ventures",
    testimonial: "By co-creating brands with creators and celebrities, we transform cultural capital into entrepreneurial success.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">Insights from Our Leadership</h2>
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
