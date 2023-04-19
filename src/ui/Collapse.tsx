import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

interface CollapseProps {
  title: string
  content: string
}

export const Collapse = ({ title, content }: CollapseProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)
  const accordionRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideAccordion = (event: MouseEvent): void => {
    if (
      accordionRef.current !== undefined &&
      accordionRef.current !== null &&
      !accordionRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideAccordion)

    return () => {
      document.removeEventListener('click', handleClickOutsideAccordion)
    }
  }, [])

  const handleKeyUp = (
    event: KeyboardEvent<HTMLDivElement> | KeyboardEvent<HTMLButtonElement>
  ): void => {
    if (event.key === 'Escape' || event.key === ' ') {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div
      role="region"
      aria-labelledby="collapse-title"
      aria-expanded={isExpanded}
      onClick={() => {
        setIsExpanded(!isExpanded)
      }}
      onKeyUp={handleKeyUp}
      className="collapse"
      ref={accordionRef}
    >
      <button type="button">
        <h2 id="collapse-title">{title}</h2>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_150458_3)">
            <path
              d="M14.7897 22.2103C15.4591 22.8797 16.5462 22.8797 17.2157 22.2103L27.4979 11.928C28.1674 11.2586 28.1674 10.1715 27.4979 9.50206C26.8285 8.83265 25.7414 8.83265 25.072 9.50206L16 18.574L6.92804 9.50742C6.25862 8.838 5.17148 8.838 4.50206 9.50742C3.83265 10.1768 3.83265 11.264 4.50206 11.9334L14.7843 22.2157L14.7897 22.2103Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_150458_3">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(32) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      {isExpanded && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}
