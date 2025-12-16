import React from 'react';
import { ShieldCheck, Database, Globe, UserCheck } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    { icon: ShieldCheck, title: "Reliable & Professional", desc: "Trusted by top employers in Australia." },
    { icon: Database, title: "Data-Focused", desc: "Expert handling of workforce analytics." },
    { icon: Globe, title: "Australia-Based", desc: "Direct opportunities in major AU cities." },
    { icon: UserCheck, title: "Talent Distribution", desc: "Matching the right skills to the right role." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-krs-accent font-bold uppercase tracking-wider text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-krs-blue mb-6">About KRS</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              KRS is a professional job placement agency that connects jobseekers with trusted employers. 
              We focus on delivering reliable talent distribution, accurate data handling, and strong 
              technical support to meet workforce needs in Australia.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: to bridge the gap between skilled professionals and companies 
              seeking growth, ensuring a smooth, transparent, and efficient hiring process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-krs-blue" />
                </div>
                <h4 className="font-bold text-krs-blue mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;