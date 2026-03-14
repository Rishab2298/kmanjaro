/**
 * Variant H — "VELOCITY"
 * Digital transformation startup energy. White canvas, orange-red, Space Grotesk.
 * Bold diagonal colored strips, animated progress-bar motif, rounded pill tags.
 * Company: Kilimanjaro Innovation Labs Inc. — Agile Digital Transformation
 */
import { useState, useEffect } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

const WHITE  = '#FFFFFF';
const ORANGE = '#FF5733';
const CORAL  = '#FF8C42';
const NAVY   = '#1A1A2E';
const LGRAY  = '#F5F5F5';

const GROTESK = { fontFamily: '"Space Grotesk", sans-serif' };
const BOLD = { ...GROTESK, fontWeight: 700 };

const SERVICES_H = [
  { tag: 'Dev', title: 'Custom Software Development', desc: 'Full-stack web and mobile applications engineered to your spec — from MVP to enterprise-grade platforms.' },
  { tag: 'BPM', title: 'Business Process Automation', desc: 'Map, digitize, and automate your core workflows to eliminate bottlenecks and accelerate throughput.' },
  { tag: 'API', title: 'System Integration & APIs', desc: '120+ pre-built connectors and custom API bridges to unify your tech stack into a single source of truth.' },
  { tag: 'Strat', title: 'Digital Strategy & Roadmapping', desc: 'C-suite-aligned transformation roadmaps with phased delivery, risk management, and measurable KPIs.' },
];

const PRODUCTS_H = [
  {
    name: 'KiliFlow',
    tag: 'Workflow Automation & BPM',
    desc: 'A no-code/low-code business process management platform that maps, automates, and optimizes your end-to-end workflows. Built for speed — deploy automations in hours, not months.',
    features: ['Visual process builder', 'AI-assisted bottleneck detection', 'Real-time process analytics', 'Approval chain automation'],
    color: ORANGE,
  },
  {
    name: 'KiliSync',
    tag: 'Enterprise Integration Hub',
    desc: 'The integration backbone for modern enterprises. KiliSync connects 120+ business applications — from legacy ERP systems to modern SaaS tools — with real-time data synchronization and zero-code configuration.',
    features: ['120+ pre-built connectors', 'Real-time event streaming', 'Data transformation engine', 'Error monitoring & retry logic'],
    color: CORAL,
  },
];

const CASES_H = [
  { client: 'FreshCart', title: 'Retail Operations Digitized', desc: 'Automated order processing, inventory sync, and supplier workflows across 14 fulfilment centres. Result: 3.2× faster order processing and 40% fewer manual errors.', stat: '3.2×', statLabel: 'Order Processing Speed' },
  { client: 'BuildPro', title: 'ERP Integration: 18 Systems Unified', desc: 'Connected 18 disparate systems — from legacy ERP to cloud HR — into a unified operational backbone via KiliSync. Eliminated 340 hours of weekly manual data entry.', stat: '18', statLabel: 'Systems Integrated' },
  { client: 'ShipFast', title: 'Real-Time Logistics App', desc: 'Designed, built, and deployed a real-time fleet tracking and dispatch application from zero to production in just 38 days. Now processing 12,000 shipments/day.', stat: '38', statLabel: 'Days to Production' },
];

