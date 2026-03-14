/**
 * Variant I — "FORTRESS"
 * Cybersecurity dark. Near-black bg, red threat accents, IBM Plex.
 * Hex grid overlay, diamond/angled card corners, scanning-line animation.
 * Company: Kilimanjaro Innovation Labs Inc. — Security-First IT for Regulated Industries
 */
import { useState, useEffect } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

const BLACK  = '#080808';
const SURFACE = '#1C1C1C';
const RED    = '#DC2626';
const DRED   = '#991B1B';
const LRED   = '#FCA5A5';
const WHITE  = '#FFFFFF';

const IBMPLEX = { fontFamily: '"IBM Plex Sans", sans-serif' };
const IBMMONO = { fontFamily: '"IBM Plex Mono", monospace' };
const BOLD = { ...IBMPLEX, fontWeight: 600 };

const SERVICES_I = [
  { num: '01', title: 'Penetration Testing & Red Teaming', desc: 'Adversarial simulations that expose real attack paths before threat actors do. Comprehensive reports with remediation playbooks.' },
  { num: '02', title: 'SOC-as-a-Service', desc: '24/7 Security Operations Center staffed by certified analysts. Continuous threat monitoring, detection, and coordinated incident response.' },
  { num: '03', title: 'Compliance & GRC', desc: 'Achieve and maintain PIPEDA, SOC 2 Type II, and ISO 27001 certification. Automated evidence collection and policy management via KiliAudit.' },
  { num: '04', title: 'Zero-Trust Architecture', desc: 'Design and implement Zero-Trust network segmentation, identity-aware access, and micro-perimeter controls for regulated environments.' },
];

const PRODUCTS_I = [
  {
    name: 'KiliShield',
    tag: 'SIEM & Threat Detection',
    desc: 'Real-time threat detection, correlation, and response platform powered by behavioral AI. KiliShield monitors your entire environment 24/7 — from endpoints to cloud workloads — and escalates anomalies in seconds.',
    features: ['Behavioral AI threat detection', 'Correlated alert triage', 'Sub-12-minute incident response', 'Canadian data residency'],
  },
  {
    name: 'KiliAudit',
    tag: 'Compliance & GRC',
    desc: 'End-to-end governance, risk, and compliance management. Automate evidence collection for PIPEDA, SOC 2, and ISO 27001. Board-ready reporting and continuous control monitoring reduce audit prep from weeks to hours.',
    features: ['Automated PIPEDA controls', 'SOC 2 Type II readiness', 'ISO 27001 gap analysis', 'Continuous control monitoring'],
  },
];

const CASES_I = [
  { client: 'Meridian Credit Union', title: 'Zero Breaches, 12-Minute Response', desc: 'Deployed KiliShield across Meridian\'s 900-seat environment. Threat response time dropped from 4 hours to 12 minutes. Zero successful breaches in 24 months of operation.', stat: '0', statLabel: 'Breaches in 24 Months' },
  { client: 'OHIP Systems', title: 'PHIPA Compliance in 90 Days', desc: 'Full PHIPA compliance program for a provincial health information network. Automated evidence collection via KiliAudit reduced audit prep from 8 weeks to 3 days.', stat: '90', statLabel: 'Days to Full Compliance' },
  { client: 'ArcticShield Insurance', title: 'SOC 2 Type II Certification', desc: 'Guided ArcticShield through a complete SOC 2 Type II certification program including gap analysis, control implementation, and auditor coordination.', stat: 'SOC 2', statLabel: 'Type II Certified' },
];

const CLIENTS_I = ['Meridian Credit Union', 'OHIP Systems', 'CloudSafe', 'ArcticShield', 'SecureNorth', 'VaultPro'];
const MARQUEE_I = ['Zero Trust', 'Always Protected', 'SOC 24/7', 'PIPEDA Compliant', 'Red Team Ready', 'Shield First', 'Incident Response', 'Certified Secure'];

// ─── Angled fortress card ─────────────────────────────────────────────────────
function FCard({ children, className = '', style = {} }) {
  return (
    <div className={`relative ${className}`}
      style={{
        background: SURFACE,
        border: `1px solid ${RED}30`,
        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
        ...style,
      }}>
      {children}
    </div>
  );
}

