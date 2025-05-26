import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

export default function Contact() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      className={`py-20 px-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      id="contact"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have questions or want to collaborate? Send us a message!
        </p>
        <form className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name" 
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your email" 
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
