import { ArrowRight } from 'lucide-react';

const heroImg =
  'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-amber-200/90 tracking-[0.4em] text-xs md:text-sm font-medium uppercase mb-6 animate-[fadeUp_0.8s_ease-out]">
          Interior Design Studio
        </p>
        <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] max-w-4xl animate-[fadeUp_1s_ease-out]">
          Where Spaces Become
          <span className="block italic font-normal text-amber-100">Stories.</span>
        </h1>
        <p className="mt-8 text-stone-200/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed animate-[fadeUp_1.2s_ease-out]">
          Thoughtfully designed spaces, made to inspire the way you live. We design spaces that feel
          beautiful, personal and truly yours.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-[fadeUp_1.4s_ease-out]">
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-700 text-white text-sm font-medium tracking-wide uppercase hover:bg-amber-600 transition-colors duration-300"
          >
            Explore Our Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center justify-center px-8 py-4 border border-white/60 text-white text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-stone-900 transition-colors duration-300"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/40 animate-[scrollHint_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
