import React from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export const NavItem = ({
  children,
  activeClassName,
  href,
  hasUnderline = true,
  ...props
}: {
  children: React.ReactNode
  hasUnderline?: boolean
  activeClassName?: string
} & LinkProps): React.JSX.Element => {
  const router = useRouter()

  return (
    <Link
      href={href}
      className={`${router.pathname == href ? activeClassName : ''} ${
        hasUnderline && 'underlined'
      }`}
      {...props}
    >
      {children}
    </Link>
  )
}
