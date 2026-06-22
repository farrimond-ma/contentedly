import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRequestAccess } from '../context/RequestAccessContext';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openRequestForm } = useRequestAccess();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const navLink = (hash, label) => (
    isHome
      ? <a href={`#${hash}`} className="navbar-link" onClick={() => setMenuOpen(false)}>{label}</a>
      : <Link to={`/#${hash}`} className="navbar-link" onClick={() => setMenuOpen(false)}>{label}</Link>
  );

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Contentedly<span className="navbar-logo-dot">.ai</span>
        </Link>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {navLink('how-it-works', 'How It Works')}
          {navLink('what-you-get', 'What You Get')}
          {navLink('proof', 'Proof It Works')}
          {navLink('pricing', 'Pricing')}
          {navLink('about', 'About')}
          <button className="btn btn-primary navbar-cta" onClick={() => { setMenuOpen(false); openRequestForm('General Enquiry'); }}>
            Get Started →
          </button>
        </div>

        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
