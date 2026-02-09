import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'

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
    <div className="min-h-screen">
      
      <Header />
      
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
      <Footer/>
    </div>
  )
}
