import React from 'react'

export function Card({ icon, title, children }: { icon?: React.ReactNode, title: string, children?: React.ReactNode }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="flex items-start gap-4">
          {icon && (
            <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-700 grid place-items-center">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {children && <div className="mt-2 text-slate-700 text-sm leading-6">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
