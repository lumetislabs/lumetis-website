import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Lumetis Labs',
  description: 'Terms & Conditions for Lumetis Labs.',
}

export default function Terms() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the Lumetis Labs website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access and use the materials on Lumetis Labs' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Description</h2>
            <p>
              Lumetis Labs provides software development, publishing, and partnership services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by Lumetis Labs LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">User Accounts</h2>
            <p>
              If you create an account with us, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
            <p className="mb-4">You may not use our website or services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>To impersonate or attempt to impersonate another person or entity</li>
              <li>In any way that infringes upon the rights of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <p>
              The materials on Lumetis Labs' website are provided on an "as is" basis. Lumetis Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitations</h2>
            <p>
              In no event shall Lumetis Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lumetis Labs' website, even if Lumetis Labs or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by Lumetis Labs. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms & Conditions at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="mt-4">
              Lumetis Labs LLC<br />
              5830 E 2nd St, Ste 7000 #29490<br />
              Casper, WY 82609, USA<br />
              Email: admin@lumetislabs.com
            </p>
          </section>
        </div>
      </div>
    </Section>
  )
}

