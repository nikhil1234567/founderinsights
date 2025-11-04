"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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

  return (
    <header className="sticky top-0 z-50 bg-blue-50/90 backdrop-blur supports-[backdrop-filter]:bg-blue-50/70 border-b border-blue-100/70">
      <nav className="container-responsive flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          Founder Insights
        </Link>

        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
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
            className="ml-2 inline-flex items-center rounded-md bg-accent px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Let's Connect
          </Link>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-blue-100/70 bg-blue-50">
          <div className="container-responsive py-3 flex flex-col gap-2">
            {links.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`py-2 text-sm transition-colors hover:text-accent ${active ? 'text-accent font-medium' : 'text-neutral-800'}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-accent-dark"
              onClick={() => setOpen(false)}
            >
              Let's Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

