import React from 'react'

export const Button = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref): JSX.Element => {
  return (
    <button
      className="px-4 py-2 text-sm bg-amaranth text-white shadow-sm hover:bg-amaranth-2"
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'