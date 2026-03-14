/**
 * Variant B — "Editorial Centered"
 * Hero: Full-width centered with gradient mesh + floating orbs
 * Products: Curved list rows with image thumbnails
 * Services: 2×2 rounded cards with gradient accents
 * Nav: Centered logo, links split left/right
 */
import { useState, useEffect } from 'react';
import {
  useScrollReveal, useCountUp, ArrowUpRight, LogoMark, SectionLabel,
  PRODUCTS, SERVICES, TechStack, CaseStudies, MarqueeBand, Clients, Contact, Footer,
} from './shared.jsx';

function NavB() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${scrolled ? 'bg-white/92 backdrop-blur-xl border-b border-[#E2E2DC]' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 h-full grid grid-cols-3 items-center">
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#products" className="text-[14px] font-medium text-[#787870] hover:text-[#0A0A0A] transition-colors">Products</a></li>
          <li><a href="#services" className="text-[14px] font-medium text-[#787870] hover:text-[#0A0A0A] transition-colors">Services</a></li>
        </ul>
        <div className="flex justify-center">
          <a href="#" className="flex items-center gap-2.5 font-bold text-[17px] tracking-tight text-[#0A0A0A]">
            <div className="w-7 h-7 bg-[#0D9488] rounded-lg flex items-center justify-center text-white flex-shrink-0"><LogoMark /></div>
            Axiom Labs
          </a>
        </div>
        <div className="hidden md:flex items-center justify-end gap-8">
          <a href="#work" className="text-[14px] font-medium text-[#787870] hover:text-[#0A0A0A] transition-colors">Work</a>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0A0A0A] text-white text-[13px] font-semibold tracking-[0.05em] uppercase px-6 py-2.5 rounded-xl hover:bg-[#0D9488] transition-colors cursor-pointer border-none">
            Get Started
          </button>
        </div>
        <div className="md:hidden" />
      </div>
    </nav>
  );
}

