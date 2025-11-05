import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About — Lumetis Labs',
  description: 'Learn about Lumetis Labs, a modern software publishing studio creating thoughtful digital products.',
}

export default function About() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">About</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p>
              Lumetis Labs exists to create software that makes a difference. We believe technology should be intuitive, reliable, and purposeful. Our mission is to build digital products that serve real needs and enhance how people work and live.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <p className="mb-4">
              We are a software publishing studio that operates in two key areas: client services and our own product portfolio. For clients, we provide end-to-end development services, from initial concept to launch and ongoing support.
            </p>
            <p className="mb-4">
              We also develop and publish our own software products, maintaining the same standards of quality and attention to detail. This dual approach keeps us grounded in both client needs and market realities.
            </p>
            <p>
              Our work spans web applications, mobile apps, and software platforms. Regardless of the project type, we focus on clean architecture, thoughtful design, and reliable performance. We prioritize clarity over complexity and substance over style.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h2>
            <p>
              We maintain a neutral, professional approach to all our work. Every project starts with understanding the problem, then designing a solution that fits. We believe in clear communication, transparent processes, and delivering on commitments.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

