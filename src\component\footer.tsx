import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.2em] text-stone-50 mb-4">NESTORA</h3>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              A modern interior design studio where thoughtful ideas meet timeless style. We create
              spaces that feel warm, elegant and truly personal.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-stone-700 hover:border-amber-600 hover:text-amber-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-stone-700 hover:border-amber-600 hover:text-amber-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-stone-700 hover:border-amber-600 hover:text-amber-500 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-stone-50 text-sm uppercase tracking-widest mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.href);
                    }}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-stone-50 text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>hello@nestora.example</li>
              <li>Chhatrapati Sambhaji Nagar, India</li>
              <li>Mon – Sat · 10 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Nestora Interior Design Studio. All rights reserved.
          </p>
          <p className="text-sm text-stone-500">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
