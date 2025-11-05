import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Services — Lumetis Labs',
  description: 'Explore our services: App Development, Software Publishing, and Partnerships.',
}

export default function Services() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-white border border-gray-100 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">App Development</h2>
            <p className="text-gray-600 leading-relaxed">
              We design and build custom applications tailored to your specific requirements. Our development process covers everything from initial planning and architecture design to implementation, testing, and deployment. We work with modern technologies and best practices to ensure your application is scalable, maintainable, and performs well. Whether you need a web application, mobile app, or desktop software, we can help bring your vision to life.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Software Publishing</h2>
            <p className="text-gray-600 leading-relaxed">
              We manage the complete lifecycle of software products, from concept to launch and beyond. This includes product strategy, development, quality assurance, distribution, marketing support, and ongoing maintenance. Our publishing services ensure your software reaches its intended audience and continues to evolve based on user feedback and market demands. We handle the technical and operational aspects so you can focus on your business goals.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Partnerships</h2>
            <p className="text-gray-600 leading-relaxed">
              We collaborate with clients and partners to bring innovative ideas to market. Our partnership approach is built on transparency, open communication, and a shared commitment to success. We work closely with partners to understand their goals, provide technical expertise, and contribute to strategic decisions. Whether you're looking for a development partner, a co-publisher, or technical consultation, we're here to help build something meaningful together.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

