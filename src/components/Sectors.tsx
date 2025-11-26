import React from 'react'
import { Section } from './Section'
import { Heading } from './Heading'
import { sectors } from '../data/sectors'

export function Sectors() {
  return (
    <Section id="sectors" className="py-20 sm:py-24">
      <Heading title="Sectors of Expertise" subtitle="We work across critical development sectors to create lasting community change." align="center" />
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sectors.map((name, index) => (
          <div key={name} className="group card bg-gradient-to-br from-white to-slate-50/50 hover:from-accent/10 hover:to-white transition-all duration-300">
            <div className="card-body py-4">
              <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <span className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                {name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