// ─── Status dot ───────────────────────────────────────────────────────────────
function StatusDot({ active = true }) {
  return (
    <span className="relative flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        {active && <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: RED }} />}
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: active ? RED : '#444' }} />
      </span>
    </span>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavI() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-10"
      style={{ background: 'rgba(8,8,8,0.9)', borderBottom: `1px solid ${RED}25`, backdropFilter: 'blur(16px)' }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-8 h-8 flex items-center justify-center" style={{ background: RED, clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
            <svg viewBox="0 0 16 16" fill="white" className="w-3.5 h-3.5">
              <path d="M8 1L15 6v8H1V6L8 1Z" fillOpacity="0.9" />
            </svg>
          </div>
          <span style={{ ...BOLD, fontSize: '15px', color: WHITE, letterSpacing: '-0.01em' }}>Kilimanjaro</span>
          <span style={{ ...IBMMONO, fontSize: '10px', color: RED, letterSpacing: '0.15em', opacity: 0.8 }}>SECURITY</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          <StatusDot active />
          <span style={{ ...IBMMONO, fontSize: '10px', color: RED, letterSpacing: '0.1em' }}>SOC LIVE · ALL SYSTEMS MONITORED</span>
        </div>
        <button
          onClick={() => document.getElementById('contact-i')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: RED, color: WHITE, ...BOLD, fontSize: '12px', letterSpacing: '0.08em', border: 'none', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
          className="uppercase px-6 py-2.5 cursor-pointer hover:bg-[#B91C1C] transition-colors">
          ENGAGE NOW
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroI() {
  const [c0, ref0] = useCountUp(0, '');
  const [c12, ref12] = useCountUp(12, ' min');
  const [c100, ref100] = useCountUp(100, '%');

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-16" style={{ background: BLACK }}>
      {/* Hex grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'56\' height=\'100\' viewBox=\'0 0 56 100\'%3E%3Cpath d=\'M28 66L0 50V16L28 0l28 16v34L28 66zm0-10l20-11.5V22.5L28 11 8 22.5v22L28 56z\' fill=\'%23DC2626\'/%3E%3C/svg%3E")', backgroundSize: '56px 100px' }} />

      {/* Scanning line */}
      <div className="absolute left-0 right-0 h-[2px] pointer-events-none animate-scan z-20"
        style={{ background: `linear-gradient(90deg, transparent, ${RED}, transparent)`, boxShadow: `0 0 20px ${RED}` }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="anim-fade-up-1">
            <div className="flex items-center gap-3 mb-8">
              <StatusDot active />
              <span style={{ ...IBMMONO, fontSize: '11px', color: RED, letterSpacing: '0.15em' }}>THREAT LEVEL: LOW · ALL CLIENTS PROTECTED</span>
            </div>
            <h1 style={{ ...BOLD, fontWeight: 600, fontSize: 'clamp(44px,7vw,88px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: WHITE }} className="anim-fade-up-2 mb-6">
              Security<br />
              <span style={{ color: RED }}>without</span><br />
              compromise.
            </h1>
            <p style={{ ...IBMPLEX, fontWeight: 300, fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', maxWidth: '440px' }} className="mb-10">
              Kilimanjaro delivers security-first managed IT for Canada's most regulated industries. SOC 24/7, zero-trust architecture, and full compliance automation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('products-i')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: RED, color: WHITE, ...BOLD, fontSize: '12px', letterSpacing: '0.1em', border: 'none', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                className="uppercase px-8 py-3.5 cursor-pointer hover:bg-[#B91C1C] transition-colors flex items-center gap-2">
                VIEW PLATFORMS <ArrowUpRight />
              </button>
              <button
                onClick={() => document.getElementById('contact-i')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'transparent', color: LRED, ...IBMPLEX, fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', border: `1px solid ${RED}40` }}
                className="uppercase px-8 py-3.5 cursor-pointer hover:border-red-500 transition-colors">
                GET SECURITY ASSESSMENT
              </button>
            </div>
          </div>

          {/* Right: Threat dashboard */}
          <div className="anim-fade-up-2">
            <FCard className="p-6">
              <div style={{ ...IBMMONO, fontSize: '10px', color: RED, letterSpacing: '0.15em' }} className="mb-5 uppercase">// SECURITY METRICS DASHBOARD</div>
              {[
                { ref: ref0,   val: c0,   label: 'Client breaches · 24 months', icon: '🛡' },
                { ref: ref12,  val: c12,  label: 'Avg threat response time',    icon: '⚡' },
                { ref: ref100, val: c100, label: 'PIPEDA compliant clients',     icon: '✓' },
              ].map((m, i) => (
                <div key={m.label} className="flex items-center gap-5 py-4" style={{ borderBottom: i < 2 ? `1px solid rgba(220,38,38,0.12)` : 'none' }}>
                  <span className="text-2xl w-8 text-center">{m.icon}</span>
                  <div ref={m.ref} style={{ ...BOLD, fontSize: '36px', color: m.val === '0' || m.val === 0 ? LRED : RED, lineHeight: 1, minWidth: '90px' }}>{m.val}</div>
                  <div style={{ ...IBMMONO, fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>{m.label}</div>
                </div>
              ))}
              <div className="mt-5 pt-4" style={{ borderTop: `1px solid rgba(220,38,38,0.12)` }}>
                <div className="flex items-center justify-between">
                  <span style={{ ...IBMMONO, fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>SYSTEM STATUS</span>
                  <div className="flex items-center gap-2">
                    <StatusDot active />
                    <span style={{ ...IBMMONO, fontSize: '10px', color: RED }}>OPERATIONAL</span>
                  </div>
                </div>
              </div>
            </FCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsI() {
  return (
    <section id="products-i" className="py-24 relative overflow-hidden" style={{ background: '#0F0F0F' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...IBMMONO, fontSize: '11px', letterSpacing: '0.2em', color: RED }} className="uppercase mb-3">02 / Security Platforms</div>
          <h2 style={{ ...BOLD, fontWeight: 600, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Your threat surface,<br />our responsibility.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_I.map((p, i) => (
            <FCard key={p.name} className="p-8 group cursor-default">
              <div style={{ ...IBMMONO, fontSize: '10px', letterSpacing: '0.2em', color: RED }} className="uppercase mb-4">// {p.tag}</div>
              <h3 style={{ ...BOLD, fontSize: '40px', color: WHITE, letterSpacing: '-0.03em', lineHeight: 1 }} className="mb-5">{p.name}</h3>
              <p style={{ ...IBMPLEX, fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }} className="mb-7">{p.desc}</p>
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map(f => (
                  <li key={f} style={{ ...IBMMONO, fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }} className="flex items-center gap-3">
                    <span style={{ color: RED }}>▸</span> {f}
                  </li>
                ))}
              </ul>
              <button style={{ background: RED, color: WHITE, ...BOLD, fontSize: '11px', letterSpacing: '0.12em', border: 'none', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                className="uppercase px-6 py-3 cursor-pointer hover:bg-[#B91C1C] transition-colors flex items-center gap-2">
                LEARN MORE <ArrowUpRight />
              </button>
            </FCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function ServicesI() {
  return (
    <section id="services-i" className="py-24 relative" style={{ background: BLACK }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...IBMMONO, fontSize: '11px', letterSpacing: '0.2em', color: RED }} className="uppercase mb-3">03 / Security Services</div>
          <h2 style={{ ...BOLD, fontWeight: 600, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Defense in depth.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES_I.map((s, i) => (
            <div key={s.num} className="p-7 group cursor-default"
              style={{ border: `1px solid rgba(220,38,38,0.15)`, background: SURFACE, transition: 'border-color 0.25s ease' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${RED}50`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(220,38,38,0.15)'}>
              <div style={{ ...IBMMONO, fontSize: '11px', color: RED, letterSpacing: '0.15em' }} className="mb-4">{s.num}</div>
              <h3 style={{ ...BOLD, fontSize: '18px', color: WHITE, lineHeight: 1.25 }} className="mb-3">{s.title}</h3>
              <p style={{ ...IBMPLEX, fontWeight: 300, fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesI() {
  return (
    <section id="work-i" className="py-24 relative" style={{ background: '#0F0F0F' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14">
          <div style={{ ...IBMMONO, fontSize: '11px', letterSpacing: '0.2em', color: RED }} className="uppercase mb-3">05 / Incident Reports</div>
          <h2 style={{ ...BOLD, fontWeight: 600, fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: WHITE }} className="reveal">
            Protected. Every time.
          </h2>
        </div>
        <div className="reveal flex flex-col gap-4">
          {CASES_I.map((c) => (
            <FCard key={c.client} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_180px]">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <StatusDot active />
                    <span style={{ ...IBMMONO, fontSize: '10px', letterSpacing: '0.15em', color: RED }} className="uppercase">{c.client} · SECURED</span>
                  </div>
                  <h3 style={{ ...BOLD, fontSize: 'clamp(20px,2.5vw,28px)', lineHeight: 1.1, color: WHITE }} className="mb-4">{c.title}</h3>
                  <p style={{ ...IBMPLEX, fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}>{c.desc}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 text-center" style={{ borderLeft: `1px solid ${RED}20`, background: `linear-gradient(135deg, rgba(220,38,38,0.1), transparent)` }}>
                  <div style={{ ...BOLD, fontSize: 'clamp(28px,3vw,44px)', color: LRED, lineHeight: 1 }}>{c.stat}</div>
                  <div style={{ ...IBMMONO, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', marginTop: '8px' }} className="uppercase">{c.statLabel}</div>
                </div>
              </div>
            </FCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeI() {
  const doubled = [...MARQUEE_I, ...MARQUEE_I];
  return (
    <div className="py-4 overflow-hidden" style={{ background: RED, borderTop: `1px solid ${DRED}` }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span style={{ ...IBMMONO, fontSize: '11px', letterSpacing: '0.2em', color: WHITE }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsI() {
  return (
    <section className="py-24 relative" style={{ background: BLACK }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div style={{ ...IBMMONO, fontSize: '11px', letterSpacing: '0.2em', color: RED }} className="uppercase mb-3">06 / Protected Partners</div>
        <h2 style={{ ...BOLD, fontWeight: 600, fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.1, color: WHITE }} className="reveal mb-12">
          Canada's most security-conscious<br />organizations choose Kilimanjaro.
        </h2>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS_I.map((name) => (
            <div key={name}
              className="cursor-default py-8 px-4 flex items-center justify-center text-center"
              style={{ border: `1px solid rgba(220,38,38,0.15)`, background: SURFACE, transition: 'border-color 0.25s ease, background 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${RED}50`; e.currentTarget.style.background = `rgba(220,38,38,0.08)`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(220,38,38,0.15)'; e.currentTarget.style.background = SURFACE; }}>
              <span style={{ ...IBMPLEX, fontWeight: 500, fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactI() {
  return (
    <section id="contact-i" className="py-32 relative overflow-hidden" style={{ background: '#0F0F0F' }}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'56\' height=\'100\' viewBox=\'0 0 56 100\'%3E%3Cpath d=\'M28 66L0 50V16L28 0l28 16v34L28 66zm0-10l20-11.5V22.5L28 11 8 22.5v22L28 56z\' fill=\'%23DC2626\'/%3E%3C/svg%3E")', backgroundSize: '56px 100px' }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <div style={{ ...IBMMONO, fontSize: '11px', letterSpacing: '0.2em', color: RED }} className="uppercase mb-6">07 / Security Assessment</div>
        <h2 style={{ ...BOLD, fontWeight: 600, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.98, letterSpacing: '-0.04em', color: WHITE }} className="reveal mb-8">
          Is your<br />
          <span style={{ color: RED }}>perimeter</span><br />
          holding?
        </h2>
        <p style={{ ...IBMPLEX, fontWeight: 300, fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.4)' }} className="mb-10 max-w-[500px] mx-auto">
          Book a complimentary security assessment. Our red team will map your attack surface and deliver a prioritized remediation report within 5 business days.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:security@kilimanjaro.ca"
            style={{ background: RED, color: WHITE, ...BOLD, fontSize: '12px', letterSpacing: '0.1em', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            className="uppercase px-10 py-4 cursor-pointer hover:bg-[#B91C1C] transition-colors flex items-center gap-2 no-underline">
            REQUEST ASSESSMENT <ArrowUpRight />
          </a>
          <button style={{ background: 'transparent', color: LRED, ...IBMPLEX, fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', border: `1px solid ${RED}40` }}
            className="uppercase px-10 py-4 cursor-pointer hover:border-red-500 transition-colors">
            SPEAK TO OUR SOC TEAM
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterI() {
  return (
    <footer style={{ background: BLACK, borderTop: `1px solid rgba(220,38,38,0.15)` }} className="pt-10 pb-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <StatusDot active />
          <span style={{ ...IBMMONO, fontSize: '11px', color: RED, letterSpacing: '0.1em' }}>SOC ACTIVE</span>
          <span style={{ ...BOLD, fontSize: '14px', color: WHITE, marginLeft: '8px' }}>Kilimanjaro Security</span>
        </div>
        <p style={{ ...IBMMONO, fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Responsible Disclosure'].map(l => (
            <a key={l} href="#" style={{ ...IBMPLEX, fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.25)' }} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantI() {
  useScrollReveal();
  return (
    <div style={{ background: BLACK, color: WHITE }}>
      <NavI />
      <HeroI />
      <ProductsI />
      <ServicesI />
      <CasesI />
      <MarqueeI />
      <ClientsI />
      <ContactI />
      <FooterI />
    </div>
  );
}
