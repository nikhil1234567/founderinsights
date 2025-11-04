"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-blue-50/90 backdrop-blur supports-[backdrop-filter]:bg-blue-50/70 border-b border-blue-100/70">
      <nav className="container-responsive flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="font-serif text-lg sm:text-xl font-semibold tracking-tight touch-manipulation">
          Founder Insights
        </Link>

        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md p-3 min-w-[44px] min-h-[44px] text-neutral-800 active:bg-blue-100 touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors hover:text-accent ${active ? 'text-accent font-medium' : 'text-neutral-800'}`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-accent to-accent-light px-3 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Let's Connect
          </Link>
        </div>
      </nav>

      <div
        className={`sm:hidden fixed inset-x-0 top-[57px] bottom-0 bg-blue-50/95 backdrop-blur-sm transition-transform duration-300 ease-in-out overflow-y-auto z-40 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-responsive py-6 flex flex-col gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`py-4 px-4 min-h-[44px] text-base font-medium rounded-lg transition-colors touch-manipulation active:bg-blue-100 ${
                  active ? 'text-accent bg-blue-100/50' : 'text-neutral-800'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="mt-4 mx-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-accent to-accent-light px-6 py-4 min-h-[44px] text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all active:scale-95 touch-manipulation"
            onClick={() => setOpen(false)}
          >
            Let's Connect
          </Link>
        </div>
      </div>
      {open && (
        <div
          className="sm:hidden fixed inset-0 top-[57px] bg-black/20 z-30"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

