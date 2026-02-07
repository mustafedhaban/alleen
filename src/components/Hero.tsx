import { useRef } from 'react'
import { Section } from './Section'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IconArrowRight, IconSparkles } from '@tabler/icons-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(badgeRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
    })
    .from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.4')
    .from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.6')
    .from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, '-=0.4')
    .from(statsRef.current ? statsRef.current.children : [], {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    }, '-=0.2')
    .from(valuesRef.current ? valuesRef.current.children : [], {
      y: 10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
    }, '-=0.2')

  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Optimized Background Image with WebP support */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="/hero.webp" type="image/webp" />
        <img 
          src="/hero.webp" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </picture>
      
      {/* Blue Overlay - Matching the screenshot style */}
      <div className="absolute inset-0 bg-[#33499D]/2 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" aria-hidden="true" />
      
      <Section className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            {/* Small Bold Tagline */}
            <div ref={badgeRef} className="mb-6">
              <span className="font-bold text-white tracking-wide text-sm sm:text-base uppercase opacity-90">
                Progress, Partnership, and Positive Results
              </span>
            </div>

            {/* Main Heading */}
            <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Consulting for <br />
              Community Impact
            </h1>
            
            {/* Subtext */}
            <p ref={textRef} className="text-lg sm:text-xl text-slate-100 leading-relaxed mb-10 opacity-90 max-w-xl">
              Empowering NGOs, government entities, and socially-conscious businesses with evidence-based strategies and data-driven solutions for sustainable social impact in the Somali Region.
            </p>

            {/* CTA Button */}
            <div ref={buttonsRef}>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#5D7CF2] hover:bg-[#4B69E0] text-white font-bold rounded shadow-lg transition-all duration-200 transform hover:-translate-y-1 uppercase tracking-wider text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
