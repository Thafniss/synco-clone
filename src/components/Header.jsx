import { useState, useEffect } from "react";

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
    <header
      className={`fixed w-full top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none"
      } bg-gradient-to-r from-gray-900 to-gray-950`}
    >
      <div className="flex items-center justify-between px-10 py-4">
        <div className="text-2xl font-extrabold tracking-wide text-white cursor-default select-none">
          Synco
        </div>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8 group"
        >
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Menu desktop */}
        <nav
          className={`fixed top-[60px] left-0 w-full md:static md:w-auto transition-transform duration-300 md:translate-x-0 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:flex`}
  
        >
        <ul className="flex flex-col md:flex-row md:gap-10 text-white font-medium text-lg px-6 py-6 md:p-0">
  {[
    { label: "Home", href: "#home" },
    { label: "Our Product", href: "#product" },
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ].map(({ label, href }) => (
    <li key={label} className="mb-4 md:mb-0">
      <a
        href={href}
        onClick={() => setMenuOpen(false)}
        className="text-white hover:text-blue-400 transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  ))}
</ul>
        </nav>
      </div>
    </header>
  );
}
