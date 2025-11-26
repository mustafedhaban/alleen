import React, { useState, useEffect } from 'react'
import { Footer } from './Footer'
import { Demo } from './Demo'

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <header 
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b transition-all duration-300 ${
          scrolled ? 'border-slate-300 shadow-md' : 'border-slate-200'
        }`}
      >
        <div className="container-default py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            {/* <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 grid place-items-center text-white font-bold shadow-md group-hover:shadow-glow transition-all duration-300">
              A
            </div>
            <span className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">Alleen Consultant</span> */}
            <img src="/logo.png" alt="Alleen Consultant" className="h-10 w-auto rounded-lg" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Services</a>
            <a href="#sectors-bento" className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Sectors</a>
            <a href="#approach" className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Approach</a>
            <a href="#contact" className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contact</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary px-5 py-2.5 hidden sm:inline-flex">Get in Touch</a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg">
            <nav className="container-default py-4 flex flex-col gap-3">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 hover:bg-primary/5 rounded-lg transition-colors font-medium">Services</a>
              <a href="#sectors-bento" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 hover:bg-primary/5 rounded-lg transition-colors font-medium">Sectors</a>
              <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 hover:bg-primary/5 rounded-lg transition-colors font-medium">Approach</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 px-4 hover:bg-primary/5 rounded-lg transition-colors font-medium">Contact</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary px-5 py-2.5 mt-2">Get in Touch</a>
            </nav>
          </div>
        )}
      </header>
      
      <main>{children}</main>
      
      {/* <footer className="mt-32 border-t border-slate-200 bg-white">
        <div className="container-default py-12">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-between">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 grid place-items-center text-white font-bold shadow-md">
                  A
                </div>
                <span className="font-bold text-slate-900">Alleen Consultant</span>
              </div>
              <p className="text-sm text-slate-600">Strategic consulting for impact</p>
            </div>
            
            <div className="flex flex-col items-center sm:items-end gap-2 text-sm text-slate-600">
              <p className="font-medium text-slate-700">Somalia & Somali Region</p>
              <p>© {new Date().getFullYear()} Alleen Consultant. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer> */}
      <Demo/>
    </div>
  )
}
