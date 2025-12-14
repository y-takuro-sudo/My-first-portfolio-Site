import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Works from './components/Works';
import Connect from './components/Connect';
import Others from './components/Others';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans antialiased bg-black text-white selection:bg-white selection:text-black">
      <Header />
      
      <main className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <section id="top" className="pt-20 pb-10">
          <Hero />
        </section>

        <section id="profile" className="py-20 border-t border-neutral-900">
          <Profile />
        </section>

        <section id="works" className="py-20 border-t border-neutral-900">
          <Works />
        </section>

        <section id="connect" className="py-20 border-t border-neutral-900">
          <Connect />
        </section>

        <section id="others" className="py-20 border-t border-neutral-900">
          <Others />
        </section>

        <section id="contact" className="py-20 border-t border-neutral-900">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-neutral-900 hover:bg-white hover:text-black transition-all duration-300 z-50 border border-neutral-800 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default App;