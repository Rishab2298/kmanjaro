/**
 * Contact Page — Kilimanjaro Innovation Labs
 * Light mode — matches VariantM light sections (Hero, TechStack, Practices).
 */
import { useState, useEffect } from 'react';
import { ArrowUpRight } from './shared.jsx';

// ── Palette ────────────────────────────────────────────────────────────────────
const BG      = '#F0FDFA';
const MIST    = '#ECFEFF';
const SURFACE = '#FFFFFF';
const TEAL    = '#0891B2';
const DTEAL   = '#164E63';
const LTEAL   = '#22D3EE';
const ABYSS   = '#071520';

const CORMORANT = { fontFamily: '"Cormorant Garamond", serif' };
const JAKARTA   = { fontFamily: '"Plus Jakarta Sans", sans-serif' };
const BOLD_J    = { ...JAKARTA, fontWeight: 700 };

function TealRule() {
  return (
    <div style={{ height: '1px', background: `linear-gradient(90deg, ${LTEAL}95, ${LTEAL}18)` }} />
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav({ onNavigateHome }) {
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
          <button onClick={onNavigateHome} className="flex items-center gap-3 cursor-pointer"
            style={{ background: 'none', border: 'none', padding: 0 }}>
            <div style={{ width: '30px', height: '30px', flexShrink: 0, background: `linear-gradient(135deg, ${TEAL} 0%, ${LTEAL} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '10px', height: '10px', background: 'rgba(255,255,255,0.95)' }} />
            </div>
            <span style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(16px, 2.5vw, 20px)', color: DTEAL, letterSpacing: '0.02em' }}>Kilimanjaro Innovation Labs</span>
          </button>

          <ul className="items-center hidden gap-1 list-none md:flex">
            {['Products', 'Process', 'Work', 'FAQ'].map(item => (
              <li key={item}>
                <button onClick={onNavigateHome}
                  style={{ ...JAKARTA, fontWeight: 400, fontSize: '13px', letterSpacing: '0.04em', color: DTEAL, background: 'none', border: 'none', cursor: 'pointer' }}
                  className="block px-4 py-2 transition-opacity duration-150 hover:opacity-100">{item}</button>
              </li>
            ))}
          </ul>

          <button
            style={{ background: `linear-gradient(135deg, ${TEAL}, #0E7490)`, color: '#fff', ...BOLD_J, fontSize: '11px', letterSpacing: '0.12em', border: 'none', boxShadow: `0 2px 16px ${TEAL}40` }}
            className="hidden md:block uppercase px-6 py-2.5 cursor-pointer hover:opacity-90 transition-opacity">
            Free Consultation
          </button>

          <button onClick={() => setMenuOpen(o => !o)}
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            style={{ background: 'transparent', border: 'none' }} aria-label="Toggle menu">
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: DTEAL, transition: 'transform 0.3s ease, opacity 0.3s ease', transform: menuOpen ? 'translateY(4.5px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: DTEAL, transition: 'opacity 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: DTEAL, transition: 'transform 0.3s ease, opacity 0.3s ease', transform: menuOpen ? 'translateY(-4.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className="fixed inset-0 z-40 md:hidden" style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}>
        <div onClick={() => setMenuOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(7,21,32,0.35)', opacity: menuOpen ? 1 : 0, transition: 'opacity 0.3s ease', backdropFilter: 'blur(4px)' }} />
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'rgba(240,253,250,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: `1px solid rgba(8,145,178,0.15)`,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
          padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {['Products', 'Process', 'Work', 'FAQ'].map(item => (
            <button key={item} onClick={() => { setMenuOpen(false); onNavigateHome(); }}
              style={{ ...JAKARTA, fontWeight: 500, fontSize: '15px', letterSpacing: '0.08em', color: DTEAL, padding: '12px 0', borderBottom: `1px solid ${TEAL}14`, background: 'none', border: 'none', borderBottom: `1px solid ${TEAL}14`, cursor: 'pointer', textAlign: 'left' }}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Form field atoms (light) ───────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.18em', color: DTEAL }} className="uppercase">
        {label}{required && <span style={{ color: TEAL, marginLeft: '4px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputBase = {
  background: SURFACE,
  border: `1px solid ${TEAL}28`,
  color: DTEAL,
  ...JAKARTA,
  fontWeight: 300,
  fontSize: '14px',
  lineHeight: 1.6,
  padding: '13px 16px',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  borderRadius: 0,
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
};

function Input({ type = 'text', placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: focused ? TEAL : `${TEAL}28`,
        boxShadow: focused ? `0 0 0 3px ${TEAL}12` : 'none',
      }}
    />
  );
}

function Select({ value, onChange, children, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBase,
          borderColor: focused ? TEAL : `${TEAL}28`,
          boxShadow: focused ? `0 0 0 3px ${TEAL}12` : 'none',
          cursor: 'pointer',
          appearance: 'none',
          WebkitAppearance: 'none',
          paddingRight: '40px',
          color: value ? DTEAL : `${DTEAL}99`,
        }}>
        {children}
      </select>
      <svg style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: `${TEAL}80` }}
        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

function Textarea({ placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={5}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: focused ? TEAL : `${TEAL}28`,
        boxShadow: focused ? `0 0 0 3px ${TEAL}12` : 'none',
        resize: 'vertical',
        minHeight: '120px',
      }}
    />
  );
}

// ── Contact form ───────────────────────────────────────────────────────────────
function ContactForm() {
  const EMPTY = { name: '', company: '', email: '', phone: '', service: '', budget: '', timeline: '', message: '' };
  const [form, setForm]           = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div style={{ width: '64px', height: '64px', background: `linear-gradient(135deg, ${TEAL}, ${LTEAL})`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(32px,5vw,52px)', lineHeight: 1, color: DTEAL, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          We'll be in touch <em style={{ fontStyle: 'italic', color: TEAL }}>shortly.</em>
        </h3>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '15px', lineHeight: 1.8, color: `${DTEAL}AA`, maxWidth: '400px', marginBottom: '36px' }}>
          Your enquiry has been received. A member of our team will respond within 1–2 business days.
        </p>
        <button onClick={() => { setForm(EMPTY); setSubmitted(false); }}
          style={{ background: 'transparent', color: TEAL, ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.14em', border: `1px solid ${TEAL}40`, padding: '12px 28px', cursor: 'pointer' }}
          className="uppercase hover:bg-cyan-50 transition-colors">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const sectionLabel = (text) => (
    <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '10px', letterSpacing: '0.26em', color: TEAL, marginBottom: '20px' }} className="uppercase flex items-center gap-3">
      <span style={{ width: '28px', height: '1px', background: `${TEAL}50`, display: 'inline-block' }} />
      {text}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Contact details */}
      <div className="mb-10">
        {sectionLabel('Contact Details')}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full Name" required>
            <Input placeholder="Jane Smith" value={form.name} onChange={set('name')} required />
          </Field>
          <Field label="Company Name" required>
            <Input placeholder="Acme Corp" value={form.company} onChange={set('company')} required />
          </Field>
          <Field label="Work Email" required>
            <Input type="email" placeholder="jane@acmecorp.com" value={form.email} onChange={set('email')} required />
          </Field>
          <Field label="Phone Number">
            <Input type="tel" placeholder="+1 (416) 000-0000" value={form.phone} onChange={set('phone')} />
          </Field>
        </div>
      </div>

      <div style={{ height: '1px', background: `${TEAL}14`, marginBottom: '32px' }} />

      {/* Engagement details */}
      <div className="mb-10">
        {sectionLabel('Engagement Details')}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-5">
          <Field label="Service of Interest" required>
            <Select value={form.service} onChange={set('service')} required>
              <option value="" disabled>Select a service...</option>
              <option value="software-product-development">Software Product Development</option>
              <option value="enterprise-it-advisory">Enterprise IT Advisory</option>
              <option value="ai-data-engineering">AI & Data Engineering</option>
              <option value="compliance-governance">Compliance & Governance</option>
              <option value="product-licensing">Product Licensing (DiveMetric / Complyo)</option>
              <option value="not-sure">Not Sure Yet — Need Guidance</option>
            </Select>
          </Field>
          <Field label="Estimated Budget">
            <Select value={form.budget} onChange={set('budget')}>
              <option value="" disabled>Select a range...</option>
              <option value="under-25k">Under $25K</option>
              <option value="25k-100k">$25K – $100K</option>
              <option value="100k-250k">$100K – $250K</option>
              <option value="250k-plus">$250K+</option>
              <option value="not-sure">Not Sure Yet</option>
            </Select>
          </Field>
          <Field label="Project Timeline">
            <Select value={form.timeline} onChange={set('timeline')}>
              <option value="" disabled>When do you need to start?</option>
              <option value="asap">As Soon As Possible</option>
              <option value="1-3-months">Within 1–3 Months</option>
              <option value="3-6-months">3–6 Months Out</option>
              <option value="6-plus-months">6+ Months Out</option>
              <option value="exploring">Just Exploring Options</option>
            </Select>
          </Field>
        </div>
        <Field label="Tell Us About Your Project" required>
          <Textarea
            placeholder="Briefly describe what you're building or where you're stuck. The more context you share, the more useful our first call will be."
            value={form.message}
            onChange={set('message')}
            required
          />
        </Field>
      </div>

      {/* Submit row */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: '12px', color: `${DTEAL}99`, letterSpacing: '0.04em' }}>
          Fields marked <span style={{ color: TEAL }}>*</span> are required · We reply within 1–2 business days
        </p>
        <button
          type="submit"
          disabled={submitting}
          style={{
            background: submitting ? `${TEAL}60` : `linear-gradient(135deg, ${TEAL} 0%, #0E7490 100%)`,
            color: '#fff',
            ...BOLD_J,
            fontSize: '11px',
            letterSpacing: '0.14em',
            border: 'none',
            padding: '14px 32px',
            cursor: submitting ? 'default' : 'pointer',
            boxShadow: submitting ? 'none' : `0 4px 28px ${TEAL}40`,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
          }}
          className="uppercase hover:opacity-90">
          {submitting ? 'Sending…' : <><span>Send Enquiry</span><ArrowUpRight /></>}
        </button>
      </div>
    </form>
  );
}

// ── Contact info sidebar (light) ───────────────────────────────────────────────
function ContactInfo() {
  const items = [
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      label: 'Email',
      value: 'contact@kilimanjarolabs.com',
      href: 'mailto:contact@kilimanjarolabs.com',
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Headquarters',
      value: 'Toronto, Ontario, Canada',
      href: null,
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: 'Response Time',
      value: '1–2 business days',
      href: null,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL, marginBottom: '16px' }} className="uppercase">Get In Touch</div>
        <h3 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.0, color: DTEAL, letterSpacing: '-0.02em' }}>
          Let's start a<br /><em style={{ fontStyle: 'italic', color: TEAL }}>conversation.</em>
        </h3>
      </div>

      <p style={{ ...JAKARTA, fontWeight: 400, fontSize: '14px', lineHeight: 1.85, color: `${DTEAL}AA` }}>
        Whether you have a fully scoped project or just an idea — we're happy to listen. No pitch, no pressure.
      </p>

      <div className="flex flex-col gap-5">
        {items.map(item => (
          <div key={item.label} className="flex items-start gap-4">
            <div style={{ width: '36px', height: '36px', flexShrink: 0, background: `${TEAL}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: TEAL }}>
              {item.icon}
            </div>
            <div>
              <div style={{ ...JAKARTA, fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', color: `${TEAL}80`, marginBottom: '4px' }} className="uppercase">{item.label}</div>
              {item.href
                ? <a href={item.href} style={{ ...JAKARTA, fontWeight: 400, fontSize: '14px', color: DTEAL, textDecoration: 'none' }} className="hover:text-cyan-600 transition-colors">{item.value}</a>
                : <span style={{ ...JAKARTA, fontWeight: 300, fontSize: '14px', color: `${DTEAL}BB` }}>{item.value}</span>
              }
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '1px', background: `${TEAL}15` }} />

      <div className="flex flex-col gap-3">
        {[
          'We sign mutual NDAs before any discovery call',
          'Fixed-scope proposals in 5 business days',
          'Fortnightly demos — you see progress in real time',
        ].map(t => (
          <div key={t} className="flex items-center gap-3">
            <span style={{ color: TEAL, fontSize: '6px', flexShrink: 0 }}>◆</span>
            <span style={{ ...JAKARTA, fontWeight: 300, fontSize: '13px', color: `${DTEAL}AA` }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer({ onNavigateHome }) {
  return (
    <footer style={{ background: DTEAL }} className="px-8 pt-10 pb-8 md:px-16">
      <div style={{ height: '1px', background: `linear-gradient(90deg, ${LTEAL}55, ${LTEAL}12)`, marginBottom: '32px' }} />
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <button onClick={onNavigateHome} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ ...CORMORANT, fontWeight: 600, fontSize: 'clamp(15px, 2vw, 18px)', color: BG, letterSpacing: '0.02em' }}>Kilimanjaro Innovation Labs</span>
        </button>
        <p style={{ ...JAKARTA, fontWeight: 300, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.08em', color: `${BG}48` }}>© 2026 Kilimanjaro Innovation Labs Inc. All rights reserved.</p>
        <div className="flex gap-8">
          {['Privacy', 'Terms', 'Products', 'Careers'].map(l => (
            <a key={l} href="#" style={{ ...JAKARTA, fontWeight: 400, fontSize: 'clamp(11px, 1.5vw, 12px)', letterSpacing: '0.06em', color: `${BG}42`, textDecoration: 'none' }} className="transition-colors hover:text-white">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function ContactPage({ onNavigateHome }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: BG, color: DTEAL, minHeight: '100vh' }}>
      <Nav onNavigateHome={onNavigateHome} />

      {/* Hero banner — light, matches HeroM */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: `radial-gradient(ellipse 75% 65% at 12% 65%, rgba(34,211,238,0.13) 0%, transparent 60%), radial-gradient(ellipse 60% 75% at 95% 12%, rgba(8,145,178,0.10) 0%, transparent 55%), ${BG}` }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${TEAL}1A 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
        {/* Orbs */}
        <div className="absolute pointer-events-none" style={{ width: '480px', height: '480px', borderRadius: '50%', background: `radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)`, filter: 'blur(48px)', top: '-120px', right: '-100px' }} />
        <div className="absolute pointer-events-none" style={{ width: '280px', height: '280px', borderRadius: '50%', background: `radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)`, filter: 'blur(36px)', bottom: '0', left: '5%' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ height: '1px', width: '48px', background: TEAL }} />
            <span style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL }} className="uppercase">Contact Us</span>
          </div>
          <h1 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(48px,8vw,110px)', lineHeight: 0.92, letterSpacing: '-0.03em', color: DTEAL }}>
            Start a project.<br />
            <em style={{ fontStyle: 'italic', color: TEAL }}>Get a response.</em>
          </h1>
          <p style={{ ...JAKARTA, fontWeight: 400, fontSize: 'clamp(14px,2vw,17px)', lineHeight: 1.85, color: DTEAL, maxWidth: '480px', marginTop: '28px' }}>
            Fill out the form below and we'll get back to you within 1–2 business days with a clear path forward.
          </p>
        </div>

        <div className="relative z-10 mt-16"><TealRule /></div>
      </section>

      {/* Main content */}
      <section className="relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse 55% 65% at 100% 0%, rgba(34,211,238,0.09) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(8,145,178,0.07) 0%, transparent 55%), linear-gradient(180deg, ${MIST} 0%, ${BG} 100%)` }}>
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(${TEAL}06 1px, transparent 1px), linear-gradient(90deg, ${TEAL}06 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[340px_1fr]">

            {/* Left — info */}
            <ContactInfo />

            {/* Right — form card */}
            <div style={{
              background: SURFACE,
              borderTop: `3px solid ${TEAL}`,
              borderRight: `1px solid ${TEAL}18`,
              borderBottom: `1px solid ${TEAL}18`,
              borderLeft: `1px solid ${TEAL}18`,
              padding: 'clamp(24px,4vw,48px)',
              boxShadow: `0 4px 40px ${TEAL}0A`,
            }}>
              <div style={{ ...JAKARTA, fontWeight: 500, fontSize: '11px', letterSpacing: '0.28em', color: TEAL, marginBottom: '8px' }} className="uppercase">Enquiry Form</div>
              <h2 style={{ ...CORMORANT, fontWeight: 300, fontSize: 'clamp(26px,3.5vw,40px)', lineHeight: 1.0, color: DTEAL, letterSpacing: '-0.02em', marginBottom: '28px' }}>
                Tell us what you need.
              </h2>
              <div style={{ height: '1px', background: `${TEAL}14`, marginBottom: '32px' }} />
              <ContactForm />
            </div>

          </div>
        </div>

        <TealRule />
      </section>

      <Footer onNavigateHome={onNavigateHome} />

      <style>{`
        select option { background: #fff; color: #164E63; }
        input, textarea, select { box-sizing: border-box; }
        input[type="email"], input[type="tel"] { width: 100%; }
        input::placeholder, textarea::placeholder { color: rgba(22,78,99,0.50); }
        input:focus, textarea:focus, select:focus { outline: none; }
      `}</style>
    </div>
  );
}
