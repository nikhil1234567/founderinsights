"use client"

import { useState } from 'react'

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
      <div className="max-w-xl">
        <h1 className="font-serif text-3xl font-semibold">Thank you</h1>
        <p className="mt-3 text-neutral-700">Well get back to you shortly.</p>
        <a href="mailto:info@founderinsightsinc.com" className="mt-6 inline-flex text-accent font-medium">Or email us directly → info@founderinsightsinc.com</a>
      </div>
    )
  }

  return (
    <div className="max-w-xl">
      <h1 className="font-serif text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-neutral-600">We'd love to learn about your team and goals.</p>
      <a href="mailto:info@founderinsightsinc.com" className="mt-4 inline-flex text-accent font-medium">info@founderinsightsinc.com</a>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-300' : 'border-neutral-300 focus:ring-accent'}`}
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
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-300' : 'border-neutral-300 focus:ring-accent'}`}
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
            className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Message</label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.message ? 'border-red-400 focus:ring-red-300' : 'border-neutral-300 focus:ring-accent'}`}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-white font-medium shadow-sm transition hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Send message'}
          </button>
        </div>
      </form>
    </div>
  )
}

