import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "James Sadler",
    role: "CEO",
    testimonial: `International entrepreneur in the creator economy, James has built and advised businesses across Americas and Europe.
      Featured in BBC, TechCrunch & The Times, he has 8 years scaling award-winning social media & e-learning platforms.
      Former fractional CMO of Brazil’s largest content sales platform, leading growth to 20M+ paying subscribers and helping major global brands expand in Brazil.`,
  },
  {
    name: "Jake Walsh",
    role: "US Lead",
    testimonial: `A seasoned entrepreneur and strategist with expertise in digital marketing, influencer partnerships, and brand growth.
      He managed James Charles' brand, driving it to over $22 million in annual revenue in two years and spearheading the $88 million James Charles x Morphe palette.
      The founder of Walsh Network, Jake has delivered transformative marketing strategies for brands like Sephora, Mondelez, and ABH, leveraging his expertise to accelerate growth and expand market presence globally.`,
  },
  {
    name: "Matt Slevin",
    role: "COO",
    testimonial: `An experienced strategic planner and operations specialist with an 8-year career in the British Army, where he became one of its youngest captains.
      He participated in high-stakes projects including the UK's COVID-19 vaccination rollout.
      Since 2023, he develops data-informed strategies for brands in the creator economy.`,
  },
  {
    name: "Ben Austin",
    role: "UK Lead",
    testimonial: `Venture builder with a track record of raising tens of millions, managing family offices, and representing high-profile individuals including celebrities and royalty.
      Expertise in deal structuring, scaling ventures, and driving successful exits, with a reputation for strategic acumen and impactful opportunities.`,
  },
  {
    name: "Flavia",
    role: "Brazil Lead",
    testimonial: `Brazilian specialist in SCM (Supply Chain Management), ESG, CQ (Corporate Quality), Upcycling, Culture Awareness and Innovation.
      Enhances supply chains with ESG governance, due diligence for quality, and sustainable growth.`,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-layout">
        {/* James Sadler destaque */}
        <div className="testimonial-card large-card">
          <blockquote className="testimonial-text">"{testimonials[0].testimonial}"</blockquote>
          <footer>
            <p className="testimonial-name">{testimonials[0].name}</p>
            <p className="testimonial-role">{testimonials[0].role}</p>
          </footer>
        </div>

        {/* Outros 4 */}
        <div className="small-cards-column">
          {testimonials.slice(1).map(({ name, role, testimonial }, index) => (
            <div className="testimonial-card small-card" key={index}>
              <blockquote className="testimonial-text">"{testimonial}"</blockquote>
              <footer>
                <p className="testimonial-name">{name}</p>
                <p className="testimonial-role">{role}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
