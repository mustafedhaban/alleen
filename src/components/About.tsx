import React, { useRef } from 'react'
import { Section } from './Section'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })

    tl.fromTo(badgeRef.current, {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    })
    .fromTo(titleRef.current, {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    }, '-=0.3')
    .fromTo(textRef.current, {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    }, '-=0.3')
    .fromTo(buttonsRef.current, {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    }, '-=0.3')
    .fromTo(imageRef.current, {
      x: 20,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')

  }, { scope: containerRef })

  return (
    <Section id="about" className="py-20 sm:py-24">
      <div ref={containerRef} className="mt-12 grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge ref={badgeRef} variant="outline" className="text-primary border-primary/30">
            About Alleen
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7m7-7H5m14-6l-7 7" />
            </svg>
          </Badge>
          <h1 ref={titleRef} className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Who We Are
          </h1>
          <p ref={textRef} className="text-slate-600 mb-8 max-w-xl lg:text-xl">
            Alleen Consultant empowers organizations across the Somali Region with evidence-based strategies,
            organizational strengthening, and contextual expertise for sustainable social impact.
          </p>
          <div ref={buttonsRef} className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
          
            <Button onClick={() => window.location.href = '#services'} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              Our Services
            </Button>
            
            <Button onClick={() => window.location.href = '#contact'} variant="outline" className="w-full sm:w-auto">
              Get in Touch
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7m7-7H5m14-6l-7 7" />
              </svg>
            </Button>
          </div>
        </div>
        <img
          ref={imageRef}
          src="/aboutus.png"
          alt="Alleen Consultant"
          width="900"
          height="384"
          loading="lazy"
          className="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </Section>
  )
}
