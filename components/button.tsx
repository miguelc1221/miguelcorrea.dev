import React from 'react'

export const Button = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <button className="px-4 py-2 text-sm bg-amaranth text-white shadow-sm hover:bg-amaranth-2">
      {children}
    </button>
  )
}
