import React, { useRef } from 'react'
import { Section } from './Section'
import { Heading } from './Heading'
import { strengths } from '../data/strengths'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Strengths() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
    .fromTo(gridRef.current ? gridRef.current.children : [], {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.3')

  }, { scope: containerRef })

  return (
    <Section className="py-20 sm:py-24 bg-gradient-to-br from-white to-primary/10">
      <div ref={containerRef}>
        <Heading 
          ref={headingRef}
          title="Key Strengths" 
          subtitle="Distinct capabilities that drive quality and results." 
          align="center" 
        />
        <div ref={gridRef} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s) => (
            <div key={s} className="group card bg-white hover:shadow-soft-lg transition-all">
              <div className="card-body py-5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 grid place-items-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors">{s}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
