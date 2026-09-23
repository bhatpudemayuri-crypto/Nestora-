import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className={`text-2xl font-serif tracking-[0.2em] font-semibold transition-colors duration-500 ${
            scrolled ? 'text-stone-900' : 'text-white'
          }`}
        >
          NESTORA
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group ${
                  scrolled ? 'text-stone-700 hover:text-stone-950' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-700 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#contact');
          }}
          className={`hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide uppercase border transition-all duration-300 ${
            scrolled
              ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50'
              : 'border-white/70 text-white hover:bg-white hover:text-stone-900'
          }`}
        >
          Book a Consultation
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? 'text-stone-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-stone-50 ${
          open ? 'max-h-96 shadow-lg' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block py-3 text-stone-800 text-sm font-medium tracking-wide uppercase border-b border-stone-200 last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="block mt-4 text-center py-3 bg-stone-900 text-stone-50 text-sm font-medium tracking-wide uppercase"
            >
              Book a Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
