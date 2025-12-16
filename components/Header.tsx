import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import MigrationBanner from './MigrationBanner';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About KRS', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Careers', href: '#careers' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 flex flex-col">
      {/* Migration Countdown Banner */}
      <MigrationBanner />

      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-bold text-krs-blue tracking-tighter">
                KRS Recruitment
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-600 hover:text-krs-blue font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#careers"
                onClick={(e) => handleNavClick(e, '#careers')}
                className="bg-krs-accent text-krs-blue font-bold px-6 py-2.5 rounded hover:bg-yellow-400 transition-all shadow-md transform hover:-translate-y-0.5"
              >
                Apply Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-krs-blue focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full top-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-krs-blue rounded-md"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#careers"
              onClick={(e) => handleNavClick(e, '#careers')}
              className="block w-full text-center mt-4 bg-krs-accent text-krs-blue font-bold px-6 py-3 rounded hover:bg-yellow-400 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;