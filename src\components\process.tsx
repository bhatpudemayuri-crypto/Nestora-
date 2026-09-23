import { Search, PenTool, RefreshCw, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'We understand your space, lifestyle, preferences and design requirements.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description:
      'We develop layouts, colours, materials and design ideas that bring your vision together.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Refine',
    description: 'We review the details with you and refine the design until everything feels right.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Transform',
    description:
      'The final design comes together as a beautiful, functional and personalized space.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-amber-700 tracking-[0.3em] text-xs font-medium uppercase mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-stone-900">
            Our Design Process
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mt-5 leading-relaxed">
            From the first conversation to the final details, we make the design journey simple and
            thoughtful.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-stone-300" />
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative inline-flex w-24 h-24 items-center justify-center bg-stone-100 border-2 border-stone-300 rounded-full mx-auto mb-6 group hover:border-amber-700 hover:bg-amber-700 transition-all duration-300">
                  <Icon size={28} className="text-stone-700 group-hover:text-white transition-colors" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-stone-900 text-stone-50 text-xs font-medium rounded-full">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-normal text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
