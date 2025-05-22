import React from 'react';
import '../styles/Footer.css';

const icons = {
  facebook: (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
    </svg>
  ),
  twitter: (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.92 4.92 0 002.163-2.724c-.95.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.379 4.482A13.949 13.949 0 011.671 3.149a4.822 4.822 0 001.523 6.574 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.926 4.926 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.395 0-.779-.023-1.158-.067a13.936 13.936 0 007.557 2.212c9.054 0 14-7.496 14-13.985 0-.21 0-.423-.015-.633a9.936 9.936 0 002.457-2.548l-.047-.02z" />
    </svg>
  ),
  linkedin: (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.371 4.268 5.455v6.286zM5.337 7.433a2.07 2.07 0 11.001-4.141 2.07 2.07 0 010 4.141zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.732v20.535C0 23.225.792 24 1.771 24h20.451c.978 0 1.778-.775 1.778-1.733V1.732C24 .775 23.203 0 22.225 0z" />
    </svg>
  ),
  instagram: (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.75a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Synco</div>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#product">Our Product</a>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="#" aria-label="Facebook" title="Facebook">{icons.facebook}</a>
          <a href="#" aria-label="Twitter" title="Twitter">{icons.twitter}</a>
          <a href="#" aria-label="LinkedIn" title="LinkedIn">{icons.linkedin}</a>
          <a href="#" aria-label="Instagram" title="Instagram">{icons.instagram}</a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Synco. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
