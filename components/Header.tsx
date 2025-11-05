'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Container from './Container'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== '/') {
      // On other pages, check URL hash
      const hash = window.location.hash.substring(1)
      if (hash) {
        setActiveSection(hash)
      } else {
        setActiveSection('')
      }
      return
    }

    const handleScroll = () => {
      const sections = ['about', 'services', 'contact']
      const headerOffset = 100

      // Check which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          const scrollPosition = window.scrollY + headerOffset

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section)
            return
          }
        }
      }

      // If scrolled to top, show Home as active
      if (window.scrollY < 200) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Handle scrolling to sections when hash is present in URL
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setActiveSection(hash)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [pathname])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      setActiveSection(targetId)
      
      if (pathname === '/') {
        // Already on home page, just scroll
        const element = document.getElementById(targetId)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      } else {
        // Navigate to home page with hash, then scroll will happen via useEffect
        router.push(`/${href}`)
      }
    }
  }

  const navLinks = [
    { href: '/', label: 'Home', isAnchor: false, id: '' },
    { href: '#about', label: 'About', isAnchor: true, id: 'about' },
    { href: '#services', label: 'Services', isAnchor: true, id: 'services' },
    { href: '#contact', label: 'Contact', isAnchor: true, id: 'contact' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
          : 'bg-white/60 backdrop-blur-md border-b border-gray-100/50'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-5 md:py-6">
          <Link 
            href="/" 
            className="logo-text text-slate-900 hover:text-accent-600 transition-colors duration-200 relative inline-block group"
          >
            <span className="relative z-10">
              Lumetis{' '}
              <span className="text-accent-600 font-bold">Labs</span>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-500 to-accent-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <ul className="flex items-center gap-6 md:gap-8 flex-wrap">
            {navLinks.map((link) => {
              let isActive = false
              
              if (link.isAnchor) {
                // For anchor links, check if the section is active
                isActive = activeSection === link.id
              } else if (link.href === '/') {
                // Home is active when at top or when no section is active
                isActive = pathname === '/' && activeSection === ''
              }
              
              return (
                <li key={link.href}>
                  <Link
                    href={link.isAnchor && pathname !== '/' ? `/${link.href}` : link.href}
                    onClick={(e) => link.isAnchor && handleAnchorClick(e, link.href)}
                    className={`text-sm transition-all duration-200 relative group ${
                      isActive
                        ? 'text-slate-900 font-medium'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

