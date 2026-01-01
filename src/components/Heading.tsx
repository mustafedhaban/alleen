import React, { forwardRef } from 'react'

export const Heading = forwardRef<HTMLDivElement, { title: string, subtitle?: string, align?: 'left' | 'center' }>(
  ({ title, subtitle, align = 'left' }, ref) => {
    return (
      <div ref={ref} className={align === 'center' ? 'text-center max-w-3xl mx-auto' : ''}>
        <h2 className="section-title">{title}</h2>
        {subtitle && (
          <p className="section-subtitle">{subtitle}</p>
        )}
      </div>
    )
  }
)

Heading.displayName = 'Heading'
