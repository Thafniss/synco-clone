import React from "react";

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="container">
        <h2 className="feature-title">Why Choose Synco?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>All-in-One Platform</h3>
            <p>
              Synco centralizes your operations, reducing complexity and improving efficiency.
            </p>
          </div>
          <div className="feature-item">
            <h3>Scalable Solutions</h3>
            <p>
              Whether you're a startup or an enterprise, our tools adapt to your growth.
            </p>
          </div>
          <div className="feature-item">
            <h3>Secure & Reliable</h3>
            <p>
              Your data is protected with top-tier security standards and robust infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
