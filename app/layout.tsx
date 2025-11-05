import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lumetis Labs — Software Publishing Studio',
  description: 'Lumetis Labs is a modern software publishing studio creating, developing, and managing digital products for clients and our own portfolio.',
  openGraph: {
    title: 'Lumetis Labs — Software Publishing Studio',
    description: 'Lumetis Labs is a modern software publishing studio creating, developing, and managing digital products for clients and our own portfolio.',
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
      </body>
    </html>
  )
}

