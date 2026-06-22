import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Contentedly<span className="navbar-logo-dot">.ai</span></div>
            <p className="footer-tagline">Set it up once. Publish forever.</p>
          </div>

          <div className="footer-links">
            <Link to="/#how-it-works">How It Works</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/#about">About</Link>
            <a href="mailto:hello@contentedly.ai">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Built with: OpenAI · Anthropic · ElevenLabs · GitHub Actions · Netlify</p>
          <p>© {year} Contentedly.ai · A product by Boxx Commercial Finance Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
