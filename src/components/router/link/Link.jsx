import { MOUSE_CLICKS, NAVIGATION_EVENTS } from '../../../constants'

export function navigate (href) {
  window.history.pushState({}, null, href)
  const navigationEvent = new Event(NAVIGATION_EVENTS.pushState)
  window.dispatchEvent(navigationEvent)
}

function Link ({ href, target = '_self', ...props }) {
  const handleClick = (e) => {
    const isMainClick = e.button === MOUSE_CLICKS.main
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isTargetSelf = target === '_self' || target === undefined

    if (!isMainClick || !isTargetSelf || isModifiedEvent) return
    e.preventDefault()
    navigate(href)
  }
  return <a href={href} target={target} {...props} onClick={handleClick} />
}

export default Link
