"use client"

import { useState } from 'react'
import BlobShape from '@/components/BlobShape'
import DecorativeShape from '@/components/DecorativeShape'

type Form = { name: string; email: string; organization: string; message: string }

export default function ContactPage() {
  const [form, setForm] = useState<Form>({ name: '', email: '', organization: '', message: '' })
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(values: Form) {
    const e: Partial<Form> = {}
    if (!values.name.trim()) e.name = 'Name is required'
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Valid email is required'
    if (!values.message.trim()) e.message = 'Message is required'
    return e
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length > 0) return
    setSubmitting(true)
    // Simulate submit; replace with API endpoint or email service.
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="relative max-w-xl">
        <BlobShape position="top-left" size="sm" />
        <div className="relative z-10">
        <h1 className="font-serif text-3xl font-semibold">Thank you</h1>
        <p className="mt-3 text-neutral-700">Well get back to you shortly.</p>
          <a href="mailto:marion@founderinsightsinc.com" className="mt-6 inline-flex text-accent font-medium">Or email us directly → marion@founderinsightsinc.com</a>
        <DecorativeShape variant="arc" className="mt-8" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative max-w-xl">
      <BlobShape position="top-right" size="md" />
        <div className="relative z-10">
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold">Contact</h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-700">We'd love to learn about your team and goals.</p>
          <a href="mailto:marion@founderinsightsinc.com" className="mt-4 inline-flex items-center text-accent font-medium touch-manipulation min-h-[44px] break-all">marion@founderinsightsinc.com</a>

          <form onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`mt-1 block w-full rounded-md border bg-white px-4 py-3 text-base min-h-[48px] focus:outline-none focus:ring-2 touch-manipulation ${errors.name ? 'border-red-400 focus:ring-red-300' : 'border-blue-200 focus:ring-accent'}`}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-800">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`mt-1 block w-full rounded-md border bg-white px-4 py-3 text-base min-h-[48px] focus:outline-none focus:ring-2 touch-manipulation ${errors.email ? 'border-red-400 focus:ring-red-300' : 'border-blue-200 focus:ring-accent'}`}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-neutral-800">Organization</label>
          <input
            id="organization"
            type="text"
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
            className="mt-1 block w-full rounded-md border border-blue-200 bg-white px-4 py-3 text-base min-h-[48px] focus:outline-none focus:ring-2 focus:ring-accent touch-manipulation"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Message</label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`mt-1 block w-full rounded-md border bg-white px-4 py-3 text-base min-h-[120px] focus:outline-none focus:ring-2 touch-manipulation ${errors.message ? 'border-red-400 focus:ring-red-300' : 'border-blue-200 focus:ring-accent'}`}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-accent to-accent-light px-6 py-4 min-h-[48px] text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-60 disabled:hover:scale-100"
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Send message'}
          </button>
        </div>
      </form>
      <DecorativeShape variant="dot-pattern" className="mt-8" />
      </div>
    </div>
  )
}

