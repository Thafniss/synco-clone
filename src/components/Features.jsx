import "../styles/Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <h2>Our Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Workflow Automation</h3>
            <p>
              Automate your business processes effortlessly with our intuitive tools.
            </p>
          </div>
          <div className="feature-item">
            <h3>Team Collaboration</h3>
            <p>
              Enhance communication and project management with Synco's integrated platform.
            </p>
          </div>
          <div className="feature-item">
            <h3>Data Insights</h3>
            <p>
              Make informed decisions with real-time analytics and reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
