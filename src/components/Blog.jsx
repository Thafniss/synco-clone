import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const blogPosts = [
  {
    title: "The Rise of Creator-Led Brands",
    excerpt: "Discover how creators are transforming the consumer landscape with authentic, audience-first products.",
    link: "#"
  },
  {
    title: "Our Approach to Brand Incubation",
    excerpt: "Learn about Synco's unique model in partnering with creators to launch successful brands.",
    link: "#"
  },
  {
    title: "Behind the Scenes: Logistics at Scale",
    excerpt: "Explore how Synco's infrastructure powers fast and efficient product launches globally.",
    link: "#"
  }
];

export default function Blog() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      className={`py-20 px-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      id="blog"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors duration-200"
                >
                  Read more
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
