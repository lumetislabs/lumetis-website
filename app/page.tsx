import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32 relative">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            We build thoughtful software for a connected world.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Lumetis Labs is a modern software publishing studio creating, developing, and managing digital products for clients and our own portfolio.
          </p>
          <Button href="#contact">Get in touch</Button>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">About</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a software publishing studio focused on creating digital products that matter. Our approach combines technical excellence with thoughtful design, ensuring that every product we build serves a clear purpose and delivers value.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether working with clients or developing our own portfolio, we maintain the same standards: clean architecture, intuitive interfaces, and reliable performance.
          </p>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 text-center">Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">App Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We design and build custom applications tailored to your needs, from mobile apps to web platforms. Our development process emphasizes clean code, scalability, and user experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Software Publishing</h3>
              <p className="text-gray-600 leading-relaxed">
                We manage the complete lifecycle of software products, from concept to launch and beyond. This includes strategy, development, distribution, and ongoing maintenance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                We collaborate with clients and partners to bring innovative ideas to market. Our partnership approach is built on transparency, communication, and shared success.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Teaser */}
      <Section id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Let's work together</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Have a project in mind? We'd love to hear from you. Reach out to discuss how we can help bring your vision to life.
          </p>
          <Button href="/contact">Contact us</Button>
        </div>
      </Section>
    </>
  )
}

