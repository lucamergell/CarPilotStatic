import React, { useState } from 'react';
import { ArrowLeft, Mail, Check, Copy } from 'lucide-react';

const SUPPORT_EMAIL = 'luca.mergell@gmail.com';

interface Props {
  onNavigate: (path: string) => void;
}

export const Support: React.FC<Props> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permission unavailable
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white px-6 py-12 md:py-16">
      <div className="max-w-2xl mx-auto w-full">
        {/* Navigation */}
        <button
          onClick={() => onNavigate('/')}
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to CarPilot</span>
        </button>

        {/* Header */}
        <div className="space-y-3 mb-10 pb-8 border-b border-zinc-800/80">
          <div className="inline-flex items-center gap-2 text-blue-500 text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-4 h-4" />
            <span>Help &amp; Contact</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Support
          </h1>
          <p className="text-sm text-zinc-400">
            Questions, feedback, or issues with CarPilot? Reach out anytime.
          </p>
        </div>

        {/* Contact Block */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-300 font-normal">
          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                Support Email
              </div>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-lg md:text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 break-all"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-blue-500/60 text-xs font-medium transition-colors cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-2xl mx-auto w-full pt-16 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} CarPilot. All rights reserved.
      </div>
    </div>
  );
};
