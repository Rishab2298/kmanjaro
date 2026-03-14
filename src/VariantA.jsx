/**
 * Variant A — "Bisected"
 * Hero: Two-panel split (white content left / dark stats right)
 * Products: Full-width horizontal rows with images + rounded cards
 * Services: 4-col dark grid with curved cards
 * Nav: Standard (logo | links | CTA)
 */
import { useState, useEffect } from 'react';
import {
  useScrollReveal, useCountUp, ArrowUpRight, LogoMark, SectionLabel,
  PRODUCTS, SERVICES, TechStack, CaseStudies, MarqueeBand, Clients, Contact, Footer,
} from './shared.jsx';

function NavA() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${scrolled ? 'bg-[#FAFAF8]/92 backdrop-blur-xl border-b border-[#E2E2DC]' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-bold text-[17px] tracking-[-0.02em] text-[#0A0A0A]">
          <div className="w-7 h-7 bg-[#0D9488] rounded-lg flex items-center justify-center text-white flex-shrink-0"><LogoMark /></div>
          Axiom Labs
        </a>
        <ul className="hidden md:flex items-center gap-9 list-none">
          {['Products', 'Services', 'Work', 'About'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-[14px] font-medium text-[#787870] hover:text-[#0A0A0A] transition-colors duration-200">{item}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#0A0A0A] text-white text-[13px] font-semibold tracking-[0.05em] uppercase px-6 py-2.5 rounded-xl hover:bg-[#0D9488] transition-colors duration-200 cursor-pointer border-none">
          Get Started
        </button>
      </div>
    </nav>
  );
}

function HeroA() {
  const [count40, ref40] = useCountUp(40, '+');
  const [count12, ref12] = useCountUp(12);
  const [count2, ref2] = useCountUp(2);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const handleMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setGlow({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  const stats = [
    { count: count40, ref: ref40, label: 'Projects Shipped' },
    { count: count12, ref: ref12, label: 'Enterprise Clients' },
    { count: count2, ref: ref2, label: 'SaaS Products' },
  ];
  return (
    <section className="min-h-screen grid md:grid-cols-[1.15fr_0.85fr]">
      {/* Left — white panel with gradient mesh */}
      <div className="relative flex flex-col justify-end pb-20 pt-36 px-8 md:px-16 overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #FAFAF8 0%, #F0FDFA 50%, #ECFEFF 100%)' }}>

        {/* Animated orbs */}
        <div className="absolute top-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full bg-[#0D9488]/10 blur-[80px] animate-orb-1 pointer-events-none" />
        <div className="absolute bottom-[-40px] left-[-40px] w-[280px] h-[280px] rounded-full bg-[#06B6D4]/8 blur-[60px] animate-orb-3 pointer-events-none" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.25] animate-grid"
          style={{ backgroundImage: 'linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Curved left accent bar */}
        <div className="absolute top-0 left-0 w-[4px] h-full"
          style={{ background: 'linear-gradient(to bottom, #0D9488, #06B6D4, #0D9488)' }} />

        <div className="relative z-10 anim-fade-up-2">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#0D9488] border border-[#0D9488] rounded-full px-3 py-1.5">Engineering Company</span>
            <div className="w-px h-4 bg-[#D8D8D2]" />
            <span className="font-mono text-[11px] text-[#787870] tracking-[0.1em]">Est. 2019</span>
          </div>
          <h1 className="font-extrabold leading-[0.93] tracking-[-0.045em]" style={{ fontSize: 'clamp(52px, 5.5vw, 96px)' }}>
            We build<br /><em className="not-italic text-[#0D9488]">software</em><br />platforms.
          </h1>
          <div className="mt-14 pt-8 border-t border-[#E2E2DC] flex flex-col gap-6">
            <p className="text-[16px] leading-[1.7] text-[#787870] max-w-md">
              Axiom Labs engineers high-performance software products and delivers precision-built solutions for complex business challenges.
            </p>
            <div className="flex gap-3">
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-lift flex items-center gap-2 bg-[#0A0A0A] text-white text-[13px] font-semibold tracking-[0.05em] uppercase px-6 py-3.5 rounded-xl hover:bg-[#0D9488] transition-colors duration-200 border-none cursor-pointer">
                Explore Products <ArrowUpRight />
              </button>
              <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#0A0A0A] text-[13px] font-medium px-5 py-3.5 rounded-xl border border-[#E2E2DC] hover:border-[#0D9488] transition-colors duration-200 bg-transparent cursor-pointer">
                View Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right — dark stats panel with ambient glow */}
      <div onMouseMove={handleMouse}
        className="hidden md:flex relative overflow-hidden flex-col justify-between p-12 lg:p-16"
        style={{ background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(13,148,136,0.15), transparent 60%), #0A0A0A` }}>
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
        {/* Teal gradient right edge */}
        <div className="absolute top-0 right-0 w-[3px] h-full"
          style={{ background: 'linear-gradient(to bottom, transparent, #0D9488, transparent)' }} />

        {/* Stats vertical stack */}
        <div className="relative z-10 pt-20">
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/25 mb-10">Company Metrics</div>
          <div className="flex flex-col gap-0">
            {stats.map((s, i) => (
              <div key={s.label} ref={s.ref} className={`py-8 px-6 rounded-2xl ${i < 2 ? 'border-b border-white/10' : ''}`}>
                <div className="text-[52px] font-extrabold tracking-tight leading-none text-white">{s.count}</div>
                <div className="font-mono text-[10px] text-white/35 tracking-[0.1em] uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/15">Axiom Labs × 2026</div>
          <div className="font-mono font-light text-[#0D9488] opacity-[0.12] leading-none select-none" style={{ fontSize: '100px' }}>01</div>
        </div>
      </div>
    </section>
  );
}

function ProductsA() {
  return (
    <section id="products" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FFFE] to-white pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <SectionLabel>02 / Product Ecosystem</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">Our software<br />products.</h2>
          </div>
          <p className="reveal reveal-delay text-[16px] leading-[1.7] text-[#787870] md:pt-6">
            Precision-engineered SaaS platforms designed to solve complex industry challenges at scale.
          </p>
        </div>
        {/* Curved card rows */}
        <div className="reveal flex flex-col gap-5">
          {PRODUCTS.map((p) => (
            <div key={p.num}
              className="group rounded-3xl overflow-hidden border border-[#E2E2DC] hover:border-[#0D9488]/40 hover:shadow-xl hover:shadow-[#0D9488]/8 transition-all duration-400 cursor-default relative bg-white">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">
                {/* Content */}
                <div className="p-8 md:p-10 relative overflow-hidden">
                  {/* Bottom gradient bar on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D9488] to-[#06B6D4] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <div className="grid grid-cols-1 md:grid-cols-[196px_1fr_220px] gap-8 md:gap-12 items-start">
                    <div>
                      <div className="font-mono text-[11px] text-[#0D9488] tracking-[0.1em] mb-3">{p.num}</div>
                      <div className="text-[28px] font-extrabold tracking-tight leading-none mb-2">{p.name}</div>
                      <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#787870]">{p.category}</div>
                    </div>
                    <div>
                      <p className="text-[15px] leading-[1.7] text-[#787870] mb-5">{p.desc}</p>
                      <ul className="flex flex-col gap-1.5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-[13px] text-[#9B9B94]">
                            <span className="w-1 h-1 bg-[#0D9488] rounded-full flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col items-start md:items-end justify-between gap-6">
                      <div className="flex gap-2 flex-wrap md:justify-end">
                        {p.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-[#F0FDFA] text-[#0D9488] border border-[#0D9488]/20">{tag}</span>
                        ))}
                      </div>
                      <a href="#" className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0A0A0A] hover:text-[#0D9488] transition-colors duration-200">
                        Explore <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Image panel */}
                <div className="relative hidden md:block overflow-hidden">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ minHeight: '220px' }} />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesA() {
  return (
    <section id="services" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5F5F2 0%, #EEF9F8 50%, #F5F5F2 100%)' }}>
      {/* Decorative ring */}
      <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] rounded-full border border-[#0D9488]/10 pointer-events-none" />
      <div className="absolute top-1/2 right-[-200px] w-[400px] h-[400px] rounded-full border border-[#0D9488]/8 pointer-events-none" style={{ marginTop: '100px' }} />

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <SectionLabel>03 / Engineering Services</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">What we<br />deliver.</h2>
          </div>
          <p className="reveal reveal-delay text-[16px] leading-[1.7] text-[#787870] md:pt-6">
            End-to-end engineering services across the full technology stack. Deep expertise and methodical execution.
          </p>
        </div>
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <div key={s.num}
              className="group bg-[#0A0A0A] p-8 md:p-10 text-white hover:bg-[#0D9488] transition-all duration-300 cursor-default rounded-3xl relative overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D9488] to-[#06B6D4] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="block font-mono text-[11px] text-white/25 tracking-[0.1em] mb-10">{s.num}</span>
              <div className="w-10 h-10 border border-white/15 rounded-xl flex items-center justify-center mb-6 text-white/60 group-hover:text-white/80 transition-colors">
                <s.Icon />
              </div>
              <h3 className="text-[19px] font-bold tracking-tight leading-snug mb-4">{s.name}</h3>
              <p className="text-[14px] leading-[1.7] text-white/50 group-hover:text-white/75 transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VariantA() {
  useScrollReveal();
  return (
    <div className="bg-[#FAFAF8] text-[#0A0A0A] font-sans">
      <NavA />
      <HeroA />
      <ProductsA />
      <ServicesA />
      <TechStack />
      <CaseStudies />
      <MarqueeBand />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
