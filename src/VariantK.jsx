/**
 * Variant K — "ALTITUDE"
 * Cloud & Infrastructure. Sky-white bg, electric blue, Sora font.
 * Sky gradient hero, floating cloud card layers, wave SVG dividers.
 * Company: Kilimanjaro Innovation Labs Inc. — Cloud Migration & Infrastructure
 */
import { useState, useEffect } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

const SKYWHITE = '#EFF6FF';
const WHITE    = '#FFFFFF';
const BLUE     = '#2563EB';
const SKY      = '#0EA5E9';
const LBLUE    = '#38BDF8';
const DNAVY    = '#0C4A6E';
const LGRAY    = '#E0F2FE';

const SORA = { fontFamily: '"Sora", sans-serif' };
const BOLD = { ...SORA, fontWeight: 700 };

const SERVICES_K = [
  { icon: '☁️', title: 'Cloud Migration', providers: ['AWS', 'Azure', 'GCP'], desc: 'Lift-and-shift, re-platform, and re-architect migrations with zero business disruption. Our proven methodology covers 200+ migrations and counting.' },
  { icon: '⚙️', title: 'Kubernetes & Containers', providers: ['EKS', 'AKS', 'GKE'], desc: 'Design, deploy, and manage production Kubernetes environments with GitOps, auto-scaling, and service mesh configuration.' },
  { icon: '🔒', title: 'Cloud Security & Compliance', providers: ['IAM', 'CSPM', 'WAF'], desc: 'Cloud security posture management, identity governance, and automated compliance controls for regulated cloud workloads.' },
  { icon: '💰', title: 'FinOps & Cost Optimization', providers: ['CUR', 'Spot', 'RI'], desc: 'Average 38% cloud cost reduction through rightsizing, reserved instance strategy, and real-time spend anomaly detection.' },
];

const PRODUCTS_K = [
  {
    name: 'KiliCloud',
    tag: 'Multi-Cloud Management',
    desc: 'A unified console for managing workloads across AWS, Azure, and GCP from a single pane of glass. Real-time cost visibility, security posture scoring, and cross-cloud policy enforcement built in.',
    features: ['Unified multi-cloud dashboard', 'Real-time cost anomaly alerts', 'Cross-cloud IAM governance', 'FinOps optimization engine'],
    providers: ['AWS', 'Azure', 'GCP'],
  },
  {
    name: 'KiliMigrate',
    tag: 'Migration Accelerator',
    desc: 'Automated cloud migration assessment, dependency mapping, and wave planning. KiliMigrate reduces migration planning time from months to days with AI-assisted workload classification and risk scoring.',
    features: ['Automated dependency mapping', 'AI workload classification', 'Wave plan generation', '7-step migration playbook'],
    providers: ['Discovery', 'Planning', 'Execute'],
  },
];

const CASES_K = [
  { client: 'ArcticSky Corp', title: 'Full Data Center to Azure Migration', desc: 'Migrated 340 virtual machines across 12 workload families from on-premise data centers to Azure in a 90-day program with zero service interruptions. Immediate cost savings followed.', stat: '38%', statLabel: 'Cloud Cost Reduction' },
  { client: 'NorthCloud Retail', title: 'Multi-Cloud Architecture', desc: 'Designed a multi-cloud architecture spanning AWS for compute, Azure for data, and GCP for ML. Enabled a 5× acceleration in deployment frequency through GitOps and Kubernetes automation.', stat: '5×', statLabel: 'Deployment Speed' },
  { client: 'PeakData Analytics', title: 'Kubernetes Modernization', desc: 'Re-platformed a monolithic analytics application to a microservices architecture on EKS. Achieved zero-downtime during cutover and enabled daily continuous delivery.', stat: '0', statLabel: 'Downtime During Migration' },
];

const CLIENTS_K = ['ArcticSky', 'NorthCloud', 'PeakData', 'SkyBridge', 'AlpineNet', 'SummitTech'];
const MARQUEE_K = ['Cloud Native', 'Multi-Cloud', 'AWS', 'Azure', 'GCP', 'Kubernetes', 'FinOps', 'Scale Without Limits', 'Always Up', 'DevOps First'];

// ─── Wave SVG ─────────────────────────────────────────────────────────────────
function Wave({ color = WHITE, flip = false }) {
  return (
    <div style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: 'block' }}>
        <path d="M0 64L60 53.3C120 43 240 21 360 16C480 11 600 21 720 26.7C840 32 960 32 1080 26.7C1200 21 1320 11 1380 5.3L1440 0V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0Z" fill={color} />
      </svg>
    </div>
  );
}

