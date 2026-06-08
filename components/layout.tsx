import React from 'react'

export const Layout = ({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element => {
  return (
    <div
      className="relative min-h-screen"
      style={{ color: '#CCD6F6' }}
    >
      {children}
    </div>
  )
}
