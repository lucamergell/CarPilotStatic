import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const TermsOfService: React.FC<Props> = ({ onNavigate }) => {
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
            <FileText className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-zinc-400">
            Last updated: October 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-zinc-300 font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the CarPilot mobile iOS application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">2. Driving Safety & Responsible Use</h2>
            <p className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-200">
              <strong className="text-blue-400 block mb-1">Safety First:</strong>
              Never operate or interact with CarPilot while driving or operating a motor vehicle. Always pull over safely and comply with all applicable road safety rules and traffic laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">3. Use License & App Usage</h2>
            <p>
              CarPilot grants you a personal, non-exclusive, non-transferable, revocable license to use the app for personal, non-commercial vehicle tracking and maintenance record-keeping on iOS devices you own or control.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">4. Maintenance Disclaimers</h2>
            <p>
              CarPilot provides organizational utilities and automated reminders based on user input. It is not an authorized mechanical diagnostic tool and does not replace certified professional vehicle inspections, manufacturer warranty schedules, or mechanical repairs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CarPilot shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the application or any vehicle maintenance oversights.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">6. Changes & Contact</h2>
            <p>
              We reserve the right to revise these terms from time to time. For any inquiries regarding these Terms of Service, contact{' '}
              <a href="mailto:support@carpilotapp.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                support@carpilotapp.com
              </a>.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-2xl mx-auto w-full pt-16 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} CarPilot. All rights reserved.
      </div>
    </div>
  );
};
