import { useEffect, useState } from 'react'
import { NAVIGATION_EVENTS } from '../../constants'

function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENTS.pushState, onLocationChange)
    window.addEventListener(NAVIGATION_EVENTS.popState, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENTS.pushState, onLocationChange)
      window.removeEventListener(NAVIGATION_EVENTS.popState, onLocationChange)
    }
  }, [])

  const Page = routes.find((route) => route.path === currentPath)?.component
  return Page ? <Page /> : <DefaultComponent />
}

export default Router
