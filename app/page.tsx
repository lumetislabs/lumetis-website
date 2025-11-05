import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32 relative min-h-[85vh] flex items-center">
        {/* Enhanced Abstract Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-100/40 via-accent-50/30 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-100/40 via-accent-50/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-50/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-8 leading-tight tracking-tight">
            We build thoughtful software for a{' '}
            <span className="gradient-text">connected world</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Lumetis Labs is a modern software publishing studio creating, developing, and managing digital products for clients and our own portfolio.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button href="#contact">Get in touch</Button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8">About</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg">
              We are a software publishing studio focused on creating digital products that matter. Our approach combines technical excellence with thoughtful design, ensuring that every product we build serves a clear purpose and delivers value.
            </p>
            <p className="text-lg">
              Whether working with clients or developing our own portfolio, we maintain the same standards: clean architecture, intuitive interfaces, and reliable performance.
            </p>
          </div>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section id="services" className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-16 text-center">Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">App Development</h3>
              <p className="text-slate-600 leading-relaxed">
                We design and build custom applications tailored to your needs, from mobile apps to web platforms. Our development process emphasizes clean code, scalability, and user experience.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Software Publishing</h3>
              <p className="text-slate-600 leading-relaxed">
                We manage the complete lifecycle of software products, from concept to launch and beyond. This includes strategy, development, distribution, and ongoing maintenance.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent-200 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.196-2.123M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.196-2.123M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Partnerships</h3>
              <p className="text-slate-600 leading-relaxed">
                We collaborate with clients and partners to bring innovative ideas to market. Our partnership approach is built on transparency, communication, and shared success.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Let's work together</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Have a project in mind? We'd love to hear from you. Reach out to discuss how we can help bring your vision to life.
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-2xl border border-accent-200/50">
            <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a
              href="mailto:admin@lumetislabs.com"
              className="text-xl font-semibold text-accent-600 hover:text-accent-700 transition-colors"
            >
              admin@lumetislabs.com
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

