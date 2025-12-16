import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';

const MigrationBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to roughly 45 days from now
    // For a real app, this would be a fixed timestamp
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45); 

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-krs-accent text-krs-blue text-xs md:text-sm font-medium relative z-[51] border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-center">
        
        <div className="flex items-center gap-2 text-krs-blue">
          <AlertTriangle size={16} className="fill-krs-blue/10 text-krs-blue" />
          <span className="font-bold uppercase tracking-wider">Migration Notice</span>
        </div>

        <span className="text-krs-blue/30 hidden sm:inline">|</span>

        <p className="opacity-100 font-semibold">
          We are moving to <span className="font-black underline decoration-krs-blue/30 decoration-2 underline-offset-2">krsrecruitment.org</span> in:
        </p>

        <div className="flex items-center gap-1.5 font-mono text-krs-blue font-bold bg-white/30 px-3 py-1 rounded-md border border-white/20 shadow-sm backdrop-blur-sm">
            <Clock size={14} className="mr-1 text-krs-blue/70" />
            <span className="text-krs-blue">{String(timeLeft.days).padStart(2, '0')}</span><span className="text-krs-blue/60 text-xs font-normal">d</span> :
            <span className="text-krs-blue">{String(timeLeft.hours).padStart(2, '0')}</span><span className="text-krs-blue/60 text-xs font-normal">h</span> :
            <span className="text-krs-blue">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-krs-blue/60 text-xs font-normal">m</span>
        </div>
      </div>
    </div>
  );
};

export default MigrationBanner;