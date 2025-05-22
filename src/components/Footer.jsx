import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Synco. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook" className="social-icon">Fb</a>
          <a href="https://twitter.com" aria-label="Twitter" className="social-icon">Tw</a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">Ln</a>
        </div>
      </div>
    </footer>
  );
}
