/**
 * Variant J — "PRISM"
 * Data & Analytics. Light gray-white bg, indigo + violet + cyan, DM Sans.
 * Data-visualization as design language: sparkline decorations, BI widget stats.
 * Company: Kilimanjaro Innovation Labs Inc. — Data & AI-Powered IT
 */
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

const BG     = '#F8F9FC';
const WHITE  = '#FFFFFF';
const INDIGO = '#4F46E5';
const VIOLET = '#7C3AED';
const CYAN   = '#06B6D4';
const DARK   = '#1E1B4B';
const LGRAY  = '#E8EAF0';

const DM = { fontFamily: '"DM Sans", sans-serif' };
const BOLD = { ...DM, fontWeight: 700 };

const SERVICES_J = [
  { num: '01', icon: '⚙️', title: 'Data Engineering & Pipelines', desc: 'Design and build scalable ETL/ELT pipelines, data lakes, and streaming architectures that process billions of events reliably.' },
  { num: '02', icon: '📊', title: 'Business Analytics & BI', desc: 'Deploy KiliSight across your organization to unlock self-serve BI, executive dashboards, and operational reporting in days.' },
  { num: '03', icon: '🤖', title: 'Machine Learning & AI', desc: 'Custom ML model development, MLOps infrastructure, and AI integration with your existing data and business systems.' },
  { num: '04', icon: '🗂', title: 'Data Governance & Reporting', desc: 'Data cataloguing, lineage tracking, quality monitoring, and board-ready reporting to ensure trusted, compliant data.' },
];

const PRODUCTS_J = [
  {
    name: 'KiliSight',
    tag: 'Business Intelligence',
    desc: 'A modern BI and reporting platform built for speed and accessibility. Connect any data source, build self-serve dashboards, and deploy reports to your whole organization — no SQL required.',
    features: ['Drag-and-drop dashboard builder', 'Real-time data connectors', '60% faster report deployment', 'Role-based access control'],
    accent: INDIGO,
  },
  {
    name: 'KiliPredict',
    tag: 'AI Analytics & MLOps',
    desc: 'An end-to-end ML operations platform that trains, deploys, monitors, and retrains predictive models at scale. Bring AI-powered predictions to every part of your business with explainable, auditable outputs.',
    features: ['AutoML model training pipeline', '94% avg model accuracy', 'Explainability & drift monitoring', 'One-click production deployment'],
    accent: VIOLET,
  },
];

const CASES_J = [
  { client: 'HealthSys', title: 'Patient Outcome Analytics', desc: 'Built a clinical analytics platform on KiliSight and KiliPredict that supports diagnostic decision-making across 22 hospitals, achieving 94% diagnostic support accuracy.', stat: '94%', statLabel: 'Diagnostic Accuracy', bar: 94 },
  { client: 'SupplyGen', title: 'Supply Chain ML Optimization', desc: 'Deployed demand forecasting and supplier risk ML models across a 6,000-SKU supply chain, reducing waste and improving allocation efficiency throughout the network.', stat: '28%', statLabel: 'Waste Reduction', bar: 28 },
  { client: 'RetailIQ', title: 'Customer Analytics at Scale', desc: 'Unified customer data from 8 retail channels into a single analytics platform. KiliSight dashboards now drive daily pricing, promotion, and inventory decisions.', stat: '$4.2M', statLabel: 'Revenue Attributed', bar: 70 },
];

const CLIENTS_J = ['DataNorth', 'HealthSys', 'SupplyGen', 'RetailIQ', 'InsightCo', 'MetricsPro'];
const MARQUEE_J = ['Data-Driven', 'AI-Powered', 'Real-Time Insights', 'Predict Everything', 'Clean Data', 'BI for All', 'ML at Scale', 'Know More'];

