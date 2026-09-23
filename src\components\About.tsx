const aboutImg =
  'https://images.pexels.com/photos/17269118/pexels-photo-17269118.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Thoughtful interior space designed by Nestora"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-stone-900 text-stone-50 px-8 py-6 max-w-[200px]">
            <p className="font-serif text-3xl font-light">10+</p>
            <p className="text-xs uppercase tracking-widest text-stone-300 mt-1">
              Years of Design Excellence
            </p>
          </div>
        </div>

        <div>
          <p className="text-amber-700 tracking-[0.3em] text-xs font-medium uppercase mb-4">
            About Nestora
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 leading-tight mb-6">
            Thoughtful design for meaningful spaces.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-5">
            Nestora is a modern interior design studio where thoughtful ideas meet timeless style.
            We create spaces that feel warm, elegant and truly personal — designed not just to look
            beautiful, but to feel like home.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            From the first idea to the final detail, we focus on understanding the way you live, work
            and connect with your space. With a balance of creativity, comfort and functionality,
            Nestora transforms ordinary spaces into meaningful places that tell your story.
          </p>
          <div className="flex gap-12">
            <div>
              <p className="font-serif text-4xl font-light text-stone-900">200+</p>
              <p className="text-sm text-stone-500 mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light text-stone-900">98%</p>
              <p className="text-sm text-stone-500 mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
