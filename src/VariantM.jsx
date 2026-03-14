/**
 * Variant M — "LUMINARY" (Full Build)
 * Kilimanjaro Innovation Labs — Products: Divemetric + Complyo
 * Sections: Hero → WhyUs → TechStack → Products → Practices → Testimonials
 *           → Cases → HowWeWork → EngagementModels → Marquee → Industries
 *           → Consultation CTA → Clients → FAQ → Contact → Footer
 */
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal, useCountUp, ArrowUpRight } from './shared.jsx';

// ── Palette ────────────────────────────────────────────────────────────────────
const BG      = '#F0FDFA';
const SURFACE = '#FFFFFF';
const TEAL    = '#0891B2';
const DTEAL   = '#164E63';
const LTEAL   = '#22D3EE';
const MIST    = '#ECFEFF';
const NAVY    = '#0C1929';
const ABYSS   = '#071520';

const CORMORANT = { fontFamily: '"Cormorant Garamond", serif' };
const JAKARTA   = { fontFamily: '"Plus Jakarta Sans", sans-serif' };
const BOLD_J    = { ...JAKARTA, fontWeight: 700 };

// ── Keyframes ─────────────────────────────────────────────────────────────────
const LM_CSS = `
  @keyframes lm-float-a {
    0%,100%{transform:translateY(0)scale(1)}50%{transform:translateY(-28px)scale(1.04)}
  }
  @keyframes lm-float-b {
    0%,100%{transform:translateY(0)rotate(0)}50%{transform:translateY(-18px)rotate(5deg)}
  }
  @keyframes lm-float-c {
    0%,100%{transform:translateY(0)translateX(0)}33%{transform:translateY(-12px)translateX(10px)}66%{transform:translateY(-22px)translateX(-6px)}
  }
  @keyframes lm-pulse-orb {
    0%,100%{opacity:.3;transform:scale(1)}50%{opacity:.7;transform:scale(1.06)}
  }
  @keyframes lm-stat-glow {
    0%,100%{text-shadow:0 0 16px rgba(34,211,238,.25)}50%{text-shadow:0 0 48px rgba(34,211,238,.6),0 0 96px rgba(8,145,178,.3)}
  }
  @keyframes lm-shimmer {
    0%{background-position:-300% center}100%{background-position:300% center}
  }
  @keyframes lm-up {
    from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}
  }
  @keyframes lm-step-in {
    from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}
  }
  .lm-u1{animation:lm-up .75s ease-out both;animation-delay:.05s}
  .lm-u2{animation:lm-up .75s ease-out both;animation-delay:.22s}
  .lm-u3{animation:lm-up .75s ease-out both;animation-delay:.40s}
  .lm-u4{animation:lm-up .75s ease-out both;animation-delay:.58s}
  @keyframes lm-slide-right {
    from{opacity:0;transform:translateX(72px) scale(0.97)}
    to{opacity:1;transform:translateX(0) scale(1)}
  }
  @keyframes lm-slide-left {
    from{opacity:0;transform:translateX(-72px) scale(0.97)}
    to{opacity:1;transform:translateX(0) scale(1)}
  }
  @keyframes lm-progress-bar {
    from{transform:scaleX(0);transform-origin:left}
    to{transform:scaleX(1);transform-origin:left}
  }
`;

// ── Data ──────────────────────────────────────────────────────────────────────
const PRACTICES_M = [
  { num: 'I.',   title: 'Software Product Development', desc: 'Full-cycle SaaS product development — design, engineering, and go-to-market. We build platforms enterprises rely on, shipping with precision at enterprise velocity.' },
  { num: 'II.',  title: 'Enterprise IT Advisory',       desc: 'Board-aligned IT strategy, technology portfolio governance, and operating model design. We translate complex IT landscapes into competitive advantage.' },
  { num: 'III.', title: 'AI & Data Engineering',        desc: 'AI-powered data pipelines, analytics platforms, and intelligent automation. From raw infrastructure to production ML models generating measurable business value.' },
  { num: 'IV.',  title: 'Compliance & Governance',      desc: 'End-to-end compliance frameworks, document management, and regulatory readiness programs. We make compliance a capability — not a cost centre.' },
];

const PRODUCTS_M = [
  { num: '01', name: 'DiveMetric', tag: 'DSP Performance Management', url: 'https://divemetric.com',
    desc: 'The complete performance management platform for Amazon Delivery Service Partners. Upload scorecard reports, auto-generate unified driver scorecards, and deliver AI-powered coaching via SMS and email — turning hours of manual work into 15 minutes.',
    features: ['Multi-format scorecard report processing','AI-generated personalized driver coaching','SMS & email scorecard distribution','Real-time engagement & trend analytics'] },
  { num: '02', name: 'Complyo', tag: 'Employee Document Compliance', url: 'https://complyo.co',
    desc: 'All-in-one compliance platform for employee documents. AI-powered data extraction, automated reminders, and real-time compliance scoring — so HR and legal stay ahead of requirements, not behind them.',
    features: ['AI-powered document data extraction','Automated compliance reminders','Real-time compliance scoring','Employee document tracking dashboard'] },
  { num: '03', name: 'LogiLink', tag: 'Logistics Job Board', url: 'https://logilink.ca',
    desc: 'The hiring platform built for logistics operators. Post roles, screen applicants, and hire truck drivers, forklift operators, warehouse staff, and more — fast. Purpose-built for the pace of logistics hiring.',
    features: ['Roles for drivers, forklift & warehouse ops','Applicant screening & one-click shortlisting','Operator-verified job listings','Mobile-first apply flow for field workers'] },
];

const CASES_M = [
  { client: 'Cascade Financial', title: 'Analytics Infrastructure Modernization', context: 'Data platform · 4 months',
    desc: 'Built and deployed a real-time analytics layer for Cascade Financial, replacing manual spreadsheet reporting with live performance data powered by DiveMetric. Decision turnaround dropped from days to hours.',
    stat: '4×', statLabel: 'Faster Reporting Cycles' },
  { client: 'NorthBridge Health', title: 'HR Compliance Program', context: 'Complyo deployment · 2 months',
    desc: "Onboarded 85 employees onto Complyo's document compliance platform ahead of a provincial audit. Automated reminders and AI extraction eliminated manual document chasing — achieving full compliance on time.",
    stat: '100%', statLabel: 'Audit-Ready On Time' },
  { client: 'Rideau Capital Partners', title: 'IT Strategy & Vendor Management', context: 'IT advisory · ongoing',
    desc: 'Serving as fractional IT advisor for Rideau Capital — technology vendor selection, infrastructure planning, and quarterly reviews. Helped consolidate tooling and reduce recurring SaaS spend meaningfully.',
    stat: '30%', statLabel: 'SaaS Spend Reduced' },
];

const WHY_US = [
  { icon: <IcoTarget />, title: 'Outcome-First Mindset',  desc: 'Every engagement is structured around business outcomes — not hours logged. We define success upfront and hold ourselves to it.' },
  { icon: <IcoLock />,   title: 'Fixed-Scope Delivery',  desc: 'We price by outcome, not by the hour. You know the cost, timeline, and deliverables before we write a single line of code.' },
  { icon: <IcoZap />,    title: 'Fortnightly Demos',     desc: 'Two-week sprints with live demos every cycle. You see exactly what you\'re paying for in real time — not just at the end.' },
  { icon: <IcoGlobe />,  title: 'North American HQ',     desc: 'Canadian company. Eastern + Pacific timezone coverage. Synchronous communication without the offshore delay or coordination overhead.' },
];

const TECH_CERTS = ['AWS Partner Network', 'Google Cloud Certified', 'SOC 2 Type II Ready', 'ISO 27001 Aligned'];
const TECH_STACK = ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'AWS', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes', 'Redis'];

const TESTIMONIALS = [
  { quote: 'Kilimanjaro shipped our MVP in 8 weeks and the quality was exceptional. Their fixed-scope model gave us complete budget predictability — critical for a seed-stage company.', name: 'Sarah Chen', title: 'CEO, Cascade Financial', initials: 'SC' },
  { quote: 'Complyo transformed our document compliance process. What took our HR team 20+ hours monthly now takes minutes. The AI extraction is genuinely impressive.', name: 'Marcus Webb', title: 'CHRO, NorthBridge Health', initials: 'MW' },
  { quote: "The advisory team at Kilimanjaro are as sharp as any Big 4 consultant I've worked with — but they actually understand the technology deeply. That combination is rare.", name: 'Diana Osei', title: 'CTO, Rideau Capital Partners', initials: 'DO' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery',       duration: '30-min call',      outcome: 'Aligned on scope',
    desc: 'A 30-minute call — no pitch, no decks. We learn your business, technical environment, and actual goals before proposing anything.' },
  { num: '02', title: 'Proposal',        duration: '5 business days',  outcome: 'Fixed contract signed',
    desc: 'Within 5 business days: a fixed-scope proposal with a clear timeline, defined deliverables, and a flat price. No surprises.' },
  { num: '03', title: 'Sprint Delivery', duration: '2-week cycles',    outcome: 'Live working software',
    desc: 'Two-week sprints with live demos every cycle and async weekly updates. You see exactly what you\'re paying for in real time.' },
  { num: '04', title: 'QA & Handoff',   duration: 'Final sprint',      outcome: 'Full ownership transfer',
    desc: 'Full documentation, code walkthrough, and structured handoff. We\'re not done until your team can own, extend, and run the system.' },
  { num: '05', title: 'Support',         duration: 'Monthly retainer',  outcome: 'Long-term partnership',
    desc: 'Optional retainer for maintenance, iteration, and ongoing advisory. Most clients stay with us long after the initial delivery.' },
];

