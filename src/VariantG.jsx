/**
 * Variant G — "AURORA"
 * Northern Lights premium enterprise. Deep navy + aurora teal + violet.
 * Animated aurora orbs, glass-morphic cards, star-field dot bg.
 * Company: Kilimanjaro Innovation Labs Inc. — Full-Stack Managed IT Partner
 */
import { useState, useEffect } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

const NAVY   = '#040D1F';
const TEAL   = '#00E5C8';
const VIOLET = '#7B3FE4';
const SKY    = '#0EA5E9';
const WHITE  = '#FFFFFF';

const JAKARTA = { fontFamily: '"Plus Jakarta Sans", sans-serif' };
const BOLD = { ...JAKARTA, fontWeight: 800 };
const LIGHT = { ...JAKARTA, fontWeight: 300 };

const SERVICES_G = [
  { icon: '🖥', title: 'Managed IT Services', desc: 'End-to-end management of your entire IT environment — proactive monitoring, patching, and optimization around the clock.' },
  { icon: '🎧', title: '24/7 Help Desk & Support', desc: '4-minute average response SLA. Canadian-based agents resolve issues remotely or on-site, any time of day.' },
  { icon: '🌐', title: 'Network & Infrastructure', desc: 'LAN/WAN design, firewall management, SD-WAN, and infrastructure lifecycle management for enterprise reliability.' },
  { icon: '🛒', title: 'IT Procurement & Lifecycle', desc: 'Vendor-neutral hardware and software sourcing, asset tracking, and end-of-life management at volume pricing.' },
];

const PRODUCTS_G = [
  {
    name: 'KiliDesk',
    tag: 'ITSM Platform',
    desc: 'An AI-powered IT Service Management and helpdesk platform purpose-built for managed service providers and enterprise IT teams. Unify ticketing, asset management, and SLA tracking in one command center.',
    features: ['Intelligent ticket routing & auto-escalation', 'Real-time SLA dashboards', 'Multi-site asset inventory', 'Customer portal & self-service'],
  },
  {
    name: 'KiliVault',
    tag: 'Backup & Recovery',
    desc: 'Enterprise backup, disaster recovery, and business continuity platform. Automated daily snapshots, instant VM restore, and geo-redundant Canadian cloud storage ensure your data is always recoverable.',
    features: ['Automated backup scheduling', 'Instant bare-metal restore', 'Geo-redundant Canadian storage', 'Ransomware rollback protection'],
  },
];

const CASES_G = [
  {
    client: 'NorthernMine Corp',
    title: 'Unified IT Across 8 Remote Sites',
    desc: 'Deployed KiliDesk and centralized helpdesk operations across 8 mining sites in Northern Ontario. Standardized SLAs and automated routing cut ticket resolution time dramatically.',
    stat: '62%', statLabel: 'Ticket Resolution Time Reduction',
  },
  {
    client: 'City of Calgary',
    title: 'Municipal Cloud Migration',
    desc: 'Full migration of legacy on-premise infrastructure to a hybrid cloud environment. Achieved continuous uptime for critical municipal services throughout the transition.',
    stat: '99.98%', statLabel: 'Uptime SLA Achieved',
  },
  {
    client: 'TD Financial',
    title: '24/7 Managed Support Deployment',
    desc: 'Onboarded TD Financial\'s 2,400-seat environment onto Kilimanjaro\'s managed services platform with a 4-minute response SLA and zero service interruption.',
    stat: '4 min', statLabel: 'Average Response SLA',
  },
];

const CLIENTS_G = ['BC Hydro', 'Suncor Energy', 'CN Rail', 'Rogers', 'Gov. Ontario', 'RBC'];
const MARQUEE_G = ['Managed IT', '24/7 Support', 'Canadian Cloud', 'Zero Downtime', 'Enterprise Scale', 'IT Excellence', 'Help Desk Pro', 'Always On'];

