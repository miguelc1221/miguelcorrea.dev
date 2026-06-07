import type React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Footer } from './footer'
import { NavItem } from './navItem'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { DarkModeButton } from './darkModeButton'

export const Layout = ({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element => {
  const router = useRouter()
  const scrollPosition = useScrollPosition()
  const isHome = router.route === '/'
  const [passedHero, setPassedHero] = useState(false)

  useEffect(() => {
    if (!isHome) {
      return
    }

    const hero = document.querySelector('.heroBackground')
    if (!hero) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setPassedHero(!entry.isIntersecting),
      { rootMargin: '-50px 0px 0px 0px' }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [isHome])

  const shouldChangeColor = !isHome || passedHero

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
              {/* <li>
                <NavItem href="/blog" activeClassName="activeNav">
                  Blog
                </NavItem>
              </li> */}
            </ul>
            <div className="flex items-center justify-center">
              <DarkModeButton />
            </div>
          </div>
        </nav>
      </header>

      <main className="text-white pt-[63px] pb-10 min-h-[calc(100vh-87px)]">
        {children}
      </main>

      <Footer />
    </>
  )
}
