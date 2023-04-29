import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEventHandler } from 'react'
import { ChevronDownIcon } from './ChevronDownIcon'
import { ChevronUpIcon } from './ChevronUpIcon'

interface CollapseProps {
  title: string
  content: string | string[]
}

export const Collapse = ({ title, content }: CollapseProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)
  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutsideCollapse = (event: MouseEvent): void => {
      if (
        !(collapseRef.current?.contains(event.target as Node) ?? false) &&
        collapseRef.current !== event.target
      ) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('click', handleClickOutsideCollapse, true)

    return () => {
      document.removeEventListener('click', handleClickOutsideCollapse, true)
    }
  }, [])

  const handleKeyUp: KeyboardEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        setIsExpanded(false)
      }
    },
    []
  )

  const toggleCollapse = useCallback(() => {
    setIsExpanded((prevState) => !prevState)
  }, [])

  return (
    <div role="region" className="collapse" ref={collapseRef}>
      <button
        onClick={toggleCollapse}
        onKeyUp={handleKeyUp}
        aria-expanded={isExpanded}
        aria-controls={`collapse-${title}`}
      >
        <h2 id="collapse-title">{title}</h2>
        {isExpanded ? (
          <ChevronUpIcon height={'32'} width={'32'} />
        ) : (
          <ChevronDownIcon height={'32'} width={'32'} />
        )}
      </button>
      {isExpanded && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p> {content} </p>
          )}
        </div>
      )}
    </div>
  )
}