const CLIENTS_H = ['FreshCart', 'BuildPro', 'ShipFast', 'NovaMed', 'ParkRight', 'FleetCore'];
const MARQUEE_H = ['Move Fast', 'Digital First', 'Automate Everything', 'Ship Faster', 'Break Silos', 'Integrate Anything', 'Velocity', 'Transform Now'];

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavH() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 transition-all duration-300"
      style={{ background: scrolled ? 'rgba(255,255,255,0.95)' : WHITE, borderBottom: scrolled ? '1px solid #eee' : 'none', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: ORANGE }}>
            <span style={{ ...BOLD, fontSize: '14px', color: WHITE }}>K</span>
          </div>
          <span style={{ ...BOLD, fontSize: '16px', color: NAVY }}>Kilimanjaro</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 list-none">
          {['Products', 'Services', 'Work'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-h`}
                style={{ ...GROTESK, fontWeight: 500, fontSize: '14px', color: '#555' }}
                className="px-4 py-2 rounded-lg hover:bg-[#FFF3EE] hover:text-[#FF5733] transition-all duration-150">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('contact-h')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: ORANGE, color: WHITE, ...BOLD, fontSize: '13px', border: 'none' }}
          className="px-6 py-2.5 rounded-full cursor-pointer hover:bg-[#FF3D1A] transition-colors">
          Get Started →
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroH() {
  const [barW, setBarW] = useState(0);
  const [c120, ref120] = useCountUp(120, '+');
  const [c32, ref32] = useCountUp(32, '');
  const [c45, ref45] = useCountUp(45, ' days');

  useEffect(() => {
    const timer = setTimeout(() => setBarW(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-16" style={{ background: WHITE }}>
      {/* Diagonal orange accent strip */}
      <div className="absolute top-0 right-0 w-[45%] h-full clip-diagonal-r pointer-events-none" style={{ background: 'linear-gradient(135deg, #FFF3EE, #FFE8D8)', zIndex: 0 }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="anim-fade-up-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
              style={{ background: '#FFF3EE', border: '1px solid rgba(255,87,51,0.2)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: ORANGE }} />
              <span style={{ ...GROTESK, fontWeight: 600, fontSize: '12px', color: ORANGE }}>Agile Digital Transformation · Canada</span>
            </div>
            <h1 style={{ ...BOLD, fontSize: 'clamp(44px,7vw,88px)', lineHeight: 0.95, letterSpacing: '-0.03em', color: NAVY }}>
              Ship<br />
              <span style={{ color: ORANGE }}>faster.</span><br />
              Transform<br />
              <span style={{ color: CORAL }}>smarter.</span>
            </h1>
            <p style={{ ...GROTESK, fontWeight: 400, fontSize: '17px', lineHeight: 1.7, color: '#666', maxWidth: '440px', marginTop: '20px' }}>
              Kilimanjaro Innovation Labs accelerates digital transformation for Canadian businesses — from workflow automation to full-stack development.
            </p>

            {/* Progress bar motif */}
            <div className="mt-10 mb-10">
              <div className="flex justify-between mb-2">
                <span style={{ ...GROTESK, fontWeight: 500, fontSize: '12px', color: '#888' }}>Average project velocity</span>
                <span style={{ ...BOLD, fontSize: '12px', color: ORANGE }}>{barW}% faster than industry avg</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F0F0F0' }}>
                <div className="h-full rounded-full transition-all duration-1500 ease-out"
                  style={{ width: `${barW}%`, background: `linear-gradient(90deg, ${ORANGE}, ${CORAL})`, transitionDuration: '1.5s' }} />
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('products-h')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: ORANGE, color: WHITE, ...BOLD, fontSize: '13px', border: 'none', boxShadow: `0 8px 24px ${ORANGE}40` }}
                className="px-8 py-3.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                See Our Platforms <ArrowUpRight />
              </button>
              <button
                onClick={() => document.getElementById('work-h')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'transparent', color: NAVY, ...GROTESK, fontWeight: 600, fontSize: '13px', border: `2px solid ${NAVY}` }}
                className="px-8 py-3.5 rounded-full cursor-pointer hover:bg-navy/5 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="anim-fade-up-2 grid grid-cols-1 gap-4">
            {[
              { ref: ref120, val: c120, label: 'Integrations Available', color: ORANGE },
              { ref: ref32,  val: `${c32}×`, label: 'Productivity Gain', color: CORAL },
              { ref: ref45,  val: c45,  label: 'Avg Deployment Time', color: NAVY },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-6 p-6 rounded-2xl" style={{ background: i === 2 ? NAVY : `${s.color}10`, border: `1px solid ${s.color}25` }}>
                <div ref={s.ref} style={{ ...BOLD, fontSize: '48px', lineHeight: 1, color: i === 2 ? WHITE : s.color, minWidth: '120px' }}>{s.val}</div>
                <div style={{ ...GROTESK, fontWeight: 500, fontSize: '14px', color: i === 2 ? 'rgba(255,255,255,0.6)' : '#666' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsH() {
  return (
    <section id="products-h" className="py-24 relative overflow-hidden" style={{ background: LGRAY }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...GROTESK, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: ORANGE }} className="uppercase mb-3">02 / Product Platforms</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: NAVY }} className="reveal">
            Software that moves<br />as fast as you do.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_H.map((p, i) => (
            <div key={p.name} className="bg-white rounded-2xl p-8 group"
              style={{ border: `1px solid #eee`, boxShadow: `0 4px 32px ${p.color}18`, transition: 'box-shadow 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 48px ${p.color}35`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `0 4px 32px ${p.color}18`}>
              <div className="inline-flex px-3 py-1.5 rounded-full mb-5"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                <span style={{ ...GROTESK, fontWeight: 600, fontSize: '11px', color: p.color, letterSpacing: '0.1em' }} className="uppercase">{p.tag}</span>
              </div>
              <h3 style={{ ...BOLD, fontSize: '40px', lineHeight: 1.0, letterSpacing: '-0.03em', color: NAVY }} className="mb-4">{p.name}</h3>
              <p style={{ ...GROTESK, fontWeight: 400, fontSize: '14px', lineHeight: 1.75, color: '#666' }} className="mb-7">{p.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} style={{ ...GROTESK, fontWeight: 400, fontSize: '13px', color: '#555' }} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[9px]" style={{ background: p.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button style={{ background: p.color, color: WHITE, ...BOLD, fontSize: '12px', border: 'none', boxShadow: `0 4px 16px ${p.color}40` }}
                className="px-6 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                Explore {p.name} <ArrowUpRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function ServicesH() {
  return (
    <section id="services-h" className="py-24 relative overflow-hidden" style={{ background: NAVY }}>
      {/* Diagonal strip decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 pointer-events-none" style={{ background: `linear-gradient(90deg, ${ORANGE}, ${CORAL})` }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...GROTESK, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: ORANGE }} className="uppercase mb-3">03 / Our Services</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            What we do.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES_H.map((s, i) => (
            <div key={s.title} className="group p-8 rounded-2xl cursor-default"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'background 0.25s ease, border-color 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,87,51,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,87,51,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              <div className="inline-flex px-3 py-1 rounded-full mb-5"
                style={{ background: `${ORANGE}20`, border: `1px solid ${ORANGE}40` }}>
                <span style={{ ...GROTESK, fontWeight: 700, fontSize: '10px', color: ORANGE, letterSpacing: '0.12em' }} className="uppercase">{s.tag}</span>
              </div>
              <h3 style={{ ...BOLD, fontSize: '20px', color: WHITE, lineHeight: 1.2 }} className="mb-3">{s.title}</h3>
              <p style={{ ...GROTESK, fontWeight: 400, fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesH() {
  return (
    <section id="work-h" className="py-24 relative" style={{ background: WHITE }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...GROTESK, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: ORANGE }} className="uppercase mb-3">05 / Case Studies</div>
          <h2 style={{ ...BOLD, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: NAVY }} className="reveal">
            Speed, delivered.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES_H.map((c, i) => (
            <div key={c.client} className="rounded-2xl overflow-hidden" style={{ border: '1px solid #eee', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              <div className="p-2" style={{ background: i === 0 ? ORANGE : i === 1 ? CORAL : NAVY }}>
                <div style={{ ...BOLD, fontSize: '40px', lineHeight: 1, color: WHITE, padding: '20px 20px 8px' }}>{c.stat}</div>
                <div style={{ ...GROTESK, fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)', padding: '0 20px 16px' }} className="uppercase">{c.statLabel}</div>
              </div>
              <div className="p-6">
                <div style={{ ...GROTESK, fontWeight: 600, fontSize: '11px', color: ORANGE, letterSpacing: '0.1em' }} className="uppercase mb-2">{c.client}</div>
                <h3 style={{ ...BOLD, fontSize: '18px', color: NAVY, lineHeight: 1.25 }} className="mb-3">{c.title}</h3>
                <p style={{ ...GROTESK, fontWeight: 400, fontSize: '13px', lineHeight: 1.7, color: '#666' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeH() {
  const doubled = [...MARQUEE_H, ...MARQUEE_H];
  return (
    <div className="py-5 overflow-hidden" style={{ background: `linear-gradient(90deg, ${ORANGE}, ${CORAL}, ${ORANGE})`, backgroundSize: '200% 100%' }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span style={{ ...BOLD, fontSize: '12px', letterSpacing: '0.2em', color: WHITE }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsH() {
  return (
    <section className="py-24" style={{ background: LGRAY }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div style={{ ...GROTESK, fontWeight: 500, fontSize: '13px', color: '#999', letterSpacing: '0.08em', textAlign: 'center', marginBottom: '40px' }}>Trusted by ambitious Canadian companies</div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS_H.map((name, i) => (
            <div key={name} className="bg-white rounded-xl py-8 px-4 flex items-center justify-center cursor-default"
              style={{ border: '1px solid #eee', transition: 'border-color 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${ORANGE}40`; e.currentTarget.style.boxShadow = `0 4px 20px ${ORANGE}15`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.boxShadow = 'none'; }}>
              <span style={{ ...BOLD, fontSize: '13px', letterSpacing: '0.05em', color: '#444' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactH() {
  return (
    <section id="contact-h" className="py-32 relative overflow-hidden" style={{ background: NAVY }}>
      <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none" style={{ background: `linear-gradient(90deg, ${ORANGE}, ${CORAL})` }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <div style={{ ...GROTESK, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: ORANGE }} className="uppercase mb-6">07 / Let's Work Together</div>
        <h2 style={{ ...BOLD, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.95, letterSpacing: '-0.04em', color: WHITE }} className="reveal mb-8">
          Ready to<br />
          <span style={{ color: ORANGE }}>move fast?</span>
        </h2>
        <p style={{ ...GROTESK, fontWeight: 400, fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }} className="mb-10 max-w-[500px] mx-auto">
          Tell us about your transformation goals. We'll design a roadmap and begin delivering results within 45 days.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:hello@kilimanjaro.ca"
            style={{ background: `linear-gradient(135deg, ${ORANGE}, ${CORAL})`, color: WHITE, ...BOLD, fontSize: '13px', boxShadow: `0 8px 32px ${ORANGE}50` }}
            className="px-10 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2 no-underline">
            Start a Project <ArrowUpRight />
          </a>
          <button
            style={{ background: 'rgba(255,255,255,0.08)', color: WHITE, ...GROTESK, fontWeight: 600, fontSize: '13px', border: '1px solid rgba(255,255,255,0.15)' }}
            className="px-10 py-4 rounded-full cursor-pointer hover:bg-white/15 transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterH() {
  return (
    <footer style={{ background: '#111122', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-10 pb-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={{ ...BOLD, fontSize: '15px', color: WHITE }}>Kilimanjaro Innovation Labs</span>
        <p style={{ ...GROTESK, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" style={{ ...GROTESK, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.3)' }} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantH() {
  useScrollReveal();
  return (
    <div style={{ background: WHITE, color: NAVY, fontFamily: '"Space Grotesk", sans-serif' }}>
      <NavH />
      <HeroH />
      <ProductsH />
      <ServicesH />
      <CasesH />
      <MarqueeH />
      <ClientsH />
      <ContactH />
      <FooterH />
    </div>
  );
}
