import React from 'react';
import '../styles/Contact.css';
import useFadeIn from '../hooks/useFadeIn';

export default function Contact() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      className={`contact ${isVisible ? 'fade-in' : 'fade-out'}`}
      id="contact"
      ref={ref}
    >
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>Have questions or want to collaborate? Send us a message!</p>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
