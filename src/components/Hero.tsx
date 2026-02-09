// import { useRef } from 'react'
// import { Section } from './Section'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { IconArrowRight, IconSparkles } from '@tabler/icons-react'

// export function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const badgeRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const textRef = useRef<HTMLParagraphElement>(null)
//   const buttonsRef = useRef<HTMLDivElement>(null)
//   const statsRef = useRef<HTMLDivElement>(null)
//   const valuesRef = useRef<HTMLDivElement>(null)

//   useGSAP(() => {
//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

//     tl.from(badgeRef.current, {
//       y: 20,
//       opacity: 0,
//       duration: 0.6,
//     })
//     .from(titleRef.current, {
//       y: 30,
//       opacity: 0,
//       duration: 0.8,
//     }, '-=0.4')
//     .from(textRef.current, {
//       y: 20,
//       opacity: 0,
//       duration: 0.6,
//     }, '-=0.6')
//     .from(buttonsRef.current, {
//       y: 20,
//       opacity: 0,
//       duration: 0.6,
//     }, '-=0.4')
//     .from(statsRef.current ? statsRef.current.children : [], {
//       y: 20,
//       opacity: 0,
//       duration: 0.5,
//       stagger: 0.1,
//     }, '-=0.2')
//     .from(valuesRef.current ? valuesRef.current.children : [], {
//       y: 10,
//       opacity: 0,
//       duration: 0.4,
//       stagger: 0.05,
//     }, '-=0.2')

//   }, { scope: containerRef })

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full min-h-screen flex items-center overflow-hidden"
//     >
//       {/* Optimized Background Image with WebP support */}
//       <picture className="absolute inset-0 w-full h-full">
//         <source srcSet="/hero.webp" type="image/webp" />
//         <img 
//           src="/hero.webp" 
//           alt="" 
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="eager"
//         />
//       </picture>
      
//       {/* Blue Overlay - Matching the screenshot style */}
//       <div className="absolute inset-0 bg-[#33499D]/2 mix-blend-multiply" aria-hidden="true" />
//       <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" aria-hidden="true" />
      
//       <Section className="relative z-10 w-full">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
//           <div className="max-w-2xl">
//             {/* Small Bold Tagline */}
//             <div ref={badgeRef} className="mb-6">
//               <span className="font-bold text-background bg-secondary px-4 py-1 rounded-full tracking-wide text-sm sm:text-base uppercase opacity-90">
//                 Progress, Partnership, and Positive Results
//               </span>
//             </div>

//             {/* Main Heading */}
//             <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-background mb-6 leading-tight">
//               Consulting for <br />
//               Community Impact
//             </h1>
            
//             {/* Subtext */}
//             <p ref={textRef} className="text-lg sm:text-xl text-slate-100 leading-relaxed mb-10 opacity-90 max-w-xl">
//               Empowering NGOs, government entities, and socially-conscious businesses with evidence-based strategies and data-driven solutions for sustainable social impact in the Somali Region.
//             </p>

//             {/* CTA Button */}
//             <div ref={buttonsRef}>
//               <a 
//                 href="#contact" 
//                 className="btn-primary px-6 py-3 text-background border-background/60 hover:bg-background/10"
//               >
//                 Get in Touch
//               </a>
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   )
// }





import React from 'react';
import { ChevronRight, ShieldCheck, Globe, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Modern office architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">Progress, Partnership, and Positive Results</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 font-serif">
            Consulting <span className="text-accent underline decoration-accent/30">Community</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
            Alleen Consultancy partners with NGOs, government bodies, and international donors to navigate complex policy landscapes and deliver measurable social change.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-accent/30 transition-all flex items-center justify-center group"
            >
              Partner With Us
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-white text-3xl font-bold font-serif">150+</span>
              <span className="text-blue-200 text-xs uppercase tracking-tighter">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-3xl font-bold font-serif">25+</span>
              <span className="text-blue-200 text-xs uppercase tracking-tighter">Countries Reached</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-3xl font-bold font-serif">12K+</span>
              <span className="text-blue-200 text-xs uppercase tracking-tighter">Lives Impacted</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-4 animate-in fade-in zoom-in duration-1000">
          <div className="space-y-4 pt-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Policy Development</h3>
              <p className="text-blue-100/70 text-sm">Shaping frameworks for sustainable governance.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Capacity Building</h3>
              <p className="text-blue-100/70 text-sm">Strengthening institutional resilience and skills.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-primary font-bold text-lg mb-2">Impact M&E</h3>
              <p className="text-slate-500 text-sm">Rigorous monitoring and evaluation for transparency.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl h-48 group">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                alt="Consultation meeting"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
