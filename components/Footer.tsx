import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                © 2025 Lumetis Labs LLC
              </p>
              <p className="text-xs text-gray-500">
                5830 E 2nd St, Ste 7000 #29490, Casper, WY 82609, USA
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

