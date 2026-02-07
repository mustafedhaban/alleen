import React, { useRef } from 'react'
import { sectors } from "../data/sectors"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Autoplay from "embla-carousel-autoplay"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from './Section'

gsap.registerPlugin(ScrollTrigger)

export default function BentoData() {
  const sectorImages: Record<string, string> = {
    'Health & Nutrition': '/nutrition.webp',
    'Education': '/education.webp',
    'Livelihoods & Economic Empowerment': '/20892261_Sandy_Ppl-31_Single-01.webp',
    'Gender Equality & Social Inclusion (GESI)': '/gender%20equality.webp',
    'Climate Change & Environment': '/climate_change.webp',
    'Governance & Human Rights': '/govering_and_human_rights.webp',
    'Child Protection': '/childprotection.webp',
    'WASH': '/wash.webp',
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

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
    .fromTo(carouselRef.current, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out'
    })

  }, { scope: containerRef })

  return (
    <Section  id="sectors-bento" className="py-20 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="container-default">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Sectors of Expertise</h2>
          <p className="section-subtitle">
            We work with a diverse range of sectors to deliver tailored solutions.
          </p>
        </div>

        <div ref={carouselRef} className="relative">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sectors.map((name, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <AspectRatio ratio={4 / 3}>
                        {sectorImages[name] ? (
                          <picture>
                            <source srcSet={sectorImages[name]} type="image/webp" />
                            <img
                              src={sectorImages[name]}
                              alt={name}
                              loading="lazy"
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                          </picture>
                        ) : (
                          <img
                            src='https://images.unsplash.com/photo-1520975684285-8d8be0ccdfbb?w=900&auto=format&fit=crop&q=60'
                            alt={name}
                            loading="lazy"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      </AspectRatio>
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-sm">
                          {name}
                        </h3>
                        <div className="h-0.5 w-12 bg-primary/80 group-hover:w-full transition-all duration-300" />
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden sm:flex -left-12 h-12 w-12 border-2 border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden sm:flex -right-12 h-12 w-12 border-2 border-primary/20 hover:bg-primary hover:text-white" /> */}
          </Carousel>
        </div>
      </div>
    </Section>
  )
}
