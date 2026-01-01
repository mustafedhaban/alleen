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
      className="relative overflow-hidden w-screen bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/hero2.jpg')" }}
    >
      {/* Enhanced overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-primary/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-texture" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,white,transparent)]" aria-hidden="true" />
      
      <Section>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-sm font-semibold shadow-lg border border-primary/10">
                  <IconSparkles className="h-4 w-4" />
                  Consulting for Community Impact
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  Strategic Consulting for{' '}
                  <span className="block mt-2 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
                    Lasting Impact
                  </span>
                </h1>
                
                <p ref={textRef} className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Empowering NGOs, government entities, and socially-conscious businesses with evidence-based strategies and data-driven solutions for sustainable social impact in the Somali Region.
                </p>
              </div>

              {/* CTA Buttons */}
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Get in Touch
                  <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/95 backdrop-blur-md hover:bg-white text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  Our Services
                </a>
              </div>
            </div>
            </div>
          </div>
      </Section>
    </div>
  )
}
