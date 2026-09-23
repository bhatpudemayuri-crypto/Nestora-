import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyNestora from '@/components/WhyNestora';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyNestora />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
