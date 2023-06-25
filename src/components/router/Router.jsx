import { useEffect, useState } from 'react'
import { NAVIGATION_EVENTS } from '../../constants'
import { match } from 'path-to-regexp'
function Router ({
  routes = [],
  defaultComponent: DefaultComponent = () => null
}) {
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

  let routeParams = {}
  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page {...routeParams} /> : <DefaultComponent />
}

export default Router
