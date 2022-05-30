import { useState, useEffect } from 'react'

export const DarkModeButton = (): JSX.Element => {
  const [isDarkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDarkMode = () => {
    const darkmode = !isDarkMode

    if (darkmode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('migzDarkMode', 'dark')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('migzDarkMode', 'light')
    }

    setDarkMode(darkmode)
  }

  return (
    <button onClick={toggleDarkMode} aria-label="darkmode toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
        viewBox="0 0 20 20"
        fill={isDarkMode ? 'rgb(234 179 8)' : 'currenColor'}
      >
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    </button>
  )
}
