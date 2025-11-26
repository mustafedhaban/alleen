import React from 'react'
import { Section } from './Section'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-texture" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" aria-hidden="true" />
      
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-20 sm:py-28 lg:py-32 relative">
          {/* Left Content */}
          <div className="relative space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Strategic Consulting Excellence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Strategic Consulting for{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Impact
              </span>{' '}
              in Somalia & the Somali Region
            </h1>
           
            
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
              Empowering NGOs, government entities, and socially-conscious businesses with evidence-based strategies,
              organizational strengthening, and data-driven program development for sustainable social impact.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-primary px-6 py-3.5 text-base">
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#services" className="btn-outline px-6 py-3.5 text-base">
                Our Services
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="animate-fade-in-up delay-100">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-slate-600 mt-1">Projects Delivered</div>
              </div>
              <div className="animate-fade-in-up delay-200">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-slate-600 mt-1">Sectors Covered</div>
              </div>
              <div className="animate-fade-in-up delay-300">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-slate-600 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary to-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-accent to-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '1.5s'}} />
              
              <div className="card relative overflow-hidden">
                <div >
                  {/* Visual Feature Card */}
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 grid place-items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    {/* <div className="relative text-center p-8 space-y-3">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-2">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="font-semibold text-slate-800">Trusted Excellence</p>
                      <p className="text-sm text-slate-600">Proven track record across the Horn of Africa</p>
                    </div> */}
                     <img src="/hero.jpg" alt="Hero" className="w-full h-auto" />
                  </div>
                  
                  {/* Core Values Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors group">
                      <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-slate-800">Evidence-based</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-colors group">
                      <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-slate-800">Context-driven</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors group">
                      <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-slate-800">Integrity</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-colors group">
                      <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-slate-800">Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
