import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Careers from './components/Careers';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-800 bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Careers />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;