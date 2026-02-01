import { useEffect, useRef, RefObject } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animationClass?: string
}

/**
 * Lightweight scroll animation hook using Intersection Observer API
 * Replaces heavy GSAP ScrollTrigger for better performance
 */
export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): RefObject<T> {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    animationClass = 'animate-in'
  } = options

  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Add initial hidden state
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation
            entry.target.classList.add(animationClass)
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
            
            // Disconnect after first trigger if triggerOnce is true
            if (triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            // Reset animation if triggerOnce is false
            entry.target.classList.remove(animationClass)
            element.style.opacity = '0'
            element.style.transform = 'translateY(20px)'
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, animationClass])

  return elementRef
}

/**
 * Hook for animating multiple children with stagger effect
 */
export function useStaggerAnimation<T extends HTMLElement>(
  delay: number = 100
): RefObject<T> {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = Array.from(container.children) as HTMLElement[]
    
    // Set initial state for all children
    children.forEach((child, index) => {
      child.style.opacity = '0'
      child.style.transform = 'translateY(20px)'
      child.style.transition = `opacity 0.5s ease-out ${index * delay}ms, transform 0.5s ease-out ${index * delay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child) => {
              child.style.opacity = '1'
              child.style.transform = 'translateY(0)'
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return containerRef
}
