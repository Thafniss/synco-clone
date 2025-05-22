import { useState, useEffect } from "react";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          {/* Aqui você pode colocar sua imagem: <img src="logo.png" alt="Synco" /> */}
          Synco
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#product" onClick={() => setMenuOpen(false)}>Our Product</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            </li>
            <li>
              <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
