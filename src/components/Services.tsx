import React from 'react'
import { Section } from './Section'
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import { BarChart3, BookOpen, Target, Settings, Layers, Briefcase } from 'lucide-react';
import Heading from './Heading'



 const services = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Monitoring & Evaluation",
    description: "Developing robust data collection frameworks and impact assessments to ensure program accountability and learning.",
    color: "bg-blue-50 text-primary"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Strategic Advisory",
    description: "High-level policy analysis and roadmap development for governments and international development partners.",
    color: "bg-orange-50 text-accent"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Governance & Reform",
    description: "Strengthening public systems through institutional reform, anti-corruption strategies, and decentralization support.",
    color: "bg-indigo-50 text-secondary"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Operational Excellence",
    description: "Optimizing organizational workflows and standard operating procedures for maximum resource efficiency.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Capacity Building",
    description: "Customized training modules and mentorship programs designed for civil servants and NGO leadership teams.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Project Management",
    description: "End-to-end management of complex development projects, from initial design to final close-out reports.",
    color: "bg-slate-50 text-slate-700"
  }
];



export const Services = React.memo(function Services() {
  const headingRef = useScrollAnimation<HTMLDivElement>()
  const gridRef = useStaggerAnimation<HTMLDivElement>(100)

  return (
    <Section id="services" className="bg-white py-20 sm:py-24">
      <div>
        <div>
          <Heading 
            title="Core Services" 
            subtitle="Five service pillars designed to deliver measurable, sustainable impact."
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="text-sm font-bold text-secondary flex items-center hover:text-primary transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
})
