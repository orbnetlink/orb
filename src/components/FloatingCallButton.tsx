import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/config/business';

export const FloatingCallButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 500px (roughly hero section)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanded text on hover */}
      <span
        className={`bg-card text-foreground px-4 py-2 rounded-full shadow-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        {BUSINESS.phone}
      </span>
      
      {/* Main button */}
      <div className="relative">
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-accent animate-pulse opacity-20" style={{ animationDelay: '0.5s' }} />
        
        {/* Button */}
        <div
          className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-xl' : 'scale-100'
          }`}
          style={{ boxShadow: 'var(--shadow-coral)' }}
        >
          <Phone className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
        </div>
      </div>
    </a>
  );
};

export default FloatingCallButton;
