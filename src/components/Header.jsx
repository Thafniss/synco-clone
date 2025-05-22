import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Synco</div>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#product" onClick={() => setMenuOpen(false)}>Our Product</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