// ─── Metric bar ───────────────────────────────────────────────────────────────
function MetricBar({ pct, color }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(pct), 100); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div ref={ref} className="h-1.5 rounded-full mt-4 overflow-hidden" style={{ background: LGRAY }}>
      <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${w}%`, background: `linear-gradient(90deg, ${color}, ${CYAN})`, transitionDuration: '1.2s' }} />
    </div>
  );
}

// ─── Prism gradient border card ───────────────────────────────────────────────
function PCard({ children, className = '', style = {}, accent = INDIGO }) {
  return (
    <div className={`relative rounded-2xl ${className}`}
      style={{ background: WHITE, border: '1px solid transparent', backgroundClip: 'padding-box', boxShadow: `0 4px 32px rgba(79,70,229,0.08), inset 0 0 0 1px ${accent}20`, ...style }}>
      {children}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavJ() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 transition-all duration-300"
      style={{ background: scrolled ? 'rgba(248,249,252,0.95)' : BG, borderBottom: scrolled ? `1px solid ${LGRAY}` : 'none', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${INDIGO}, ${VIOLET})` }}>
            <svg viewBox="0 0 16 16" fill="white" className="w-4 h-4">
              <polygon points="8,1 15,5 15,11 8,15 1,11 1,5" fillOpacity="0.9" />
            </svg>
          </div>
          <span style={{ ...BOLD, fontSize: '16px', color: DARK }}>Kilimanjaro</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 list-none">
          {['Products', 'Services', 'Work'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-j`}
                style={{ ...DM, fontWeight: 500, fontSize: '14px', color: '#666' }}
                className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-150">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('contact-j')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: `linear-gradient(135deg, ${INDIGO}, ${VIOLET})`, color: WHITE, ...BOLD, fontSize: '13px', border: 'none', boxShadow: `0 4px 16px ${INDIGO}30` }}
          className="px-6 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroJ() {
  const [c28B, ref28B] = useCountUp(28, 'B+');
  const [c94, ref94] = useCountUp(94, '%');
  const [c60, ref60] = useCountUp(60, '%');

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-16" style={{ background: BG }}>
      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 70% 30%, ${INDIGO}12 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, ${VIOLET}10 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, ${CYAN}08 0%, transparent 40%)` }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="anim-fade-up-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: `${INDIGO}12`, border: `1px solid ${INDIGO}30` }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: INDIGO }} />
              <span style={{ ...DM, fontWeight: 600, fontSize: '12px', color: INDIGO, letterSpacing: '0.06em' }}>Data & AI-Powered IT · Canada</span>
            </div>
            <h1 style={{ ...BOLD, fontSize: 'clamp(44px,7vw,88px)', lineHeight: 0.95, letterSpacing: '-0.03em', color: DARK }} className="anim-fade-up-2 mb-6">
              Know more.<br />
              <span style={{ background: `linear-gradient(135deg, ${INDIGO}, ${VIOLET}, ${CYAN})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Do more.
              </span>
            </h1>
            <p style={{ ...DM, fontWeight: 400, fontSize: '17px', lineHeight: 1.7, color: '#666', maxWidth: '440px' }} className="mb-10">
              Kilimanjaro transforms raw data into strategic intelligence. From data engineering to AI model deployment — we turn your data into your most powerful asset.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('products-j')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: `linear-gradient(135deg, ${INDIGO}, ${VIOLET})`, color: WHITE, ...BOLD, fontSize: '13px', border: 'none', boxShadow: `0 8px 24px ${INDIGO}35` }}
                className="px-8 py-3.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                Explore Platforms <ArrowUpRight />
              </button>
              <button
                onClick={() => document.getElementById('contact-j')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: WHITE, color: DARK, ...DM, fontWeight: 600, fontSize: '13px', border: `1px solid ${LGRAY}`, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                className="px-8 py-3.5 rounded-full cursor-pointer hover:border-indigo-200 transition-colors">
                Talk to Our Team
              </button>
            </div>
          </div>

          {/* Right: BI dashboard widget */}
          <div className="anim-fade-up-2">
            <PCard className="p-6" style={{ boxShadow: `0 16px 64px ${INDIGO}15` }}>
              <div style={{ ...DM, fontWeight: 600, fontSize: '12px', color: '#888', letterSpacing: '0.06em' }} className="uppercase mb-5">Platform Performance · Live</div>
              {[
                { ref: ref28B, val: c28B, label: 'Data points processed / day', accent: INDIGO },
                { ref: ref94,  val: c94,  label: 'Average model accuracy',       accent: VIOLET },
                { ref: ref60,  val: c60,  label: 'Faster reporting vs. manual',   accent: CYAN },
              ].map((m, i) => (
                <div key={m.label} className="mb-5 last:mb-0">
                  <div className="flex justify-between items-baseline">
                    <span style={{ ...DM, fontWeight: 400, fontSize: '13px', color: '#666' }}>{m.label}</span>
                    <div ref={m.ref} style={{ ...BOLD, fontSize: '28px', color: m.accent, lineHeight: 1 }}>{m.val}</div>
                  </div>
                  <MetricBar pct={i === 0 ? 80 : i === 1 ? 94 : 60} color={m.accent} />
                </div>
              ))}
              {/* Mini sparkline decoration */}
              <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${LGRAY}` }}>
                <svg viewBox="0 0 200 40" className="w-full h-10" style={{ opacity: 0.6 }}>
                  <polyline points="0,35 25,28 50,30 75,15 100,20 125,10 150,18 175,8 200,5"
                    fill="none" stroke={`url(#sparkGrad)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={INDIGO} />
                      <stop offset="100%" stopColor={CYAN} />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ ...DM, fontWeight: 400, fontSize: '11px', color: '#999' }}>Throughput trend · last 30 days</div>
              </div>
            </PCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsJ() {
  return (
    <section id="products-j" className="py-24 relative overflow-hidden" style={{ background: WHITE }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 50%, ${INDIGO}06 0%, transparent 50%)` }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...DM, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: INDIGO }} className="uppercase mb-3">02 / Data Platforms</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: DARK }} className="reveal">
            Intelligence<br />built in.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_J.map((p) => (
            <PCard key={p.name} className="p-8 group cursor-default" accent={p.accent}
              style={{ transition: 'box-shadow 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 48px ${p.accent}25`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 4px 32px ${p.accent}08`}>
              <div className="inline-flex px-3 py-1.5 rounded-full mb-5"
                style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}25` }}>
                <span style={{ ...DM, fontWeight: 600, fontSize: '11px', color: p.accent, letterSpacing: '0.08em' }} className="uppercase">{p.tag}</span>
              </div>
              <h3 style={{ ...BOLD, fontSize: '40px', lineHeight: 1.0, letterSpacing: '-0.03em', color: DARK }} className="mb-4">{p.name}</h3>
              <p style={{ ...DM, fontWeight: 400, fontSize: '14px', lineHeight: 1.75, color: '#666' }} className="mb-7">{p.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} style={{ ...DM, fontWeight: 400, fontSize: '13px', color: '#555' }} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{ background: `linear-gradient(135deg, ${p.accent}, ${CYAN})`, color: WHITE, ...BOLD, fontSize: '12px', border: 'none' }}
                className="px-6 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                Explore {p.name} <ArrowUpRight />
              </button>
            </PCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function ServicesJ() {
  return (
    <section id="services-j" className="py-24 relative" style={{ background: BG }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...DM, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: INDIGO }} className="uppercase mb-3">03 / Services</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: DARK }} className="reveal">
            From raw data<br />to real decisions.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES_J.map((s, i) => (
            <div key={s.num} className="bg-white rounded-2xl p-7 group cursor-default"
              style={{ border: `1px solid ${LGRAY}`, transition: 'border-color 0.25s ease, box-shadow 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${INDIGO}30`; e.currentTarget.style.boxShadow = `0 4px 24px ${INDIGO}10`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = LGRAY; e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <div style={{ ...DM, fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', color: INDIGO }} className="uppercase mb-2">{s.num}</div>
              <h3 style={{ ...BOLD, fontSize: '18px', color: DARK, lineHeight: 1.2 }} className="mb-3">{s.title}</h3>
              <p style={{ ...DM, fontWeight: 400, fontSize: '13px', lineHeight: 1.7, color: '#666' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesJ() {
  return (
    <section id="work-j" className="py-24 relative" style={{ background: WHITE }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...DM, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: INDIGO }} className="uppercase mb-3">05 / Results</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: DARK }} className="reveal">
            Insights that<br />move the needle.
          </h2>
        </div>
        <div className="reveal flex flex-col gap-5">
          {CASES_J.map((c, i) => (
            <PCard key={c.client} className="p-8 group cursor-default" accent={i === 0 ? INDIGO : i === 1 ? VIOLET : CYAN}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-6 items-start">
                <div>
                  <div style={{ ...DM, fontWeight: 600, fontSize: '11px', letterSpacing: '0.12em', color: i === 0 ? INDIGO : i === 1 ? VIOLET : CYAN }} className="uppercase mb-2">{c.client}</div>
                  <h3 style={{ ...BOLD, fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.1, color: DARK }} className="mb-4">{c.title}</h3>
                  <p style={{ ...DM, fontWeight: 400, fontSize: '14px', lineHeight: 1.75, color: '#666' }}>{c.desc}</p>
                  <MetricBar pct={c.bar} color={i === 0 ? INDIGO : i === 1 ? VIOLET : CYAN} />
                </div>
                <div className="text-center md:text-right">
                  <div style={{ ...BOLD, fontSize: 'clamp(36px,4vw,52px)', color: i === 0 ? INDIGO : i === 1 ? VIOLET : CYAN, lineHeight: 1 }}>{c.stat}</div>
                  <div style={{ ...DM, fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', color: '#999', marginTop: '6px' }} className="uppercase">{c.statLabel}</div>
                </div>
              </div>
            </PCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeJ() {
  const doubled = [...MARQUEE_J, ...MARQUEE_J];
  return (
    <div className="py-5 overflow-hidden" style={{ background: `linear-gradient(90deg, ${INDIGO}, ${VIOLET}, ${CYAN}, ${VIOLET}, ${INDIGO})`, backgroundSize: '300% 100%' }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span style={{ ...BOLD, fontSize: '11px', letterSpacing: '0.2em', color: WHITE }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '6px' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsJ() {
  const colors = [INDIGO, VIOLET, CYAN, INDIGO, VIOLET, CYAN];
  return (
    <section className="py-24" style={{ background: BG }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div style={{ ...DM, fontWeight: 500, fontSize: '13px', color: '#999', letterSpacing: '0.06em', textAlign: 'center', marginBottom: '40px' }}>Trusted by data-driven organizations</div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS_J.map((name, i) => (
            <div key={name} className="bg-white rounded-xl py-8 px-4 flex flex-col items-center justify-center gap-2 cursor-default"
              style={{ border: `1px solid ${LGRAY}`, transition: 'border-color 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${colors[i]}40`; e.currentTarget.style.boxShadow = `0 4px 20px ${colors[i]}12`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = LGRAY; e.currentTarget.style.boxShadow = 'none'; }}>
              <span className="w-2 h-2 rounded-full" style={{ background: colors[i] }} />
              <span style={{ ...BOLD, fontSize: '12px', letterSpacing: '0.04em', color: '#444' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactJ() {
  return (
    <section id="contact-j" className="py-32 relative overflow-hidden" style={{ background: DARK }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${INDIGO}30 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, ${VIOLET}20 0%, transparent 50%)` }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <div style={{ ...DM, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: CYAN }} className="uppercase mb-6">07 / Get Started</div>
        <h2 style={{ ...BOLD, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.95, letterSpacing: '-0.04em', color: WHITE }} className="reveal mb-8">
          Your data,<br />
          <span style={{ background: `linear-gradient(135deg, ${CYAN}, ${INDIGO})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            unlocked.
          </span>
        </h2>
        <p style={{ ...DM, fontWeight: 400, fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }} className="mb-10 max-w-[500px] mx-auto">
          Let's discuss your data strategy, analytics goals, and AI roadmap. Our team will deliver a free data maturity assessment.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:data@kilimanjaro.ca"
            style={{ background: `linear-gradient(135deg, ${INDIGO}, ${VIOLET})`, color: WHITE, ...BOLD, fontSize: '13px', boxShadow: `0 8px 32px ${INDIGO}50` }}
            className="px-10 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2 no-underline">
            Start a Data Project <ArrowUpRight />
          </a>
          <button
            style={{ background: 'rgba(255,255,255,0.08)', color: WHITE, ...DM, fontWeight: 600, fontSize: '13px', border: '1px solid rgba(255,255,255,0.15)' }}
            className="px-10 py-4 rounded-full cursor-pointer hover:bg-white/12 transition-colors">
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterJ() {
  return (
    <footer style={{ background: '#0F0C29', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-10 pb-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={{ ...BOLD, fontSize: '15px', color: WHITE }}>Kilimanjaro Innovation Labs</span>
        <p style={{ ...DM, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" style={{ ...DM, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.3)' }} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantJ() {
  useScrollReveal();
  return (
    <div style={{ background: BG, color: DARK }}>
      <NavJ />
      <HeroJ />
      <ProductsJ />
      <ServicesJ />
      <CasesJ />
      <MarqueeJ />
      <ClientsJ />
      <ContactJ />
      <FooterJ />
    </div>
  );
}
