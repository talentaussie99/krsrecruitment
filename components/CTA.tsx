import React from 'react';

const CTA: React.FC = () => {
  const handleApply = () => {
      // Logic to open application form would go here
      alert("Application portal would open here.");
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-krs-blue mb-6">
          Ready to start your career journey with KRS?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Take the next step towards a professional career in Australia. 
          Our team is ready to assist you.
        </p>
  
      </div>
    </section>
  );
};

export default CTA;
