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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-default flex items-center justify-between px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Alleen Consultant" 
              className={`h-8 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} 
            /> 
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium ml-auto mr-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full ${
                  scrolled 
                    ? 'text-slate-700 hover:text-[#33499D] after:bg-[#33499D]' 
                    : 'text-white/90 hover:text-white after:bg-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded font-semibold text-sm transition-all duration-300 shadow-lg ${
                scrolled
                  ? 'bg-[#5D7CF2] text-white hover:bg-[#4B69E0]'
                  : 'bg-[#5D7CF2] text-white hover:bg-[#4B69E0]'
              }`}
            >
              REQUEST QUOTE
            </a>
            
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
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl">
            <nav className="container-default py-4 flex flex-col gap-2 p-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-2.5 px-4 hover:bg-slate-50 rounded-lg text-slate-700 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="mt-2 text-center py-3 bg-[#5D7CF2] text-white rounded-lg font-semibold hover:bg-[#4B69E0] transition-colors uppercase tracking-wide text-sm"
              >
                Request Quote
              </a>
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
