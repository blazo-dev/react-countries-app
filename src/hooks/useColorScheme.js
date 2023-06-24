import { useEffect, useState } from 'react'

function useColorScheme () {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  const [colorScheme, setColorScheme] = useState(prefersDarkMode.matches)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorScheme ? 'dark' : 'light')
  }, [colorScheme])

  return { colorScheme, setColorScheme }
}

export default useColorScheme
