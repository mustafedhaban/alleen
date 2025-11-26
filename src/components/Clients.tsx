import React from 'react'
import { Section } from './Section'
import { Heading } from './Heading'
import { clients } from '../data/clients'

export function Clients() {
  return (
    <Section className="py-20 sm:py-24">
      <Heading title="Client Sectors We Serve" subtitle="Trusted by organizations across the development ecosystem." align="center" />
      <div className="mt-14 flex flex-wrap justify-center gap-4">
        {clients.map((c) => (
          <div key={c} className="group px-6 py-3 rounded-xl border-2 border-slate-200 bg-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{c}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
