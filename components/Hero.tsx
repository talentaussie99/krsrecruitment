import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCareers = () => {
    const element = document.getElementById('careers');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - City Skyline representing Australia */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Using a high quality city skyline placeholder
          backgroundImage: 'url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-krs-blue/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-krs-blue/90 via-transparent to-transparent"></div>

        {/* Australian Flag Watermark - Subtle Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/2560px-Flag_of_Australia_%28converted%29.svg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-fade-in-down shadow-lg">
          <div className="w-6 h-4 relative rounded shadow-sm overflow-hidden">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" 
               alt="Australia Flag" 
               className="w-full h-full object-cover"
             />
          </div>
          <span className="text-sm font-bold tracking-wide uppercase text-white drop-shadow-sm">Australia</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Connecting Talent with <br className="hidden md:block"/>
          Career Opportunities in <span className="text-krs-accent">Australia</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 font-light drop-shadow-md">
          Reliable, transparent, and dedicated to your success. 
          We bridge the gap between skilled professionals and trusted employers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToCareers}
            className="group bg-krs-accent text-krs-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;