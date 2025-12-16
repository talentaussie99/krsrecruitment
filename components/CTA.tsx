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
        <button 
          onClick={handleApply}
          className="bg-krs-accent text-krs-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg transform hover:-translate-y-1"
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CTA;