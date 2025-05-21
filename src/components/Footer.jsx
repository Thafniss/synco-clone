import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Synco Clone. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook" className="social-icon">Fb</a>
          <a href="#" aria-label="Twitter" className="social-icon">Tw</a>
          <a href="#" aria-label="LinkedIn" className="social-icon">Ln</a>
        </div>
      </div>
    </footer>
  );
}
