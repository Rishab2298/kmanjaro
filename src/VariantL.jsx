/**
 * Variant L — "MERIDIAN"
 * Executive IT Consulting. Dark forest green bg, warm gold, Cormorant Garamond serif.
 * McKinsey/BCG meets IT. Large italic serif headlines, thin gold rules, editorial rhythm.
 * Company: Kilimanjaro Innovation Labs Inc. — IT Strategy & Executive Consulting
 */
import { useState, useEffect } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

const FOREST = '#0A1A0E';
const FSURFACE = '#0F2514';
const GOLD   = '#D4A017';
const LGOLD  = '#E8C547';
const FGREEN = '#2D5A27';
const CREAM  = '#FAF7EE';
const LCREAM = '#F0EAD6';

const CORMORANT = { fontFamily: '"Cormorant Garamond", serif' };
const JAKARTA   = { fontFamily: '"Plus Jakarta Sans", sans-serif' };
const BOLD_J = { ...JAKARTA, fontWeight: 700 };

const PRACTICES = [
  { num: 'I.', title: 'IT Strategy & Governance', desc: 'Board-aligned IT strategy, technology portfolio management, and governance frameworks that align technology investment with enterprise value creation.' },
  { num: 'II.', title: 'Digital Transformation Programs', desc: 'End-to-end enterprise-scale transformation programs. From discovery and business case to implementation governance and value realization tracking.' },
  { num: 'III.', title: 'IT M&A Advisory & Integration', desc: 'Pre-close technology due diligence, integration planning, and post-merger IT integration management across complex multi-system environments.' },
  { num: 'IV.', title: 'Operating Model Design', desc: 'Target operating model design for IT organizations — structure, talent, sourcing strategy, and process architecture to enable long-term agility.' },
];

const PRODUCTS_L = [
  {
    num: '01',
    name: 'KiliAdvisor',
    tag: 'Strategy Platform',
    desc: 'A strategic IT roadmap and board reporting platform that translates complex technology programs into clear, executive-ready communication. Scenario modelling, initiative tracking, and value realization dashboards for the C-suite.',
    features: ['Strategic roadmap modelling', 'Board-ready reporting suite', 'Initiative dependency mapping', 'Value realization tracking'],
  },
  {
    num: '02',
    name: 'KiliTransform',
    tag: 'Change Management',
    desc: 'An enterprise change management suite built for large-scale transformation programs. Stakeholder alignment, change impact analysis, adoption tracking, and organizational readiness assessment — all in one platform.',
    features: ['Change impact assessment', 'Stakeholder engagement tracking', 'Adoption analytics & heatmaps', 'Readiness scoring dashboard'],
  },
];

const CASES_L = [
  {
    client: 'Northland Capital',
    title: 'Enterprise Digital Transformation',
    context: 'Three-year program',
    desc: 'Kilimanjaro served as strategic IT advisor for Northland Capital\'s enterprise-wide digital transformation — covering core banking, data infrastructure, and digital channels. The program unlocked $2.1B in enterprise value through operational efficiency and new digital revenue streams.',
    stat: '$2.1B', statLabel: 'Digital Value Unlocked',
  },
  {
    client: 'TowerBridge Corp',
    title: 'Post-Merger IT Integration',
    context: '14 systems · 6 months',
    desc: 'Following TowerBridge\'s acquisition of three regional firms, Kilimanjaro managed the integration of 14 disparate IT systems — ERP, HR, CRM, and infrastructure — into a unified operating environment in six months.',
    stat: '6 mo', statLabel: 'Integration Completed',
  },
  {
    client: 'PrairieBank',
    title: 'Core Banking Operating Model',
    context: 'Operating model redesign',
    desc: 'Redesigned PrairieBank\'s IT operating model including organizational structure, vendor governance, and delivery methodology to enable a modern, cloud-first delivery capability while maintaining regulatory compliance.',
    stat: '48', statLabel: 'Programs Delivered Globally',
  },
];

const CLIENTS_L = ['Northland Capital', 'TowerBridge Corp', 'Summit Ventures', 'Meridian Partners', 'PrairieBank', 'OceanPort Group'];
const MARQUEE_L = ['Strategy First', 'Board-Ready Insights', 'Digital Transformation', 'IT Governance', 'M&A Advisory', 'Executive Consulting', 'Value-Driven', 'Transformation at Scale'];

