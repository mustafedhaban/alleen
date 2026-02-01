import React, { forwardRef } from 'react'

interface HeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  ({ title, subtitle, align = 'center', className = '' }, ref) => {
    const alignClass = align === 'left' ? 'text-left' : 'text-center'
    const mxClass = align === 'left' ? '' : 'mx-auto'
    
    return (
      <div ref={ref} className={`${alignClass} max-w-3xl ${mxClass} ${className}`}>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    )
  }
)

Heading.displayName = 'Heading'
