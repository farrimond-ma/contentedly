import { useRequestAccess } from '../context/RequestAccessContext';
import SEO from '../components/SEO';
import PricingTable from '../components/PricingTable';
import FAQAccordion from '../components/FAQAccordion';
import './Home.css';

const HOW_IT_WORKS = [
  { n: '1', title: 'Content Planning', body: "A 90-day content calendar is generated for your business in one go. Every article topic, target keyword, target location, and content brief — planned in advance and queued automatically. Built around your services, your locations, and your competitors." },
  { n: '2', title: 'Daily Article Writing', body: 'Every morning and afternoon, the system picks the next scheduled article, writes a full 1,200+ word SEO-optimised post using GPT-4o, runs it through a humanisation layer, generates a hero image, and publishes it live to your website — automatically.' },
  { n: '3', title: 'Daily Social Distribution', body: 'The moment an article is published, platform-specific posts are generated and scheduled for Facebook, LinkedIn, Instagram, and Pinterest. Each one written in the right tone for that platform. Posted automatically. Tracked so nothing posts twice.' },
  { n: '4', title: 'Video & Reels', body: 'A short video reel is generated from each article — script, voiceover, and video — and posted to Facebook Reels and Instagram Reels. No camera. No editing. No production cost.' },
  { n: '5', title: 'AI Visibility Monitoring', body: "Every week, 80 search prompts are fired across ChatGPT, Perplexity, Claude, and Gemini. The system tracks whether your business is mentioned in the answers. Topics where you're missing get new content added to the queue automatically." },
  { n: '6', title: 'Search Console Intelligence', body: 'Weekly Google Search Console data is pulled automatically — page 2 keywords, high-impression pages with low click rates, and content gaps. Everything is logged and flagged for action.' },
  { n: '7', title: 'Backlink Outreach', body: 'The system monitors relevant trade publications and industry blogs. When a relevant article is published, it drafts an expert comment and outreach email from you — ready for you to review and send.' },
  { n: '8', title: 'Health Monitoring', body: "Every night, the system checks that everything ran correctly. If anything failed, it raises an alert immediately. You always know the engine is running." },
];

const FAQ_ITEMS = [
  { q: 'What is "AI visibility" and why does it matter?', a: 'When someone asks ChatGPT, Perplexity, Claude, or Gemini a question like "who offers bridging finance in the UK?", the AI gives an answer — and that answer either includes your business or it doesn\'t. Most businesses have no idea what AI is telling their prospects. Contentedly checks this every week across 80 real customer questions, tracks whether you or your competitors get mentioned, and automatically writes new content to close the gap. This is genuinely new ground — almost no competitor offers it.' },
  { q: 'Do I need to be technical to use this?', a: 'For the DIY package, you need basic comfort with GitHub — creating a repository, adding files, setting up environment variables. No coding required. If you can follow a recipe, you can follow the setup guide. For the DFY package, you don’t need any technical knowledge at all. We handle everything.' },
  { q: 'What does it actually cost to run once it’s set up?', a: 'Under £1 per day in API costs. That covers two full blog articles, all social posts, and all monitoring. The main costs are OpenAI (article writing and images) and Anthropic Claude (social copy and humanisation). You pay these directly to the providers — there’s no markup from us.' },
  { q: 'What if I only have a website and no social media presence?', a: 'The content engine can run with just a website and one or two social platforms to start. You don’t need to be on every platform — we configure it for where you actually are.' },
  { q: 'Does it work for any industry?', a: 'Yes. The content calendar is generated fresh for your business — your services, your locations, your tone. We’ve designed it to work for any business that benefits from content marketing: professional services, trades, retail, manufacturing, hospitality, and more.' },
  { q: 'What happens if an AI API changes or a social media API breaks?', a: 'The DIY package includes all the code, so you can update it yourself — or ask us for help. The DFY package includes async support during your first month of operation to handle any teething issues.' },
  { q: 'Can I add more platforms later?', a: 'Yes. The system is modular. TikTok, YouTube Shorts, Reddit, and Pinterest publishers are already built — you can activate them when you’re ready.' },
  { q: 'Will the content sound robotic or generic?', a: 'No. The system uses a two-step process: GPT-4o writes the article, then Claude runs a humanisation pass to remove AI patterns and adjust the phrasing. The result reads as written by a knowledgeable human.' },
  { q: 'What do I need to provide?', a: 'For DFY: your website URL, the services you offer, the locations you target, your social media logins, and access to create API keys with OpenAI, Anthropic, and ElevenLabs. We walk you through every step. For DIY: the same information, plus the time to follow the setup course.' },
];

