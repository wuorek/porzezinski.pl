"use client";

import { useEffect, useState } from "react";

export default function BackgroundTools() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Initial set
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden opacity-15 text-ink mix-blend-multiply">
      {/* Szpachelka / Putty Knife */}
      <div 
        className="absolute top-[10%] -left-[10vw] w-[40vw] max-w-[500px] text-ink"
        style={{ transform: `translateY(${scrollY * -0.15}px) rotate(15deg)` }}
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-auto">
          {/* Blueprint grid lines */}
          <path d="M0 50 H100 M50 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
          <path d="M25 0 V100 M75 0 V100 M0 25 H100 M0 75 H100" strokeWidth="0.1" strokeDasharray="1 1" />
          
          {/* Handle */}
          <rect x="42" y="10" width="16" height="35" rx="3" />
          <circle cx="50" cy="15" r="2" />
          {/* Stem */}
          <path d="M45 45 L55 45 L60 60 L40 60 Z" />
          {/* Blade */}
          <path d="M20 60 H80 L85 90 H15 Z" strokeWidth="1.5" />
          <line x1="15" y1="90" x2="85" y2="90" strokeWidth="2" />
          
          {/* Technical annotations */}
          <line x1="85" y1="90" x2="95" y2="90" strokeWidth="0.5" strokeDasharray="1 2" />
          <line x1="80" y1="60" x2="95" y2="60" strokeWidth="0.5" strokeDasharray="1 2" />
          <path d="M92 60 V90 M90 62 L92 60 L94 62 M90 88 L92 90 L94 88" strokeWidth="0.5" />
          <text x="94" y="77" fontSize="4" fill="currentColor" stroke="none" transform="rotate(-90 94 77)">150mm</text>
        </svg>
      </div>

      {/* Poziomica / Spirit Level */}
      <div 
        className="absolute top-[40%] -right-[5vw] w-[60vw] max-w-[800px] text-ink"
        style={{ transform: `translateY(${scrollY * -0.08}px) rotate(-45deg)` }}
      >
        <svg viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-auto">
          <path d="M0 20 H200 M100 0 V40" strokeWidth="0.1" strokeDasharray="1 1" />
          
          {/* Main body */}
          <rect x="10" y="5" width="180" height="30" rx="1" strokeWidth="1" />
          <rect x="12" y="7" width="176" height="26" strokeWidth="0.5" />
          
          {/* Center vial */}
          <rect x="85" y="10" width="30" height="20" rx="2" />
          <circle cx="100" cy="20" r="8" />
          <line x1="97" y1="12" x2="97" y2="28" />
          <line x1="103" y1="12" x2="103" y2="28" />
          
          {/* Left vial */}
          <rect x="30" y="10" width="20" height="20" rx="2" />
          <circle cx="40" cy="20" r="6" />
          <line x1="34" y1="17" x2="46" y2="17" />
          <line x1="34" y1="23" x2="46" y2="23" />
          
          {/* Right vial */}
          <rect x="150" y="10" width="20" height="20" rx="2" />
          <circle cx="160" cy="20" r="6" />
          <line x1="154" y1="17" x2="166" y2="17" />
          <line x1="154" y1="23" x2="166" y2="23" />
          
          {/* Technical details */}
          <circle cx="20" cy="20" r="2" />
          <circle cx="180" cy="20" r="2" />
        </svg>
      </div>

      {/* Kielnia / Trowel */}
      <div 
        className="absolute top-[75%] left-[5vw] w-[45vw] max-w-[600px] text-ink"
        style={{ transform: `translateY(${scrollY * -0.2}px) rotate(30deg)` }}
      >
        <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-auto">
          {/* Grid */}
          <path d="M0 50 H120 M60 0 V100" strokeWidth="0.2" strokeDasharray="2 2" />
          <path d="M30 0 V100 M90 0 V100 M0 25 H120 M0 75 H120" strokeWidth="0.1" strokeDasharray="1 1" />
          
          {/* Blade */}
          <path d="M10 80 L30 40 L90 40 L110 80 Z" strokeWidth="1.5" />
          
          {/* Stem base */}
          <path d="M50 40 L55 35 L65 35 L70 40 Z" />
          <path d="M60 35 L60 20 L40 20" strokeWidth="2" strokeLinejoin="round" />
          
          {/* Handle */}
          <rect x="15" y="12" width="25" height="16" rx="4" />
          <line x1="20" y1="12" x2="20" y2="28" strokeWidth="0.5" />
          <line x1="25" y1="12" x2="25" y2="28" strokeWidth="0.5" />
          <line x1="30" y1="12" x2="30" y2="28" strokeWidth="0.5" />
          <line x1="35" y1="12" x2="35" y2="28" strokeWidth="0.5" />
          
          {/* Technical lines */}
          <line x1="10" y1="80" x2="10" y2="90" strokeWidth="0.5" strokeDasharray="1 2" />
          <line x1="110" y1="80" x2="110" y2="90" strokeWidth="0.5" strokeDasharray="1 2" />
          <path d="M10 85 H110 M12 83 L10 85 L12 87 M108 83 L110 85 L108 87" strokeWidth="0.5" />
          <text x="60" y="92" fontSize="5" fill="currentColor" stroke="none" textAnchor="middle">200mm</text>
        </svg>
      </div>
    </div>
  );
}
