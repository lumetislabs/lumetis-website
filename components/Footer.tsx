import Link from 'next/link'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 mt-24">
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p className="text-sm text-slate-600 mb-2 font-medium">
                © 2025 Lumetis Labs LLC
              </p>
              <p className="text-xs text-slate-500">
                5830 E 2nd St, Ste 7000 #29490, Casper, WY 82609, USA
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-slate-600 hover:text-accent-600 transition-colors duration-200 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-600 hover:text-accent-600 transition-colors duration-200 relative group"
              >
                Terms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

