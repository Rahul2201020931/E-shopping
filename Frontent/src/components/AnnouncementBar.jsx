import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, Star, Gift, ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  {
    icon: Truck,
    text: 'Free UK & Worldwide Delivery on orders over £50',
    highlight: 'Shop Sleepwear',
    link: '/collection'
  },
  {
    icon: Sparkles,
    text: 'Use code WELCOME10 for 10% off your first order',
    highlight: 'Claim Discount',
    link: '/collection'
  },
  {
    icon: Star,
    text: 'Rated 4.8 / 5 on Trustpilot by 3,000+ happy loungers',
    highlight: 'Read Reviews',
    link: '/about'
  },
  {
    icon: Gift,
    text: 'Complimentary luxury gift wrapping available at checkout',
    highlight: 'Gift Guide',
    link: '/collection'
  }
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <aside aria-label="Store Announcements" className="w-full bg-[#f2c1ae] text-[#1d1d1b] border-b border-[#ebd3ca] text-[11px] sm:text-xs font-medium tracking-wider transition-colors">
      <div className="mx-auto max-w-[1440px] px-3 py-2 sm:py-2.5 flex items-center justify-between">
        
        {/* Prev button */}
        <button
          onClick={prevSlide}
          aria-label="Previous announcement"
          className="p-1 hover:opacity-70 transition-opacity text-[#1d1d1b] cursor-pointer"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Center message */}
        <div className="flex items-center justify-center gap-2 text-center overflow-hidden transition-all duration-300">
          <CurrentIcon size={14} className="text-[#1d1d1b] shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">
            {announcements[currentIndex].text}
          </span>
          <span className="hidden md:inline underline font-semibold cursor-pointer hover:text-[#7d3c24] transition-colors ml-1">
            {announcements[currentIndex].highlight} &rarr;
          </span>
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          aria-label="Next announcement"
          className="p-1 hover:opacity-70 transition-opacity text-[#1d1d1b] cursor-pointer"
        >
          <ChevronRight size={14} />
        </button>

      </div>
    </aside>
  );
};

export default AnnouncementBar;
