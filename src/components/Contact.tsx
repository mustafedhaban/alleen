

import React, { useState, useRef } from 'react'
import { Section } from './Section'
import { Heading } from './Heading'
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
    <Section id="contact" className="py-20 sm:py-24">
      <div ref={containerRef}>
        <Heading 
          ref={headingRef}
          title="Partner With Us" 
          subtitle="Tell us about your goals. We'll respond promptly." 
          align="center" 
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          <div ref={formRef} className="lg:col-span-2">
            <div className="card bg-gradient-to-br from-white to-slate-50/50">
            <div className="card-body">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank you for reaching out!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    We've received your message and will get back to you at <span className="font-semibold text-primary">{form.email}</span> within 2 business days.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', organization: '', email: '', message: '' })
                    }}
                    className="btn-outline px-5 py-2.5 mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label 
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input 
                        id="name"
                        name="name" 
                        value={form.name} 
                        onChange={onChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required 
                        className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-sm transition-all focus:outline-none ${
                          focusedField === 'name' 
                            ? 'border-primary ring-4 ring-primary/10' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Organization Field */}
                    <div className="relative">
                      <label 
                        htmlFor="organization"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Organization
                      </label>
                      <input 
                        id="organization"
                        name="organization" 
                        value={form.organization} 
                        onChange={onChange}
                        onFocus={() => setFocusedField('organization')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-sm transition-all focus:outline-none ${
                          focusedField === 'organization' 
                            ? 'border-primary ring-4 ring-primary/10' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        placeholder="Your Organization"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label 
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={onChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required 
                      className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-sm transition-all focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-primary ring-4 ring-primary/10' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative">
                    <label 
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      value={form.message} 
                      onChange={onChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required 
                      rows={5}
                      className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-sm transition-all focus:outline-none resize-none ${
                        focusedField === 'message' 
                          ? 'border-primary ring-4 ring-primary/10' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary px-6 py-3.5 text-base w-full sm:w-auto"
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
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        
        {/* Contact Info Sidebar */}
        <div ref={sidebarRef} className="space-y-6">
          <div className="card bg-gradient-to-br from-primary to-primary/80 text-white">
            <div className="card-body">
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium opacity-90">Email</p>
                    <a href="mailto:info@alleenconsultant.org" className="text-white hover:text-white/80 transition-colors">
                      info@alleenconsultancy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium opacity-90">Region</p>
                    <p>Somali Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="leading-relaxed">
                  <span className="font-semibold text-slate-900">Response time:</span> We typically respond within 2 business days. Share your objectives and any relevant timelines or partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Section>
  )
}
