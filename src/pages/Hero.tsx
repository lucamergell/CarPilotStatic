import React, { useState } from 'react';
import { CarFront, ExternalLink } from 'lucide-react';

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

      {/* Top minimal bar / empty header placeholder for perfect balance */}
      <header className="w-full max-w-5xl flex items-center justify-center z-10">
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-blue-500/80">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>iOS Mobile App</span>
        </div>
      </header>

      {/* Middle Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto my-auto px-4 py-12">
        {/* App Icon Mark */}
        <div className="mb-6 p-4 rounded-2xl bg-zinc-950/80 border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.15)] flex items-center justify-center text-blue-400">
          <CarFront className="w-10 h-10 md:w-12 md:h-12 stroke-[1.6]" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
          CarPilot
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-zinc-400 font-normal max-w-md mb-10 leading-relaxed">
          A simple car management mobile iOS app.
        </p>

        {/* Download on iOS App Store Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleDownload}
            aria-label="Download CarPilot on the iOS App Store"
            className="group relative inline-flex items-center gap-4 px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 text-white border border-zinc-700/80 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] active:scale-95 cursor-pointer"
          >
            {/* Apple Logo SVG */}
            <svg 
              className="w-7 h-7 fill-white group-hover:scale-105 transition-transform" 
              viewBox="0 0 170 170"
              aria-hidden="true"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.71-11.72-14.01-6.19-9.5-10.9-20.2-14.13-32.09-3.23-11.89-4.85-23.2-4.85-33.95 0-14.98 3.73-27.18 11.2-36.6 7.47-9.42 16.9-14.19 28.3-14.32 4.48 0 9.53 1.25 15.15 3.74 5.62 2.5 9.17 3.78 10.65 3.84 1.74-.13 5.39-1.44 10.95-3.94 5.56-2.5 10.22-3.7 13.98-3.6 13.06.66 23.36 5.52 30.9 14.59-11.58 7.02-17.26 16.73-17.04 29.13.22 9.68 3.96 17.65 11.22 23.9 7.26 6.25 15.7 9.8 25.32 10.65-2.07 6.42-4.57 12.87-7.51 19.34zM119.22 31.84c0-7.72 2.76-14.78 8.28-21.18 5.52-6.4 12.19-10.22 20.02-11.46.22 1.3.33 2.39.33 3.26 0 7.72-2.88 14.89-8.63 21.52-5.75 6.63-12.63 10.38-20.64 11.25-.43-1.09-.64-2.22-.64-3.39z"/>
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
