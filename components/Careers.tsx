import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { JobPosition } from '../types';

const jobs: JobPosition[] = [
  { 
    title: "Data Support & Information Entry", 
    location: "Sydney, AU", 
    type: "Full-time / Part-time • Remote / On-site",
    applyUrl: "https://form.jotform.com/hrtalentaussie/krs-form-application"
  },
  { 
    title: "Data Processor & HR Analytics", 
    location: "Melbourne & Brisbane, AU", 
    type: "Full-time / Part-time • Remote / On-site",
    applyUrl: "https://form.jotform.com/hrtalentaussie/krs-form-recruitment"
  },
];

const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-krs-accent font-bold uppercase tracking-wider text-sm mb-2">Join Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-krs-blue mb-4">Career Opportunities</h3>
            <p className="text-gray-600 max-w-xl">
              Join KRS and grow your career with professional opportunities in Australia. 
              We are constantly looking for dedicated talent.
            </p>
          </div>
        </div>

        {/* Updated grid for 2 items: Centered and wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {jobs.map((job, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-8 hover:border-krs-blue hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between h-full transform hover:-translate-y-1">
              <div>
                <div className="flex items-center gap-2 mb-4 text-gray-500 font-medium text-sm uppercase tracking-wide">
                  <Briefcase size={16} className="text-krs-accent" />
                  <span>{job.type}</span>
                </div>
                <h4 className="text-2xl font-bold text-krs-blue mb-3">{job.title}</h4>
                <div className="flex items-center gap-2 text-gray-600 mb-8">
                  <MapPin size={18} className="text-gray-400" />
                  <span>{job.location}</span>
                </div>
              </div>
              <a 
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 border-2 border-krs-blue text-krs-blue font-bold rounded-lg hover:bg-krs-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