function HeroB() {
  const [count40, ref40] = useCountUp(40, '+');
  const [count12, ref12] = useCountUp(12);
  const [count2, ref2] = useCountUp(2);
  const stats = [
    { count: count40, ref: ref40, label: 'Projects' },
    { count: count12, ref: ref12, label: 'Clients' },
    { count: count2, ref: ref2, label: 'Products' },
  ];
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F0FDFA 35%, #ECFEFF 65%, #FFFFFF 100%)' }}>

      {/* Large ambient orbs */}
      <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[#0D9488]/12 blur-[100px] animate-orb-1 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[450px] h-[450px] rounded-full bg-[#06B6D4]/12 blur-[90px] animate-orb-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#0D9488]/6 blur-[60px] animate-orb-3 pointer-events-none" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.12] animate-grid"
        style={{ backgroundImage: 'linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Curved arc decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#0D9488]/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-[#0D9488]/5 pointer-events-none" />

      {/* Horizontal rules */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0D9488]/20 to-transparent" style={{ top: '30%' }} />
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0D9488]/20 to-transparent" style={{ top: '70%' }} />

      {/* Vertical side annotations */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:block">
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C8C8C2]">Technology Company</div>
      </div>
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:block">
        <div style={{ writingMode: 'vertical-rl' }}
          className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#C8C8C2]">Est. 2019</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-12 md:px-20 w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12 anim-fade-up-1">
          <div className="h-px bg-gradient-to-r from-transparent to-[#0D9488] w-16 flex-shrink-0" />
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#0D9488] whitespace-nowrap">
            Engineering Company · Est. 2019
          </span>
          <div className="h-px bg-gradient-to-l from-transparent to-[#0D9488] w-16 flex-shrink-0" />
        </div>

        <h1 className="font-extrabold tracking-[-0.05em] leading-[0.88] mb-14 anim-fade-up-2"
          style={{ fontSize: 'clamp(60px, 9.5vw, 140px)' }}>
          We build<br />
          <em className="not-italic text-[#0D9488]">software</em><br />
          platforms.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-[#E2E2DC] text-left anim-fade-up-3">
          <p className="text-[15px] leading-[1.7] text-[#787870]">
            Axiom Labs engineers high-performance software products and delivers precision-built solutions for complex business challenges.
          </p>
          <div className="flex gap-3 items-start md:justify-center">
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-lift flex items-center gap-2 bg-[#0A0A0A] text-white text-[13px] font-semibold tracking-[0.05em] uppercase px-6 py-3.5 rounded-xl hover:bg-[#0D9488] transition-colors border-none cursor-pointer">
              Products <ArrowUpRight />
            </button>
            <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[#0A0A0A] text-[13px] font-medium px-5 py-3.5 rounded-xl border border-[#E2E2DC] hover:border-[#0D9488] transition-colors bg-transparent cursor-pointer">
              Work
            </button>
          </div>
          <div className="flex gap-10 md:justify-end items-start flex-wrap">
            {stats.map((s) => (
              <div key={s.label} ref={s.ref} className="text-right">
                <div className="text-[32px] font-extrabold tracking-tight leading-none text-[#0D9488]">{s.count}</div>
                <div className="font-mono text-[10px] text-[#787870] tracking-[0.1em] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsB() {
  return (
    <section id="products" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5F5F2 0%, #EEF9F8 100%)' }}>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0D9488]/6 blur-[80px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2E2DC] gap-6">
          <div>
            <SectionLabel>02 / Product Ecosystem</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">Our software<br />products.</h2>
          </div>
          <p className="hidden md:block reveal reveal-delay text-[14px] leading-[1.7] text-[#787870] max-w-xs text-right">
            Precision-engineered SaaS platforms designed for enterprise scale.
          </p>
        </div>
        <div className="reveal flex flex-col gap-4">
          {PRODUCTS.map((p, i) => (
            <div key={p.num}
              className="group rounded-3xl overflow-hidden bg-white border border-[#E2E2DC] hover:border-[#0D9488]/40 hover:shadow-xl hover:shadow-[#0D9488]/8 transition-all duration-400 cursor-default">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px]">
                <div className="p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr_56px] gap-8 md:gap-16 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[11px] text-[#0D9488] tracking-[0.1em]">{p.num}</span>
                      <div className="w-px h-3 bg-[#E2E2DC]" />
                      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#787870]">{p.category}</span>
                    </div>
                    <h3 className="text-[36px] font-extrabold tracking-tight leading-none mb-5 group-hover:text-[#0D9488] transition-colors duration-200">{p.name}</h3>
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-[#F0FDFA] text-[#0D9488] border border-[#0D9488]/20">{tag}</span>
                      ))}
                    </div>
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
                  <div className="flex items-start">
                    <a href="#" className="w-10 h-10 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white hover:bg-[#0D9488] hover:rotate-[-45deg] transition-all duration-200 flex-shrink-0">
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
                {/* Image */}
                <div className="relative hidden md:block overflow-hidden">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ minHeight: '240px' }} />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesB() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#0D9488]/6 blur-[100px] animate-orb-1 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <SectionLabel>03 / Engineering Services</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">What we<br />deliver.</h2>
          </div>
          <p className="reveal reveal-delay text-[16px] leading-[1.7] text-[#787870] md:pt-6">
            End-to-end engineering services across the full technology stack. Methodical execution in every engagement.
          </p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s) => (
            <div key={s.num}
              className="group bg-[#0A0A0A] p-10 text-white hover:bg-[#0D9488] transition-all duration-300 cursor-default relative overflow-hidden min-h-[280px] flex flex-col justify-between rounded-3xl">
              {/* Gradient top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D9488] to-[#06B6D4] opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />
              {/* Oversized background numeral */}
              <div className="absolute -bottom-4 right-4 font-extrabold text-white opacity-[0.06] leading-none select-none pointer-events-none"
                style={{ fontSize: '160px' }}>
                {s.num.split('-')[1]}
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-mono text-[11px] text-white/25 tracking-[0.1em]">{s.num}</span>
                  <div className="w-8 h-8 border border-white/15 rounded-xl flex items-center justify-center text-white/60 group-hover:text-white/80 transition-colors">
                    <s.Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-[22px] font-bold tracking-tight leading-snug mb-3">{s.name}</h3>
                <p className="text-[14px] leading-[1.65] text-white/50 group-hover:text-white/75 transition-colors">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VariantB() {
  useScrollReveal();
  return (
    <div className="bg-white text-[#0A0A0A] font-sans">
      <NavB />
      <HeroB />
      <ProductsB />
      <ServicesB />
      <TechStack />
      <CaseStudies />
      <MarqueeBand />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