// ─── Glass card ───────────────────────────────────────────────────────────────
function GlassCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        ...style,
      }}>
      {children}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavG() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(4,13,31,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,229,200,0.12)' : 'none',
      }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${TEAL}, ${VIOLET})` }}>
            <svg viewBox="0 0 16 16" fill="white" className="w-4 h-4">
              <path d="M8 2L14 12H2L8 2Z" fillOpacity="0.9" />
            </svg>
          </div>
          <span style={{ ...BOLD, fontSize: '15px', color: WHITE, letterSpacing: '-0.02em' }}>
            Kilimanjaro
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-1 list-none">
          {['Products', 'Services', 'Work'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-g`}
                style={{ ...JAKARTA, fontWeight: 500, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}
                className="px-4 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-all duration-150">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('contact-g')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: `linear-gradient(135deg, ${TEAL}, ${SKY})`, color: NAVY, ...BOLD, fontSize: '12px', letterSpacing: '0.05em', border: 'none' }}
          className="px-5 py-2 rounded-full uppercase cursor-pointer hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroG() {
  const [c500, ref500] = useCountUp(500, '+');
  const [c99, ref99] = useCountUp(99, '');
  const [c4, ref4] = useCountUp(4, ' min');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6"
      style={{ background: NAVY }}>

      {/* Star-field dot bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.12 }} />

      {/* Aurora orbs */}
      <div className="absolute animate-aurora-1 pointer-events-none"
        style={{ width: '600px', height: '600px', background: `radial-gradient(circle, ${TEAL}55 0%, transparent 70%)`, top: '-100px', left: '-100px', borderRadius: '50%' }} />
      <div className="absolute animate-aurora-2 pointer-events-none"
        style={{ width: '500px', height: '500px', background: `radial-gradient(circle, ${VIOLET}55 0%, transparent 70%)`, bottom: '-80px', right: '-80px', borderRadius: '50%' }} />
      <div className="absolute animate-aurora-3 pointer-events-none"
        style={{ width: '400px', height: '400px', background: `radial-gradient(circle, ${SKY}44 0%, transparent 70%)`, top: '40%', left: '40%', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-[900px] mx-auto anim-fade-up-1">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{ background: 'rgba(0,229,200,0.12)', border: '1px solid rgba(0,229,200,0.25)' }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: TEAL }} />
          <span style={{ ...JAKARTA, fontWeight: 600, fontSize: '12px', letterSpacing: '0.12em', color: TEAL }} className="uppercase">
            Full-Stack Managed IT Partner · Canadian
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ ...LIGHT, fontSize: 'clamp(52px, 8vw, 112px)', lineHeight: 1.0, letterSpacing: '-0.04em', color: WHITE }}
          className="anim-fade-up-2 mb-6">
          Enterprise IT,<br />
          <span style={{ fontWeight: 800, background: `linear-gradient(135deg, ${TEAL}, ${SKY}, ${VIOLET})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Always On.
          </span>
        </h1>

        <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto' }}
          className="anim-fade-up-3 mb-12">
          Kilimanjaro Innovation Labs delivers managed IT services, 24/7 helpdesk, and cloud infrastructure for Canadian enterprises — with a 4-minute response SLA.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center anim-fade-up-3">
          <button
            onClick={() => document.getElementById('products-g')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: `linear-gradient(135deg, ${TEAL}, ${SKY})`, color: NAVY, ...BOLD, fontSize: '13px', letterSpacing: '0.05em' }}
            className="uppercase px-8 py-3.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
            Our Platforms <ArrowUpRight />
          </button>
          <button
            onClick={() => document.getElementById('contact-g')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'rgba(255,255,255,0.06)', color: WHITE, ...JAKARTA, fontWeight: 600, fontSize: '13px', border: '1px solid rgba(255,255,255,0.15)' }}
            className="uppercase px-8 py-3.5 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
            Talk to Us
          </button>
        </div>
      </div>

      {/* Floating stats */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto mt-20 grid grid-cols-3 gap-4 px-4">
        {[
          { ref: ref500, val: c500, label: 'Endpoints Managed' },
          { ref: ref99,  val: `${c99}.97%`, label: 'Uptime Guarantee' },
          { ref: ref4,   val: c4,   label: 'Avg Response Time' },
        ].map((s) => (
          <GlassCard key={s.label} className="py-6 px-4 text-center">
            <div ref={s.ref} style={{ ...BOLD, fontSize: '36px', color: TEAL, lineHeight: 1 }}>{s.val}</div>
            <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }} className="uppercase mt-2">{s.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div style={{ width: '1px', height: '48px', background: `linear-gradient(to bottom, transparent, ${TEAL})` }} />
      </div>
    </section>
  );
}

// ─── SERVICES RIBBON ──────────────────────────────────────────────────────────
function ServicesG() {
  return (
    <section id="services-g" className="py-24 relative overflow-hidden" style={{ background: '#060F22' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 80% 50%, ${VIOLET}18 0%, transparent 60%)` }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: TEAL }} className="uppercase mb-3">
            03 / What We Deliver
          </div>
          <h2 style={{ ...LIGHT, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Complete <span style={{ fontWeight: 800 }}>managed IT</span><br />from a single partner.
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_G.map((s, i) => (
            <GlassCard key={s.title} className="p-7 group cursor-default"
              style={{ transition: 'border-color 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${TEAL}50`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 style={{ ...BOLD, fontSize: '16px', color: WHITE, lineHeight: 1.25 }} className="mb-3">{s.title}</h3>
              <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsG() {
  return (
    <section id="products-g" className="py-24 relative overflow-hidden" style={{ background: NAVY }}>
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${VIOLET}18, transparent)` }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: TEAL }} className="uppercase mb-3">
            02 / Product Platforms
          </div>
          <h2 style={{ ...LIGHT, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Built for <span style={{ fontWeight: 800 }}>IT teams</span><br />that never sleep.
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_G.map((p, i) => (
            <div key={p.name}
              className="group relative rounded-2xl p-8 overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${i === 0 ? 'rgba(0,229,200,0.2)' : 'rgba(123,63,228,0.2)'}`,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = i === 0 ? `${TEAL}60` : `${VIOLET}60`; e.currentTarget.style.boxShadow = i === 0 ? `0 0 40px ${TEAL}18` : `0 0 40px ${VIOLET}18`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = i === 0 ? 'rgba(0,229,200,0.2)' : 'rgba(123,63,228,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}>
              {/* Glow blob */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
                style={{ background: `radial-gradient(circle, ${i === 0 ? TEAL : VIOLET}, transparent)`, filter: 'blur(40px)' }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <span style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', color: i === 0 ? TEAL : VIOLET, background: i === 0 ? 'rgba(0,229,200,0.1)' : 'rgba(123,63,228,0.1)', padding: '4px 12px', borderRadius: '100px' }} className="uppercase">
                    {p.tag}
                  </span>
                </div>
                <h3 style={{ ...BOLD, fontSize: '36px', color: WHITE, letterSpacing: '-0.03em', lineHeight: 1 }} className="mb-4">{p.name}</h3>
                <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }} className="mb-7">{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {p.features.map(f => (
                    <li key={f} style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.5)' }} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 0 ? TEAL : VIOLET }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button style={{ background: i === 0 ? `linear-gradient(135deg, ${TEAL}, ${SKY})` : `linear-gradient(135deg, ${VIOLET}, ${SKY})`, color: NAVY, ...BOLD, fontSize: '12px', letterSpacing: '0.08em', border: 'none' }}
                  className="uppercase px-6 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
                  Learn More <ArrowUpRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesG() {
  return (
    <section id="work-g" className="py-24 relative overflow-hidden" style={{ background: '#060F22' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: TEAL }} className="uppercase mb-3">
            05 / Case Studies
          </div>
          <h2 style={{ ...LIGHT, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Results that <span style={{ fontWeight: 800 }}>matter.</span>
          </h2>
        </div>

        <div className="reveal flex flex-col gap-4">
          {CASES_G.map((c, i) => (
            <GlassCard key={c.client} className="group overflow-hidden cursor-default"
              style={{ transition: 'border-color 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${TEAL}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_200px]">
                <div className="p-8 md:p-10">
                  <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.15em', color: TEAL }} className="uppercase mb-2">{c.client}</div>
                  <h3 style={{ ...BOLD, fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.1, color: WHITE }} className="mb-4">{c.title}</h3>
                  <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}>{c.desc}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 text-center"
                  style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', background: `linear-gradient(135deg, rgba(0,229,200,0.08), rgba(14,165,233,0.08))` }}>
                  <div style={{ ...BOLD, fontSize: 'clamp(32px,3.5vw,48px)', color: TEAL, lineHeight: 1 }}>{c.stat}</div>
                  <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }} className="uppercase">{c.statLabel}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeG() {
  const doubled = [...MARQUEE_G, ...MARQUEE_G];
  return (
    <div className="py-5 overflow-hidden relative" style={{ background: 'rgba(0,229,200,0.08)', borderTop: '1px solid rgba(0,229,200,0.15)', borderBottom: '1px solid rgba(0,229,200,0.15)' }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span style={{ ...BOLD, fontSize: '11px', letterSpacing: '0.2em', color: TEAL }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: VIOLET, fontSize: '6px' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsG() {
  return (
    <section className="py-24 relative" style={{ background: NAVY }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: TEAL }} className="uppercase mb-3">06 / Trusted Partners</div>
          <h2 style={{ ...LIGHT, fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Canada's leading <span style={{ fontWeight: 800 }}>organizations</span> trust Kilimanjaro.
          </h2>
        </div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CLIENTS_G.map((name, i) => (
            <GlassCard key={name} className="group py-8 px-4 flex items-center justify-center cursor-default"
              style={{ transition: 'border-color 0.25s ease, background 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${TEAL}50`; e.currentTarget.style.background = 'rgba(0,229,200,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              <span style={{ ...BOLD, fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }} className="uppercase text-center">{name}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactG() {
  return (
    <section id="contact-g" className="py-32 relative overflow-hidden" style={{ background: '#060F22' }}>
      {/* Aurora gradient bg */}
      <div className="absolute inset-0 pointer-events-none animate-aurora-1"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${TEAL}18, transparent 60%), radial-gradient(ellipse at 70% 50%, ${VIOLET}18, transparent 60%)` }} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: TEAL }} className="uppercase mb-6">07 / Get In Touch</div>
        <h2 style={{ ...LIGHT, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.98, letterSpacing: '-0.04em', color: WHITE }} className="reveal mb-8">
          Your IT,<br />
          <span style={{ fontWeight: 800, background: `linear-gradient(135deg, ${TEAL}, ${SKY}, ${VIOLET})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            handled.
          </span>
        </h2>
        <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }} className="mb-10 max-w-[520px] mx-auto">
          Let's talk about your infrastructure, support needs, and growth goals. Our team responds within 4 minutes — even for prospects.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:hello@kilimanjaro.ca"
            style={{ background: `linear-gradient(135deg, ${TEAL}, ${SKY})`, color: NAVY, ...BOLD, fontSize: '13px', letterSpacing: '0.06em' }}
            className="uppercase px-10 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2 no-underline">
            hello@kilimanjaro.ca <ArrowUpRight />
          </a>
          <button
            style={{ background: 'rgba(255,255,255,0.06)', color: WHITE, ...JAKARTA, fontWeight: 600, fontSize: '13px', border: '1px solid rgba(255,255,255,0.15)' }}
            className="uppercase px-10 py-4 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
            Book a Discovery Call
          </button>
        </div>
        <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.25)', marginTop: '20px' }}>
          Kilimanjaro Innovation Labs Inc. · Toronto, ON · Canadian-owned &amp; operated
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterG() {
  return (
    <footer style={{ background: NAVY, borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-12 pb-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={{ ...BOLD, fontSize: '15px', color: WHITE, letterSpacing: '-0.02em' }}>Kilimanjaro Innovation Labs</span>
        <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved. · Toronto, Canada</p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.25)' }} className="hover:text-white transition-colors duration-200">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantG() {
  useScrollReveal();
  return (
    <div style={{ background: NAVY, color: WHITE }}>
      <NavG />
      <HeroG />
      <ProductsG />
      <ServicesG />
      <CasesG />
      <MarqueeG />
      <ClientsG />
      <ContactG />
      <FooterG />
    </div>
  );
}
