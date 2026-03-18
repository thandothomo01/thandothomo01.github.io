function AppLink({
  to,
  navigate,
  className = '',
  children,
  onClick,
  ...rest
}) {
  const handleClick = (event) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  const hrefTarget = `#${to}`

  return (
    <a href={hrefTarget} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default AppLink
