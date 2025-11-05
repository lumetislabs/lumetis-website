import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy — Lumetis Labs',
  description: 'Privacy Policy for Lumetis Labs.',
}

export default function PrivacyPolicy() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-slate-600 leading-relaxed">
          <div className="mb-8 space-y-2 text-sm text-slate-500">
            <p><strong>Effective Date:</strong> November 2025</p>
            <p><strong>Entity:</strong> LUMETIS LABS LLC</p>
            <p><strong>Address:</strong> 5830 E 2nd St, Ste 7000 #29490, Casper, Wyoming 82609 USA</p>
            <p><strong>Contact:</strong> admin@lumetislabs.com | lumetislabs@gmail.com</p>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Overview</h2>
            <p>
              This Privacy Policy explains how LUMETIS LABS LLC (&quot;Lumetis Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects information when you use our mobile applications and website (collectively, the &quot;Services&quot;).
            </p>
            <p className="mt-4">
              This Policy applies to all Lumetis Labs products distributed through the Apple App Store and Google Play Store, as well as our website www.lumetislabs.com.
            </p>
            <p className="mt-4">
              By using our Services, you agree to this Privacy Policy.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We design our apps to operate primarily on your device, with minimal data collection.
            </p>
            <p className="mb-4">
              However, to improve performance and understand usage, we may collect limited information automatically or through analytics partners.
            </p>
            <p className="mb-4">Information collected may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device data: device model, OS version, language, time zone.</li>
              <li>Usage data: app interactions, screens viewed, session length, crash reports.</li>
              <li>Approximate location (country/city level only) for analytics purposes.</li>
              <li>Identifiers: app instance ID or device ID (non-personal).</li>
              <li>Payment metadata: handled solely by Apple App Store or Google Play Store. Lumetis Labs does not receive or store card information.</li>
            </ul>
            <p className="mt-4">
              We do not require users to create an account, and we do not store personal names, emails, or passwords unless a future version adds an optional account feature (which will have its own disclosure).
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Data</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve functionality and reliability of our apps.</li>
              <li>Measure engagement, retention, and feature performance.</li>
              <li>Diagnose crashes or technical issues.</li>
              <li>Deliver and personalize notifications (motivational or inspirational messages).</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p className="mt-4">
              If you enable notifications, you may receive periodic inspirational or promotional messages. You can disable these anytime in device settings.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Analytics &amp; Third-Party Processors</h2>
            <p className="mb-4">We use reputable analytics and infrastructure providers:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-gray-200">Partner</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-gray-200">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Amplitude</td>
                    <td className="px-4 py-3 text-sm">User-behavior analytics and event tracking</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Firebase (Google)</td>
                    <td className="px-4 py-3 text-sm">Crash reporting, performance, analytics</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">RevenueCat</td>
                    <td className="px-4 py-3 text-sm">Subscription management and receipt validation</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Google Analytics</td>
                    <td className="px-4 py-3 text-sm">Website and traffic analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Vercel</td>
                    <td className="px-4 py-3 text-sm">Website hosting and analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These providers process limited technical data under their own privacy policies. We do not sell or rent your data to third parties.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Data Storage &amp; Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most app data remains stored locally on your device.</li>
              <li>Analytics data is processed securely on US-based servers (Amplitude/Firebase).</li>
              <li>We apply reasonable technical and organizational measures to prevent unauthorized access, alteration, or disclosure of data.</li>
            </ul>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
            <p>
              We retain analytics data only as long as necessary for legitimate business and legal purposes, after which it is deleted or anonymized.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. User Rights (GDPR / CCPA / Global)</h2>
            <p className="mb-4">Where applicable, you may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction or deletion of your data (as required by law).</li>
              <li>Object to or restrict processing.</li>
              <li>Withdraw consent for notifications or analytics.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, email admin@lumetislabs.com.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our Services are intended for users aged 13 and older and are not directed to children under 13.
            </p>
            <p className="mt-4">
              We do not knowingly collect data from children. If you believe we have done so, contact us and we will promptly delete such information.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">9. International Transfers</h2>
            <p>
              We may process information in the United States or other countries where our service providers operate.
            </p>
            <p className="mt-4">
              By using our Services, you consent to such transfers under applicable safeguards.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy at any time. The latest version will always be available on our website, with the &quot;Effective Date&quot; above reflecting the most recent update. Continued use of our Services constitutes acceptance of the revised Policy.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Contact</h2>
            <p className="mb-4">
              If you have any questions or privacy-related requests, contact:
            </p>
            <p className="mt-4">
              LUMETIS LABS LLC<br />
              📧 admin@lumetislabs.com | lumetislabs@gmail.com<br />
              📍 5830 E 2nd St, Ste 7000 #29490, Casper, WY 82609 USA
            </p>
          </section>
        </div>
      </div>
    </Section>
  )
}
