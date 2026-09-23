import { Home, Building2, LayoutGrid, Lightbulb, Palette, Armchair } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    description:
      'From apartments to complete homes, we create personalized interiors that balance comfort, character and everyday functionality.',
  },
  {
    icon: Building2,
    title: 'Commercial Interior Design',
    description:
      'We design thoughtful workplaces, cafés, studios and retail spaces that support your brand and the people who use them.',
  },
  {
    icon: LayoutGrid,
    title: 'Space Planning',
    description:
      'We study your layout, movement and furniture needs to make every square foot feel purposeful and comfortable.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description:
      'From ambient to accent lighting, we plan layers of light that bring warmth, depth and focus to every room.',
  },
  {
    icon: Palette,
    title: 'Colour & Material Consultation',
    description:
      'We curate coordinated colours, textures, finishes and materials to create a cohesive visual identity.',
  },
  {
    icon: Armchair,
    title: 'Furniture & Styling',
    description:
      'We help select furniture, décor, textiles and finishing details that complete the space without overwhelming it.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-amber-700 tracking-[0.3em] text-xs font-medium uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-stone-900">
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-stone-50 p-10 hover:bg-white transition-colors duration-300 cursor-default"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-amber-700/10 text-amber-700 mb-6 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="font-serif text-xl font-normal text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
