import { useState, useEffect, useRef } from 'react';

// ─── HOOKS ────────────────────────────────────────────────────────────────────
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useCountUp(end, suffix = '', duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      const t0 = Date.now();
      const tick = () => {
        const t = Math.min((Date.now() - t0) / duration, 1);
        setVal(Math.round((1 - Math.pow(1 - t, 3)) * end));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return [val + suffix, ref];
}

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-[3px] pointer-events-none">
      <div className="h-full bg-gradient-to-r from-[#0D9488] to-[#06B6D4]" style={{ width: `${pct}%` }} />
    </div>
  );
}

// ─── ICONS ────────────────────────────────────────────────────────────────────
export const ArrowUpRight = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
export const CodeIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
export const BrainIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.63A3 3 0 0 1 3.83 11a3 3 0 0 1 .46-4.78A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.63A3 3 0 0 0 20.17 11a3 3 0 0 0-.46-4.78A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);
export const CloudIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);
export const ZapIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
export const LogoMark = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
    <rect x="0" y="0" width="7" height="7" />
    <rect x="9" y="0" width="7" height="7" />
    <rect x="0" y="9" width="7" height="7" />
    <rect x="9" y="9" width="7" height="7" opacity="0.35" />
  </svg>
);
const ChevronLeft = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-7 font-mono text-[11px] tracking-[0.14em] uppercase text-[#0D9488]">
      <span className="w-7 h-px bg-[#0D9488] flex-shrink-0" />
      {children}
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    num: 'P-01', name: 'Divemetric', category: 'Analytics Platform',
    desc: 'Enterprise-grade diving analytics and performance tracking platform. Real-time data visualization, athlete monitoring, and intelligent performance insights for professional teams.',
    tags: ['Analytics', 'Real-time', 'SaaS'],
    features: ['Live performance dashboards', 'Multi-athlete tracking', 'Predictive injury analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    num: 'P-02', name: 'Complyo', category: 'Compliance Automation',
    desc: 'End-to-end compliance management that automates regulatory workflows, document management, and audit trails. Built for complex multi-jurisdiction environments.',
    tags: ['Compliance', 'Automation', 'Enterprise'],
    features: ['Automated regulatory mapping', 'Audit trail generation', 'Multi-framework support'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

export const SERVICES = [
  { num: 'S-01', Icon: CodeIcon, name: 'Software Development', desc: 'Full-stack web and mobile development. From architecture to deployment, we build systems that scale reliably.' },
  { num: 'S-02', Icon: BrainIcon, name: 'AI & Machine Learning', desc: 'Custom AI solutions and ML pipelines trained on your domain-specific data for measurable outcomes.' },
  { num: 'S-03', Icon: CloudIcon, name: 'Cloud Architecture', desc: 'Cloud-native infrastructure design and optimization across AWS, GCP, and Azure. Built for resilience.' },
  { num: 'S-04', Icon: ZapIcon, name: 'Process Automation', desc: 'End-to-end workflow automation that eliminates manual overhead and accelerates operational throughput.' },
];

export const TECH = [
  { abbr: 'TS', name: 'TypeScript' }, { abbr: 'Rct', name: 'React' },
  { abbr: 'Njs', name: 'Node.js' }, { abbr: 'Py', name: 'Python' },
  { abbr: 'AWS', name: 'Amazon\nWeb Services' }, { abbr: 'PG', name: 'PostgreSQL' },
  { abbr: 'K8s', name: 'Kubernetes' }, { abbr: 'TF', name: 'TensorFlow' },
];

export const CASES = [
  {
    num: '01', title: 'Financial Platform Migration', client: 'FinanceHub',
    desc: 'Migrated a decade-old monolith to event-driven microservices — slashing latency by 68% and unlocking 10× horizontal scale overnight.',
    tags: ['React', 'Node.js', 'AWS'], outcome: '68% latency reduction',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    stat: '68%', statLabel: 'Latency Reduction',
  },
  {
    num: '02', title: 'AI-Powered Analytics Engine', client: 'MediTech Inc.',
    desc: 'Custom ML pipeline for real-time patient data analysis with 94% diagnostic accuracy — deployed across 12 hospital networks.',
    tags: ['Python', 'TensorFlow', 'GCP'], outcome: '94% model accuracy',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
    stat: '94%', statLabel: 'Diagnostic Accuracy',
  },
  {
    num: '03', title: 'Cloud Infrastructure Overhaul', client: 'Enterprise Corp.',
    desc: 'Redesigned cloud infrastructure achieving 40% cost reduction and 99.99% uptime SLA across 3 global regions.',
    tags: ['Kubernetes', 'AWS', 'Terraform'], outcome: '40% cost reduction',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    stat: '40%', statLabel: 'Cost Reduction',
  },
];

export const CLIENTS = ['TechCorp', 'FinanceHub', 'MediTech', 'RetailOS', 'LogiTrack', 'DataSync'];

export const MARQUEE_TEXT = [
  'Engineering Excellence', 'Software Products', 'Cloud Architecture', 'AI Solutions',
  'Process Automation', 'Enterprise Scale', 'Precision Built', 'Production Grade',
  'Full-Stack Delivery', 'Scalable Systems',
];

// ─── SHARED SECTIONS ──────────────────────────────────────────────────────────

export function TechStack() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#ECFEFF] pointer-events-none" />
      {/* Animated orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#0D9488]/8 blur-[80px] animate-orb-2 pointer-events-none" />
      <div className="absolute bottom-0 left-[-60px] w-[300px] h-[300px] rounded-full bg-[#06B6D4]/10 blur-[60px] animate-orb-3 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <SectionLabel>04 / Technology Stack</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">Built with<br />precision tools.</h2>
          </div>
          <p className="reveal reveal-delay text-[16px] leading-[1.7] text-[#787870] md:pt-6">
            We work with the technologies that define modern software engineering — selecting the right tool for every context.
          </p>
        </div>
        <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-3">
          {TECH.map((t) => (
            <div key={t.abbr}
              className="group bg-white hover:bg-[#0D9488] transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col items-center gap-3 cursor-default shadow-sm hover:shadow-lg hover:shadow-[#0D9488]/20 border border-[#E2E2DC] hover:border-[#0D9488]">
              <div className="w-10 h-10 bg-[#F5F5F2] group-hover:bg-white/20 rounded-xl flex items-center justify-center font-mono text-[11px] font-medium text-[#0A0A0A] group-hover:text-white transition-all duration-300">{t.abbr}</div>
              <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-[#787870] group-hover:text-white/80 text-center leading-tight whitespace-pre-line transition-colors duration-300">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FULL-WIDTH CAROUSEL CASE STUDIES ─────────────────────────────────────────
export function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = CASES.length;

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + dir + total) % total);
      setAnimating(false);
    }, 300);
  };

  const c = CASES[current];

  return (
    <section id="work" className="relative overflow-hidden bg-[#0A0A0A]">
      {/* Full bleed image with overlay */}
      <div className="absolute inset-0">
        <img
          key={current}
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover"
          style={{
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.4s ease',
            filter: 'brightness(0.28) saturate(0.6)',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
        {/* Teal glow */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#0D9488]/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 md:px-12 py-32 md:py-44">
        {/* Header row */}
        <div className="flex items-start justify-between mb-20">
          <div>
            <SectionLabel>05 / Case Studies</SectionLabel>
            <h2 className="text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05] text-white">Selected<br />work.</h2>
          </div>
          {/* Nav controls */}
          <div className="flex items-center gap-4 mt-2">
            <span className="font-mono text-[12px] text-white/30 tracking-widest">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#0D9488] transition-all duration-200">
              <ChevronLeft />
            </button>
            <button onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0D9488] hover:border-[#0D9488] transition-all duration-200">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slide content */}
        <div
          key={current}
          style={{ animation: animating ? 'none' : 'fadeUp 0.55s ease both' }}
          className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 items-end">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[13px] text-[#0D9488] tracking-[0.1em]">{c.num}</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="font-mono text-[11px] text-white/40 tracking-[0.1em] uppercase">{c.client}</span>
            </div>
            <h3 className="text-[clamp(36px,5vw,72px)] font-extrabold tracking-tight leading-[1.0] text-white mb-6">{c.title}</h3>
            <p className="text-[16px] leading-[1.75] text-white/55 max-w-xl mb-10">{c.desc}</p>
            <div className="flex gap-2 flex-wrap">
              {c.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-full bg-white/8 text-white/50 border border-white/12">{tag}</span>
              ))}
            </div>
          </div>

          {/* Stat card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 flex flex-col items-start gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/20 to-transparent rounded-3xl" />
            <span className="relative font-mono text-[11px] text-[#0D9488] tracking-[0.14em] uppercase">Key Outcome</span>
            <div className="relative text-[80px] font-extrabold tracking-tight leading-none text-white">{c.stat}</div>
            <div className="relative font-mono text-[13px] text-white/50 tracking-[0.06em]">{c.statLabel}</div>
            <div className="relative mt-2 w-full h-px bg-gradient-to-r from-[#0D9488]/60 to-transparent" />
            <span className="relative font-mono text-[11px] text-white/30 leading-relaxed">{c.outcome}</span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-16">
          {CASES.map((_, i) => (
            <button key={i} onClick={() => !animating && setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-400 cursor-pointer border-none ${i === current ? 'bg-[#0D9488] w-10' : 'bg-white/20 w-4 hover:bg-white/40'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MarqueeBand() {
  const doubled = [...MARQUEE_TEXT, ...MARQUEE_TEXT];
  return (
    <div className="py-7 overflow-hidden relative" style={{ background: 'linear-gradient(90deg, #0A0A0A 0%, #0D1F1E 50%, #0A0A0A 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D9488]/10 to-transparent pointer-events-none" />
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10 px-10 font-mono text-[11px] tracking-[0.14em] uppercase text-white/20 whitespace-nowrap">
            {item}<span className="w-1 h-1 bg-[#0D9488] rounded-full flex-shrink-0 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0FDFA]/40 to-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#0D9488]/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#0D9488]/5 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <SectionLabel>06 / Trusted By</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">Companies<br />that trust us.</h2>
          </div>
          <p className="reveal reveal-delay text-[16px] leading-[1.7] text-[#787870] md:pt-6">
            We partner with organizations ranging from high-growth startups to established enterprises — building the systems that power their core operations.
          </p>
        </div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS.map((name, i) => (
            <div key={name}
              className="group bg-white rounded-2xl border border-[#E2E2DC] hover:border-[#0D9488]/40 hover:shadow-lg hover:shadow-[#0D9488]/8 transition-all duration-300 py-10 px-6 flex flex-col items-center justify-center gap-3 cursor-default">
              {/* Abstract logo placeholder with teal accent */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0D9488]"
                style={{ background: `hsl(${i * 47}, 60%, 95%)` }}>
                <span className="font-mono text-[10px] font-bold text-[#0D9488]">{name[0]}</span>
              </div>
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#9B9B94] font-medium group-hover:text-[#0D9488] transition-colors duration-300">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-44 text-white relative overflow-hidden noise"
      style={{ background: 'linear-gradient(135deg, #051815 0%, #0A1A19 30%, #071C2C 70%, #050D1A 100%)' }}>
      {/* Mesh gradient orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#0D9488]/20 blur-[140px] animate-orb-1 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#06B6D4]/15 blur-[120px] animate-orb-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#0D9488]/8 pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(13,148,136,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Large ghost text */}
      <div className="absolute font-extrabold leading-none tracking-[-0.06em] text-white select-none pointer-events-none"
        style={{ bottom: '-80px', right: '-20px', fontSize: 'clamp(140px, 20vw, 280px)', opacity: 0.025 }}>BUILD</div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <SectionLabel>07 / Get In Touch</SectionLabel>
            <h2 className="font-extrabold tracking-tight leading-[0.95]" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}>
              Let&apos;s build<br />something<br /><em className="not-italic text-[#0D9488]">remarkable.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[16px] leading-[1.7] text-white/55">Whether you need a world-class engineering team or want to explore our software products, we&apos;re ready to engage.</p>
            <a href="mailto:hello@axiomlabs.io"
              className="text-[20px] md:text-[22px] font-bold tracking-tight text-white border-b-2 border-[#0D9488] pb-2 inline-block hover:text-[#0D9488] transition-colors duration-200 self-start">
              hello@axiomlabs.io
            </a>
            <div className="flex gap-4 flex-wrap">
              <button className="relative overflow-hidden flex items-center gap-2.5 bg-[#0D9488] text-white text-[13px] font-bold tracking-[0.05em] uppercase px-7 py-4 rounded-xl hover:bg-[#0B7B70] transition-all duration-200 border-none cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shimmer" />
                Start a Project <ArrowUpRight />
              </button>
              <button className="text-white/70 text-[14px] font-medium px-7 py-4 rounded-xl border border-white/15 hover:border-[#0D9488]/60 hover:text-white transition-all duration-200 bg-transparent cursor-pointer">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { title: 'Products', links: ['Divemetric', 'Complyo', 'Documentation', 'Changelog'] },
    { title: 'Services', links: ['Software Dev', 'AI & ML', 'Cloud Arch', 'Automation'] },
    { title: 'Company', links: ['About', 'Work', 'Careers', 'Contact'] },
  ];
  return (
    <footer className="pt-16 pb-10 border-t border-[#E2E2DC]">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 font-bold text-[17px] tracking-tight text-[#0A0A0A] mb-4">
              <div className="w-7 h-7 bg-[#0D9488] rounded-lg flex items-center justify-center text-white flex-shrink-0"><LogoMark /></div>
              Axiom Labs
            </div>
            <p className="text-[14px] text-[#787870] leading-[1.7] max-w-[220px]">Engineering software products and delivering precision solutions for complex challenges.</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#0A0A0A] mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3 list-none">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-[14px] text-[#787870] hover:text-[#0D9488] transition-colors duration-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#E2E2DC] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[12px] text-[#787870] tracking-[0.06em]">© 2026 Axiom Labs. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <a key={l} href="#" className="font-mono text-[12px] text-[#787870] tracking-[0.06em] hover:text-[#0D9488] transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
