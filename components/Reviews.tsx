import React from 'react';
import { Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Data Specialist",
    content: "KRS helped me get a reliable job opportunity with clear support and guidance. The process was seamless."
  },
  {
    id: 2,
    name: "James L.",
    role: "Technical Support",
    content: "Very professional agency. They connected me with a great company in Sydney that values my skills."
  },
  {
    id: 3,
    name: "Anita R.",
    role: "HR Analyst",
    content: "Transparent communication and excellent support throughout the relocation and hiring process."
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-krs-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-krs-accent font-bold uppercase tracking-wider text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold">What Our Talent Says</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative">
              <Quote className="absolute top-6 left-6 text-krs-accent w-8 h-8 opacity-50" />
              <p className="mt-8 mb-6 text-gray-300 italic leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-krs-accent flex items-center justify-center text-krs-blue font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{review.name}</h5>
                  <span className="text-sm text-gray-400">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;