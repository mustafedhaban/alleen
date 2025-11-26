import React from 'react'
import { Section } from './Section'
import { Heading } from './Heading'

const items = [
  {
    title: 'Collaborative Partnership',
    text: 'We co-create strategies with clients and local actors to ensure relevance and ownership.',
  },
  {
    title: 'Evidence-based & Contextualized',
    text: 'Our solutions combine rigorous analysis with deep regional understanding of the Horn of Africa.',
  },
  {
    title: 'Global Best + Regional Expertise',
    text: 'We blend proven international practices with grounded local knowledge for practical outcomes.',
  },
]

export function Approach() {
  return (
    <Section id="approach" className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
      <Heading title="Our Approach" subtitle="How we partner to deliver meaningful, measurable impact." align="center" />
      <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
        {items.map((it, index) => (
          <div key={it.title} className="group card bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="card-body relative">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-100 to-accent-100 text-brand-700 font-bold mb-3 text-lg">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">{it.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