// ─── Provider badge ───────────────────────────────────────────────────────────
function Badge({ label }) {
  return (
    <span style={{ ...SORA, fontWeight: 600, fontSize: '10px', letterSpacing: '0.08em', color: BLUE, background: `${BLUE}12`, border: `1px solid ${BLUE}25`, padding: '3px 10px', borderRadius: '100px' }} className="uppercase">{label}</span>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavK() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 transition-all duration-300"
      style={{ background: scrolled ? 'rgba(239,246,255,0.95)' : 'transparent', borderBottom: scrolled ? `1px solid ${LGRAY}` : 'none', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${BLUE}, ${SKY})` }}>
            <svg viewBox="0 0 16 16" fill="white" className="w-4 h-4">
              <path d="M8 2C5.8 2 4 3.8 4 6C4 7.1 4.4 8.1 5.1 8.8C3.3 9.2 2 10.8 2 12.5C2 14.4 3.6 16 5.5 16H11.5C13.9 16 16 13.9 16 11.5C16 9.6 14.8 8 13.1 7.4C13.4 6.9 13.6 6.4 13.6 5.8C13.6 3.7 11.9 2 9.8 2H8Z" />
            </svg>
          </div>
          <span style={{ ...BOLD, fontSize: '16px', color: DNAVY }}>Kilimanjaro</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 list-none">
          {['Products', 'Services', 'Work'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-k`}
                style={{ ...SORA, fontWeight: 500, fontSize: '14px', color: '#555' }}
                className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('contact-k')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: `linear-gradient(135deg, ${BLUE}, ${SKY})`, color: WHITE, ...BOLD, fontSize: '13px', border: 'none', boxShadow: `0 4px 16px ${BLUE}30` }}
          className="px-6 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity">
          Start Migration
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroK() {
  const [c200, ref200] = useCountUp(200, '+');
  const [c38, ref38] = useCountUp(38, '%');
  const [c5, ref5] = useCountUp(5, '×');

  return (
    <section className="relative overflow-hidden pt-16" style={{ background: `linear-gradient(180deg, ${LBLUE}30 0%, ${SKYWHITE} 40%, ${WHITE} 100%)`, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Cloud blobs */}
      <div className="absolute pointer-events-none animate-orb-1" style={{ width: '400px', height: '200px', background: WHITE, borderRadius: '50%', filter: 'blur(40px)', top: '15%', left: '-80px', opacity: 0.7 }} />
      <div className="absolute pointer-events-none animate-orb-2" style={{ width: '300px', height: '150px', background: WHITE, borderRadius: '50%', filter: 'blur(30px)', top: '25%', right: '-40px', opacity: 0.6 }} />
      <div className="absolute pointer-events-none animate-orb-3" style={{ width: '500px', height: '200px', background: `${LBLUE}30`, borderRadius: '50%', filter: 'blur(60px)', bottom: '20%', left: '20%', opacity: 0.5 }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="anim-fade-up-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}25` }}>
              <svg viewBox="0 0 12 12" fill={BLUE} className="w-3 h-3"><circle cx="6" cy="6" r="6" /></svg>
              <span style={{ ...SORA, fontWeight: 600, fontSize: '12px', color: BLUE }}>Cloud Migration & Infrastructure · Canada</span>
            </div>
            <h1 style={{ ...BOLD, fontSize: 'clamp(44px,7vw,88px)', lineHeight: 0.95, letterSpacing: '-0.04em', color: DNAVY }} className="anim-fade-up-2 mb-6">
              Lift off.<br />
              <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${SKY}, ${LBLUE})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Scale up.
              </span>
            </h1>
            <p style={{ ...SORA, fontWeight: 400, fontSize: '17px', lineHeight: 1.7, color: '#555', maxWidth: '440px' }} className="mb-10">
              Kilimanjaro moves your infrastructure to the cloud — faster, cheaper, and with zero downtime. 200+ migrations delivered for Canadian enterprises.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('products-k')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: `linear-gradient(135deg, ${BLUE}, ${SKY})`, color: WHITE, ...BOLD, fontSize: '13px', border: 'none', boxShadow: `0 8px 24px ${BLUE}35` }}
                className="px-8 py-3.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                Our Cloud Platforms <ArrowUpRight />
              </button>
              <button
                onClick={() => document.getElementById('contact-k')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: WHITE, color: DNAVY, ...SORA, fontWeight: 600, fontSize: '13px', border: `1px solid ${LGRAY}`, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                className="px-8 py-3.5 rounded-full cursor-pointer hover:border-blue-200 transition-colors">
                Get Migration Assessment
              </button>
            </div>
          </div>

          {/* Right: Floating stats */}
          <div className="anim-fade-up-2 flex flex-col gap-4">
            {[
              { ref: ref200, val: c200, label: 'Cloud migrations delivered', color: BLUE },
              { ref: ref38,  val: c38,  label: 'Average cost reduction',     color: SKY },
              { ref: ref5,   val: c5,   label: 'Faster deployment speed',    color: LBLUE },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-6 p-6 rounded-2xl"
                style={{ background: WHITE, border: `1px solid ${s.color}25`, boxShadow: `0 4px 24px ${s.color}12` }}>
                <div ref={s.ref} style={{ ...BOLD, fontSize: '48px', lineHeight: 1, color: s.color, minWidth: '100px' }}>{s.val}</div>
                <div style={{ ...SORA, fontWeight: 500, fontSize: '14px', color: '#555' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Wave color={WHITE} />
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsK() {
  return (
    <section id="products-k" className="py-24 relative" style={{ background: WHITE }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...SORA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: BLUE }} className="uppercase mb-3">02 / Cloud Platforms</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: DNAVY }} className="reveal">
            Your cloud,<br />in control.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_K.map((p, i) => (
            <div key={p.name} className="rounded-2xl p-8 group cursor-default"
              style={{
                background: i === 0 ? `linear-gradient(135deg, ${DNAVY}, ${BLUE}CC)` : SKYWHITE,
                border: `1px solid ${i === 0 ? 'transparent' : LGRAY}`,
                boxShadow: `0 8px 40px ${BLUE}${i === 0 ? '30' : '10'}`,
                transition: 'box-shadow 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 16px 60px ${BLUE}${i === 0 ? '50' : '20'}`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 8px 40px ${BLUE}${i === 0 ? '30' : '10'}`}>
              <div className="flex gap-2 mb-5 flex-wrap">
                {p.providers.map(pr => (
                  <span key={pr}
                    style={{ ...SORA, fontWeight: 600, fontSize: '10px', letterSpacing: '0.08em', color: i === 0 ? WHITE : BLUE, background: i === 0 ? 'rgba(255,255,255,0.15)' : `${BLUE}12`, border: `1px solid ${i === 0 ? 'rgba(255,255,255,0.3)' : `${BLUE}25`}`, padding: '3px 10px', borderRadius: '100px' }}
                    className="uppercase">{pr}</span>
                ))}
              </div>
              <div style={{ ...SORA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', color: i === 0 ? 'rgba(255,255,255,0.5)' : BLUE }} className="uppercase mb-2">{p.tag}</div>
              <h3 style={{ ...BOLD, fontSize: '40px', lineHeight: 1.0, letterSpacing: '-0.03em', color: i === 0 ? WHITE : DNAVY }} className="mb-4">{p.name}</h3>
              <p style={{ ...SORA, fontWeight: 400, fontSize: '14px', lineHeight: 1.75, color: i === 0 ? 'rgba(255,255,255,0.65)' : '#555' }} className="mb-7">{p.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} style={{ ...SORA, fontWeight: 400, fontSize: '13px', color: i === 0 ? 'rgba(255,255,255,0.6)' : '#555' }} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 0 ? LBLUE : BLUE }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{ background: i === 0 ? WHITE : `linear-gradient(135deg, ${BLUE}, ${SKY})`, color: i === 0 ? BLUE : WHITE, ...BOLD, fontSize: '12px', border: 'none', boxShadow: i === 0 ? 'none' : `0 4px 16px ${BLUE}40` }}
                className="px-6 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                Learn More <ArrowUpRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function ServicesK() {
  return (
    <section id="services-k" className="relative" style={{ background: SKYWHITE }}>
      <Wave color={WHITE} flip />
      <div className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="mb-14">
            <div style={{ ...SORA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: BLUE }} className="uppercase mb-3">03 / Cloud Services</div>
            <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: DNAVY }} className="reveal">
              Every layer,<br />covered.
            </h2>
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES_K.map((s, i) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 group cursor-default"
                style={{ border: `1px solid ${LGRAY}`, boxShadow: '0 2px 16px rgba(37,99,235,0.06)', transition: 'box-shadow 0.25s ease, border-color 0.25s ease' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 40px ${BLUE}15`; e.currentTarget.style.borderColor = `${BLUE}30`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(37,99,235,0.06)'; e.currentTarget.style.borderColor = LGRAY; }}>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 style={{ ...BOLD, fontSize: '18px', color: DNAVY, lineHeight: 1.2 }} className="mb-3">{s.title}</h3>
                <div className="flex gap-2 flex-wrap mb-4">
                  {s.providers.map(pr => <Badge key={pr} label={pr} />)}
                </div>
                <p style={{ ...SORA, fontWeight: 400, fontSize: '13px', lineHeight: 1.7, color: '#666' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Wave color={WHITE} />
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesK() {
  return (
    <section id="work-k" className="py-24 relative" style={{ background: WHITE }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...SORA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: BLUE }} className="uppercase mb-3">05 / Migrations</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: DNAVY }} className="reveal">
            200+ successful<br />flights.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES_K.map((c, i) => (
            <div key={c.client} className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${LGRAY}`, boxShadow: '0 4px 24px rgba(37,99,235,0.08)' }}>
              <div className="p-6" style={{ background: i === 0 ? `linear-gradient(135deg, ${BLUE}, ${SKY})` : i === 1 ? `linear-gradient(135deg, ${SKY}, ${LBLUE})` : SKYWHITE, borderBottom: `1px solid ${LGRAY}` }}>
                <div style={{ ...BOLD, fontSize: '44px', lineHeight: 1, color: i < 2 ? WHITE : BLUE }}>{c.stat}</div>
                <div style={{ ...SORA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', color: i < 2 ? 'rgba(255,255,255,0.7)' : BLUE, marginTop: '4px' }} className="uppercase">{c.statLabel}</div>
              </div>
              <div className="p-6">
                <div style={{ ...SORA, fontWeight: 600, fontSize: '11px', color: BLUE, letterSpacing: '0.1em' }} className="uppercase mb-2">{c.client}</div>
                <h3 style={{ ...BOLD, fontSize: '18px', color: DNAVY, lineHeight: 1.25 }} className="mb-3">{c.title}</h3>
                <p style={{ ...SORA, fontWeight: 400, fontSize: '13px', lineHeight: 1.7, color: '#666' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeK() {
  const doubled = [...MARQUEE_K, ...MARQUEE_K];
  return (
    <div className="py-5 overflow-hidden" style={{ background: `linear-gradient(90deg, ${DNAVY}, ${BLUE}, ${SKY}, ${BLUE}, ${DNAVY})` }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span style={{ ...BOLD, fontSize: '11px', letterSpacing: '0.18em', color: WHITE }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: LBLUE, fontSize: '6px' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsK() {
  return (
    <section className="py-24" style={{ background: SKYWHITE }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div style={{ ...SORA, fontWeight: 500, fontSize: '13px', color: '#888', letterSpacing: '0.06em', textAlign: 'center', marginBottom: '40px' }}>Cloud-first companies partnered with Kilimanjaro</div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS_K.map((name, i) => (
            <div key={name} className="bg-white rounded-xl py-8 px-4 flex items-center justify-center cursor-default"
              style={{ border: `1px solid ${LGRAY}`, boxShadow: '0 2px 8px rgba(37,99,235,0.06)', transition: 'border-color 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${BLUE}40`; e.currentTarget.style.boxShadow = `0 4px 20px ${BLUE}15`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = LGRAY; e.currentTarget.style.boxShadow = '0 2px 8px rgba(37,99,235,0.06)'; }}>
              <span style={{ ...BOLD, fontSize: '13px', letterSpacing: '0.04em', color: DNAVY }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactK() {
  return (
    <section id="contact-k" className="relative overflow-hidden" style={{ background: WHITE }}>
      <Wave color={SKYWHITE} />
      <div className="py-32 relative z-10" style={{ background: `linear-gradient(135deg, ${DNAVY}, ${BLUE})` }}>
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div style={{ ...SORA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: LBLUE }} className="uppercase mb-6">07 / Start Your Migration</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.95, letterSpacing: '-0.04em', color: WHITE }} className="reveal mb-8">
            Ready to<br />
            <span style={{ color: LBLUE }}>take flight?</span>
          </h2>
          <p style={{ ...SORA, fontWeight: 400, fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }} className="mb-10 max-w-[500px] mx-auto">
            Start with a free cloud readiness assessment. Our architects will deliver a migration roadmap with cost projections in 5 business days.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:cloud@kilimanjaro.ca"
              style={{ background: WHITE, color: BLUE, ...BOLD, fontSize: '13px', boxShadow: '0 8px 32px rgba(255,255,255,0.25)' }}
              className="px-10 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2 no-underline">
              Get Free Assessment <ArrowUpRight />
            </a>
            <button
              style={{ background: 'rgba(255,255,255,0.12)', color: WHITE, ...SORA, fontWeight: 600, fontSize: '13px', border: '1px solid rgba(255,255,255,0.3)' }}
              className="px-10 py-4 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
              Schedule an Architect Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterK() {
  return (
    <footer style={{ background: DNAVY, borderTop: '1px solid rgba(255,255,255,0.08)' }} className="pt-10 pb-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={{ ...BOLD, fontSize: '15px', color: WHITE }}>Kilimanjaro Cloud</span>
        <p style={{ ...SORA, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" style={{ ...SORA, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.3)' }} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantK() {
  useScrollReveal();
  return (
    <div style={{ background: SKYWHITE, color: DNAVY }}>
      <NavK />
      <HeroK />
      <ProductsK />
      <ServicesK />
      <CasesK />
      <MarqueeK />
      <ClientsK />
      <ContactK />
      <FooterK />
    </div>
  );
}