const MODELS = [
  { name: 'Fixed Scope', sub: 'Defined projects', price: 'Flat project fee',
    desc: 'Clear deliverables, fixed timeline, one price. Ideal for MVPs, feature builds, and compliance implementations.',
    features: ['Defined scope & milestones','Predictable total budget','No hourly billing surprises','Post-delivery support included'], highlight: false },
  { name: 'Dedicated Team', sub: 'Ongoing product work', price: 'Monthly retainer',
    desc: 'A senior engineering team embedded in your company — Slack access, sprint planning, full ownership of velocity.',
    features: ['2–6 senior engineers','Integrated sprint process','Slack / Linear access included','Monthly billing, no lock-in'], highlight: true },
  { name: 'Time & Material', sub: 'Early exploration', price: 'Weekly rate',
    desc: 'Flexible advisory and engineering hours for exploration, architecture reviews, and early-stage technical strategy.',
    features: ['Flexible weekly hours','Technical advisory included','Architecture & code review','Scale up or down monthly'], highlight: false },
];

const INDUSTRIES = [
  {
    label: 'Fintech & Banking',
    sub: 'Payments, compliance & data infrastructure',
    desc: 'We build secure, audit-ready software for financial operators — payment processing layers, transaction reconciliation, regulatory reporting pipelines, and internal tooling for compliance and risk teams. We understand the sensitivity of financial data and design accordingly.',
  },
  {
    label: 'Healthcare IT',
    sub: 'Patient data, scheduling & regulatory workflows',
    desc: 'From appointment and referral management to document digitization and staff-facing portals, we help healthcare organizations replace manual processes with reliable software. We build with privacy and data handling requirements in mind from day one.',
  },
  {
    label: 'Enterprise SaaS',
    sub: 'Multi-tenant platforms, billing & integrations',
    desc: 'We help SaaS founders and product teams build and scale their core platforms — multi-tenant architecture, subscription billing, third-party integrations, and the internal dashboards that ops and support teams depend on daily.',
  },
  {
    label: 'Logistics & Supply Chain',
    sub: 'Fleet tracking, driver ops & last-mile delivery',
    desc: 'Logistics moves fast and the tooling needs to keep up. We build driver performance platforms, dispatch and scheduling tools, fleet visibility dashboards, and delivery ops software — purpose-built for the pace and complexity of last-mile operations.',
  },
  {
    label: 'Legal Tech',
    sub: 'Document automation, e-signing & case management',
    desc: 'Legal teams are buried in documents and manual workflows. We build automation tooling for document generation, e-signature flows, matter tracking, and client intake — helping law firms and in-house legal teams move faster without adding headcount.',
  },
  {
    label: 'E-commerce & Retail',
    sub: 'Storefronts, inventory & fulfilment tooling',
    desc: 'We work with online retailers and omnichannel brands on the software layer that keeps their operations running — custom storefronts, inventory and order management integrations, vendor portals, and the internal tools that ops teams use every day.',
  },
  {
    label: 'Insurance',
    sub: 'Policy management, claims & compliance reporting',
    desc: 'Insurance operations involve dense workflows, strict compliance requirements, and high document volumes. We build policy administration tooling, claims intake and tracking systems, automated reporting pipelines, and agent-facing portals for MGAs and carriers.',
  },
  {
    label: 'Professional Services',
    sub: 'CRM, project ops & client-facing portals',
    desc: 'Consulting firms, agencies, and service businesses run on relationships and delivery. We build the CRM extensions, project tracking tools, client portals, and reporting systems that help professional services teams stay organized and deliver consistently.',
  },
];

const FAQS = [
  { q: 'What is your typical project size?', a: 'We work on engagements ranging from $25K (focused feature builds or compliance implementations) to $500K+ (multi-sprint product builds or enterprise advisory programs). We are selective about the work we take on.' },
  { q: 'Do you sign NDAs?', a: 'Yes, always. We sign mutual NDAs before any discovery call. Your IP, business logic, and architecture remain fully confidential.' },
  { q: 'How quickly can you start?', a: 'Typically within 2–3 weeks of a signed proposal. We maintain a small bench of senior engineers for fast-start engagements.' },
  { q: 'Do you work with early-stage startups?', a: 'Yes, selectively. We offer fixed-scope MVP and SaaS build engagements that are budget-conscious.' },
  { q: 'What happens after delivery?', a: "We offer optional post-delivery support retainers and most clients transition into ongoing relationships. We're not a one-and-done shop — the goal is a long-term partnership." },
];

const CLIENTS_M = [
  { name: 'LogiLink Solutions', industry: 'Logistics & Supply Chain', initial: 'LS' },
  { name: 'LogiLink Staffing',  industry: 'Staffing Services',    initial: 'LT' },
  { name: 'Barsan',             industry: 'Premium Staffing Services', initial: 'BR' },
  { name: 'Panjab Warriors',    industry: 'Sports & Entertainment',   initial: 'PW' },
];
const MARQUEE_M  = ['Product-First','Analytics-Driven','Compliance Simplified','Canadian Built','Enterprise Grade','Always Shipping','SaaS at Scale','Built to Last'];

// ── SVG Icons ─────────────────────────────────────────────────────────────────
function IcoTarget() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>;
}
function IcoLock() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
function IcoZap() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function IcoGlobe() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
}
function IcoCheck() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>;
}
function IcoPlus({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(45deg)' : 'none' }}>
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );
}

