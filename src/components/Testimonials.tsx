import React, { useRef } from 'react'
import { Section } from './Section'
import Heading from './Heading'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Quote } from 'lucide-react'

// Types
type Testimonial = {
  id: string
  name: string
  role: string
  organization: string
  message: string
  avatar?: string
}

// Data
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Country Director',
    organization: 'Global Relief Initiative',
    message: 'Alleen Consultancy transformed our monitoring and evaluation framework. Their deep understanding of the Horn of Africa context allowed us to capture impact metrics we had previously missed. Truly a partner, not just a service provider.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Dr. Ahmed Yassin',
    role: 'Program Manager',
    organization: 'East Africa Health Alliance',
    message: 'The strategic communication plan developed by Alleen helped us secure critical funding for our maternal health program. Their ability to translate complex data into compelling narratives is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Director of Operations',
    organization: 'Sustainable Future Fund',
    message: 'We engaged Alleen for organizational development and governance training. The team was professional, culturally attuned, and delivered actionable insights that streamlined our regional operations immediately.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&q=80'
  }
]

export function Testimonials() {
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
    <Section id="testimonials" className="bg-primary py-20 text-white sm:py-24">
      <div ref={containerRef} >
        <div ref={headingRef} className="text-center mb-12 ">
          <Heading 
            title="What Our Partners Say" 
            subtitle="Trusted by leading organizations to deliver impact where it matters most."
            light
          />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
            >
              {/* Quote Icon */}
              {/* <div className="absolute top-6 right-6 w-10 h-10 text-accent/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div> */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              <p className="text-blue-100 text-lg italic mb-8 relative z-10">
                "{item.message}"
              </p>



              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-accent/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/20 flex-shrink-0">
                  {item.avatar ? (
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-full h-full object-cover  rounded-full border-2 border-accent"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground font-bold">
                      {item.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-blue-100">{item.name}</h4>
                  <p className="text-sm text-blue-100">{item.role}</p>
                  <p className="text-xs text-blue-100 font-medium mt-0.5">{item.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
