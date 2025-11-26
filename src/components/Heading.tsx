import React from 'react'

export function Heading({ title, subtitle, align = 'left' }: { title: string, subtitle?: string, align?: 'left' | 'center' }) {
  return (
    <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : ''}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  )
}