// ── Shared atoms ──────────────────────────────────────────────────────────────
function TealRule({ dark = false }) {
  return (
    <div style={{
      height: '1px',
      background: dark
        ? `linear-gradient(90deg, ${LTEAL}55, ${LTEAL}12)`
        : `linear-gradient(90deg, ${LTEAL}95, ${LTEAL}18)`,
    }} />
  );
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function NavM({ onNavigateContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-6 transition-all duration-500 md:px-10"
      style={{
        background: scrolled || menuOpen ? 'rgba(240,253,250,0.96)' : 'transparent',
        borderBottom: scrolled || menuOpen ? `1px solid rgba(8,145,178,0.12)` : 'none',
        backdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(1.6)' : 'none',
      }}>
      <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <div style={{ width: '30px', height: '30px', flexShrink: 0, background: `linear-gradient(135deg, ${TEAL} 0%, ${LTEAL} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '10px', height: '10px', background: 'rgba(255,255,255,0.95)' }} />
          </div>
          <span style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(16px, 2.5vw, 20px)', color: DTEAL, letterSpacing: '0.02em' }}>Kilimanjaro Innovation Labs</span>
        </a>
        <ul className="items-center hidden gap-1 list-none md:flex">
          {['Products', 'Process', 'Work', 'FAQ'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-m`}
                style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', letterSpacing: '0.04em', color: `${DTEAL}80` }}
                className="block px-4 py-2 transition-opacity duration-150 hover:opacity-100">{item}</a>
            </li>
          ))}
          <li>
            <button onClick={onNavigateContact}
              style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', letterSpacing: '0.04em', color: `${DTEAL}80`, background: 'none', border: 'none', cursor: 'pointer' }}
              className="block px-4 py-2 transition-opacity duration-150 hover:opacity-100">Contact</button>
          </li>
        </ul>
        <button
          onClick={onNavigateContact}
          style={{ background: `linear-gradient(135deg, ${TEAL}, #0E7490)`, color: '#fff', ...BOLD_J, fontSize: '11px', letterSpacing: '0.12em', border: 'none', boxShadow: `0 2px 16px ${TEAL}40` }}
          className="hidden md:block uppercase px-6 py-2.5 cursor-pointer hover:opacity-90 transition-opacity">
          Free Consultation
        </button>
        {/* Hamburger — visible below md */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
          style={{ background: 'transparent', border: 'none' }}
          aria-label="Toggle menu">
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: DTEAL, transition: 'transform 0.3s ease, opacity 0.3s ease', transform: menuOpen ? 'translateY(4.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: DTEAL, transition: 'opacity 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: DTEAL, transition: 'transform 0.3s ease, opacity 0.3s ease', transform: menuOpen ? 'translateY(-4.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>
    </nav>
    {/* Mobile menu drawer */}
    <div className="fixed inset-0 z-40 md:hidden" style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
      {/* Backdrop */}
      <div onClick={() => setMenuOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(7,21,32,0.4)', opacity: menuOpen ? 1 : 0, transition: 'opacity 0.3s ease', backdropFilter: 'blur(4px)' }} />
      {/* Panel */}
      <div style={{
        position: 'absolute', top: '64px', left: 0, right: 0,
        background: 'rgba(240,253,250,0.98)', backdropFilter: 'blur(20px)',
        borderBottom: `1px solid rgba(8,145,178,0.15)`,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        opacity: menuOpen ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
        padding: '24px 24px 28px',
        display: 'flex', flexDirection: 'column', gap: '4px',
      }}>
        {['Products', 'Process', 'Work', 'FAQ'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}-m`}
            onClick={() => setMenuOpen(false)}
            style={{ ...JAKARTA, fontWeight: 500, fontSize: '15px', letterSpacing: '0.08em', color: DTEAL, padding: '12px 0', borderBottom: `1px solid ${TEAL}14`, textDecoration: 'none', display: 'block' }}>
            {item}
          </a>
        ))}
        <button onClick={() => { setMenuOpen(false); onNavigateContact?.(); }}
          style={{ ...JAKARTA, fontWeight: 500, fontSize: '15px', letterSpacing: '0.08em', color: DTEAL, padding: '12px 0', background: 'none', border: 'none', borderBottom: `1px solid ${TEAL}14`, cursor: 'pointer', textAlign: 'left', display: 'block', width: '100%' }}>
          Contact
        </button>
        <button
          onClick={() => { setMenuOpen(false); onNavigateContact?.(); }}
          style={{ background: `linear-gradient(135deg, ${TEAL}, #0E7490)`, color: '#fff', ...BOLD_J, fontSize: '11px', letterSpacing: '0.12em', border: 'none', marginTop: '16px', padding: '14px 24px', cursor: 'pointer', width: '100%' }}
          className="uppercase">
          Free Consultation
        </button>
      </div>
    </div>
    </>
  );
}

// ── HERO (light) ──────────────────────────────────────────────────────────────
function HeroM({ onNavigateContact }) {
  const [c2,  ref2]  = useCountUp(3,  '');
  const [c40, ref40] = useCountUp(100, '');
  const [c94, ref94] = useCountUp(24, '');
  return (
    <section className="relative flex flex-col justify-center min-h-screen pt-16 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 75% 65% at 12% 65%, rgba(34,211,238,0.16) 0%, transparent 60%), radial-gradient(ellipse 60% 75% at 95% 12%, rgba(8,145,178,0.13) 0%, transparent 55%), radial-gradient(ellipse 45% 45% at 65% 95%, rgba(22,78,99,0.09) 0%, transparent 55%), #F0FDFA` }}>
      {/* Orbs */}
      <div className="absolute pointer-events-none" style={{ width: '520px', height: '520px', borderRadius: '50%', background: `radial-gradient(circle, rgba(34,211,238,0.11) 0%, transparent 70%)`, filter: 'blur(48px)', top: '-100px', right: '-120px', animation: 'lm-float-a 13s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, rgba(8,145,178,0.13) 0%, transparent 70%)`, filter: 'blur(36px)', bottom: '8%', left: '4%', animation: 'lm-float-b 17s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width: '100px', height: '100px', borderRadius: '50%', background: `radial-gradient(circle, rgba(34,211,238,0.30) 0%, transparent 70%)`, filter: 'blur(18px)', top: '38%', right: '22%', animation: 'lm-float-c 10s ease-in-out infinite' }} />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${TEAL}1A 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
      {/* Ghost wordmark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span style={{ ...CORMORANT, fontWeight: 700, fontSize: 'clamp(140px,22vw,320px)', color: `${TEAL}05`, letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap' }}>LUMINARY</span>
      </div>
      {/* SVG geometric layer — decorative, hidden on mobile */}
      <svg className="absolute inset-0 hidden w-full h-full pointer-events-none md:block" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5 }}>
        {/* Large concentric arcs — top right */}
        <circle cx="92%" cy="12%" r="180" fill="none" stroke={TEAL} strokeWidth="0.6" strokeOpacity="0.25" />
        <circle cx="92%" cy="12%" r="130" fill="none" stroke={TEAL} strokeWidth="0.6" strokeOpacity="0.18" />
        <circle cx="92%" cy="12%" r="80"  fill="none" stroke={TEAL} strokeWidth="0.6" strokeOpacity="0.13" />
        <circle cx="92%" cy="12%" r="34"  fill="none" stroke={TEAL} strokeWidth="1"   strokeOpacity="0.3" />
        <circle cx="92%" cy="12%" r="5"   fill={TEAL} fillOpacity="0.35" />
        {/* Diagonal cross-lines — top right corner */}
        <line x1="78%" y1="0" x2="100%" y2="28%" stroke={TEAL} strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="85%" y1="0" x2="100%" y2="18%" stroke={TEAL} strokeWidth="0.5" strokeOpacity="0.10" />
        {/* Small corner bracket — bottom left */}
        <path d="M 60 85% L 60 100% L 180 100%" fill="none" stroke={TEAL} strokeWidth="0.8" strokeOpacity="0.2" transform="translate(0,-80)" />
        {/* Floating small squares */}
        <rect x="72%" y="62%" width="8" height="8" fill="none" stroke={TEAL} strokeWidth="1" strokeOpacity="0.3" style={{ animation: 'lm-float-a 11s ease-in-out infinite' }} />
        <rect x="15%" y="22%" width="5" height="5" fill={TEAL} fillOpacity="0.18" style={{ animation: 'lm-float-b 9s ease-in-out infinite' }} />
        <rect x="58%" y="78%" width="6" height="6" fill="none" stroke={TEAL} strokeWidth="1" strokeOpacity="0.22" style={{ animation: 'lm-float-c 14s ease-in-out infinite' }} />
        {/* Horizontal rule lines — left side */}
        <line x1="0" y1="35%" x2="8%" y2="35%" stroke={TEAL} strokeWidth="0.7" strokeOpacity="0.25" />
        <line x1="0" y1="calc(35% + 8px)" x2="5%" y2="calc(35% + 8px)" stroke={TEAL} strokeWidth="0.7" strokeOpacity="0.15" />
        {/* Dot cluster — bottom right */}
        {[0,1,2,3,4].map(col => [0,1,2,3].map(row => (
          <circle key={`${col}-${row}`} cx={`${78 + col * 2.2}%`} cy={`${72 + row * 2.8}%`} r="1.5" fill={TEAL} fillOpacity={0.08 + (col + row) * 0.025} />
        )))}
        {/* Large thin ring — center left */}
        <circle cx="8%" cy="58%" r="90" fill="none" stroke={TEAL} strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="4 8" />
      </svg>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 py-24">
        <div className="flex items-center gap-4 mb-10 lm-u1">
          <div style={{ height: '1px', width: '48px', background: TEAL }} />
          <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="uppercase">Software Products & IT Advisory</span>
        </div>
        <div className="lm-u1" style={{ height: '1px', maxWidth: '900px', marginBottom: '30px', background: `linear-gradient(90deg, transparent 0%, ${LTEAL} 30%, ${TEAL} 60%, transparent 100%)`, backgroundSize: '300% 100%', animation: 'lm-shimmer 3.5s linear infinite', animationDelay: '0.8s' }} />
        <div className="max-w-[880px] lm-u2">
          <h1 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(62px,9vw,138px)', lineHeight: 0.91, letterSpacing: '-0.025em', color: DTEAL }}>
            Products that<br />
            <em style={{ fontStyle: 'italic', fontWeight: 600, color: TEAL }}>ship.</em>&ensp;Strategy<br />
            that scales.
          </h1>
        </div>
        <div className="lm-u2" style={{ height: '1px', maxWidth: '880px', background: `linear-gradient(90deg, ${LTEAL}85, ${LTEAL}12)`, marginTop: '30px' }} />
        <div className="grid items-end grid-cols-1 gap-16 mt-12 md:grid-cols-2 lm-u3">
          <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '17px', lineHeight: 1.9, color: `${DTEAL}AA`, maxWidth: '440px' }}>
            Kilimanjaro Innovation Labs builds enterprise SaaS and provides strategic IT advisory to Canada's leading organizations. We ship software that solves hard problems.
          </p>
          <div className="flex flex-col gap-3">
            <button onClick={() => document.getElementById('products-m')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: `linear-gradient(135deg, ${TEAL} 0%, #0E7490 100%)`, color: '#fff', ...BOLD_J, fontSize: '12px', letterSpacing: '0.12em', border: 'none', alignSelf: 'flex-start', boxShadow: `0 4px 28px ${TEAL}45` }}
              className="uppercase px-8 py-3.5 cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2">
              Our Products <ArrowUpRight />
            </button>
            <button onClick={onNavigateContact}
              style={{ background: 'transparent', color: DTEAL, ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.08em', border: `1px solid ${DTEAL}28`, alignSelf: 'flex-start' }}
              className="uppercase px-8 py-3.5 cursor-pointer hover:border-cyan-400 transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-10 mt-20 sm:grid-cols-3 lm-u4" style={{ borderTop: `1px solid ${TEAL}22` }}>
          {[
            { ref: ref2,  val: c2,          label: 'Products in market' },
            { ref: ref40, val: `${c40}%`,   label: 'Fixed-price, on-scope delivery' },
            { ref: ref94, val: `${c94}hr`,  label: 'Guaranteed response time' },
          ].map(s => (
            <div key={s.label} className="text-center md:text-left">
              <div ref={s.ref} style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(32px,4vw,56px)', color: TEAL, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.val}</div>
              <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '12px', letterSpacing: '0.08em', color: `${DTEAL}55`, marginTop: '8px' }} className="uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── WHY US — dark ─────────────────────────────────────────────────────────────
function WhyUsM() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 60% 70% at 100% 0%, rgba(34,211,238,0.14) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(8,145,178,0.12) 0%, transparent 55%), ${NAVY}` }}>
      <div className="absolute pointer-events-none" style={{ width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)`, filter: 'blur(64px)', top: '-100px', left: '50%', transform: 'translateX(-50%)', animation: 'lm-pulse-orb 8s ease-in-out infinite' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.06) 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
      <TealRule dark />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: LTEAL }} className="mb-4 uppercase">01 / Our Edge</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: '#fff' }} className="reveal">
            Why teams choose <em style={{ fontStyle: 'italic', color: LTEAL }}>us.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 reveal sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w) => (
            <div key={w.title}
              className="p-6 cursor-default md:p-8 group"
              style={{ background: 'rgba(255,255,255,0.04)', borderTop: `2px solid ${LTEAL}60`, borderRight: `1px solid rgba(34,211,238,0.10)`, borderBottom: `1px solid rgba(34,211,238,0.10)`, borderLeft: `1px solid rgba(34,211,238,0.10)`, backdropFilter: 'blur(8px)', transition: 'background 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = `0 0 48px rgba(34,211,238,0.10)`; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ color: LTEAL, marginBottom: '20px' }}>{w.icon}</div>
              <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(18px, 2.5vw, 22px)', lineHeight: 1.1, color: '#fff', letterSpacing: '-0.01em', marginBottom: '12px' }}>{w.title}</h3>
              <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', lineHeight: 1.85, color: 'rgba(255,255,255,0.55)' }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-16"><TealRule dark /></div>
    </section>
  );
}

// ── TEAM / ABOUT — light ──────────────────────────────────────────────────────
const TEAM_M = [
  { name: 'Vishawjit Sandhu',   role: 'Co-Founder & CEO', initials: 'VS', focus: 'Client strategy, partnerships & business development' },
  { name: 'Gurwinder Barmi', role: 'Co-Founder & COO', initials: 'GB', focus: 'Delivery oversight, vendor management & operations' },
];

function TechStackM() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: BG }}>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Split header */}
        <div className="grid grid-cols-1 gap-16 mb-20 md:grid-cols-2 md:gap-24 reveal">
          <div>
            <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="mb-5 uppercase">02 / The Team</div>
            <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(38px,5vw,72px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: DTEAL }}>
              Obsessed with <em style={{ fontStyle: 'italic', color: TEAL }}>client outcomes.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '15px', lineHeight: 1.9, color: `${DTEAL}62`, marginBottom: '20px' }}>
              Kilimanjaro was founded with a single conviction: that software delivery should be predictable, accountable, and genuinely aligned with business outcomes. We sit between client and execution — managing scope, quality, and timelines so our clients never have to chase progress or absorb surprises.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              <div>
                <div style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(26px, 4vw, 36px)', color: TEAL, lineHeight: 1 }}>2021</div>
                <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '11px', letterSpacing: '0.12em', color: `${DTEAL}50`, marginTop: '4px' }} className="uppercase">Founded</div>
              </div>
              <div className="hidden sm:block" style={{ width: '1px', background: `${TEAL}20` }} />
              <div>
                <div style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(26px, 4vw, 36px)', color: TEAL, lineHeight: 1 }}>Toronto</div>
                <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '11px', letterSpacing: '0.12em', color: `${DTEAL}50`, marginTop: '4px' }} className="uppercase">Headquarters</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 reveal" style={{ background: `${TEAL}12` }}>
          {TEAM_M.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background: hovered ? SURFACE : BG, padding: 'clamp(20px,4vw,36px) clamp(16px,3vw,32px)', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'background 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Top sweep border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', overflow: 'hidden', background: `${TEAL}15` }}>
        <div style={{ height: '100%', width: '100%', background: `linear-gradient(90deg, ${TEAL}, ${LTEAL})`, transform: hovered ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' }} />
      </div>

      {/* Monogram */}
      <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: hovered ? `linear-gradient(135deg, ${TEAL}, ${LTEAL})` : `${TEAL}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'background 0.35s ease', flexShrink: 0 }}>
        <span style={{ ...JAKARTA, fontWeight: 700, fontSize: '14px', color: hovered ? '#fff' : TEAL, transition: 'color 0.35s' }}>{member.initials}</span>
      </div>

      {/* Ghost index */}
      <div style={{ position: 'absolute', right: '8px', bottom: '-10px', ...CORMORANT, fontWeight: 700, fontSize: 'clamp(56px, 10vw, 88px)', lineHeight: 1, color: `${TEAL}05`, letterSpacing: '-0.05em', userSelect: 'none', pointerEvents: 'none' }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: '22px', lineHeight: 1.1, color: hovered ? DTEAL : DTEAL, letterSpacing: '-0.01em', marginBottom: '6px' }}>
        {member.name}
      </h3>
      <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.18em', color: TEAL, marginBottom: '16px' }} className="uppercase">
        {member.role}
      </div>
      <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '12.5px', lineHeight: 1.75, color: `${DTEAL}55` }}>
        {member.focus}
      </p>
    </div>
  );
}

// ── PRODUCTS — dark navy ──────────────────────────────────────────────────────
function ProductsM() {
  return (
    <section id="products-m" className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 65% 80% at 0% 50%, rgba(8,145,178,0.24) 0%, transparent 58%), radial-gradient(ellipse 45% 45% at 100% 100%, rgba(34,211,238,0.11) 0%, transparent 55%), radial-gradient(ellipse 35% 55% at 100% 0%, rgba(8,145,178,0.09) 0%, transparent 50%), ${NAVY}` }}>
      <div className="absolute pointer-events-none" style={{ width: '700px', height: '700px', borderRadius: '50%', background: `radial-gradient(circle, rgba(8,145,178,0.14) 0%, transparent 70%)`, filter: 'blur(72px)', top: '50%', left: '-250px', transform: 'translateY(-50%)', animation: 'lm-pulse-orb 7s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ width: '1px', height: '500px', background: `linear-gradient(180deg, transparent, ${LTEAL}18, transparent)`, right: '15%', top: 0, transform: 'rotate(25deg)' }} />
      <TealRule dark />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: LTEAL }} className="mb-4 uppercase">03 / Our Products</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: '#fff' }} className="reveal">
            Software,<br /><em style={{ fontStyle: 'italic', color: LTEAL }}>delivered.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 reveal md:grid-cols-3">
          {PRODUCTS_M.map(p => (
            <div key={p.name} className="relative p-6 overflow-hidden cursor-default sm:p-8 md:p-10"
              style={{ background: 'rgba(255,255,255,0.04)', borderTop: `3px solid ${LTEAL}`, borderRight: `1px solid rgba(34,211,238,0.12)`, borderBottom: `1px solid rgba(34,211,238,0.12)`, borderLeft: `1px solid rgba(34,211,238,0.12)`, boxShadow: `0 0 48px rgba(34,211,238,0.06), 0 4px 8px rgba(0,0,0,0.4)`, backdropFilter: 'blur(8px)', transition: 'box-shadow 0.4s ease, background 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 72px rgba(34,211,238,0.14), 0 8px 40px rgba(0,0,0,0.5)`; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 48px rgba(34,211,238,0.06), 0 4px 8px rgba(0,0,0,0.4)`; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
              <div className="absolute pointer-events-none select-none right-3 top-2" style={{ ...CORMORANT, fontWeight: 700, fontSize: 'clamp(80px, 14vw, 160px)', lineHeight: 1, color: `rgba(34,211,238,0.045)`, letterSpacing: '-0.06em' }}>{p.num}</div>
              <div className="relative z-10 mb-1">
                <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.24em', color: LTEAL }} className="mb-2 uppercase">{p.tag}</div>
                <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(30px, 5vw, 44px)', lineHeight: 1.0, color: '#fff', letterSpacing: '-0.015em' }}>{p.name}</h3>
              </div>
              <div style={{ height: '1px', background: `rgba(34,211,238,0.16)`, margin: '20px 0' }} />
              <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.9, color: 'rgba(255,255,255,0.60)' }} className="mb-8">{p.desc}</p>
              <ul className="flex flex-col gap-3 mb-10">
                {p.features.map(f => (
                  <li key={f} style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.50)' }} className="flex items-center gap-3">
                    <span style={{ color: LTEAL, fontSize: '12px', flexShrink: 0 }}>—</span> {f}
                  </li>
                ))}
              </ul>
              <a href={p.url} target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', color: LTEAL, ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.12em', border: `1px solid rgba(34,211,238,0.30)`, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                className="uppercase px-6 py-2.5 hover:bg-cyan-900/30 transition-colors">
                Learn More <ArrowUpRight />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-16"><TealRule dark /></div>
    </section>
  );
}

