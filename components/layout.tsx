import React, { useRef, Children, isValidElement, cloneElement } from 'react'
import { useRouter } from 'next/router'
import { Footer } from './footer'
import { NavItem } from './navItem'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { DarkModeButton } from './darkModeButton'
import HomePage from '../pages/index'

export const Layout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const router = useRouter()
  const scrollPosition = useScrollPosition()
  const sectionWrapperRef = useRef<HTMLDivElement>(null)
  const firstSectionOffsetTop = sectionWrapperRef.current?.offsetTop
  const passedOffset =
    firstSectionOffsetTop && scrollPosition >= firstSectionOffsetTop - 50
  const shouldChangeColor = passedOffset || router.route !== '/'

  return (
    <>
      <header>
        <nav
          className={`${
            shouldChangeColor
              ? 'bg-neutral-100/5 dark:bg-secondary/5'
              : 'bg-white/5'
          } duration-300 ease-in-out mb-10 flex justify-center fixed ${
            scrollPosition > 0 ? 'backdrop-blur-md' : 'bg-transparent'
          }  w-full z-10`}
        >
          <div
            className={`${
              shouldChangeColor ? 'text-black dark:text-white' : 'text-black'
            } duration-300 ease-in-out container pt-2 pb-2 flex items-center`}
          >
            <ul className="flex items-center flex-1">
              <li className="text-4xl mr-10 font-serif font-semibold">
                <NavItem href="/" hasUnderline={false}>
                  M<span className="text-primary">i</span>gz
                </NavItem>
              </li>
              <li>
                <NavItem href="/blog" activeClassName="activeNav">
                  Blog
                </NavItem>
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <DarkModeButton />
            </div>
          </div>
        </nav>
      </header>

      <main className="text-white pt-[63px] pb-10 min-h-[calc(100vh_-_87px)]">
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            if (child.type === HomePage) {
              return cloneElement(child, { ref: sectionWrapperRef })
            }

            return child
          }
          return child
        })}
      </main>

      <Footer />
    </>
  )
}
