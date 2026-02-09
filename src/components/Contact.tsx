

import React, { useState, useRef } from 'react'
import { Section } from './Section'
// import { services } from '../data/services'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type FormState = {
  name: string
  organization: string
  email: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', organization: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => {
        setSubmitted(false)
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 4000)
      return () => clearTimeout(t)
    }
  }, [submitted])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })

    tl.fromTo(headingRef.current, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    })
    .fromTo(formRef.current, {
      x: -30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
    .fromTo(sidebarRef.current ? sidebarRef.current.children : [], {
      x: 30,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.5')

  }, { scope: containerRef })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }


  const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!form.name || !form.email || !form.message) return

  setIsSubmitting(true)

  try {
    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("organization", form.organization)
    formData.append("email", form.email)
    formData.append("message", form.message)

    const res = await fetch("/contact.php", {
      method: "POST",
      body: formData,
    })

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response from server");
    }

    const data = await res.json()

    if (data.success) {
      setSubmitted(true)
      setForm({ name: "", organization: "", email: "", message: "" })
    } else {
      alert("Failed to send message. Please try again.")
    }
  } catch (err) {
    alert("Network error. Please try later.")
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <Section id="contact" className="py-16 sm:py-20">
      <div ref={containerRef}>
        <div className="rounded-2xl ring-1 ring-slate-200 shadow-soft overflow-hidden grid lg:grid-cols-3">
          <div className="bg-primary text-white p-8 sm:p-10">
            <div ref={headingRef} className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Partner With Us</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Tell us about your goals. We'll respond promptly.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">Email</p>
                  <a href="mailto:info@alleenconsultant.org" className="font-semibold text-white">
                    info@alleenconsultancy.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-80">Region</p>
                  <p className="font-semibold text-white">Somali Region</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs leading-relaxed text-white/90">
                  <span className="font-semibold text-white">Response time:</span> We typically respond within 2 business days. Share your objectives and any relevant timelines or partners.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <a href="#" className="grid place-items-center w-8 h-8 rounded-full bg-white/10 text-white">in</a>
              <a href="#" className="grid place-items-center w-8 h-8 rounded-full bg-white/10 text-white">x</a>
            </div>
          </div>
          <div className="bg-white p-8 sm:p-10 lg:col-span-2">
            <div ref={formRef}>
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Thank you for reaching out!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    We've received your message and will get back to you at <span className="font-semibold text-primary">{form.email}</span> within 2 business days.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', organization: '', email: '', message: '' })
                    }}
                    className="btn-outline px-5 py-2.5 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        className="w-full rounded-md bg-slate-800 text-white placeholder:text-slate-400 border-0 ring-1 ring-slate-700 focus:ring-2 focus:ring-ring px-4 py-3 text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        className="w-full rounded-md bg-slate-800 text-white placeholder:text-slate-400 border-0 ring-1 ring-slate-700 focus:ring-2 focus:ring-ring px-4 py-3 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      value={form.organization}
                      onChange={onChange}
                      className="w-full rounded-md bg-slate-800 text-white placeholder:text-slate-400 border-0 ring-1 ring-slate-700 focus:ring-2 focus:ring-ring px-4 py-3 text-sm"
                      placeholder="Your Organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={5}
                      className="w-full rounded-md bg-slate-800 text-white placeholder:text-slate-400 border-0 ring-1 ring-slate-700 focus:ring-2 focus:ring-ring px-4 py-3 text-sm resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors text-sm font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