// ── PRACTICES — light mist ────────────────────────────────────────────────────
function PracticesM() {
  return (
    <section id="practices-m" className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 55% 65% at 100% 0%, rgba(34,211,238,0.11) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(8,145,178,0.08) 0%, transparent 55%), linear-gradient(180deg, ${MIST} 0%, ${BG} 100%)` }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(${TEAL}07 1px, transparent 1px), linear-gradient(90deg, ${TEAL}07 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
      <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{ width: '1px', background: `linear-gradient(180deg, transparent, ${TEAL}18, transparent)` }} />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="mb-4 uppercase">04 / Our Practices</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: DTEAL }} className="reveal">
            Where we <em style={{ fontStyle: 'italic', color: TEAL }}>engage.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 reveal md:grid-cols-2 gap-x-6 md:gap-x-16">
          {PRACTICES_M.map((p, i) => (
            <div key={p.num} className="relative">
              <div className="py-10 cursor-default">
                <div className="absolute right-0 pointer-events-none select-none top-4" style={{ ...CORMORANT, fontWeight: 700, fontSize: '100px', lineHeight: 1, color: `${TEAL}09`, letterSpacing: '-0.04em' }}>{p.num}</div>
                <div className="relative z-10 flex items-baseline gap-5 mb-4">
                  <span style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(26px, 4vw, 38px)', color: `${TEAL}65`, lineHeight: 1 }}>{p.num}</span>
                  <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(18px, 3vw, 26px)', lineHeight: 1.1, color: DTEAL, letterSpacing: '-0.01em' }}>{p.title}</h3>
                </div>
                <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.85, color: `${DTEAL}72`, paddingLeft: 'clamp(28px, 6vw, 54px)' }}>{p.desc}</p>
              </div>
              {i < PRACTICES_M.length - 2 && <div style={{ height: '1px', background: `linear-gradient(90deg, ${TEAL}20, ${TEAL}05)` }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS — dark ───────────────────────────────────────────────────────
function TestimonialsM() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 65% 65% at 50% 0%, rgba(8,145,178,0.20) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 100% 100%, rgba(34,211,238,0.09) 0%, transparent 55%), #0C1929` }}>
      <div className="absolute pointer-events-none" style={{ width: '600px', height: '300px', background: `radial-gradient(ellipse, rgba(34,211,238,0.10) 0%, transparent 70%)`, filter: 'blur(48px)', top: 0, left: '50%', transform: 'translateX(-50%)' }} />
      <TealRule dark />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: LTEAL }} className="mb-4 uppercase">05 / Client Voices</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: '#fff' }} className="reveal">
            What clients <em style={{ fontStyle: 'italic', color: LTEAL }}>say.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 reveal md:grid-cols-3">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="p-5 cursor-default sm:p-8 group"
              style={{ background: 'rgba(255,255,255,0.04)', borderLeft: `3px solid ${LTEAL}50`, borderRight: `1px solid rgba(34,211,238,0.10)`, borderTop: `1px solid rgba(34,211,238,0.10)`, borderBottom: `1px solid rgba(34,211,238,0.10)`, backdropFilter: 'blur(8px)', transition: 'background 0.3s ease, border-left-color 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderLeftColor = LTEAL; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderLeftColor = `${LTEAL}50`; }}>
              {/* Decorative quote mark */}
              <div style={{ ...CORMORANT, fontWeight: 700, fontSize: 'clamp(48px, 8vw, 72px)', lineHeight: 0.8, color: `${LTEAL}25`, marginBottom: '16px', letterSpacing: '-0.04em' }}>"</div>
              <p style={{ ...CORMORANT, fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(15px, 2.2vw, 19px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.82)', marginBottom: '28px' }}>{t.quote}</p>
              <div style={{ height: '1px', background: `rgba(34,211,238,0.15)`, marginBottom: '20px' }} />
              <div className="flex items-center gap-3">
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: `linear-gradient(135deg, ${TEAL}, ${LTEAL})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ ...JAKARTA, fontWeight: 700, fontSize: '12px', color: '#fff' }}>{t.initials}</span>
                </div>
                <div>
                  <div style={{ ...JAKARTA, fontWeight: 600, fontSize: '13px', color: '#fff', letterSpacing: '0.02em' }}>{t.name}</div>
                  <div style={{ ...JAKARTA, fontWeight: 300, fontSize: '11px', color: `${LTEAL}AA`, letterSpacing: '0.06em' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-16"><TealRule dark /></div>
    </section>
  );
}

// ── CASES — dark charcoal ─────────────────────────────────────────────────────
function CasesM() {
  return (
    <section id="work-m" className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 70% 65% at 100% 0%, rgba(8,145,178,0.20) 0%, transparent 60%), radial-gradient(ellipse 45% 55% at 0% 100%, rgba(34,211,238,0.09) 0%, transparent 55%), #0F1A2E` }}>
      <div className="absolute pointer-events-none" style={{ width: '500px', height: '400px', borderRadius: '50%', background: `radial-gradient(ellipse, rgba(8,145,178,0.16) 0%, transparent 70%)`, filter: 'blur(60px)', top: '-80px', right: '-80px', animation: 'lm-pulse-orb 8s ease-in-out infinite' }} />
      <TealRule dark />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: LTEAL }} className="mb-4 uppercase">06 / Engagements</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: '#fff' }} className="reveal">
            <em style={{ fontStyle: 'italic', color: LTEAL }}>Results</em> at enterprise scale.
          </h2>
        </div>
        <div className="flex flex-col reveal">
          {CASES_M.map((c, i) => (
            <div key={c.client}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(160px,240px)] gap-4 md:gap-8 py-10 cursor-default"
                style={{ borderLeft: '2px solid transparent', transition: 'all 0.35s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = `rgba(34,211,238,0.04)`; e.currentTarget.style.borderLeftColor = LTEAL; e.currentTarget.style.paddingLeft = window.innerWidth < 768 ? '12px' : '20px'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.paddingLeft = '0px'; }}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.2em', color: LTEAL }} className="uppercase">{c.client}</span>
                    <span style={{ height: '1px', width: '32px', background: `${LTEAL}40`, display: 'inline-block' }} />
                    <span style={{ ...JAKARTA, fontWeight: 400, fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)' }} className="uppercase">{c.context}</span>
                  </div>
                  <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.1, color: '#fff', letterSpacing: '-0.01em' }} className="mb-4">{c.title}</h3>
                  <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.9, color: 'rgba(255,255,255,0.53)', maxWidth: '580px' }}>{c.desc}</p>
                </div>
                <div className="flex flex-col justify-center md:items-end">
                  <div style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(36px,4vw,60px)', color: LTEAL, lineHeight: 1, letterSpacing: '-0.02em', animation: 'lm-stat-glow 4.5s ease-in-out infinite', animationDelay: `${i * 1.4}s` }}>{c.stat}</div>
                  <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.32)', marginTop: '8px' }} className="uppercase">{c.statLabel}</div>
                </div>
              </div>
              {i < CASES_M.length - 1 && <div style={{ height: '1px', background: `linear-gradient(90deg, ${LTEAL}22, transparent)` }} />}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-16"><TealRule dark /></div>
    </section>
  );
}

