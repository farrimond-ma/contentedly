import { useRequestAccess } from '../context/RequestAccessContext';
import SEO from '../components/SEO';
import LandingHero from '../components/LandingHero';
import FeatureList from '../components/FeatureList';
import './LandingPage.css';

const WHATS_INCLUDED = [
  'The complete codebase — every script, every workflow, every publisher',
  'Google Sheets content brain template — clone it for your business',
  'All AI prompts — the exact instructions that generate 1,200-word SEO articles, social posts, Reels scripts, and outreach emails',
  'Step-by-step video course — walking through every layer of the system',
  'API key setup guides for OpenAI, Anthropic, ElevenLabs, and every social platform',
  'Content calendar generation prompt — feed in your services and locations, get 90 days of content topics in 10 minutes',
  'The humanisation layer — the Claude post-processing step that makes articles sound human',
];

const WHAT_IT_RUNS = [
  'Daily blog article writing and publishing',
  'Daily Facebook, LinkedIn, Instagram, Pinterest posting',
  'Daily Reels video generation',
  'Weekly AI visibility monitoring',
  'Weekly Search Console intelligence',
  'Weekly backlink outreach pipeline',
  'Nightly health check',
];

const DIYContentSystem = () => {
  const { openRequestForm } = useRequestAccess();

  return (
    <>
      <SEO
        title="DIY AI Content System"
        description="Get the complete autonomous content engine codebase, prompts and setup course. Build it yourself in a weekend. $997 one time, no monthly fees."
        path="/diy-content-system"
      />
      <LandingHero
        eyebrow="DIY Content System"
        headline="Most businesses publish once a month. This system publishes twice a day."
        subheadline="Get the complete AI content engine — all the code, all the prompts, all the guides — and build it yourself. One-time cost. Runs forever."
        cta="Get the DIY Package — $997 →"
        onCta={() => openRequestForm('DIY — $997')}
      />

      <section className="landing-body">
        <div className="container">
          <p className="lead">
            This is everything I built to automate content marketing for my own business — packaged so
            you can set it up yourself.
          </p>
          <p className="lead">
            No coding experience required. If you're comfortable with GitHub and following technical
            instructions, you can have this running in a weekend.
          </p>

          <h3>What's included</h3>
          <FeatureList items={WHATS_INCLUDED} />

          <h3>What it runs</h3>
          <FeatureList items={WHAT_IT_RUNS} />

          <p className="lead">
            <strong>Running cost once built:</strong> Under £1/day. You pay OpenAI and Anthropic directly
            — no middleman, no markup.
          </p>

          <div className="landing-price-block">
            <span className="eyebrow">Price</span>
            <div className="price">$997 — one time</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>No monthly fees. Ever.</p>
            <button className="btn btn-primary btn-lg" onClick={() => openRequestForm('DIY — $997')}>
              Get the DIY Package →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DIYContentSystem;
