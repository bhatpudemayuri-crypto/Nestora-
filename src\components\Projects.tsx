import { useState } from 'react';

type Project = {
  title: string;
  category: 'Residential' | 'Commercial';
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: 'Modern Residence',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A contemporary home blending clean lines with warm, inviting textures.',
  },
  {
    title: 'Urban Café',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A stylish café interior designed for comfort and social connection.',
  },
  {
    title: 'Minimal Home',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Minimalist living with a focus on natural light and serene simplicity.',
  },
  {
    title: 'Elegant Bedroom',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A restful retreat with soft tones and layered ambient lighting.',
  },
  {
    title: 'Modern Kitchen',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/8142046/pexels-photo-8142046.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A functional yet elegant kitchen with marble finishes and warm wood.',
  },
  {
    title: 'Refined Restaurant',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/5865422/pexels-photo-5865422.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'An intimate dining space balancing elegance and modern comfort.',
  },
];

const filters = ['All', 'Residential', 'Commercial'] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-amber-700 tracking-[0.3em] text-xs font-medium uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-5">
            Featured Projects
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
            A selection of thoughtfully designed spaces where comfort, functionality and personal
            style come together.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                active === f
                  ? 'bg-stone-900 text-stone-50'
                  : 'bg-transparent text-stone-600 border border-stone-300 hover:border-stone-900 hover:text-stone-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-amber-200 text-xs uppercase tracking-[0.25em] mb-2">
                  {project.category} Interior
                </p>
                <h3 className="font-serif text-2xl font-light mb-2">{project.title}</h3>
                <p className="text-stone-200/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
