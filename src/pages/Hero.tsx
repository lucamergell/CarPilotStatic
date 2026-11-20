import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<Props> = ({ onNavigate }) => {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const handleDownload = () => {
    setDownloadClicked(true);
    // Directly target the iOS App Store URL
    window.open('https://apps.apple.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-white flex flex-col justify-between items-center px-6 py-10 selection:bg-blue-600 selection:text-white overflow-hidden">
      {/* Subtle ambient blue glow */}
      <div 
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70"
        aria-hidden="true"
      >
        <div className="w-[480px] h-[480px] md:w-[680px] md:h-[680px] rounded-full bg-radial from-blue-600/15 via-blue-900/5 to-transparent blur-3xl transform -translate-y-12" />
      </div>

      {/* Top spacer for vertical balance */}
      <div className="w-full h-4 z-10" aria-hidden="true" />

      {/* Middle Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto px-4 py-12">
        {/* App Logo */}
        <div className="mb-6 w-20 h-20 md:w-24 md:h-24 rounded-[22%] overflow-hidden border border-blue-500/20 shadow-[0_0_35px_rgba(37,99,235,0.22)] flex items-center justify-center bg-[#030712]">
          <img
            src="/assets/aistudio/carpilotlogo_34ea5c5b.png"
            alt="CarPilot logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
          CarPilot
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-md mb-10 leading-relaxed">
          A smart car management mobile iOS app.
        </p>

        {/* Download on iOS App Store Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleDownload}
            aria-label="Download CarPilot on the iOS App Store"
            className="group relative inline-flex items-center gap-3.5 px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 text-white border border-zinc-700/80 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] active:scale-95 cursor-pointer"
          >
            {/* Apple Logo SVG */}
            <svg
              className="w-6 h-8 shrink-0 fill-white group-hover:scale-105 transition-transform"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>

            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 font-medium leading-none">
                Download on the
              </div>
              <div className="text-lg sm:text-xl font-semibold tracking-tight text-white leading-tight">
                App Store
              </div>
            </div>
          </button>

          {downloadClicked && (
            <p className="text-xs text-blue-400/90 animate-fade-in flex items-center gap-1">
              <span>Redirecting to Apple App Store</span>
              <ExternalLink className="w-3 h-3" />
            </p>
          )}
        </div>
      </section>

      {/* Bottom Section: 2 buttons for Privacy Policy & Terms of Service */}
      <footer className="w-full max-w-md mx-auto z-10 flex flex-col items-center gap-4 pt-8">
        <div className="flex items-center justify-center gap-6 text-sm">
          <button
            onClick={() => onNavigate('/privacypolicy')}
            className="text-zinc-400 hover:text-blue-400 transition-colors font-medium cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-zinc-600 font-light" aria-hidden="true">•</span>
          <button
            onClick={() => onNavigate('/termsofservice')}
            className="text-zinc-400 hover:text-blue-400 transition-colors font-medium cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
        <p className="text-[11px] text-zinc-500 font-light tracking-wide">
          © {new Date().getFullYear()} CarPilot
        </p>
      </footer>
    </main>
  );
};