// ── HOW WE WORK — 3-up sliding carousel ─────────────────────────────────────
const SEC_BG = `radial-gradient(ellipse 55% 55% at 0% 60%, rgba(34,211,238,0.10) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 100% 0%, rgba(8,145,178,0.08) 0%, transparent 55%), ${BG}`;
const GAP_C  = 24; // gap between carousel cards (px)

function HowWeWorkM() {
  const [active, setActive]   = useState(0);
  const containerRef          = useRef(null);
  const [containerW, setContainerW] = useState(1200);
  const total = PROCESS_STEPS.length;

  // Card width: ~42% of container so 3 cards always visible; min 240, max 480
  const cardW = Math.min(480, Math.max(240, containerW * 0.42));

  // Offset to center the active card in the container
  const trackOffset = (containerW / 2) - (cardW / 2) - (active * (cardW + GAP_C));

  // Measure container
  useEffect(() => {
    const measure = () => setContainerW(containerRef.current?.offsetWidth ?? 1200);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const goTo = (idx) => { if (idx >= 0 && idx < total) setActive(idx); };

  // Keyboard nav
  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'ArrowLeft')  goTo(active - 1);
      if (e.key === 'ArrowRight') goTo(active + 1);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [active]);

  return (
    <section id="process-m" className="relative py-24 overflow-hidden" style={{ background: SEC_BG }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(${TEAL}06 1px, transparent 1px), linear-gradient(90deg, ${TEAL}06 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      <div className="relative z-10">
        {/* Section header */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 mb-14">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="mb-4 uppercase">07 / How We Work</div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: DTEAL }} className="reveal">
              The engagement <em style={{ fontStyle: 'italic', color: TEAL }}>flow.</em>
            </h2>
            <span style={{ ...JAKARTA, fontWeight: 300, fontSize: '12px', color: `${DTEAL}40`, letterSpacing: '0.06em' }} className="hidden mb-2 md:block">← → keys or click any card</span>
          </div>
        </div>

        {/* ── Sliding track ── */}
        <div ref={containerRef} className="relative overflow-hidden" style={{ paddingBottom: '8px' }}>

          {/* Gradient edge masks — stronger so adjacent cards bleed in nicely */}
          <div className="absolute inset-y-0 left-0 z-20 pointer-events-none" style={{ width: '10%', background: `linear-gradient(90deg, ${BG}, transparent)` }} />
          <div className="absolute inset-y-0 right-0 z-20 pointer-events-none" style={{ width: '10%', background: `linear-gradient(270deg, ${BG}, transparent)` }} />

          {/* The track — slides left/right */}
          <div style={{
            display: 'flex',
            gap: `${GAP_C}px`,
            padding: '28px 0 36px',
            transform: `translateX(${trackOffset}px)`,
            transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
          }}>
            {PROCESS_STEPS.map((step, i) => {
              const dist     = Math.abs(i - active);
              const isActive = dist === 0;
              const isNear   = dist === 1;
              const opacity  = isActive ? 1 : isNear ? 0.58 : 0.22;
              const scale    = isActive ? 1 : isNear ? 0.96 : 0.90;

              return (
                <div key={step.num}
                  onClick={() => !isActive && goTo(i)}
                  style={{
                    width: `${cardW}px`,
                    minHeight: 'clamp(360px, 80vw, 440px)',
                    flexShrink: 0,
                    opacity,
                    transform: `scale(${scale})`,
                    transformOrigin: 'center top',
                    transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease',
                    cursor: isActive ? 'default' : 'pointer',
                    background: isActive ? SURFACE : BG,
                    borderTop: `3px solid ${isActive ? TEAL : `${TEAL}30`}`,
                    borderRight: `1px solid ${isActive ? `${TEAL}22` : `${TEAL}10`}`,
                    borderBottom: `1px solid ${isActive ? `${TEAL}22` : `${TEAL}10`}`,
                    borderLeft: `1px solid ${isActive ? `${TEAL}22` : `${TEAL}10`}`,
                    boxShadow: isActive
                      ? `0 16px 64px ${TEAL}18, 0 4px 12px rgba(0,0,0,0.07)`
                      : `0 2px 8px rgba(0,0,0,0.03)`,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>

                  {/* Progress bar — only on active */}
                  <div style={{ height: '3px', background: `${TEAL}10`, flexShrink: 0 }}>
                    {isActive && (
                      <div style={{
                        height: '100%',
                        width: `${((active + 1) / total) * 100}%`,
                        background: `linear-gradient(90deg, ${TEAL}, ${LTEAL})`,
                        boxShadow: `0 0 10px ${LTEAL}70`,
                        transition: 'width 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                      }} />
                    )}
                  </div>

                  <div className="relative flex flex-col flex-1 overflow-hidden" style={{ padding: cardW < 340 ? '24px' : '32px 36px 28px' }}>
                    {/* Ghost number */}
                    <div className="absolute pointer-events-none select-none" style={{
                      ...CORMORANT, fontWeight: 700,
                      fontSize: `${Math.min(180, cardW * 0.42)}px`,
                      lineHeight: 1, color: `${TEAL}${isActive ? '06' : '04'}`,
                      letterSpacing: '-0.06em', right: '-12px', top: '-10px',
                    }}>{step.num}</div>

                    {/* Meta row */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-6">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '30px', height: '30px', flexShrink: 0,
                          background: isActive ? `linear-gradient(135deg, ${TEAL}, ${LTEAL})` : `${TEAL}18`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: isActive ? `0 2px 12px ${TEAL}40` : 'none',
                        }}>
                          <span style={{ ...JAKARTA, fontWeight: 700, fontSize: '11px', color: isActive ? '#fff' : `${TEAL}88` }}>{i + 1}</span>
                        </div>
                        <span style={{ ...JAKARTA, fontWeight: 400, fontSize: '10px', letterSpacing: '0.16em', color: isActive ? `${DTEAL}50` : `${DTEAL}30` }} className="uppercase">
                          {i + 1} / {total}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        border: `1px solid ${isActive ? `${TEAL}25` : `${TEAL}12`}`,
                        padding: '3px 10px',
                        background: isActive ? `${TEAL}07` : 'transparent',
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isActive ? TEAL : `${TEAL}50`} strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.1em', color: isActive ? TEAL : `${TEAL}55` }} className="uppercase">{step.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      ...CORMORANT, fontWeight: 300,
                      fontSize: `clamp(32px, ${isActive ? '4.5vw' : '3.5vw'}, ${isActive ? 68 : 52}px)`,
                      lineHeight: 0.93, letterSpacing: '-0.025em',
                      color: isActive ? DTEAL : `${DTEAL}65`,
                      marginBottom: '4px', position: 'relative', zIndex: 1,
                      transition: 'color 0.4s ease',
                    }}>
                      {step.title}<span style={{ color: isActive ? TEAL : `${TEAL}55` }}>.</span>
                    </h3>

                    {/* Outcome */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '14px', marginBottom: '20px' }}>
                      <span style={{ color: isActive ? LTEAL : `${TEAL}45`, fontSize: '7px' }}>◆</span>
                      <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.15em', color: isActive ? TEAL : `${TEAL}50` }} className="uppercase">{step.outcome}</span>
                    </div>

                    {/* Rule */}
                    <div style={{ height: '1px', background: isActive ? `linear-gradient(90deg, ${TEAL}45, ${TEAL}08)` : `${TEAL}12`, marginBottom: '18px' }} />

                    {/* Description */}
                    <p style={{
                      ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.85,
                      color: isActive ? `${DTEAL}78` : `${DTEAL}40`,
                      position: 'relative', zIndex: 1,
                      transition: 'color 0.4s ease',
                    }}>
                      {step.desc}
                    </p>

                    {/* Dot mini-map — active card only */}
                    {isActive && (
                      <div className="flex items-center gap-2 pt-8 mt-auto">
                        {PROCESS_STEPS.map((_, j) => (
                          <div key={j} onClick={e => { e.stopPropagation(); goTo(j); }}
                            style={{
                              height: '2px',
                              width: j === active ? '36px' : '10px',
                              background: j === active ? `linear-gradient(90deg, ${TEAL}, ${LTEAL})` : `${TEAL}22`,
                              cursor: 'pointer',
                              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: j === active ? `0 0 6px ${TEAL}55` : 'none',
                            }} />
                        ))}
                        <span style={{ ...JAKARTA, fontWeight: 300, fontSize: '11px', color: `${DTEAL}38`, marginLeft: '6px', letterSpacing: '0.08em' }}>
                          {active + 1} / {total}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Nav bar ── */}
        <div className="flex items-center justify-center gap-5 px-8 mt-8">
          {/* Prev */}
          <button onClick={() => goTo(active - 1)} disabled={active === 0}
            style={{ width: '46px', height: '46px', border: `1px solid ${active === 0 ? `${TEAL}18` : `${TEAL}45`}`, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: active === 0 ? `${DTEAL}20` : TEAL, cursor: active === 0 ? 'default' : 'pointer', transition: 'all 0.25s ease', flexShrink: 0 }}
            onMouseEnter={e => { if (active > 0) { e.currentTarget.style.background = `${TEAL}10`; e.currentTarget.style.borderColor = TEAL; } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = active === 0 ? `${TEAL}18` : `${TEAL}45`; }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Step pills */}
          <div className="flex items-center gap-2">
            {PROCESS_STEPS.map((s, i) => (
              <button key={i} onClick={() => goTo(i)}
                style={{
                  padding: i === active ? '6px 16px' : '6px 11px',
                  border: `1px solid ${i === active ? TEAL : `${TEAL}20`}`,
                  background: i === active ? `linear-gradient(135deg, ${TEAL}, #0E7490)` : 'transparent',
                  color: i === active ? '#fff' : `${DTEAL}50`,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: i === active ? `0 2px 14px ${TEAL}35` : 'none',
                  ...JAKARTA, fontWeight: i === active ? 600 : 400, fontSize: '11px', letterSpacing: '0.08em',
                }}
                onMouseEnter={e => { if (i !== active) { e.currentTarget.style.borderColor = `${TEAL}45`; e.currentTarget.style.color = DTEAL; } }}
                onMouseLeave={e => { if (i !== active) { e.currentTarget.style.borderColor = `${TEAL}20`; e.currentTarget.style.color = `${DTEAL}50`; } }}>
                {s.num}
              </button>
            ))}
          </div>

          {/* Next */}
          <button onClick={() => goTo(active + 1)} disabled={active === total - 1}
            style={{ width: '46px', height: '46px', border: `1px solid ${active === total-1 ? `${TEAL}18` : `${TEAL}45`}`, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: active === total-1 ? `${DTEAL}20` : TEAL, cursor: active === total-1 ? 'default' : 'pointer', transition: 'all 0.25s ease', flexShrink: 0 }}
            onMouseEnter={e => { if (active < total-1) { e.currentTarget.style.background = `${TEAL}10`; e.currentTarget.style.borderColor = TEAL; } }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = active === total-1 ? `${TEAL}18` : `${TEAL}45`; }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ── ENGAGEMENT MODELS — dark ──────────────────────────────────────────────────
function EngagementModelsM({ onNavigateContact }) {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 60% 70% at 50% 0%, rgba(8,145,178,0.22) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(34,211,238,0.10) 0%, transparent 55%), ${NAVY}` }}>
      <div className="absolute pointer-events-none" style={{ width: '800px', height: '400px', background: `radial-gradient(ellipse, rgba(8,145,178,0.12) 0%, transparent 70%)`, filter: 'blur(60px)', top: 0, left: '50%', transform: 'translateX(-50%)' }} />
      <TealRule dark />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: LTEAL }} className="mb-4 uppercase">08 / Engagement Models</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: '#fff' }} className="reveal">
            Work with us, <em style={{ fontStyle: 'italic', color: LTEAL }}>your way.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 reveal md:grid-cols-3">
          {MODELS.map(m => (
            <div key={m.name}
              style={{
                background: m.highlight ? `rgba(8,145,178,0.15)` : 'rgba(255,255,255,0.04)',
                borderTop: m.highlight ? `3px solid ${LTEAL}` : `1px solid rgba(34,211,238,0.12)`,
                borderRight: `1px solid ${m.highlight ? `rgba(34,211,238,0.30)` : 'rgba(34,211,238,0.12)'}`,
                borderBottom: `1px solid ${m.highlight ? `rgba(34,211,238,0.30)` : 'rgba(34,211,238,0.12)'}`,
                borderLeft: `1px solid ${m.highlight ? `rgba(34,211,238,0.30)` : 'rgba(34,211,238,0.12)'}`,
                padding: 'clamp(20px, 4vw, 36px)',
                backdropFilter: 'blur(8px)',
                position: 'relative',
                boxShadow: m.highlight ? `0 0 60px rgba(34,211,238,0.12)` : 'none',
              }}>
              {m.highlight && (
                <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: LTEAL, padding: '3px 16px' }}>
                  <span style={{ ...JAKARTA, fontWeight: 700, fontSize: '9px', letterSpacing: '0.18em', color: ABYSS }} className="uppercase">Most Popular</span>
                </div>
              )}
              <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.2em', color: LTEAL }} className="mb-2 uppercase">{m.sub}</div>
              <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.0, color: '#fff', letterSpacing: '-0.01em', marginBottom: '6px' }}>{m.name}</h3>
              <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', color: `${LTEAL}CC`, marginBottom: '20px' }}>{m.price}</div>
              <div style={{ height: '1px', background: 'rgba(34,211,238,0.15)', marginBottom: '20px' }} />
              <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.85, color: 'rgba(255,255,255,0.58)', marginBottom: '24px' }}>{m.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {m.features.map(f => (
                  <li key={f} className="flex items-center gap-3" style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                    <span style={{ color: LTEAL, flexShrink: 0 }}><IcoCheck /></span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onNavigateContact}
                style={{ background: m.highlight ? `linear-gradient(135deg, ${LTEAL}, ${TEAL})` : 'transparent', color: m.highlight ? ABYSS : LTEAL, ...JAKARTA, fontWeight: m.highlight ? 700 : 500, fontSize: '11px', letterSpacing: '0.12em', border: m.highlight ? 'none' : `1px solid rgba(34,211,238,0.30)`, width: '100%', boxShadow: m.highlight ? `0 4px 24px rgba(34,211,238,0.25)` : 'none' }}
                className="flex items-center justify-center gap-2 py-3 uppercase transition-opacity cursor-pointer hover:opacity-90">
                Get Started <ArrowUpRight />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-16"><TealRule dark /></div>
    </section>
  );
}

// ── MARQUEE ───────────────────────────────────────────────────────────────────
function MarqueeM() {
  const doubled = [...MARQUEE_M, ...MARQUEE_M];
  return (
    <div className="relative py-5 overflow-hidden" style={{ background: `linear-gradient(90deg, ${TEAL} 0%, #0E7490 50%, ${TEAL} 100%)` }}>
      <div className="absolute top-0 bottom-0 left-0 z-10 w-20 pointer-events-none" style={{ background: `linear-gradient(90deg, ${TEAL}, transparent)` }} />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-20 pointer-events-none" style={{ background: `linear-gradient(270deg, ${TEAL}, transparent)` }} />
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 sm:gap-10 sm:px-10">
            <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.24em', color: '#fff' }} className="uppercase whitespace-nowrap">{item}</span>
            <span style={{ color: LTEAL, fontSize: '6px' }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── INDUSTRIES — editorial split ──────────────────────────────────────────────
function IndustriesM() {
  const n = INDUSTRIES.length;
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);
  const paused = useRef(false);
  const INTERVAL = 3000;

  const goTo = (i) => { setActive(i); setKey(k => k + 1); };

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) goTo((active + 1) % n);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [active, n]);

  const cur = INDUSTRIES[active];

  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 70% 80% at 100% 50%, rgba(34,211,238,0.08) 0%, transparent 60%), ${BG}` }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-center"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}>

          {/* Left — numbered list */}
          <div>
            <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="mb-5 uppercase">Industries We Serve</div>
            <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(34px,4vw,58px)', lineHeight: 1.0, color: DTEAL, marginBottom: '36px' }}>
              Across every <em style={{ fontStyle: 'italic', color: TEAL }}>sector.</em>
            </h2>
            <div className="flex flex-col">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.label}
                  onClick={() => goTo(i)}
                  className="text-left border-none cursor-pointer group"
                  style={{ background: 'transparent', padding: 'clamp(8px, 1.5vw, 11px) 0', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: `1px solid ${TEAL}${i === active ? '30' : '12'}`, transition: 'all 0.25s ease' }}>
                  {/* Progress bar on active */}
                  <div style={{ width: '28px', flexShrink: 0, height: '2px', background: `${TEAL}18`, position: 'relative', overflow: 'hidden', borderRadius: '1px' }}>
                    {i === active && (
                      <div key={key} style={{ position: 'absolute', inset: 0, background: TEAL, transformOrigin: 'left', animation: `lm-progress ${INTERVAL}ms linear forwards` }} />
                    )}
                  </div>
                  <span style={{ ...CORMORANT, fontWeight: 300, fontSize: '13px', color: i === active ? TEAL : `${TEAL}40`, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ ...JAKARTA, fontWeight: i === active ? 500 : 400, fontSize: '13px', color: i === active ? DTEAL : `${DTEAL}55`, transition: 'color 0.25s ease' }}>
                    {ind.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — featured display */}
          <div className="relative flex flex-col justify-center min-h-[340px] pl-0 md:pl-6 lg:pl-12" style={{ borderLeft: `1px solid ${TEAL}15` }}>
            {/* Ghost number */}
            <div key={`num-${key}`} className="absolute right-0 pointer-events-none select-none top-1/2"
              style={{ ...CORMORANT, fontWeight: 700, fontSize: 'clamp(160px,18vw,240px)', lineHeight: 1, color: `${TEAL}08`, letterSpacing: '-0.06em', transform: 'translateY(-50%)', animation: 'lm-fade-in 0.5s ease both' }}>
              {String(active + 1).padStart(2, '0')}
            </div>
            {/* Content */}
            <div key={`content-${key}`} style={{ animation: 'lm-slide-up 0.45s cubic-bezier(0.4,0,0.2,1) both', position: 'relative', zIndex: 2 }}>
              <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.26em', color: TEAL, marginBottom: '16px' }} className="uppercase">
                {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
              </div>
              <h3 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: DTEAL, marginBottom: '20px' }}>
                <em style={{ fontStyle: 'italic' }}>{cur.label}</em>
              </h3>
              <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', letterSpacing: '0.06em', color: TEAL, marginBottom: '10px' }} className="uppercase">
                {cur.sub}
              </p>
              <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '15px', lineHeight: 1.8, color: `${DTEAL}70`, maxWidth: '420px' }}>
                {cur.desc}
              </p>
              {/* Teal accent line */}
              <div style={{ marginTop: '28px', width: '48px', height: '2px', background: `linear-gradient(90deg, ${TEAL}, ${LTEAL})` }} />
            </div>
          </div>

        </div>
      </div>

      {/* Progress keyframe */}
      <style>{`
        @keyframes lm-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes lm-slide-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lm-fade-in  { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
}

// ── FREE AUDIT CTA ────────────────────────────────────────────────────────────
function AuditCTAM({ onNavigateContact }) {
  return (
    <section id="audit-m" className="relative py-20 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 80% 100% at 50% 100%, rgba(34,211,238,0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 0% 50%, rgba(8,145,178,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 100% 0%, rgba(34,211,238,0.12) 0%, transparent 55%), ${NAVY}` }}>
      <div className="absolute pointer-events-none" style={{ width: '800px', height: '400px', background: `radial-gradient(ellipse, rgba(34,211,238,0.08) 0%, transparent 70%)`, filter: 'blur(48px)', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.06) 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-8 text-center">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: `1px solid ${LTEAL}40`, padding: '6px 20px', marginBottom: '28px' }}>
          <span style={{ color: LTEAL, fontSize: '8px' }}>●</span>
          <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.22em', color: LTEAL }} className="uppercase">No Commitment · No Sales Pitch</span>
        </div>
        <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.95, letterSpacing: '-0.025em', color: '#fff', marginBottom: '20px' }} className="reveal">
          Book a free<br /><em style={{ fontStyle: 'italic', color: LTEAL }}>30-minute consultation.</em>
        </h2>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.58)', maxWidth: '520px', margin: '0 auto 36px' }}>
          Tell us what you're building or where you're stuck. We'll listen, ask the right questions, and give you a clear view of what's possible — no commitment required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onNavigateContact}
            style={{ background: `linear-gradient(135deg, ${LTEAL} 0%, ${TEAL} 100%)`, color: ABYSS, ...BOLD_J, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.12em', boxShadow: `0 4px 40px rgba(34,211,238,0.35)`, display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}
            className="px-10 py-4 uppercase transition-opacity hover:opacity-90">
            Book My Free Consultation <ArrowUpRight />
          </button>
          <button
            onClick={() => document.getElementById('products-m')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', ...JAKARTA, fontWeight: 400, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.08em', border: `1px solid rgba(255,255,255,0.18)` }}
            className="px-8 py-4 uppercase transition-colors cursor-pointer hover:border-white/40">
            View Our Work
          </button>
        </div>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '12px', color: 'rgba(255,255,255,0.28)', marginTop: '20px', letterSpacing: '0.04em' }}>
          Typically delivered within 5 business days · No NDA required to start
        </p>
      </div>
    </section>
  );
}

// ── CLIENTS — light ───────────────────────────────────────────────────────────
function ClientsM() {
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,211,238,0.07) 0%, transparent 65%), ${BG}` }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <div>
            <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="mb-4 uppercase">Trusted By</div>
            <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(36px,4.5vw,64px)', lineHeight: 1.0, color: DTEAL }} className="reveal">
              Select client <em style={{ fontStyle: 'italic', color: TEAL }}>engagements.</em>
            </h2>
          </div>
          <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: `${DTEAL}60`, maxWidth: '320px' }}>
            Organizations across Canada that have trusted us to build, advise, and deliver.
          </p>
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-1 gap-px reveal sm:grid-cols-2 lg:grid-cols-4" style={{ background: `${TEAL}14`, border: `1px solid ${TEAL}14` }}>
          {CLIENTS_M.map((c, i) => (
            <div key={c.name}
              className="relative overflow-hidden cursor-default group"
              style={{ background: BG, padding: 'clamp(24px,4vw,40px) clamp(20px,3vw,36px)', minHeight: 'clamp(140px, 22vw, 180px)', transition: 'background 0.35s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = SURFACE; }}
              onMouseLeave={e => { e.currentTarget.style.background = BG; }}>

              {/* Watermark initial */}
              <div className="absolute pointer-events-none select-none"
                style={{ ...CORMORANT, fontWeight: 700, fontSize: 'clamp(72px, 12vw, 120px)', lineHeight: 1, color: `${TEAL}07`, letterSpacing: '-0.06em', right: '-8px', bottom: '-16px', transition: 'color 0.35s ease' }}>
                {c.initial}
              </div>

              {/* Top accent line — animated on hover */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `${TEAL}20`, overflow: 'hidden' }}>
                <div className="-translate-x-full group-hover:translate-x-0"
                  style={{ height: '100%', width: '100%', background: `linear-gradient(90deg, ${TEAL}, ${LTEAL})`, transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>

              {/* Index */}
              <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', color: `${TEAL}60`, marginBottom: '20px' }} className="uppercase">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Name */}
              <h3 style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(22px,2.5vw,32px)', lineHeight: 1.05, letterSpacing: '-0.01em', color: DTEAL, marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                {c.name}
              </h3>

              {/* Industry tag */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: `1px solid ${TEAL}25`, padding: '4px 10px', position: 'relative', zIndex: 1 }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: TEAL, flexShrink: 0 }} />
                <span style={{ ...JAKARTA, fontWeight: 400, fontSize: '10px', letterSpacing: '0.1em', color: `${DTEAL}65` }} className="uppercase">{c.industry}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── FAQ — dark ────────────────────────────────────────────────────────────────
function FAQM() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq-m" className="relative py-24 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 60% 60% at 100% 0%, rgba(8,145,178,0.08) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 0% 100%, rgba(34,211,238,0.06) 0%, transparent 55%), ${BG}` }}>
      <div className="absolute pointer-events-none" style={{ width: '400px', height: '400px', background: `radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)`, filter: 'blur(60px)', top: '-80px', right: '-80px' }} />
      <TealRule />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-16">
        <div className="mb-16">
          <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="mb-4 uppercase">FAQ</div>
          <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1.0, color: DTEAL }} className="reveal">
            Common <em style={{ fontStyle: 'italic', color: TEAL }}>questions.</em>
          </h2>
        </div>
        <div className="reveal max-w-[860px]">
          {FAQS.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full gap-6 py-6 text-left cursor-pointer"
                style={{ background: 'none', border: 'none', transition: 'opacity 0.2s ease' }}>
                <h3 style={{ ...CORMORANT, fontWeight: 500, fontSize: 'clamp(18px,2.5vw,24px)', lineHeight: 1.2, color: open === i ? TEAL : DTEAL, letterSpacing: '-0.01em', transition: 'color 0.25s ease' }}>{faq.q}</h3>
                <span style={{ color: open === i ? TEAL : `${DTEAL}40`, flexShrink: 0, transition: 'color 0.25s ease' }}>
                  <IcoPlus open={open === i} />
                </span>
              </button>
              <div style={{
                maxHeight: open === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <p style={{ ...JAKARTA, fontWeight: 300, fontSize: 'clamp(13px, 1.8vw, 15px)', lineHeight: 1.85, color: `${DTEAL}65`, paddingBottom: '24px', maxWidth: '680px' }}>{faq.a}</p>
              </div>
              {i < FAQS.length - 1 && <div style={{ height: '1px', background: `${TEAL}18` }} />}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-16"><TealRule /></div>
    </section>
  );
}

// ── CONTACT — abyss ───────────────────────────────────────────────────────────
function ContactM() {
  return (
    <section id="contact-m" className="relative py-32 overflow-hidden"
      style={{ background: `radial-gradient(ellipse 85% 65% at 50% 110%, rgba(34,211,238,0.24) 0%, transparent 55%), radial-gradient(ellipse 55% 55% at 0% 35%, rgba(8,145,178,0.20) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 100% 0%, rgba(34,211,238,0.11) 0%, transparent 55%), ${ABYSS}` }}>
      {[600, 900, 1200].map((size, i) => (
        <div key={size} className="absolute pointer-events-none" style={{ width: `${size}px`, height: `${size}px`, border: `1px solid rgba(34,211,238,${0.055 - i * 0.015})`, borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      ))}
      <div className="absolute bottom-0 -translate-x-1/2 pointer-events-none left-1/2" style={{ width: '900px', height: '450px', background: `radial-gradient(ellipse, rgba(34,211,238,0.14) 0%, transparent 70%)`, filter: 'blur(48px)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.07) 1px, transparent 0)`, backgroundSize: '28px 28px' }} />
      <TealRule dark />
      <div className="relative z-10 max-w-[900px] mx-auto px-8 text-center pt-24">
        <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: LTEAL }} className="mb-8 uppercase">09 / Begin an Engagement</div>
        <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(54px,8vw,118px)', lineHeight: 0.92, letterSpacing: '-0.03em', background: `linear-gradient(140deg, ${BG} 25%, ${LTEAL} 55%, rgba(240,253,250,0.85) 90%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} className="mb-10 reveal">
          Good software<br /><em style={{ fontStyle: 'italic' }}>starts here.</em>
        </h2>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: 'clamp(14px, 2.2vw, 17px)', lineHeight: 1.9, color: 'rgba(240,253,250,0.58)' }} className="mb-12 max-w-[520px] mx-auto">
          Whether you need a product built, a platform deployed, or a strategy to navigate a complex technology landscape — we're the team for it.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <a href="mailto:hello@kilimanjaro.ca"
            style={{ background: `linear-gradient(135deg, ${LTEAL} 0%, ${TEAL} 100%)`, color: ABYSS, ...BOLD_J, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.12em', boxShadow: `0 4px 40px rgba(34,211,238,0.35)` }}
            className="flex items-center gap-2 px-10 py-4 no-underline uppercase transition-opacity cursor-pointer hover:opacity-90">
            Start a Conversation <ArrowUpRight />
          </a>
          <button style={{ background: 'transparent', color: BG, ...JAKARTA, fontWeight: 400, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.08em', border: `1px solid rgba(240,253,250,0.18)` }}
            className="px-10 py-4 uppercase transition-colors cursor-pointer hover:border-white/40">
            Download Capability Overview
          </button>
        </div>
        <div className="pt-10 mt-16" style={{ borderTop: `1px solid rgba(34,211,238,0.12)` }}>
          <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', letterSpacing: '0.08em', color: 'rgba(240,253,250,0.28)' }}>Kilimanjaro Innovation Labs Inc. · Toronto, Ontario · Canadian Built</p>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function FooterM() {
  return (
    <footer style={{ background: DTEAL }} className="px-8 pt-10 pb-8 md:px-16">
      <TealRule dark />
      <div className="max-w-[1400px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(15px, 2vw, 18px)', color: BG, letterSpacing: '0.02em' }}>Kilimanjaro Innovation Labs</span>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.08em', color: `${BG}48` }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-8">
          {['Privacy', 'Terms', 'Products', 'Careers'].map(l => (
            <a key={l} href="#" style={{ ...JAKARTA, fontWeight: 400, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.06em', color: `${BG}42` }} className="transition-colors hover:text-white">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function VariantM({ onNavigateContact }) {
  useScrollReveal();
  return (
    <>
      <style>{LM_CSS}</style>
      <div style={{ background: BG, color: DTEAL }}>
        <NavM onNavigateContact={onNavigateContact} />
        <HeroM onNavigateContact={onNavigateContact} />
        <WhyUsM />
        <TechStackM />
        <ProductsM />
        <PracticesM />
        <TestimonialsM />
        <HowWeWorkM />
        <CasesM />
        <MarqueeM />
         <ClientsM />
        <EngagementModelsM onNavigateContact={onNavigateContact} />

        <IndustriesM />

        <AuditCTAM onNavigateContact={onNavigateContact} />
       
        <FAQM />
        <ContactM />
        <FooterM />
      </div>
    </>
  );
}
