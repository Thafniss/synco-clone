import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const testimonials = [
  {
    name: "James Sadler",
    role: "CEO",
    testimonial: `International entrepreneur in the creator economy, James has built and advised businesses across Americas and Europe. Featured in BBC, TechCrunch & The Times, he has 8 years scaling award-winning social media & e-learning platforms.`,
  },
  {
    name: "Jake Walsh",
    role: "US Lead",
    testimonial: `A seasoned entrepreneur and strategist with expertise in digital marketing, influencer partnerships, and brand growth. He managed James Charles' brand, driving it to over $22 million in annual revenue in two years.`,
  },
  {
    name: "Matt Slevin",
    role: "COO",
    testimonial: `An experienced strategic planner and operations specialist with an 8-year career in the British Army. He participated in high-stakes projects including the UK's COVID-19 vaccination rollout.`,
  },
  {
    name: "Ben Austin",
    role: "UK Lead",
    testimonial: `Venture builder with a track record of raising tens of millions, managing family offices, and representing high-profile individuals including celebrities and royalty.`,
  },
  {
    name: "Flavia",
    role: "Brazil Lead",
    testimonial: `Brazilian specialist in SCM, ESG, and Corporate Quality. Enhances supply chains with ESG governance, due diligence for quality, and sustainable growth.`,
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Card Principal */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <blockquote className="text-gray-300 italic text-lg mb-6">
              "{testimonials[0].testimonial}"
            </blockquote>
            <footer className="mt-6">
              <p className="text-white font-semibold text-xl">{testimonials[0].name}</p>
              <p className="text-blue-400">{testimonials[0].role}</p>
            </footer>
          </div>

          {/* Coluna de Cards Secundários */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(1).map(({ name, role, testimonial }, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <blockquote className="text-gray-400 text-sm mb-4 line-clamp-4">
                  "{testimonial}"
                </blockquote>
                <footer className="mt-4">
                  <p className="text-white font-medium">{name}</p>
                  <p className="text-blue-400 text-sm">{role}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
