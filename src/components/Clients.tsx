import React from 'react'
import { Section } from './Section'
import { clients } from '../data/clients'
import { Heading } from './Heading'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

// Map sectors to "Logo-like" SVG representations
const getSectorIcon = (index: number) => {
  const icons = [
    // 1. Abstract Box (Local NGOs)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" fillOpacity="0.5"/>
      <rect x="8" y="8" width="8" height="8" />
    </svg>,
    // 2. Leaf/Growth (National NGOs)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>,
    // 3. Globe (INGOs)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.65 6h-2.54A13.93 13.93 0 0 0 12.5 3.35a8 8 0 0 1 6.15 4.65zM12 19.65a13.93 13.93 0 0 0-3.61-4.65h7.22A13.93 13.93 0 0 0 12 19.65zM5.35 8h2.54A13.93 13.93 0 0 0 11.5 3.35a8 8 0 0 1-6.15 4.65zM4 12a7.94 7.94 0 0 1 .53-2.88h3.35a16 16 0 0 0 0 5.76H4.53A7.94 7.94 0 0 1 4 12zm8 6.35a11.9 11.9 0 0 1-3.9-4.35h7.8A11.9 11.9 0 0 1 12 18.35zm3.9-6.35h-7.8a11.9 11.9 0 0 1 0-4h7.8a11.9 11.9 0 0 1 0 4zm1.57 2.88a16 16 0 0 0 0-5.76h3.35a7.94 7.94 0 0 1 0 5.76h-3.35z"/>
    </svg>,
    // 4. Building/Column (Government)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M4 22h16v-2H4v2zm2-4h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12V8H6v2zm0-4h12V4H6v2z"/>
    </svg>,
    // 5. Laurel/UN (UN Agencies)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
    </svg>,
    // 6. Briefcase/Private (Private Sector)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>
    </svg>,
    // 7. Heart/Hands (Foundations)
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ]
  return icons[index % icons.length]
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
