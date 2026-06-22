import { useRequestAccess } from '../context/RequestAccessContext';
import './PricingTable.css';

const FEATURES = [
  { label: 'Full system codebase', diy: true, dfy: true },
  { label: 'Google Sheets content brain', diy: true, dfy: true },
  { label: 'All AI prompts and scripts', diy: true, dfy: true },
  { label: 'Step-by-step video course', diy: true, dfy: true },
  { label: 'API key setup guides', diy: true, dfy: true },
  { label: 'Social media connection guides', diy: true, dfy: true },
  { label: 'Content calendar generated for your business', diy: true, dfy: true },
  { label: 'We build it for you', diy: false, dfy: true },
  { label: 'We connect all your APIs and accounts', diy: false, dfy: true },
  { label: 'We configure it for your industry', diy: false, dfy: true },
  { label: 'First article published as proof', diy: false, dfy: true },
  { label: 'Async support during setup', diy: false, dfy: true },
];

const PricingTable = () => {
  const { openRequestForm } = useRequestAccess();

  return (
    <div className="pricing-wrap">
      <div className="pricing-cards">
        <div className="pricing-card card">
          <span className="eyebrow">DIY</span>
          <h3>Teach Me To Build It</h3>
          <div className="pricing-price">$997<span> one time</span></div>
          <p className="pricing-desc">
            You get everything you need to build the system yourself. The full codebase, the Google Sheets
            template, all prompts, all setup guides, and a step-by-step video course walking through every
            layer of the system. You'll need basic comfort with GitHub and following technical instructions —
            no coding experience required.
          </p>
          <button className="btn btn-secondary btn-block" onClick={() => openRequestForm('DIY — $997')}>
            Get the DIY Package →
          </button>
        </div>

        <div className="pricing-card pricing-card-featured card">
          <span className="pricing-badge">Most Popular</span>
          <span className="eyebrow">DFY</span>
          <h3>Build It For Me</h3>
          <div className="pricing-price">$2,997<span> one time</span></div>
          <p className="pricing-desc">
            We build your content engine from scratch, configured for your business. You fill in an
            onboarding form. We handle everything else — repo setup, API connections, content calendar,
            social media linking, and a first published article to prove it's live.
          </p>
          <button className="btn btn-primary btn-block" onClick={() => openRequestForm('DFY — $2,997')}>
            Get the DFY Package →
          </button>
        </div>
      </div>

      <div className="pricing-table-scroll">
        <table className="pricing-table">
          <thead>
            <tr>
              <th></th>
              <th>DIY</th>
              <th>DFY</th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((f) => (
              <tr key={f.label}>
                <td>{f.label}</td>
                <td>{f.diy ? <span className="tick">✓</span> : <span className="cross">—</span>}</td>
                <td>{f.dfy ? <span className="tick">✓</span> : <span className="cross">—</span>}</td>
              </tr>
            ))}
            <tr className="pricing-table-fee">
              <td>Monthly fee</td>
              <td colSpan={2}>None. Ever.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="pricing-note">
        Both options include lifetime access to all system updates and improvements. You own the code.
        No subscriptions. No lock-in.
      </p>
    </div>
  );
};

export default PricingTable;
