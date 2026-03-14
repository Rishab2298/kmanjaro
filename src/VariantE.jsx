/**
 * Variant E — "ATELIER"
 * Luxury editorial magazine aesthetic.
 * Cormorant Garamond display serif + warm ivory + full-bleed photography.
 * Think: architectural firm portfolio, LVMH brand, high-fashion editorial.
 */
import { useState, useEffect } from 'react';
import {
  useScrollReveal, useCountUp,
  PRODUCTS, SERVICES, TECH, CASES, CLIENTS, MARQUEE_TEXT, ArrowUpRight, LogoMark,
} from './shared.jsx';

const SERIF = { fontFamily: '"Cormorant Garamond", serif' };
const SANS  = { fontFamily: '"Plus Jakarta Sans", sans-serif' };
const IVORY = '#FAF8F2';
const CHARCOAL = '#1C1816';
const MID = '#8A8075';
const TEAL = '#0D9488';

// ─── NAV ──────────────────────────────────────────────────────────────────────
function NavE() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#DDD8CE]' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Left nav */}
        <ul className="hidden md:flex items-center gap-10 list-none" style={SANS}>
          {['Products', 'Services'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}-e`}
                className="text-[13px] tracking-[0.12em] uppercase text-[#8A8075] hover:text-[#1C1816] transition-colors duration-300">{item}</a>
            </li>
          ))}
        </ul>

        {/* Center — wordmark */}
        <a href="#" className="flex flex-col items-center" style={SERIF}>
          <span className="text-[22px] font-light tracking-[0.25em] uppercase text-[#1C1816]">AXIOM LABS</span>
          <div className="w-full h-px bg-[#DDD8CE] mt-1" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#8A8075] mt-0.5">Engineering Co.</span>
        </a>

        {/* Right nav */}
        <div className="hidden md:flex items-center gap-10" style={SANS}>
          <a href="#work-e" className="text-[13px] tracking-[0.12em] uppercase text-[#8A8075] hover:text-[#1C1816] transition-colors duration-300">Work</a>
          <button
            onClick={() => document.getElementById('contact-e')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[12px] tracking-[0.2em] uppercase border border-[#1C1816] text-[#1C1816] px-7 py-2.5 hover:bg-[#1C1816] hover:text-[#FAF8F2] transition-all duration-400 cursor-pointer bg-transparent"
            style={SANS}>
            Enquire
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroE() {
  const [count40, ref40] = useCountUp(40, '+');
  const [count12, ref12] = useCountUp(12);
  const [count2, ref2]   = useCountUp(2);

  return (
    <section className="min-h-screen grid md:grid-cols-[1fr_1fr] relative" style={{ background: IVORY }}>
      {/* Left: editorial typography */}
      <div className="flex flex-col justify-between pt-32 pb-16 px-10 md:px-20 relative">
        {/* Issue badge */}
        <div className="flex items-center gap-4 anim-fade-up-1" style={SANS}>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488]">Vol. 07, 2026</span>
          <div className="flex-1 h-px bg-[#DDD8CE]" />
        </div>

        {/* Headline */}
        <div className="anim-fade-up-2">
          <div className="relative">
            {/* Large decorative letter */}
            <span className="absolute -top-8 -left-4 text-[200px] font-light leading-none text-[#DDD8CE] select-none pointer-events-none" style={SERIF}>W</span>
            <h1 className="relative z-10 font-light leading-[1.05]"
              style={{ ...SERIF, fontSize: 'clamp(58px, 6.5vw, 108px)', letterSpacing: '-0.01em' }}>
              We build<br />
              <em className="italic text-[#0D9488]">software</em><br />
              <span className="font-light">platforms.</span>
            </h1>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-[#DDD8CE] pt-8">
            {[{ ref: ref40, v: count40, l: 'Projects' }, { ref: ref12, v: count12, l: 'Clients' }, { ref: ref2, v: count2, l: 'Products' }].map(s => (
              <div key={s.l} ref={s.ref}>
                <div className="text-[44px] font-light leading-none text-[#0D9488]" style={SERIF}>{s.v}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A8075] mt-1" style={SANS}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="anim-fade-up-3" style={SANS}>
          <p className="text-[15px] leading-[1.8] text-[#8A8075] max-w-sm mb-8">
            Axiom Labs engineers high-performance software and delivers precision-built solutions for the world's most demanding organizations.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => document.getElementById('products-e')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 bg-[#1C1816] text-[#FAF8F2] text-[12px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#0D9488] transition-all duration-400 cursor-pointer border-none">
              Our Products
            </button>
            <a href="#work-e" className="text-[12px] tracking-[0.15em] uppercase text-[#8A8075] hover:text-[#1C1816] transition-colors duration-300 border-b border-current pb-0.5">
              View Work →
            </a>
          </div>
        </div>
      </div>

      {/* Right: full-bleed image collage */}
      <div className="relative hidden md:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
          alt="Axiom Labs"
          className="w-full h-full object-cover anim-fade-up"
          style={{ filter: 'saturate(0.7) brightness(0.88)' }}
        />
        {/* Editorial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/70 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10 right-10">
          <p className="text-[#FAF8F2]/80 text-[13px] leading-[1.7] max-w-xs italic" style={SERIF}>
            "Building the systems that define how the world's best companies operate."
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="w-8 h-px bg-[#0D9488]" />
            <span style={SANS} className="text-[#FAF8F2]/40 text-[11px] tracking-[0.2em] uppercase">Est. 2019, London</span>
          </div>
        </div>
        {/* Vertical side text */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <div style={{ ...SANS, writingMode: 'vertical-rl' }}
            className="text-[10px] tracking-[0.3em] uppercase text-white/25">Engineering Company</div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function ProductsE() {
  return (
    <section id="products-e" className="relative overflow-hidden" style={{ background: IVORY }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        {/* Section header */}
        <div className="flex items-end justify-between mb-20 border-b border-[#DDD8CE] pb-10">
          <div>
            <span style={SANS} className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488]">02 — Product Ecosystem</span>
            <h2 style={SERIF} className="text-[clamp(42px,5vw,72px)] font-light tracking-[-0.01em] leading-[1.0] mt-4">
              Our software<br /><em className="italic">products.</em>
            </h2>
          </div>
          <p style={SANS} className="hidden md:block text-[15px] leading-[1.8] text-[#8A8075] max-w-xs text-right reveal reveal-delay">
            Precision-engineered SaaS platforms designed for complex industry challenges.
          </p>
        </div>

        {/* Feature spreads */}
        <div className="flex flex-col gap-0">
          {PRODUCTS.map((p, i) => (
            <div key={p.num}
              className={`group grid grid-cols-1 md:grid-cols-2 min-h-[520px] reveal ${i > 0 ? 'border-t border-[#DDD8CE]' : ''}`}>
              {/* Image */}
              <div className={`relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img src={p.image} alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  style={{ minHeight: '380px', filter: 'saturate(0.75)' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1816]/40" />
                <div className="absolute top-8 left-8">
                  <span style={SANS} className="text-[11px] tracking-[0.2em] uppercase text-white/60 bg-[#1C1816]/50 backdrop-blur-sm px-3 py-1.5">{p.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center p-12 md:p-16 lg:p-20 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <span style={SANS} className="text-[11px] tracking-[0.25em] uppercase text-[#0D9488] mb-6">{p.num}</span>
                <h3 style={SERIF} className="text-[clamp(40px,4vw,62px)] font-light leading-[1.0] tracking-[-0.01em] mb-6">{p.name}</h3>
                <p style={SANS} className="text-[15px] leading-[1.8] text-[#8A8075] mb-8">{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-10">
                  {p.features.map(f => (
                    <li key={f} style={SANS} className="flex items-center gap-3 text-[13px] text-[#8A8075]">
                      <span className="w-4 h-px bg-[#0D9488] flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6 pt-8 border-t border-[#DDD8CE]">
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map(t => (
                      <span key={t} style={SANS} className="text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 border border-[#DDD8CE] text-[#8A8075]">{t}</span>
                    ))}
                  </div>
                  <a href="#" style={SANS} className="ml-auto text-[12px] tracking-[0.15em] uppercase text-[#1C1816] border-b border-[#1C1816] pb-0.5 hover:text-[#0D9488] hover:border-[#0D9488] transition-colors duration-200 whitespace-nowrap">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function ServicesE() {
  return (
    <section id="services-e" className="py-32 relative overflow-hidden" style={{ background: CHARCOAL }}>
      {/* Tonal pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(250,248,242,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
          <div>
            <span style={SANS} className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488]">03 — Engineering Services</span>
            <h2 style={SERIF} className="text-[clamp(42px,5vw,72px)] font-light text-[#FAF8F2] tracking-[-0.01em] leading-[1.0] mt-4">
              What we<br /><em className="italic">deliver.</em>
            </h2>
          </div>
          <p style={SANS} className="hidden md:block text-[14px] leading-[1.8] text-white/40 max-w-xs text-right reveal reveal-delay">
            End-to-end engineering across the full technology stack.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8">
          {SERVICES.map((s, i) => (
            <div key={s.num}
              className="group bg-[#1C1816] hover:bg-[#0D9488]/10 transition-all duration-500 p-12 md:p-14 relative overflow-hidden cursor-default">
              <div className="absolute top-8 right-8 text-[120px] font-light leading-none text-white/4 select-none pointer-events-none" style={SERIF}>
                {s.num.split('-')[1]}
              </div>
              <span style={SANS} className="block text-[11px] tracking-[0.2em] uppercase text-[#0D9488]/70 mb-8">{s.num}</span>
              <h3 style={SERIF} className="text-[32px] font-light text-[#FAF8F2] leading-[1.1] mb-5">{s.name}</h3>
              <p style={SANS} className="text-[14px] leading-[1.8] text-white/40 group-hover:text-white/60 transition-colors duration-400">{s.desc}</p>
              <div className="mt-10 flex items-center gap-3">
                <div className="w-6 h-px bg-[#0D9488] transition-all duration-300 group-hover:w-12" />
                <span style={SANS} className="text-[11px] tracking-[0.2em] uppercase text-white/20 group-hover:text-[#0D9488] transition-colors duration-300">Explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TECH ─────────────────────────────────────────────────────────────────────
function TechE() {
  return (
    <section className="py-32 relative" style={{ background: IVORY }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex items-end justify-between mb-16 pb-10 border-b border-[#DDD8CE]">
          <div>
            <span style={SANS} className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488]">04 — Technology Stack</span>
            <h2 style={SERIF} className="text-[clamp(42px,5vw,72px)] font-light tracking-[-0.01em] leading-[1.0] mt-4 reveal">
              Built with<br /><em className="italic">precision.</em>
            </h2>
          </div>
        </div>
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-px bg-[#DDD8CE]">
          {TECH.map(t => (
            <div key={t.abbr}
              className="group bg-[#FAF8F2] hover:bg-[#1C1816] transition-all duration-500 p-8 flex flex-col items-center gap-4 cursor-default">
              <div style={SERIF} className="text-[28px] font-light text-[#8A8075] group-hover:text-[#0D9488] transition-colors duration-400 leading-none">{t.abbr}</div>
              <span style={SANS} className="text-[9px] tracking-[0.15em] uppercase text-[#B0A898] group-hover:text-white/40 text-center leading-tight whitespace-pre-line transition-colors duration-400">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
function CasesE() {
  const [active, setActive] = useState(0);
  const c = CASES[active];
  return (
    <section id="work-e" className="relative overflow-hidden" style={{ background: CHARCOAL }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
          <div>
            <span style={SANS} className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488]">05 — Selected Work</span>
            <h2 style={SERIF} className="text-[clamp(42px,5vw,72px)] font-light text-[#FAF8F2] tracking-[-0.01em] leading-[1.0] mt-4">
              Selected<br /><em className="italic">work.</em>
            </h2>
          </div>
          {/* Selector tabs */}
          <div className="flex gap-2" style={SANS}>
            {CASES.map((c, i) => (
              <button key={c.num}
                onClick={() => setActive(i)}
                className={`text-[11px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 cursor-pointer border-none ${active === i ? 'bg-[#0D9488] text-white' : 'text-white/30 hover:text-white/60 bg-transparent'}`}>
                {c.num}
              </button>
            ))}
          </div>
        </div>

        <div key={active} className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-16 items-start anim-fade-up">
          {/* Full-bleed image */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src={c.image} alt={c.title}
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.6) brightness(0.7)' }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1816]/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span style={SANS} className="text-[11px] tracking-[0.2em] uppercase text-white/50 bg-black/40 backdrop-blur-sm px-3 py-1.5">{c.client}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <span style={SANS} className="text-[11px] tracking-[0.25em] uppercase text-[#0D9488] block mb-4">{c.num} / {c.outcome}</span>
              <h3 style={SERIF} className="text-[clamp(32px,3.5vw,50px)] font-light text-[#FAF8F2] leading-[1.05] mb-6">{c.title}</h3>
              <p style={SANS} className="text-[14px] leading-[1.8] text-white/45 mb-8">{c.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {c.tags.map(t => (
                  <span key={t} style={SANS} className="text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 border border-white/15 text-white/35">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <div style={SERIF} className="text-[72px] font-light text-[#0D9488] leading-none">{c.stat}</div>
              <div style={SANS} className="text-[12px] tracking-[0.2em] uppercase text-white/30 mt-1">{c.statLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CLIENTS ──────────────────────────────────────────────────────────────────
function ClientsE() {
  return (
    <section className="py-24 border-t border-[#DDD8CE]" style={{ background: IVORY }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex items-center gap-8 mb-14">
          <div className="w-8 h-px bg-[#0D9488]" />
          <span style={SANS} className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488]">06 — Trusted By</span>
        </div>
        <div className="reveal grid grid-cols-2 md:grid-cols-6 gap-px bg-[#DDD8CE]">
          {CLIENTS.map(name => (
            <div key={name}
              className="group bg-[#FAF8F2] hover:bg-[#1C1816] transition-all duration-500 py-12 px-6 flex items-center justify-center cursor-default">
              <span style={SERIF} className="text-[18px] font-light text-[#8A8075] group-hover:text-[#FAF8F2] transition-colors duration-400 tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function MarqueeE() {
  const doubled = [...MARQUEE_TEXT, ...MARQUEE_TEXT];
  return (
    <div className="py-8 overflow-hidden border-y border-[#DDD8CE]" style={{ background: IVORY }}>
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12">
            <span style={SERIF} className="text-[20px] font-light italic text-[#C5BDB2] whitespace-nowrap">{item}</span>
            <span style={SANS} className="text-[#DDD8CE]">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function ContactE() {
  return (
    <section id="contact-e" className="py-40 relative overflow-hidden" style={{ background: CHARCOAL }}>
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(250,248,242,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[#0D9488]/8 blur-[150px] pointer-events-none animate-orb-1" />

      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <span style={SANS} className="text-[11px] tracking-[0.3em] uppercase text-[#0D9488] block mb-8">07 — Get In Touch</span>
            <h2 style={{ ...SERIF, fontSize: 'clamp(48px, 6vw, 90px)' }}
              className="font-light text-[#FAF8F2] leading-[1.0] tracking-[-0.01em]">
              Let&apos;s build<br /><em className="italic text-[#0D9488]">something</em><br />remarkable.
            </h2>
          </div>

          <div>
            <p style={SANS} className="text-[15px] leading-[1.9] text-white/45 mb-10">
              Whether you need a world-class engineering team or want to explore our software products, we welcome every conversation.
            </p>
            <a href="mailto:hello@axiomlabs.io" style={SERIF}
              className="block text-[32px] font-light text-[#FAF8F2] hover:text-[#0D9488] transition-colors duration-400 border-b border-white/20 pb-4 mb-10">
              hello@axiomlabs.io
            </a>
            <div className="flex gap-4">
              <button style={SANS}
                className="text-[12px] tracking-[0.2em] uppercase bg-[#0D9488] text-white px-8 py-4 hover:bg-[#0B7B70] transition-colors duration-300 cursor-pointer border-none">
                Start a Project
              </button>
              <button style={SANS}
                className="text-[12px] tracking-[0.2em] uppercase border border-white/20 text-white/60 px-8 py-4 hover:border-white/50 hover:text-white transition-all duration-300 cursor-pointer bg-transparent">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function FooterE() {
  const cols = [
    { title: 'Products', links: ['Divemetric', 'Complyo', 'Documentation'] },
    { title: 'Services', links: ['Software Dev', 'AI & ML', 'Cloud Arch'] },
    { title: 'Company', links: ['About', 'Work', 'Contact'] },
  ];
  return (
    <footer className="pt-16 pb-10 border-t border-[#DDD8CE]" style={{ background: IVORY }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 mb-14">
          <div className="col-span-2 md:col-span-1">
            <span style={SERIF} className="text-[20px] font-light tracking-[0.15em] uppercase text-[#1C1816] block mb-4">AXIOM LABS</span>
            <p style={SANS} className="text-[13px] text-[#8A8075] leading-[1.8] max-w-[200px]">Engineering software products for complex challenges.</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={SANS} className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#1C1816] mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-3 list-none">
                {col.links.map(link => (
                  <li key={link}><a href="#" style={SANS} className="text-[13px] text-[#8A8075] hover:text-[#1C1816] transition-colors duration-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-[#DDD8CE] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p style={SANS} className="text-[12px] text-[#B0A898] tracking-[0.08em]">© 2026 Axiom Labs. All rights reserved.</p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a key={l} href="#" style={SANS} className="text-[12px] text-[#B0A898] tracking-[0.08em] hover:text-[#1C1816] transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function VariantE() {
  useScrollReveal();
  return (
    <div style={{ ...SANS, background: IVORY, color: CHARCOAL }}>
      <NavE />
      <HeroE />
      <ProductsE />
      <ServicesE />
      <TechE />
      <CasesE />
      <MarqueeE />
      <ClientsE />
      <ContactE />
      <FooterE />
    </div>
  );
}
