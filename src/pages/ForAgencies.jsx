import { useRequestAccess } from '../context/RequestAccessContext';
import SEO from '../components/SEO';
import LandingHero from '../components/LandingHero';
import FeatureList from '../components/FeatureList';
import './LandingPage.css';

const AGENCY_BENEFITS = [
  'Deliver daily content for each client with zero ongoing labour cost',
  'Add content marketing to your service stack without hiring',
  'White-label the system under your own brand',
  'Charge clients a monthly retainer. Your cost is under £1/day per client.',
];

const ForAgencies = () => {
  const { openRequestForm } = useRequestAccess();

  return (
    <>
      <SEO
        title="White-Label AI Content Infrastructure for Agencies"
        description="Buy the autonomous content engine once, deploy it for every client. Daily content, social distribution and reporting with zero ongoing labour cost."
        path="/for-agencies"
      />
      <LandingHero
        eyebrow="For Agencies"
        headline="Your competitors are already using AI. Are you still writing content manually?"
        subheadline="White-label AI content infrastructure for agencies. Buy the system once. Deploy it for every client."
        cta="Talk To Us About Agency Licensing →"
        onCta={() => openRequestForm('Agency Licensing')}
      />

      <section className="landing-body">
        <div className="container">
          <p className="lead">
            If you run a marketing agency, Contentedly changes your unit economics entirely.
          </p>
          <p className="lead">
            Right now, you're paying writers, social managers, and SEO consultants to do work that can
            be automated. Or you're using AI tools that still require a human operator. Neither is scalable.
          </p>
          <p className="lead">
            Contentedly is infrastructure. You buy it once, configure it per client, and it runs
            autonomously — producing content, social posts, and reports without your team touching it.
          </p>

          <h3>What this means for your agency</h3>
          <FeatureList items={AGENCY_BENEFITS} />

          <p className="lead">
            The DFY package gives you one configured system — for one client or your own agency. For
            multi-client licensing and white-label arrangements, get in touch directly.
          </p>

          <div className="landing-price-block">
            <button className="btn btn-primary btn-lg" onClick={() => openRequestForm('Agency Licensing')}>
              Contact Us About Agency Use →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForAgencies;
