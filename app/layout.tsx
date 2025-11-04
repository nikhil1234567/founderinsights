import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Founder Insights Institute',
  description: 'Monetizing thought leadership at the intersection of entrepreneurship, AI, and society.',
  metadataBase: new URL('https://www.founderinsightsinstitute.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container-responsive py-6 sm:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