// ─── Gold rule ─────────────────────────────────────────────────────────────────
function GoldRule() {
  return <div style={{ height: '1px', background: `linear-gradient(90deg, ${GOLD}80, ${GOLD}20)`, margin: '0' }} />;
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavL() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 transition-all duration-300"
      style={{ background: scrolled ? 'rgba(10,26,14,0.92)' : 'transparent', borderBottom: scrolled ? `1px solid rgba(212,160,23,0.15)` : 'none', backdropFilter: scrolled ? 'blur(16px)' : 'none' }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-px h-8 mr-1" style={{ background: GOLD }} />
          <span style={{ ...CORMORANT, fontWeight: 600, fontSize: '20px', color: CREAM, letterSpacing: '0.02em' }}>Kilimanjaro</span>
          <span style={{ ...JAKARTA, fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', color: GOLD, opacity: 0.8, marginLeft: '4px' }} className="uppercase">Advisory</span>
        </a>
        <ul className="hidden md:flex items-center gap-2 list-none">
          {['Practices', 'Platforms', 'Work'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-l`}
                style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', letterSpacing: '0.04em', color: 'rgba(250,247,238,0.5)' }}
                className="px-4 py-2 hover:text-cream transition-colors duration-150">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('contact-l')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: 'transparent', color: GOLD, ...JAKARTA, fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', border: `1px solid ${GOLD}60` }}
          className="uppercase px-6 py-2 cursor-pointer hover:bg-gold/10 transition-colors">
          Engage Us
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroL() {
  const [c21, ref21] = useCountUp(21, '');
  const [c48, ref48] = useCountUp(48, '');
  const [c17, ref17] = useCountUp(17, '');

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden" style={{ background: FOREST }}>
      {/* Subtle texture pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,160,23,0.06) 1px, transparent 0)', backgroundSize: '24px 24px', opacity: 0.8 }} />
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${FGREEN}40 0%, transparent 70%)`, filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12 anim-fade-up-1">
          <div style={{ height: '1px', width: '48px', background: GOLD }} />
          <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: GOLD }} className="uppercase">IT Strategy & Executive Advisory</span>
        </div>

        {/* Main headline */}
        <div className="max-w-[900px] anim-fade-up-2">
          <h1 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(60px,9vw,140px)', lineHeight: 0.92, letterSpacing: '-0.02em', color: CREAM }}>
            The strategy<br />
            <em style={{ fontStyle: 'italic', fontWeight: 600, color: GOLD }}>behind</em> your<br />
            technology.
          </h1>
        </div>

        <GoldRule />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-end anim-fade-up-3">
          <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '17px', lineHeight: 1.85, color: 'rgba(250,247,238,0.55)', maxWidth: '440px' }}>
            Kilimanjaro Innovation Labs provides board-level IT strategy, transformation programs, and M&A advisory to Canada's most complex enterprises. We turn technology into strategic advantage.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => document.getElementById('practices-l')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: GOLD, color: FOREST, ...BOLD_J, fontSize: '12px', letterSpacing: '0.1em', border: 'none', alignSelf: 'flex-start' }}
              className="uppercase px-8 py-3.5 cursor-pointer hover:bg-[#E8C547] transition-colors flex items-center gap-2">
              Our Practices <ArrowUpRight />
            </button>
            <button
              onClick={() => document.getElementById('contact-l')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'transparent', color: CREAM, ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.08em', border: `1px solid rgba(250,247,238,0.2)`, alignSelf: 'flex-start' }}
              className="uppercase px-8 py-3.5 cursor-pointer hover:border-gold/50 transition-colors">
              Schedule a Partner Discussion
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 pt-10" style={{ borderTop: `1px solid rgba(212,160,23,0.2)` }}>
          {[
            { ref: ref21, val: `$${c21}.1B`, label: 'Digital value unlocked' },
            { ref: ref48, val: c48,           label: 'Transformation programs' },
            { ref: ref17, val: c17,           label: 'Countries served' },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div ref={s.ref} style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(32px,4vw,56px)', color: GOLD, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.val}</div>
              <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(250,247,238,0.4)', marginTop: '8px' }} className="uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsL() {
  return (
    <section id="platforms-l" className="py-24 relative" style={{ background: FSURFACE }}>
      <GoldRule />
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: GOLD }} className="uppercase mb-4">02 / Advisory Platforms</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: CREAM }} className="reveal">
            Methodology,<br /><em style={{ fontStyle: 'italic', color: GOLD }}>codified.</em>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_L.map((p) => (
            <div key={p.name} className="group cursor-default p-10"
              style={{ background: FOREST, border: `1px solid rgba(212,160,23,0.15)`, transition: 'border-color 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,160,23,0.15)'}>
              <div className="flex items-baseline gap-4 mb-8">
                <span style={{ ...CORMORANT, fontWeight: 300, fontSize: '60px', lineHeight: 1, color: `${GOLD}30`, letterSpacing: '-0.04em' }}>{p.num}</span>
                <div>
                  <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.2em', color: GOLD }} className="uppercase mb-1">{p.tag}</div>
                  <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: '32px', lineHeight: 1.0, color: CREAM, letterSpacing: '-0.01em' }}>{p.name}</h3>
                </div>
              </div>
              <div style={{ height: '1px', background: `rgba(212,160,23,0.2)`, marginBottom: '20px' }} />
              <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.85, color: 'rgba(250,247,238,0.55)' }} className="mb-8">{p.desc}</p>
              <ul className="flex flex-col gap-3 mb-10">
                {p.features.map(f => (
                  <li key={f} style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', color: 'rgba(250,247,238,0.45)' }} className="flex items-center gap-3">
                    <span style={{ color: GOLD, fontSize: '12px', flexShrink: 0 }}>—</span> {f}
                  </li>
                ))}
              </ul>
              <button style={{ background: 'transparent', color: GOLD, ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', border: `1px solid ${GOLD}50` }}
                className="uppercase px-6 py-2.5 cursor-pointer hover:bg-gold/10 transition-colors flex items-center gap-2">
                Learn More <ArrowUpRight />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16"><GoldRule /></div>
    </section>
  );
}

// ─── PRACTICES ────────────────────────────────────────────────────────────────
function PracticesL() {
  return (
    <section id="practices-l" className="py-24 relative" style={{ background: FOREST }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: GOLD }} className="uppercase mb-4">03 / Our Practices</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: CREAM }} className="reveal">
            Where we <em style={{ fontStyle: 'italic', color: GOLD }}>engage.</em>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {PRACTICES.map((p, i) => (
            <div key={p.num}>
              <div className="py-8 group cursor-default">
                <div className="flex items-baseline gap-5 mb-3">
                  <span style={{ ...CORMORANT, fontWeight: 300, fontSize: '32px', color: `${GOLD}60`, lineHeight: 1 }}>{p.num}</span>
                  <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: '24px', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.01em' }}>{p.title}</h3>
                </div>
                <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'rgba(250,247,238,0.5)', paddingLeft: '48px' }}>{p.desc}</p>
              </div>
              {i < PRACTICES.length - 2 || (PRACTICES.length % 2 !== 0 && i < PRACTICES.length - 1) ? (
                <div style={{ height: '1px', background: 'rgba(212,160,23,0.1)' }} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesL() {
  return (
    <section id="work-l" className="py-24 relative" style={{ background: FSURFACE }}>
      <GoldRule />
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: GOLD }} className="uppercase mb-4">05 / Engagements</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: CREAM }} className="reveal">
            <em style={{ fontStyle: 'italic', color: GOLD }}>Value</em> at enterprise scale.
          </h2>
        </div>

        <div className="reveal flex flex-col gap-0">
          {CASES_L.map((c, i) => (
            <div key={c.client}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 py-10 cursor-default group"
                style={{ transition: 'background 0.25s ease' }}
                onMouseEnter={e => e.currentTarget.style.background = `rgba(212,160,23,0.04)`}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.2em', color: GOLD }} className="uppercase">{c.client}</span>
                    <span style={{ height: '1px', width: '32px', background: `${GOLD}40`, display: 'inline-block' }} />
                    <span style={{ ...JAKARTA, fontWeight: 400, fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(250,247,238,0.3)' }} className="uppercase">{c.context}</span>
                  </div>
                  <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.1, color: CREAM, letterSpacing: '-0.01em' }} className="mb-4">{c.title}</h3>
                  <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.85, color: 'rgba(250,247,238,0.5)', maxWidth: '600px' }}>{c.desc}</p>
                </div>
                <div className="flex flex-col justify-center md:items-end">
                  <div style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(36px,4vw,56px)', color: GOLD, lineHeight: 1, letterSpacing: '-0.02em' }}>{c.stat}</div>
                  <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(250,247,238,0.35)', marginTop: '6px' }} className="uppercase">{c.statLabel}</div>
                </div>
              </div>
              {i < CASES_L.length - 1 && <div style={{ height: '1px', background: 'rgba(212,160,23,0.12)' }} />}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16"><GoldRule /></div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeL() {
  const doubled = [...MARQUEE_L, ...MARQUEE_L];
  return (
    <div className="py-4 overflow-hidden" style={{ background: FGREEN }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.2em', color: CREAM }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: GOLD, fontSize: '6px' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsL() {
  return (
    <section className="py-24 relative" style={{ background: FOREST }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.2em', color: 'rgba(250,247,238,0.3)', textAlign: 'center', marginBottom: '40px' }} className="uppercase">Select client engagements</div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS_L.map((name, i) => (
            <div key={name}
              className="cursor-default py-8 px-4 flex items-center justify-center text-center group"
              style={{ border: `1px solid rgba(212,160,23,0.12)`, transition: 'border-color 0.25s ease, background 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.45)'; e.currentTarget.style.background = `rgba(212,160,23,0.05)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.12)'; e.currentTarget.style.background = 'transparent'; }}>
              <span style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', color: 'rgba(250,247,238,0.45)', letterSpacing: '0.04em' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactL() {
  return (
    <section id="contact-l" className="py-32 relative overflow-hidden" style={{ background: FSURFACE }}>
      <GoldRule />
      <div className="relative z-10 max-w-[900px] mx-auto px-8 text-center pt-24">
        <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.25em', color: GOLD }} className="uppercase mb-8">07 / Begin an Engagement</div>
        <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(56px,8vw,120px)', lineHeight: 0.92, letterSpacing: '-0.03em', color: CREAM }} className="reveal mb-10">
          Strategy starts<br />
          <em style={{ fontStyle: 'italic', color: GOLD }}>with a conversation.</em>
        </h2>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '17px', lineHeight: 1.85, color: 'rgba(250,247,238,0.5)' }} className="mb-12 max-w-[520px] mx-auto">
          Our partners work directly with C-suite and board-level stakeholders. Engagements begin with a private strategy session — no sales process, no templates.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <a href="mailto:advisory@kilimanjaro.ca"
            style={{ background: GOLD, color: FOREST, ...BOLD_J, fontSize: '12px', letterSpacing: '0.1em' }}
            className="uppercase px-10 py-4 cursor-pointer hover:bg-[#E8C547] transition-colors flex items-center gap-2 no-underline">
            Request a Partner Meeting <ArrowUpRight />
          </a>
          <button
            style={{ background: 'transparent', color: CREAM, ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.08em', border: `1px solid rgba(250,247,238,0.2)` }}
            className="uppercase px-10 py-4 cursor-pointer hover:border-cream/40 transition-colors">
            Download Capability Overview
          </button>
        </div>
        <div className="mt-16 pt-10" style={{ borderTop: `1px solid rgba(212,160,23,0.15)` }}>
          <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(250,247,238,0.25)' }}>Kilimanjaro Innovation Labs Inc. · Toronto, Ontario · Serving 17 countries</p>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterL() {
  return (
    <footer style={{ background: FOREST }} className="pt-10 pb-8 px-8 md:px-16">
      <GoldRule />
      <div className="max-w-[1400px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={{ ...CORMORANT, fontWeight: 600, fontSize: '18px', color: CREAM, letterSpacing: '0.02em' }}>Kilimanjaro Advisory</span>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(250,247,238,0.25)' }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-8">
          {['Privacy', 'Terms', 'Engagements'].map(l => (
            <a key={l} href="#" style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.06em', color: 'rgba(250,247,238,0.3)' }} className="hover:text-cream transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantL() {
  useScrollReveal();
  return (
    <div style={{ background: FOREST, color: CREAM }}>
      <NavL />
      <HeroL />
      <ProductsL />
      <PracticesL />
      <CasesL />
      <MarqueeL />
      <ClientsL />
      <ContactL />
      <FooterL />
    </div>
  );
}
