import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Lumetis Labs',
  description: 'Get in touch with Lumetis Labs. We\'d love to hear about your project.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

