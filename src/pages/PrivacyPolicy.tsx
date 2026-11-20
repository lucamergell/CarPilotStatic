import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

// Fill these in before publishing.
const DEVELOPER_NAME = 'Nelly Tsiskarishvili';
const CONTACT_EMAIL = 'luca.mergell@gmail.com';
const LAST_UPDATED = '20. November 2026';

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
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-zinc-300 font-normal">
          <section className="space-y-2">
            <p>This Privacy Policy explains what personal data the CarPilot app ("CarPilot", "the app") processes, why, where, and what rights you have. CarPilot is designed to keep your data on your iPhone unless you choose a feature that needs the cloud.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">1. Who is responsible</h2>
            <p>CarPilot is developed by {DEVELOPER_NAME} ("we", "us"), who is responsible for data processing under the EU General Data Protection Regulation (GDPR). You can reach us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">{CONTACT_EMAIL}</a>.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">2. Summary</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>Your vehicles, logbook, reminders and documents are stored <strong className="text-zinc-200">on your iPhone</strong>. They are copied to the cloud only if you have <strong className="text-zinc-200">CarPilot Premium</strong>, which includes cloud backup and sync.</li>
              <li>To use CarPilot you sign in with <strong className="text-zinc-200">Apple</strong> or <strong className="text-zinc-200">Google</strong>. We receive your account ID and, depending on the provider and your choice, your email address.</li>
              <li><strong className="text-zinc-200">CarPilot AI</strong> sends your question (and a photo, if you add one) together with basic details about your car to Anthropic to generate an answer. We ask for your consent before the first use, and we do not store your conversations.</li>
              <li><strong className="text-zinc-200">Receipt scanning</strong> happens entirely on your iPhone.</li>
              <li>CarPilot contains <strong className="text-zinc-200">no advertising and no tracking</strong>, and we do <strong className="text-zinc-200">not</strong> sell your data.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">3. Data we process</h2>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.1 Account and sign-in</h3>
            <p>When you sign in with Apple or Google, we use Firebase Authentication (Google) to create your account. We process:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>a unique user ID,</li>
              <li>your email address, if the provider shares it (with Sign in with Apple you can choose a private relay address),</li>
              <li>which sign-in provider you used.</li>
            </ul>
            <p><strong className="text-zinc-200">Purpose and legal basis:</strong> providing your account and the app (Art. 6(1)(b) GDPR, performance of a contract).</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.2 Your vehicle data on your iPhone</h3>
            <p>Everything you enter (vehicles, mileage, fill-ups and charging, services, expenses, modifications, issues, reminders, documents and their files, and your settings) is stored on your iPhone. A small summary for the Home Screen and Lock Screen widgets (your car's name, mileage, next reminder and this month's costs) is also stored on your iPhone in a container shared only with CarPilot's widgets.</p>
            <p>This data stays on your device and is deleted when you delete it in the app or delete the app.</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.3 Cloud backup and sync (Premium only)</h3>
            <p>If you have CarPilot Premium, the data described in 3.2 is synchronised with Google Firebase so it is backed up and available on your other devices:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-200">Cloud Firestore</strong> (database), located in <strong className="text-zinc-200">Frankfurt, Germany</strong> (europe-west3),</li>
              <li><strong className="text-zinc-200">Cloud Storage</strong> for document files you add, located in the <strong className="text-zinc-200">United States</strong> (us-east1).</li>
            </ul>
            <p><strong className="text-zinc-200">Purpose and legal basis:</strong> providing the Premium backup and sync you subscribed to (Art. 6(1)(b) GDPR).</p>
            <p>When your Premium subscription ends, your synced data remains readable to you, but no new changes are uploaded.</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.4 Subscriptions and purchases</h3>
            <p>Purchases are processed by <strong className="text-zinc-200">Apple</strong> through the App Store. We do not receive your payment details. To manage subscriptions we use <strong className="text-zinc-200">RevenueCat</strong> (RevenueCat, Inc., USA), which receives:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>your CarPilot user ID,</li>
              <li>your purchase and subscription status (for example product, trial, renewal and expiry dates),</li>
              <li>technical information about the app and device needed to validate purchases,</li>
              <li>the area of the app from which you opened the subscription screen (for example "analytics" or "widgets"), so we can understand which features people subscribe for.</li>
            </ul>
            <p><strong className="text-zinc-200">Purpose and legal basis:</strong> providing and verifying your subscription (Art. 6(1)(b) GDPR) and understanding which features lead to subscriptions (Art. 6(1)(f) GDPR, our legitimate interest in improving the app).</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.5 CarPilot AI</h3>
            <p>CarPilot AI (the AI assistant and the vehicle value estimate) is provided through our server functions (Google Cloud Functions in Frankfurt, Germany), which forward your request to <strong className="text-zinc-200">Anthropic</strong> (Anthropic, PBC, USA) to generate an answer with its Claude models.</p>
            <p>For the <strong className="text-zinc-200">assistant</strong> we send: your question and the recent messages of the conversation, a photo if you attach one (reduced in size and stripped of location and other metadata), your car's make, model, year, mileage, distance unit, fuel type and transmission, a short list of your recent services, and your app language.</p>
            <p>For the <strong className="text-zinc-200">value estimate</strong> we send: your car's details as above, the condition you selected, your country and your currency.</p>
            <p>We do <strong className="text-zinc-200">not</strong> store your questions, photos or answers on our servers; a conversation exists only on your iPhone while it is open. We store only counters needed for usage limits (see 3.7). Anthropic processes the data to generate the answer and may keep it for a limited period under its commercial terms, for example to detect abuse; under those terms it does not use it to train its models.</p>
            <p><strong className="text-zinc-200">Legal basis:</strong> your consent, which you give in the app before first using CarPilot AI (Art. 6(1)(a) GDPR). You can stop using CarPilot AI at any time; this does not affect processing that already took place.</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.6 Features that stay on your iPhone</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-200">Receipt scanning:</strong> text on receipt photos is recognised on your iPhone with Apple's Vision technology. The image is not uploaded.</li>
              <li><strong className="text-zinc-200">Camera and photo library:</strong> used only when you choose to scan a document, scan a receipt or attach a photo, and only for that purpose.</li>
              <li><strong className="text-zinc-200">Notifications:</strong> reminders and check-ins are scheduled locally on your iPhone. We do not send push notifications from a server.</li>
            </ul>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.7 Security and abuse prevention</h3>
            <p>To protect CarPilot and its users, we process:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-200">Usage counters</strong>: how many AI requests and photos you used today, whether you have used your free question, request rates, and how much cloud storage your files use. These counters contain no content.</li>
              <li><strong className="text-zinc-200">App integrity checks</strong>: Firebase App Check with Apple App Attest confirms that requests come from a genuine copy of CarPilot. This involves a device attestation from Apple, not your content.</li>
              <li><strong className="text-zinc-200">Technical logs</strong>: our server functions log technical events (for example "daily limit reached"), without the content of your data. Google's infrastructure processes IP addresses to deliver requests.</li>
            </ul>
            <p><strong className="text-zinc-200">Legal basis:</strong> our legitimate interest in operating a secure service and preventing abuse (Art. 6(1)(f) GDPR).</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">4. Service providers and international transfers</h2>
            <p>We use the following processors, bound by data processing agreements:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm border border-zinc-800">
                <thead className="bg-zinc-900/80 text-zinc-200">
                  <tr><th className="px-3 py-2 border-b border-zinc-800 font-semibold">Provider</th><th className="px-3 py-2 border-b border-zinc-800 font-semibold">Purpose</th><th className="px-3 py-2 border-b border-zinc-800 font-semibold">Location</th></tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Google Ireland Ltd. / Google LLC (Firebase)</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Sign-in, database, file storage, server functions, App Check</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">EU (Frankfurt) and USA</td></tr>
                  <tr><td className="px-3 py-2 border-b border-zinc-800/70 align-top">RevenueCat, Inc.</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Subscription management</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">USA</td></tr>
                  <tr><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Anthropic, PBC</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Generating CarPilot AI answers</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">USA</td></tr>
                  <tr><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Apple Inc.</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Sign in with Apple, App Store purchases, App Attest</td><td className="px-3 py-2 border-b border-zinc-800/70 align-top">Apple's terms apply</td></tr>
                </tbody>
              </table>
            </div>
            <p>Where data is transferred to the USA, the transfer is based on the EU–U.S. Data Privacy Framework, where the provider is certified, and/or the EU Standard Contractual Clauses (Art. 45 and 46 GDPR).</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">5. How long we keep data</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-200">On your iPhone:</strong> until you delete it in the app or delete the app.</li>
              <li><strong className="text-zinc-200">In the cloud (Premium):</strong> until you delete it or delete your account.</li>
              <li><strong className="text-zinc-200">Deleting your account</strong> (Settings → Delete Account) permanently deletes your cloud data, files, usage counters and sign-in account. Your data on the current iPhone is removed as well.</li>
              <li><strong className="text-zinc-200">Subscription records</strong> are kept by Apple and RevenueCat as long as required for the subscription and for statutory retention obligations, such as tax law.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">6. Your rights</h2>
            <p>Under the GDPR you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li><strong className="text-zinc-200">access</strong> your data (Art. 15),</li>
              <li>have it <strong className="text-zinc-200">corrected</strong> (Art. 16),</li>
              <li>have it <strong className="text-zinc-200">deleted</strong> (Art. 17),</li>
              <li><strong className="text-zinc-200">restrict</strong> processing (Art. 18),</li>
              <li><strong className="text-zinc-200">data portability</strong> (Art. 20) — you can export your logbook from the app as CSV,</li>
              <li><strong className="text-zinc-200">object</strong> to processing based on legitimate interests (Art. 21),</li>
              <li><strong className="text-zinc-200">withdraw consent</strong> at any time with effect for the future (Art. 7(3)).</li>
            </ul>
            <p>To exercise your rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">{CONTACT_EMAIL}</a>. You also have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU member state where you live.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">7. Children</h2>
            <p>CarPilot is not directed at children under 16. We do not knowingly process data of children under 16.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">8. No advertising, no tracking</h2>
            <p>CarPilot shows no advertising, uses no third-party analytics or advertising SDKs, does not track you across other companies' apps or websites, and does not sell your personal data.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">9. Changes to this policy</h2>
            <p>We may update this Privacy Policy when the app or the law changes. The current version is always available at <a href="https://carpilot.space/privacypolicy" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">https://carpilot.space/privacypolicy</a>. We will inform you within the app about significant changes.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">10. Contact</h2>
            <p>Questions about privacy: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">{CONTACT_EMAIL}</a></p>
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
