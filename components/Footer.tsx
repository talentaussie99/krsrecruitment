import React from 'react';

const Footer: React.FC = () => {
  const services = [
    "Customer Review Management",
    "Data Support Services",
    "Technical Support"
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <span className="text-3xl font-bold text-white tracking-tighter block">
              KRS Recruitment
            </span>
            <p className="text-sm max-w-xs leading-relaxed text-slate-500">
              A professional job placement agency connecting talented individuals with trusted opportunities across Australia.
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    onClick={(e) => handleScroll(e, 'services')}
                    className="hover:text-krs-accent transition-colors duration-200 block w-fit"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Locate</h4>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
               <div className="w-6 h-4 relative rounded shadow-sm overflow-hidden opacity-90">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png" 
                   alt="Australia Flag" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <span className="text-base font-medium text-slate-200">Australia</span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2025 KRS Recruitment. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;