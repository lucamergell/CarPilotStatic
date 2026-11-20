import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

// Fill these in before publishing.
const DEVELOPER_NAME = 'Nelly Tsiskarishvili';
const CONTACT_EMAIL = 'luca.mergell@gmail.com';
const LAST_UPDATED = '20. November 2026';

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
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-zinc-300 font-normal">
          <section className="space-y-2">
            <p>These Terms of Service ("Terms") govern your use of the CarPilot app ("CarPilot", "the app"), developed by {DEVELOPER_NAME} ("we", "us"), contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">{CONTACT_EMAIL}</a>. By creating an account or using CarPilot, you agree to these Terms. Our <a href="https://carpilot.space/privacypolicy" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Privacy Policy</a> explains how we handle your data.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">1. The service</h2>
            <p>CarPilot helps you keep track of your vehicles: mileage, fill-ups and charging, services, expenses, modifications, issues, reminders and documents. It also offers cost overviews, Home Screen widgets and CarPilot AI features.</p>
            <p>CarPilot is a record-keeping and information tool. It does not inspect your vehicle, and it does not replace the manufacturer's maintenance schedule, a qualified mechanic, official inspections or legal deadlines that apply to you.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">2. Your account</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>You need an account to use CarPilot. You sign in with Apple or Google.</li>
              <li>You must be at least 16 years old, or have the consent of a parent or guardian.</li>
              <li>Your account is personal. Keep access to your Apple or Google account secure; you are responsible for activity under your account.</li>
              <li>You can delete your account at any time in the app under Settings → Delete Account.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">3. Free plan and CarPilot Premium</h2>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.1 Free plan</h3>
            <p>The free plan includes one vehicle and the core logbook features, with your data stored on your iPhone.</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.2 Premium</h3>
            <p>CarPilot Premium adds the features described in the app before purchase, such as more vehicles, cloud backup and sync, advanced financial analytics, CarPilot AI, the AI value estimate and Home Screen widgets.</p>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.3 Subscriptions through Apple</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>Premium is sold as an auto-renewing subscription through Apple's App Store. Prices are shown in the app before you buy.</li>
              <li>Payment is charged to your Apple Account. The subscription renews automatically unless you cancel at least 24 hours before the end of the current period.</li>
              <li><strong className="text-zinc-200">Free trials:</strong> if a free trial is offered and you are eligible, you are charged at the end of the trial unless you cancel at least 24 hours before it ends.</li>
              <li>You can manage and cancel your subscription in your Apple Account settings at any time. Cancellation takes effect at the end of the current period.</li>
              <li>Purchases, refunds and any statutory right of withdrawal are handled by Apple under Apple's terms. We cannot issue refunds ourselves.</li>
            </ul>
            <h3 className="text-base font-semibold text-zinc-100 pt-2">3.4 Fair-use limits</h3>
            <p>To keep CarPilot reliable and protect it from abuse, all features have limits, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>up to 25 vehicles with Premium,</li>
              <li>up to 5,000 entries per kind (for example fill-ups) per vehicle,</li>
              <li>up to 200 reminders and 200 documents per vehicle,</li>
              <li>1 GB and 500 files of cloud document storage per account,</li>
              <li>daily limits for CarPilot AI (currently 30 messages, of which 3 may include a photo, and 3 value estimates per day), and a limit on requests per minute,</li>
              <li>one free CarPilot AI question per account on the free plan.</li>
            </ul>
            <p>We may adjust these limits for good reason, for example to prevent abuse or for technical reasons, without reducing what you paid for in a way that would be unreasonable for you.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">4. CarPilot AI</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>CarPilot AI generates answers and value estimates automatically with artificial intelligence (Anthropic's Claude models). Answers can be incomplete, outdated or wrong.</li>
              <li><strong className="text-zinc-200">AI answers are not professional advice.</strong> They do not replace a qualified mechanic, a technical inspection or an expert appraisal. If something seems unsafe, such as warning lights, brakes, steering, tires or leaks, stop driving and have the vehicle checked.</li>
              <li><strong className="text-zinc-200">Value estimates are non-binding.</strong> Actual prices depend on the vehicle's real condition, history, location and market. Do not rely on them alone when buying or selling.</li>
              <li>You are responsible for what you ask and upload. Do not include other people's personal data in your questions or photos.</li>
              <li>Before first use, we ask for your consent to send the data described in the Privacy Policy to our AI provider.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">5. Your content</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>You keep all rights to the data, documents and photos you add to CarPilot ("your content").</li>
              <li>You grant us only the rights needed to store, synchronise and process your content in order to provide the app to you, for example cloud backup for Premium and generating AI answers you request.</li>
              <li>You confirm that you are allowed to upload your content and that it does not infringe others' rights or the law.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">6. Acceptable use</h2>
            <p>You must not:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>use CarPilot in a way that breaks the law or infringes others' rights,</li>
              <li>try to get around usage limits, security measures or subscription checks,</li>
              <li>access our servers by automated means, or other than through the app,</li>
              <li>overload, disrupt or reverse-engineer the service, except where the law allows it,</li>
              <li>upload malware, or content that is illegal.</li>
            </ul>
            <p>We may temporarily restrict features, such as cloud sync or CarPilot AI, or suspend an account if there are concrete indications of abuse or a breach of these Terms. Where reasonable, we will inform you first.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">7. Availability and backups</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>We work to keep CarPilot available, but we cannot guarantee uninterrupted availability. Maintenance, updates and third-party services may cause interruptions.</li>
              <li>Reminders rely on your iPhone's notification settings and may not be delivered if notifications are turned off or the device is unavailable.</li>
              <li>Without Premium, your data exists only on your iPhone. Even with Premium, keep copies of important documents elsewhere, for example by using the CSV export.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">8. Liability</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>We are liable without limitation for intent and gross negligence, for injury to life, body or health, under the German Product Liability Act (Produkthaftungsgesetz), and where we have given a guarantee.</li>
              <li>For slight negligence, we are liable only for breaches of essential contractual obligations, meaning obligations whose fulfilment makes proper performance of the contract possible in the first place and on whose fulfilment you may regularly rely. In that case our liability is limited to the foreseeable damage typical for this kind of contract.</li>
              <li>Otherwise, our liability for slight negligence is excluded.</li>
              <li>These limitations also apply to our representatives and agents.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">9. Changes to the app and these Terms</h2>
            <p>We may develop and change CarPilot. We may change these Terms for valid reasons, for example legal changes or new features. We will inform you of changes in the app in good time. If a change is significant and to your disadvantage, it takes effect only if you accept it. Otherwise you can stop using CarPilot and delete your account.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">10. Ending the agreement</h2>
            <p>You can stop using CarPilot and delete your account at any time. Deleting your account does not cancel an App Store subscription; cancel it in your Apple Account settings. We may end this agreement with reasonable notice, or immediately for good cause, such as serious abuse.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">11. Apple App Store terms</h2>
            <p>If you downloaded CarPilot from the Apple App Store, the following also applies:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>These Terms are between you and us, not Apple. Apple is not responsible for CarPilot or its content.</li>
              <li>Your license to use CarPilot is limited to use on Apple devices you own or control, as permitted by the App Store Terms of Service.</li>
              <li>Apple has no obligation to provide maintenance or support for CarPilot.</li>
              <li>If CarPilot fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation regarding CarPilot.</li>
              <li>Apple is not responsible for handling claims relating to CarPilot, such as product liability, failure to meet legal or regulatory requirements, or consumer protection claims.</li>
              <li>Apple is not responsible for investigating, defending or settling claims that CarPilot infringes third-party intellectual property rights.</li>
              <li>You confirm that you are not located in a country subject to a U.S. government embargo or designated as "terrorist supporting", and that you are not on any U.S. government list of prohibited or restricted parties.</li>
              <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">12. Governing law and disputes</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
              <li>These Terms are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods.</li>
              <li>If you are a consumer, this choice of law does not deprive you of the protection of mandatory consumer protection provisions of the country where you habitually reside.</li>
              <li>We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.</li>
            </ul>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">13. Final provisions</h2>
            <p>If any provision of these Terms is invalid, the remaining provisions remain unaffected.</p>
          </section>
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white tracking-tight">14. Contact</h2>
            <p>Questions about these Terms: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">{CONTACT_EMAIL}</a></p>
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
