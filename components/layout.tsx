import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <nav className="text-white w-full max-w-[1100px] mx-auto px-8 pt-4">
        <ul className="flex items-center">
          <li className="text-4xl mr-10 font-serif font-semibold">
            M<span className="text-inchworm">i</span>gz
          </li>
          <li className="underlined">Blog</li>
        </ul>
      </nav>
      <main className="h-screen min-h-screen flex justify-start items-start flex-col font-thin text-white w-full max-w-[1100px] mx-auto px-8">
        {children}
      </main>
      {/* © 2020-present Miguel Correa. All Rights Reserved. */}
    </>
  )
}