const Home = () => {
  const { openRequestForm } = useRequestAccess();

  return (
    <>
      <SEO
        title="Set It Up Once. Publish Forever."
        description="Contentedly.ai is a fully autonomous AI content engine that writes, publishes and distributes content for your business every day — without you lifting a finger. One-time payment. No monthly fees."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="container hero-content">
          <h1>Set it up once. <span className="text-gradient">Publish forever.</span></h1>
          <p className="hero-sub">
            Contentedly.ai is a fully autonomous AI content engine that writes, publishes and distributes
            content for your business — every single day — without you lifting a finger.
          </p>
          <p className="hero-support">
            Two blog posts. Daily social media. Facebook Reels. LinkedIn. Instagram. SEO monitoring.
            All running on autopilot. All yours to own outright.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary btn-lg" onClick={() => openRequestForm('DFY — $2,997')}>
              Build It For Me — $2,997 →
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => openRequestForm('DIY — $997')}>
              Teach Me To Build It — $997 →
            </button>
          </div>
          <p className="hero-trust">
            Built by a business owner. Proven on a live business. No monthly fees. No retainer. You own it forever.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="section problem">
        <div className="container">
          <span className="section-label">Why Most Content Marketing Fails</span>
          <h2>You know content matters. You just never have time to create it.</h2>
          <p className="lead">
            Every business owner knows the same truth: consistent content builds trust, drives search
            rankings, and keeps your brand visible. But knowing it and doing it are two very different things.
          </p>

          <div className="problem-grid">
            <div className="problem-item card">You hire a freelancer. They're good for a few months, then inconsistent.</div>
            <div className="problem-item card">You pay an agency. The retainer hurts. The results take forever.</div>
            <div className="problem-item card">You try to do it yourself. Two posts go out. Then nothing for six weeks.</div>
            <div className="problem-item card">You buy an AI tool subscription. You still have to do all the work.</div>
          </div>

          <p className="lead" style={{ marginTop: 32 }}>
            The problem isn't motivation. It's infrastructure. Most businesses don't have a content
            <em> system</em> — they have content <em>intentions</em>.
          </p>

          <blockquote className="pull-quote">
            "The average business publishes fewer than 4 blog posts a month. Contentedly publishes 60."
          </blockquote>
        </div>
      </section>

      {/* ── THE SOLUTION ── */}
      <section className="section solution" id="what-you-get">
        <div className="container">
          <span className="section-label">What Contentedly Does</span>
          <h2>A complete content marketing operation. Running 24/7. Without you.</h2>
          <p className="lead">
            Contentedly isn't a tool you use. It's a system that runs. Once it's set up for your business,
            it operates entirely on autopilot — planning content 90 days ahead, writing full SEO-optimised
            articles, publishing them to your website, and distributing them across every major social
            platform. Every day. Without human involvement.
          </p>
          <p className="lead">
            It monitors how often your business appears in AI search results (ChatGPT, Perplexity, Claude,
            Gemini) and automatically fills the gaps. It tracks your Google Search Console rankings weekly
            and flags opportunities. It even monitors industry publications and drafts backlink outreach
            emails for you. And it does all of this for <strong>less than £1 a day</strong> in running costs.
          </p>

          <div className="solution-grid solution-grid-4">
            <div className="solution-card card">
              <span className="eyebrow">Content</span>
              <h3>Writes like a human. Publishes like a machine.</h3>
              <p>Two full SEO-optimised blog articles every day. Structured for Google. Formatted for AI search engines. With FAQ schema, internal links, and a hero image. All generated, published, and live on your site automatically.</p>
            </div>
            <div className="solution-card card">
              <span className="eyebrow">Social</span>
              <h3>Every platform. Every day. Zero effort.</h3>
              <p>Facebook, LinkedIn, Instagram, Pinterest — each post written in the right tone for that platform, using your latest article, posted automatically. Facebook Reels and video content included.</p>
            </div>
            <div className="solution-card card solution-card-highlight">
              <span className="eyebrow">AI Visibility</span>
              <h3>Are you the answer when AI gets asked?</h3>
              <p>Every week, 80 real customer questions are fired at ChatGPT, Perplexity, Claude, and Gemini. The system checks whether your business gets mentioned — and whether your competitors are mentioned instead. Wherever you're missing, a new article gets queued automatically to close the gap. Most businesses have no idea what AI is telling their prospects. You will.</p>
            </div>
            <div className="solution-card card">
              <span className="eyebrow">Keyword Intelligence</span>
              <h3>It knows what people are searching for. And what you're missing.</h3>
              <p>Weekly Google Search Console data reveals page-2 keywords you're almost ranking for, high-impression pages losing clicks, and search terms with real demand but no article yet. The system researches and schedules new keyword-targeted content automatically — no manual keyword research required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <span className="section-label">The System</span>
          <h2>Eight layers. One autonomous engine.</h2>
          <p className="lead">Here's what's running under the hood — every day, without you.</p>

          <div className="steps-grid">
            {HOW_IT_WORKS.map((step) => (
              <div className="step-card card" key={step.n}>
                <div className="step-number">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="section proof" id="proof">
        <div className="container">
          <span className="section-label">Proof It Works</span>
          <h2>This isn't a concept. It's running live right now.</h2>
          <p className="lead">
            Contentedly was built for Boxx Commercial Finance — a UK financial services brokerage.
            Here's what the live system produces.
          </p>

          <div className="proof-grid">
            <div className="proof-stat"><strong>Daily</strong><span>Articles published — every weekday</span></div>
            <div className="proof-stat"><strong>4</strong><span>Social platforms posted to automatically</span></div>
            <div className="proof-stat"><strong>&lt;£1</strong><span>Daily running cost</span></div>
            <div className="proof-stat"><strong>0</strong><span>Human writing hours required</span></div>
            <div className="proof-stat"><strong>80</strong><span>Real customer prompts checked weekly across ChatGPT, Perplexity, Claude &amp; Gemini</span></div>
            <div className="proof-stat"><strong>Weekly</strong><span>Search Console keyword research, fully automated</span></div>
          </div>

          <p className="lead" style={{ marginTop: 32 }}>
            Every article on boxxfinance.co.uk was written, published, and distributed by this system —
            automatically. No freelancers. No agency. No human writing. The same system will run for your
            business — configured for your services, your locations, and your audience.
          </p>

          <a href="https://boxxfinance.co.uk" target="_blank" rel="noopener noreferrer" className="proof-link">
            See the live site → boxxfinance.co.uk
          </a>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section pricing" id="pricing">
        <div className="container">
          <span className="section-label">Pricing</span>
          <h2>Own it outright. No monthly fees. Ever.</h2>
          <p className="lead">Two options. Both give you a fully autonomous content engine. The difference is who builds it.</p>
          <PricingTable />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq">
        <div className="container">
          <span className="section-label">Common Questions</span>
          <h2 style={{ marginBottom: 36 }}>Things people ask before they buy</h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section about" id="about">
        <div className="container about-inner">
          <span className="section-label">Who Built This</span>
          <h2>Built by a business owner, not an agency.</h2>
          <p className="lead">
            My name is Mark Farrimond. I'm a commercial finance broker and co-founder of Boxx Commercial Finance.
          </p>
          <p className="lead">
            I'm not a marketing agency. I'm not an AI startup. I'm a business owner who needed consistent
            content marketing, couldn't justify the retainer costs, and spent months building a system that
            would do it properly — autonomously, at scale, for pennies per article.
          </p>
          <p className="lead">
            Contentedly is that system. It runs live on my own business every single day. I know it works
            because I've watched it work — on my own website, my own Google rankings, my own social channels.
          </p>
          <p className="lead">
            I built this because I needed it. I'm selling it because every other business owner I know has
            the same problem I had. You don't need an agency. You need infrastructure.
          </p>
          <p className="about-signature">— Mark Farrimond, Founder · Boxx Commercial Finance · Contentedly.ai</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>Your business deserves to be heard. <span className="text-gradient">Every day.</span></h2>
          <p className="lead">Stop planning to publish. Start publishing automatically.</p>
          <p className="lead">
            While you're reading this, businesses using Contentedly are publishing articles, posting to
            social media, and appearing in AI search results — without anyone sitting at a keyboard.
            Pick your path.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary btn-lg" onClick={() => openRequestForm('DFY — $2,997')}>
              Build It For Me — $2,997 →
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => openRequestForm('DIY — $997')}>
              Teach Me To Build It — $997 →
            </button>
          </div>
          <p className="hero-trust">One-time payment. No monthly fees. No retainer. You own it forever.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
