import './LandingHero.css';

const LandingHero = ({ eyebrow, headline, subheadline, cta, onCta }) => (
  <section className="landing-hero">
    <div className="container landing-hero-inner">
      {eyebrow && <span className="section-label">{eyebrow}</span>}
      <h1 className="landing-hero-headline">{headline}</h1>
      <p className="landing-hero-sub">{subheadline}</p>
      {cta && (
        <button className="btn btn-primary btn-lg" onClick={onCta}>
          {cta}
        </button>
      )}
    </div>
  </section>
);

export default LandingHero;
