// import React, { useRef } from 'react'
// import { Section } from './Section'
// import { Badge } from './ui/badge'
// import { Button } from './ui/button'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// export function About() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const badgeRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const textRef = useRef<HTMLParagraphElement>(null)
//   const buttonsRef = useRef<HTMLDivElement>(null)
//   const imageRef = useRef<HTMLImageElement>(null)

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top 80%',
//         toggleActions: 'play none none none',
//       }
//     })

//     tl.fromTo(badgeRef.current, {
//       y: 20,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       duration: 0.5,
//     })
//     .fromTo(titleRef.current, {
//       y: 20,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       duration: 0.5,
//     }, '-=0.3')
//     .fromTo(textRef.current, {
//       y: 20,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       duration: 0.5,
//     }, '-=0.3')
//     .fromTo(buttonsRef.current, {
//       y: 20,
//       opacity: 0
//     }, {
//       y: 0,
//       opacity: 1,
//       duration: 0.5,
//     }, '-=0.3')
//     .fromTo(imageRef.current, {
//       x: 20,
//       opacity: 0
//     }, {
//       x: 0,
//       opacity: 1,
//       duration: 0.8,
//       ease: 'power2.out'
//     }, '-=0.5')

//   }, { scope: containerRef })

//   return (
//     <Section id="about" className="py-20 sm:py-24">
//       <div ref={containerRef} className="mt-12 grid items-center gap-8 lg:grid-cols-2">
//         <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
//           <Badge ref={badgeRef} variant="outline" className="text-primary border-primary/30">
//             About Alleen
//             <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7m7-7H5m14-6l-7 7" />
//             </svg>
//           </Badge>
//           <h1 ref={titleRef} className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
//             Who We Are
//           </h1>
//           <p ref={textRef} className="text-slate-600 mb-8 max-w-xl lg:text-xl">
//             Alleen Consultancy is a dynamic consultancy firm that blends strategic thinking, innovation, and tailored solutions to drive social impact and business growth.
//           </p>
//           <div ref={buttonsRef} className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
          
//             <Button onClick={() => window.location.href = '#services'} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
//               Our Services
//             </Button>
            
//             <Button onClick={() => window.location.href = '#contact'} variant="outline" className="w-full sm:w-auto">
//               Get in Touch
//               <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7m7-7H5m14-6l-7 7" />
//               </svg>
//             </Button>
//           </div>
//         </div>
//         <picture>
//           <source srcSet="/aboutus.png" type="image/webp" />
//           <img
//             src="/aboutus.png"
//             alt="Alleen Consultant"
//             width="900"
//             height="384"
//             loading="lazy"
//             className="max-h-96 w-full rounded-md object-cover"
//           />
//         </picture>
//       </div>
//     </Section>
//   )
// }





import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Evidence-based policy frameworks",
    "Expert multidisciplinary team",
    "Deep regional context knowledge",
    "Commitment to sustainable SDGs",
    "Uncompromising data integrity",
    "Agile project delivery models"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                className="w-full" 
                alt="Strategy meeting"
              />
            </div>
            {/* Accent decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl z-0"></div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold">10+</div>
                <div>
                  <div className="font-bold text-primary">Years of Excellence</div>
                  <div className="text-slate-500 text-sm">Trusted by 50+ Global NGOs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif leading-tight">
              A Catalyst for Strategic Institutional Change.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded on the principle of 'Inclusive Excellence', Alleen Consultancy specializes in bridging the gap between high-level policy vision and ground-level execution. Our consultants bring decades of experience from major international organizations and ministries of state.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Meet the Leadership Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

