import { useRequestAccess } from '../context/RequestAccessContext';
import SEO from '../components/SEO';
import LandingHero from '../components/LandingHero';
import FeatureList from '../components/FeatureList';
import './LandingPage.css';

const CONTENT_TRAITS = [
  "Is written in your firm's voice and tone",
  'Targets the specific services you offer and the locations you serve',
  'Is structured for Google search and AI search engines alike',
  'Publishes automatically — no human involvement after setup',
  'Distributes across LinkedIn, Facebook, Instagram, and more',
];

const ForProfessionalServices = () => {
  const { openRequestForm } = useRequestAccess();

  return (
    <>
      <SEO
        title="AI Content Marketing for Professional Services"
        description="For solicitors, accountants, IFAs, brokers and consultants. A content engine that publishes every day without taking you away from client work."
        path="/for-professional-services"
      />
      <LandingHero
        eyebrow="For Professional Services"
        headline="You know you need content. You just never have time to create it."
        subheadline="For solicitors, accountants, IFAs, brokers, and consultants. A content engine that publishes every day — without taking you away from client work."
        cta="See How It Works →"
        onCta={() => openRequestForm('General Enquiry')}
      />

      <section className="landing-body">
        <div className="container">
          <p className="lead">
            Professional services firms have a content problem unlike any other industry.
          </p>
          <p className="lead">
            You need to demonstrate expertise. You need to rank for local searches. You need to stay
            visible to referrers, introducers, and direct clients. And you need all of this to sound
            authoritative, compliant in tone, and genuinely useful — not generic.
          </p>
          <p className="lead">
            But you're also billing by the hour. Every minute spent writing a blog post is a minute not
            spent on client work.
          </p>
          <p className="lead">Contentedly solves this entirely. The system generates content that:</p>

          <FeatureList items={CONTENT_TRAITS} />

          <p className="lead">
            It was originally built for a UK commercial finance brokerage. The same infrastructure works
            for any professional services firm.
          </p>

          <div className="landing-two-col">
            <div className="landing-option-card">
              <span className="eyebrow">DIY</span>
              <div className="price">$997</div>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 18 }}>Get the system and build it yourself</p>
              <button className="btn btn-secondary btn-block" onClick={() => openRequestForm('DIY — $997')}>
                Teach Me To Build It →
              </button>
            </div>
            <div className="landing-option-card">
              <span className="eyebrow">DFY</span>
              <div className="price">$2,997</div>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 18 }}>We build it, configure it, and hand it over running</p>
              <button className="btn btn-primary btn-block" onClick={() => openRequestForm('DFY — $2,997')}>
                Build It For Me →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForProfessionalServices;
