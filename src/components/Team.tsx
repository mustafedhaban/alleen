import React from 'react'
import { Section } from './Section'
import { Heading } from './Heading'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'

type TeamMember = {
  id: string
  name: string
  title: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Al-Fayed',
    title: 'Managing Director',
    bio: 'Over 15 years of experience in international development and strategic policy across the Horn of Africa.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'sarah@alleenconsultancy.com'
  },
  {
    id: '2',
    name: 'James Mwangi',
    title: 'Head of Operations',
    bio: 'Expert in program management and operational efficiency with a focus on humanitarian logistics.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'james@alleenconsultancy.com'
  },
  {
    id: '3',
    name: 'Amina Hassan',
    title: 'Senior Policy Advisor',
    bio: 'Specializes in governance frameworks and community-led advocacy strategies for sustainable change.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'amina@alleenconsultancy.com'
  },
  {
    id: '4',
    name: 'David Ochieng',
    title: 'MEAL Specialist',
    bio: 'Data scientist and evaluation expert dedicated to measuring impact and optimizing program outcomes.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'david@alleenconsultancy.com'
  }
]

export const Team = React.memo(function Team() {
  const headingRef = useScrollAnimation<HTMLDivElement>()
  const gridRef = useStaggerAnimation<HTMLDivElement>(100)

  return (
    <Section id="team" className="py-20 sm:py-24">
      <div>
        <Heading 
          ref={headingRef}
          title="Our Leadership Team" 
          subtitle="A multidisciplinary team of experts dedicated to driving sustainable change."
          className="mb-16"
        />

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/5] mb-6">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-white hover:text-white/80 transition-colors p-2" aria-label="LinkedIn">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-white hover:text-white/80 transition-colors p-2" aria-label="Email">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
})
