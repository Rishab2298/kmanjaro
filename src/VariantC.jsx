/**
 * Variant C — "Asymmetric"
 * Hero: Narrow left meta column + dominant right headline + gradient mesh bg
 * Products: Featured large curved card (dark) + compact secondary card with image
 * Services: Horizontal numbered list strips — rounded
 * Nav: Ultra-minimal (logo + CTA only) with rounded pill CTA
 */
import { useState, useEffect } from 'react';
import {
  useScrollReveal, useCountUp, ArrowUpRight, LogoMark, SectionLabel,
  PRODUCTS, SERVICES, TechStack, CaseStudies, MarqueeBand, Clients, Contact, Footer,
} from './shared.jsx';

function NavC() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${scrolled ? 'bg-[#FAFAF8]/92 backdrop-blur-xl border-b border-[#E2E2DC]' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-bold text-[17px] tracking-tight text-[#0A0A0A]">
          <div className="w-7 h-7 bg-[#0D9488] rounded-lg flex items-center justify-center text-white flex-shrink-0"><LogoMark /></div>
          Axiom Labs
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#work" className="hidden md:block text-[14px] font-medium text-[#787870] hover:text-[#0A0A0A] transition-colors">Work</a>
          <a href="#contact" className="hidden md:block text-[14px] font-medium text-[#787870] hover:text-[#0A0A0A] transition-colors">Contact</a>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0D9488] text-white text-[13px] font-semibold tracking-[0.05em] uppercase px-6 py-2.5 rounded-xl hover:bg-[#0B7B70] transition-colors cursor-pointer border-none">
            Products ↗
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroC() {
  const [count40, ref40] = useCountUp(40, '+');
  const [count12, ref12] = useCountUp(12);
  const [count2, ref2] = useCountUp(2);
  const stats = [
    { count: count40, ref: ref40, label: 'Projects Shipped' },
    { count: count12, ref: ref12, label: 'Enterprise Clients' },
    { count: count2, ref: ref2, label: 'SaaS Products' },
  ];
  return (
    <section className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #FAFAF8 0%, #F0FDFA 40%, #ECFEFF 70%, #FAFAF8 100%)' }}>

      {/* Animated orbs */}
      <div className="absolute top-[-80px] right-[10%] w-[500px] h-[500px] rounded-full bg-[#0D9488]/12 blur-[100px] animate-orb-1 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-60px] w-[350px] h-[350px] rounded-full bg-[#06B6D4]/10 blur-[80px] animate-orb-2 pointer-events-none" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.22] animate-grid"
        style={{ backgroundImage: 'linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Curved gradient left bar */}
      <div className="absolute top-0 left-0 w-[4px] h-full"
        style={{ background: 'linear-gradient(to bottom, #0D9488, #06B6D4 50%, transparent)' }} />

      {/* Faint decorative number */}
      <div className="absolute bottom-[-60px] right-0 font-mono font-light text-[#0D9488] select-none pointer-events-none leading-none opacity-[0.04]"
        style={{ fontSize: 'clamp(180px, 24vw, 360px)' }}>01</div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 min-h-screen flex items-end pb-20 pt-28 relative z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-[268px_1fr] gap-12 md:gap-20 items-end">

          {/* Left: narrow meta column */}
          <div className="flex flex-col gap-8 anim-fade-up-1">
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#0D9488] border border-[#0D9488] rounded-full px-3 py-1.5 inline-block mb-5">
                Engineering Co.
              </span>
              <p className="text-[14px] leading-[1.7] text-[#787870]">
                We engineer high-performance software products and deliver precision-built solutions for complex business challenges.
              </p>
            </div>

            {/* Stats: inline key/value */}
            <div className="flex flex-col gap-0 border-t border-[#E2E2DC]">
              {stats.map((s) => (
                <div key={s.label} ref={s.ref} className="flex items-center justify-between py-4 border-b border-[#E2E2DC]">
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#787870]">{s.label}</span>
                  <span className="text-[22px] font-extrabold tracking-tight leading-none text-[#0D9488]">{s.count}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2.5">
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-lift w-full flex items-center justify-center gap-2 bg-[#0A0A0A] text-white text-[13px] font-semibold tracking-[0.05em] uppercase px-6 py-3.5 rounded-xl hover:bg-[#0D9488] transition-colors border-none cursor-pointer">
                Explore Products <ArrowUpRight />
              </button>
              <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full text-[#0A0A0A] text-[13px] font-medium px-6 py-3.5 rounded-xl border border-[#E2E2DC] hover:border-[#0D9488] transition-colors bg-transparent cursor-pointer">
                View Work
              </button>
            </div>
          </div>

          {/* Right: dominant headline */}
          <div className="anim-fade-up-2">
            <h1 className="font-extrabold leading-[0.88] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(68px, 9vw, 148px)' }}>
              We<br />build<br />
              <em className="not-italic text-[#0D9488]">soft</em><br />
              ware.
            </h1>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-px bg-gradient-to-r from-[#0D9488] to-transparent" />
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#787870]">
                Products · Services · Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsC() {
  const [featured, secondary] = PRODUCTS;
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
            Two precision-engineered SaaS platforms solving complex industry challenges at scale.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-[1.65fr_1fr] gap-5">
          {/* Featured large card — white with image bg */}
          <div className="group bg-white hover:bg-[#F8FFFE] transition-colors duration-300 p-10 md:p-14 flex flex-col min-h-[520px] relative overflow-hidden cursor-default rounded-3xl border border-[#E2E2DC] hover:border-[#0D9488]/40 hover:shadow-2xl hover:shadow-[#0D9488]/10">
            {/* Image faded into bg */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img src={featured.image} alt="" className="w-full h-full object-cover opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500" />
            </div>
            {/* Gradient bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D9488] to-[#06B6D4] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-3xl" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="font-mono text-[11px] text-[#0D9488] tracking-[0.1em] mb-6">{featured.num}</div>
              <div className="text-[44px] md:text-[56px] font-extrabold tracking-tight leading-none mb-3">{featured.name}</div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#787870] mb-6">{featured.category}</div>
              <p className="text-[16px] leading-[1.7] text-[#787870] flex-1 max-w-md">{featured.desc}</p>
              <ul className="mt-6 flex flex-col gap-2 mb-10">
                {featured.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[14px] text-[#9B9B94]">
                    <span className="w-1 h-1 bg-[#0D9488] rounded-full flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-[#E2E2DC]">
                <div className="flex gap-2 flex-wrap">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-[#F0FDFA] text-[#0D9488] border border-[#0D9488]/20">{tag}</span>
                  ))}
                </div>
                <a href="#" className="w-9 h-9 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white hover:bg-[#0D9488] hover:rotate-[-45deg] transition-all duration-200 flex-shrink-0">
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary compact card — dark with image */}
          <div className="group bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-300 flex flex-col min-h-[520px] relative overflow-hidden cursor-default rounded-3xl border border-white/5">
            {/* Image as top half */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <img src={secondary.image} alt=""
                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]" />
            </div>
            <div className="relative p-10 flex flex-col flex-1">
              <div className="absolute inset-0"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(13,148,136,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="font-mono text-[11px] text-[#0D9488] tracking-[0.1em] mb-4">{secondary.num}</div>
                <div className="text-[32px] font-extrabold tracking-tight leading-none mb-3 text-white">{secondary.name}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40 mb-6">{secondary.category}</div>
                <p className="text-[14px] leading-[1.7] text-white/55 flex-1">{secondary.desc}</p>
                <ul className="mt-6 flex flex-col gap-2 mb-8">
                  {secondary.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12px] text-white/40">
                      <span className="w-1 h-1 bg-[#0D9488] rounded-full flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex gap-2 flex-wrap">
                    {secondary.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="w-9 h-9 rounded-xl bg-[#0D9488] flex items-center justify-center text-white hover:rotate-[-45deg] transition-all duration-200 flex-shrink-0">
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesC() {
  return (
    <section id="services" className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5F5F2 0%, #EEF9F8 100%)' }}>
      <div className="absolute top-0 right-[-120px] w-[500px] h-[500px] rounded-full bg-[#0D9488]/6 blur-[100px] animate-orb-3 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <SectionLabel>03 / Engineering Services</SectionLabel>
            <h2 className="reveal text-[clamp(34px,4vw,56px)] font-extrabold tracking-tight leading-[1.05]">What we<br />deliver.</h2>
          </div>
          <p className="reveal reveal-delay text-[16px] leading-[1.7] text-[#787870] md:pt-6">
            End-to-end engineering services across the full technology stack. Methodical execution, every engagement.
          </p>
        </div>
        {/* Rounded horizontal strips */}
        <div className="reveal flex flex-col gap-3">
          {SERVICES.map((s) => (
            <div key={s.num}
              className="group bg-white hover:bg-[#F0FDFA] transition-all duration-200 cursor-default rounded-2xl border border-[#E2E2DC] hover:border-[#0D9488]/40 hover:shadow-md hover:shadow-[#0D9488]/8">
              <div className="grid grid-cols-[52px_1fr_auto] md:grid-cols-[80px_220px_1fr_56px] gap-6 md:gap-10 items-center px-8 md:px-10 py-7">
                <span className="font-mono text-[12px] text-[#0D9488] font-medium">{s.num}</span>
                <h3 className="text-[16px] md:text-[18px] font-bold tracking-tight">{s.name}</h3>
                <p className="text-[14px] leading-[1.65] text-[#787870] hidden md:block">{s.desc}</p>
                <a href="#"
                  className="w-10 h-10 rounded-xl bg-[#F5F5F2] border border-[#E2E2DC] group-hover:bg-[#0D9488] group-hover:border-[#0D9488] flex items-center justify-center text-[#787870] group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-200 flex-shrink-0">
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VariantC() {
  useScrollReveal();
  return (
    <div className="bg-[#FAFAF8] text-[#0A0A0A] font-sans">
      <NavC />
      <HeroC />
      <ProductsC />
      <ServicesC />
      <TechStack />
      <CaseStudies />
      <MarqueeBand />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
