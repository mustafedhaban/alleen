import React from 'react'
import { Section } from './Section'
import { clients } from '../data/clients'
import Heading from './Heading'
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
          title="Our Customers" 
          subtitle="Trusted by organizations across the development ecosystem."
        />
        
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((c, i) => (
            <div 
              key={c} 
              className="group flex flex-col items-center justify-center p-6 aspect-[3/2]"
            >
              <div className="text-slate-400 transition-colors duration-300 mb-3">
                {getSectorIcon(i)}
              </div>
              <span className="text-sm font-medium text-slate-600 text-center">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
})
