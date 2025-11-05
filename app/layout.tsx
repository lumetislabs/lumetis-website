import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Lumetis Labs — Software Publishing Studio',
  description: 'Lumetis Labs is an independent app studio creating, developing, and managing digital products — primarily our own portfolio of mobile applications.',
  openGraph: {
    title: 'Lumetis Labs — Software Publishing Studio',
    description: 'Lumetis Labs is an independent app studio creating, developing, and managing digital products — primarily our own portfolio of mobile applications.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

