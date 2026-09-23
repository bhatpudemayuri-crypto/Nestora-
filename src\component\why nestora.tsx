import { User, Ruler, Sparkles, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    number: '01',
    icon: User,
    title: 'Personalized Design',
    description: 'Every project is shaped around your lifestyle, preferences and needs.',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Thoughtful Planning',
    description:
      'We make every corner purposeful while keeping the space comfortable and functional.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Timeless Aesthetics',
    description: 'We create interiors that feel elegant today and continue to feel beautiful over time.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Attention to Detail',
    description: 'From materials to finishing touches, every element is carefully considered.',
  },
];

export default function WhyNestora() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-stone-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-amber-400 tracking-[0.3em] text-xs font-medium uppercase mb-4">
            Why Nestora
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
            What we Bring to Every Space.
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            Every space has its own character. At Nestora, we combine thoughtful planning, timeless
            aesthetics and practical solutions to create interiors that feel personal and effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.number}
                className="group p-8 border border-stone-700/50 hover:border-amber-600/50 hover:bg-stone-800/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center text-amber-500 group-hover:text-amber-400 transition-colors">
                    <Icon size={26} />
                  </div>
                  <span className="font-serif text-3xl font-light text-stone-700 group-hover:text-amber-600/40 transition-colors">
                    {f.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-normal mb-3">{f.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
