import React from 'react'

export function Section({ id, children, className }: { id?: string, children: React.ReactNode, className?: string }) {
  return (
    <section id={id} className={className}>
      <div className="container-default">
        {children}
      </div>
    </section>
  )
}
