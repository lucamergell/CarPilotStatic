import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onNavigate }) => {
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
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-400">
            Last updated: October 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-zinc-300 font-normal">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">1. Overview</h2>
            <p>
              CarPilot is built with a privacy-first approach. We believe your vehicle data belongs entirely to you. This Privacy Policy outlines how the CarPilot iOS mobile application handles your information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">2. Information We Store</h2>
            <p>
              CarPilot allows you to record vehicle information such as make, model, year, odometer readings, service history, and fuel expenses. All this data is stored locally on your device or in your personal Apple iCloud container if you have iCloud backup enabled.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">3. Data Collection & Analytics</h2>
            <p>
              CarPilot does not sell, rent, or trade your personal or vehicle data to third parties, advertisers, or data brokers. We do not track your real-time vehicle GPS location or drive patterns.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">4. Device Permissions</h2>
            <p>
              The app may request optional iOS system permissions solely for core functionality:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-200">Notifications:</strong> Used exclusively to deliver your configured maintenance reminders and service interval alerts.</li>
              <li><strong className="text-zinc-200">Camera / Photos (Optional):</strong> Used only if you choose to attach photos of fuel receipts or vehicle documents locally.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">5. Data Retention & Deletion</h2>
            <p>
              Because your records are saved locally on your iOS device, deleting the application immediately erases all local data. You may also delete individual logs or vehicle profiles at any time directly in the app.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">6. Contact</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out to us at{' '}
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
