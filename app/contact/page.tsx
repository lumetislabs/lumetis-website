'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Client-side only - just show success toast
    setShowToast(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setShowToast(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Contact</h1>
        
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed mb-4">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Email us at{' '}
            <a
              href="mailto:admin@lumetislabs.com"
              className="text-gray-900 hover:text-gray-700 underline transition-colors"
            >
              admin@lumetislabs.com
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          <Button type="submit">Send message</Button>
        </form>

        {showToast && (
          <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg z-50 transition-opacity duration-300">
            <p className="text-sm font-medium">Message sent successfully!</p>
          </div>
        )}
      </div>
    </Section>
  )
}
