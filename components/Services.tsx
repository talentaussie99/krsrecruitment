import React from 'react';
import { MessageSquareQuote, DatabaseZap, MonitorSmartphone } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Customer Review Management",
    description: "Professionally managing and supporting client and talent feedback to ensure continuous improvement and satisfaction.",
    icon: MessageSquareQuote
  },
  {
    title: "Data Support Services",
    description: "Comprehensive data processing, validation, and analytical support tailored for corporate requirements.",
    icon: DatabaseZap
  },
  {
    title: "Technical Support",
    description: "Operational technical assistance for company systems, ensuring data integrity and smooth workflow.",
    icon: MonitorSmartphone
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-krs-accent font-bold uppercase tracking-wider text-sm mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-krs-blue">Our Services</h3>
          <div className="w-20 h-1 bg-krs-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-krs-blue transition-colors duration-300">
                <service.icon className="w-8 h-8 text-krs-blue group-hover:text-krs-accent transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;