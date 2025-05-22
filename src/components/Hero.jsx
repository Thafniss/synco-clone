import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <h1>Turn Your Ideas Into Reality</h1>
        <p>We build innovative solutions to drive your business forward.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
}
