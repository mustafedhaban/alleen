import React from 'react'
import { Section } from './Section'
import { clients } from '../data/clients'
import { Heading } from './Heading'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

// Map sectors to "Logo-like" SVG representations
const getSectorIcon = (index: number) => {

  // instead of icons let's make images, without  the names 
  const images = [
    <img src="/owda.png" alt="Ugaaso" className="w-16 h-16" />,
    <img src="/ugaaso.png" alt="Ugaaso" className="w-16 h-16" />,
    <img src="/ugaaso.png" alt="Ugaaso" className="w-16 h-16" />,
    <img src="/ugaaso.png" alt="Ugaaso" className="w-16 h-16" />,
  ]
  return images[index % images.length]
}

export const Clients = React.memo(function Clients() {
  const headingRef = useScrollAnimation<HTMLDivElement>()
  const gridRef = useStaggerAnimation<HTMLDivElement>(50)

  return (
    <Section className="py-24 bg-white">
      <div>
        <Heading 
          ref={headingRef}
          title="Our Customers" 
          subtitle="Trusted by organizations across the development ecosystem."
          className="mb-16"
        />
        
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-100">
          {clients.map((c, i) => (
            <div 
              key={c} 
              className="group flex flex-col items-center justify-center p-8 border-b border-r border-slate-100 hover:bg-slate-50 transition-colors duration-300 aspect-[3/2]"
            >
              <div className="text-slate-300 group-hover:text-primary transition-colors duration-300 mb-4">
                {getSectorIcon(i)}
              </div>
              <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors duration-300 uppercase tracking-wider text-center">
                {c}
              </span>
            </div>
          ))}
          {/* Empty filler cell to complete the grid if needed, or leave as is */}
          {clients.length % 4 !== 0 && (
            <div className="hidden md:block border-b border-r border-slate-100 bg-slate-50/30" />
          )}
        </div>
      </div>
    </Section>
  )
})
