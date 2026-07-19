import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy for kept — Lumetis Labs',
  description: 'Privacy Policy for the kept app by Lumetis Labs.',
}

export default function KeptPrivacyPolicy() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8">Privacy Policy for kept</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-slate-600 leading-relaxed">
          <div className="mb-8 space-y-2 text-sm text-slate-500">
            <p><strong>Effective Date:</strong> July 2026</p>
            <p><strong>Entity:</strong> LUMETIS LABS LLC</p>
            <p><strong>Address:</strong> 5830 E 2nd St, Ste 7000 #29490, Casper, Wyoming 82609 USA</p>
            <p><strong>Contact:</strong> admin@lumetislabs.com | lumetislabs@gmail.com</p>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Overview</h2>
            <p>
              kept (&quot;kept,&quot; &quot;we,&quot; &quot;us&quot;) is a personal library app that turns links and posts you share from TikTok, Instagram, and YouTube into a private collection of the fashion, beauty, places, and accessories the creators talk about. kept is operated by LUMETIS LABS LLC, 5830 E 2nd St, Ste 7000 #29490, Casper, Wyoming 82609 USA.
            </p>
            <p className="mt-4">
              This Privacy Policy explains what we collect, why, who processes it, and the choices you have. By using kept, you agree to this Privacy Policy. If you have any questions, contact us at <strong>admin@lumetislabs.com</strong>.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Your account.</strong> When you sign in with email, Apple, or Google, we receive your email address and, if your provider shares it, your name. We do not see or store your Apple or Google password.</li>
              <li><strong>What you save.</strong> The links and posts you share into kept, and the finds we create from them: their names, brands, categories, the creator who recommended them, your own notes, and the images associated with them (including product photos we generate for you).</li>
              <li><strong>Photos you add.</strong> If you use try-ons, the photos you upload to create your avatar. If you add screenshots to your library, those images.</li>
              <li><strong>Usage data.</strong> How you use the app (screens viewed, features used, sessions) and basic device and app information, through our analytics provider. This is tied to your account so we can understand and improve the product.</li>
              <li><strong>Subscription status.</strong> Whether you have an active kept Plus subscription, through our subscriptions provider. The app store (Apple or Google) processes the payment itself; we never receive your card details.</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> collect your contacts, your location, your browsing history, or data about you from other apps, and we do not track you across other companies&apos; apps or websites.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To run your library: to read the links you share, identify the items in them, and store your finds so they are there when you come back.</li>
              <li>To generate images you ask for: clean product shots of your finds, and try-ons of you in them.</li>
              <li>To provide and manage your kept Plus subscription.</li>
              <li>To understand how the app is used and make it better.</li>
              <li>To keep the service secure and to meet our legal obligations.</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal data, and we do not use it for third-party advertising.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. AI and Your Photos</h2>
            <p className="mb-4">
              kept uses Google&apos;s Gemini AI to do the things the app is for. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The content of the links and posts you share (captions, video frames, post photos) is sent to Google&apos;s AI to identify the items in them.</li>
              <li>The images you save can be sent to Google&apos;s AI to generate a clean product shot.</li>
              <li>The photos you add for try-ons are sent to Google&apos;s AI to generate the try-on images.</li>
            </ul>
            <p className="mt-4">
              We ask for your explicit permission inside the app before your avatar photos are used this way. Google processes this content under its own terms and privacy policy to generate the result and return it to us. Your uploaded photos and the images we generate are private to your account and are never shown to other users.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Analytics &amp; Third-Party Processors</h2>
            <p className="mb-4">
              We use a small number of trusted providers (&quot;processors&quot;) to run kept. Each receives only what it needs and processes it under its own privacy policy. We do not sell or rent your data to third parties.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-gray-200">Provider</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-gray-200">What it does</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b border-gray-200">What it receives</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Supabase</td>
                    <td className="px-4 py-3 text-sm">Database, file storage, and authentication (hosted in the European Union)</td>
                    <td className="px-4 py-3 text-sm">Your account, your finds, and your uploaded and generated images</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Google (Gemini AI)</td>
                    <td className="px-4 py-3 text-sm">Identifies items in your shared posts and generates product shots and try-ons</td>
                    <td className="px-4 py-3 text-sm">The content of shared posts, saved images, and avatar photos you submit</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Apify</td>
                    <td className="px-4 py-3 text-sm">Reads the public content of the links you share</td>
                    <td className="px-4 py-3 text-sm">The public post URLs you share</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Mixpanel</td>
                    <td className="px-4 py-3 text-sm">Product analytics (hosted in the European Union)</td>
                    <td className="px-4 py-3 text-sm">Usage events, your account identifier, email, and name</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">RevenueCat</td>
                    <td className="px-4 py-3 text-sm">Manages subscriptions</td>
                    <td className="px-4 py-3 text-sm">Your account identifier and subscription status</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Apple / Google</td>
                    <td className="px-4 py-3 text-sm">Process subscription payments and, if you use it, sign-in</td>
                    <td className="px-4 py-3 text-sm">Handled by Apple or Google under their own privacy policies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data Storage &amp; Security</h2>
            <p className="mb-4">
              Your account, finds, and images are stored with Supabase in the European Union. Analytics are stored with Mixpanel in the European Union.
            </p>
            <p>
              We protect your data with access controls, row-level security so you can only reach your own data, and encryption in transit. We apply reasonable technical and organizational measures to prevent unauthorized access, alteration, or disclosure. No method of storage or transmission is perfectly secure, but we work to protect your information.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Data Retention</h2>
            <p>
              We keep your data for as long as your account exists. When you delete your account, we delete your finds, your images, and your avatar. Analytics and subscription records may be retained for a limited period as our providers and the law require.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Your Choices &amp; Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Delete your account.</strong> In Settings, at any time. This removes your finds, images, and avatar.</li>
              <li><strong>Delete your avatar.</strong> In the app, without deleting your account.</li>
              <li><strong>Decline AI processing of your photos.</strong> Simply do not add avatar photos or create try-ons; the core save-it library works without them.</li>
              <li>Depending on where you live (for example the EU/UK under GDPR, or California under the CCPA), you may have the right to access, correct, export, or delete your personal data, and to object to or restrict certain processing. To exercise these rights, email <strong>admin@lumetislabs.com</strong>.</li>
            </ul>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">9. Children&apos;s Privacy</h2>
            <p>
              kept is not directed to children under 13, and you must be at least 13 (or the minimum age in your country) to use it. We do not knowingly collect data from children under that age. If you believe we have done so, contact us and we will promptly delete such information.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">10. International Transfers</h2>
            <p>
              Because our providers and you may be in different countries, your data may be transferred and processed internationally, including in the European Union, the United States, or other countries where our service providers operate. We rely on our providers&apos; safeguards for those transfers. By using kept, you consent to such transfers under applicable safeguards.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Updates to This Policy</h2>
            <p>
              We may update this policy as the app changes. We will post the new version here and update the &quot;Effective Date&quot; above. Significant changes will be communicated in the app. Continued use of kept after an update constitutes acceptance of the revised policy.
            </p>
          </section>

          <div className="border-t border-gray-200 my-8"></div>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Contact</h2>
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
