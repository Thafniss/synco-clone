import React from 'react';
import '../styles/Blog.css';

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
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <h2 className="blog-title">Latest Insights</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={post.link} className="blog-link">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
