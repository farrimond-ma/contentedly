import { useRequestAccess } from '../context/RequestAccessContext';
import SEO from '../components/SEO';
import LandingHero from '../components/LandingHero';
import FeatureList from '../components/FeatureList';
import './LandingPage.css';

const WHAT_I_BUILD = [
  'Two SEO-optimised blog articles published to your website, every day, automatically',
  'Daily posts to Facebook, LinkedIn, Instagram, and Pinterest',
  'Facebook and Instagram Reels — script, voiceover, video — generated from each article',
  'Weekly AI visibility monitoring across ChatGPT, Perplexity, Claude, and Gemini',
  'Weekly Google Search Console intelligence — rankings, gaps, opportunities',
  'A 90-day content calendar built for your specific services and locations',
  'A nightly health check that alerts you if anything stops running',
];

const WHAT_YOU_GET = [
  'Full codebase in your own GitHub repository (you own it)',
  'Google Sheets content brain configured for your business',
  'All APIs connected (OpenAI, Anthropic, ElevenLabs, social platforms)',
  '90-day content calendar generated for your services and locations',
  'First article published to your site before handover',
  'Async support for 30 days after delivery',
];

const DoneForYou = () => {
  const { openRequestForm } = useRequestAccess();

  return (
    <>
      <SEO
        title="Done-For-You AI Content Engine"
        description="I'll build your complete autonomous content marketing system — daily blog posts, social distribution, AI visibility monitoring — configured for your business and handed over running. $2,997 one time."
        path="/done-for-you"
      />
      <LandingHero
        eyebrow="Done For You"
        headline="I built an AI content engine for my own business. Now I'll build one for yours."
        subheadline="Done-for-you content marketing automation. Configured for your business. Handed over to you. One price. No retainer."
        cta="Get Your Content Engine Built — $2,997 →"
        onCta={() => openRequestForm('DFY — $2,997')}
      />

      <section className="landing-body">
        <div className="container">
          <p className="lead">
            You don't need another subscription. You don't need another agency retainer. You need a system
            that runs itself — and you need someone who's already built one to set it up for you.
          </p>
          <p className="lead">That's exactly what this is.</p>
          <p className="lead">I'll build your complete AI content engine from scratch:</p>

          <FeatureList items={WHAT_I_BUILD} />

          <p className="lead">
            You fill in an onboarding form. I handle everything else. When I'm done, you have a fully
            running content engine — and I'll prove it by showing you the first article published live
            on your site.
          </p>

          <h3>What you get</h3>
          <FeatureList items={WHAT_YOU_GET} />

          <div className="landing-price-block">
            <span className="eyebrow">Price</span>
            <div className="price">$2,997 — one time</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>No monthly fees. Ever.</p>
            <button className="btn btn-primary btn-lg" onClick={() => openRequestForm('DFY — $2,997')}>
              Get Started →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoneForYou;
