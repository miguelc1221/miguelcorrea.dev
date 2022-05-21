import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useApp } from '../contexts/AppContext'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const { state } = useApp()
  const router = useRouter()
  const shouldChangeColor = state.shouldChangeColor || router.route !== '/'

  return (
    <>
      <header>
        <nav
          className={`${
            shouldChangeColor ? 'bg-secondary/5' : 'bg-white/5'
          } duration-300 ease-in-out mb-10 flex justify-center fixed backdrop-blur-md w-full z-10`}
        >
          <div
            className={`${
              shouldChangeColor ? 'text-white' : 'text-black'
            } duration-300 ease-in-out container pt-2 pb-2`}
          >
            <ul className="flex items-center">
              <li className="text-4xl mr-10 font-serif font-semibold">
                <Link href="/">
                  <a>
                    M<span className="text-primary">i</span>gz
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    className={`${
                      router.pathname == '/blog' ? 'active' : ''
                    } underlined`}
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="h-screen min-h-screen flex justify-start items-start flex-col text-white pt-[63px]">
        {children}
      </main>
      {/* © 2020-present Miguel Correa. All Rights Reserved. */}
    </>
  )
}
