import React, { useRef } from "react";
import { Features } from "./Features";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function FeaturesData() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(headingRef.current, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    })
    .fromTo(featuresRef.current, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="approach" className="min-h-screen w-full">
        <div ref={headingRef} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
            <p className="mt-2 text-lg text-gray-600">
                How we partner to deliver meaningful, measurable impact.
            </p>
        </div>
      <div ref={featuresRef} className=" left-0 w-full">
        <Features
         />
      </div>
    </div>
  );
}

export { FeaturesData };
