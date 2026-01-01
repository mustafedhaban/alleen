import React, { useRef } from 'react'
import { Section } from './Section'
import { Heading } from './Heading'
import { clients } from '../data/clients'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Clients() {
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
      opacity: 0,
      scale: 0.9
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(1.7)'
    }, '-=0.3')

  }, { scope: containerRef })

  return (
    <Section className="py-20 sm:py-24">
      <div ref={containerRef}>
        <Heading 
          ref={headingRef}
          title="Client Sectors We Serve" 
          subtitle="Trusted by organizations across the development ecosystem." 
          align="center" 
        />
        <div ref={gridRef} className="mt-14 flex flex-wrap justify-center gap-4">
          {clients.map((c) => (
            <div key={c} className="group px-6 py-3 rounded-xl border-2 border-slate-200 bg-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
