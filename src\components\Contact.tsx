import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase, type ConsultationInsert } from '@/lib/supabase';

const projectTypes = [
  'Residential Interior Design',
  'Commercial Interior Design',
  'Space Planning',
  'Lighting Design',
  'Colour & Material Consultation',
  'Furniture & Styling',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMsg('');

    const payload: ConsultationInsert = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (form.phone.trim()) payload.phone = form.phone.trim();
    if (form.project_type) payload.project_type = form.project_type;

    const { error } = await supabase.from('consultation_requests').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', project_type: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — info */}
        <div>
          <p className="text-amber-700 tracking-[0.3em] text-xs font-medium uppercase mb-4">
            Start a Project
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-5">
            Let's create your space.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-md">
            Tell us a little about your project and our design team will get in touch to discuss your
            ideas, requirements and possibilities.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center bg-amber-700/10 text-amber-700 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Email</p>
                <p className="text-stone-800">hello@nestora.example</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center bg-amber-700/10 text-amber-700 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Location</p>
                <p className="text-stone-800">Chhatrapati Sambhaji Nagar, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center bg-amber-700/10 text-amber-700 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Working Hours</p>
                <p className="text-stone-800">Monday – Saturday · 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center bg-green-50 text-green-600 rounded-full mb-6">
                <CheckCircle size={36} />
              </div>
              <h3 className="font-serif text-2xl font-light text-stone-900 mb-3">Thank You!</h3>
              <p className="text-stone-600 max-w-sm">
                Your consultation request has been received. Our team will contact you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-medium uppercase tracking-wide text-amber-700 hover:text-amber-800 underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label htmlFor="project_type" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    value={form.project_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                  >
                    <option value="">Select a service</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:border-amber-700 focus:bg-white transition-colors resize-none"
                  placeholder="Share your ideas, space details, timeline, budget range..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-stone-50 text-sm font-medium tracking-wide uppercase hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
