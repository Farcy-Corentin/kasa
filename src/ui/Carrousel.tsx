import { useCallback, useEffect, useRef } from 'react'
import { useCarrouselNavigation } from '../hooks/useCarrouselNavigation'
import { Image } from './Image'
import { ChevronLeftIcon } from './ChevronLeftIcon'
import { ChevronRightIcon } from './ChevronRightIcon'

interface CarrouselProps {
  pictures: string[]
}

export const Carrousel = ({ pictures }: CarrouselProps): JSX.Element => {
  const prevBtn = useRef<HTMLButtonElement>(null)
  const nextBtn = useRef<HTMLButtonElement>(null)

  const { currentPictureIndex, prev, next } = useCarrouselNavigation(
    prevBtn,
    nextBtn
  )

  const onDocumentKeyup = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft') {
        void prev(pictures)
      }
      if (event.key === 'ArrowRight') {
        void next(pictures)
      }
    },
    [pictures, next, prev]
  )

  useEffect(() => {
    document.addEventListener('keyup', onDocumentKeyup)

    return (): void => {
      document.removeEventListener('keyup', onDocumentKeyup)
    }
  }, [onDocumentKeyup])

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <button
          className="chevron--left"
          onClick={() => {
            void prev(pictures).then()
          }}
          ref={prevBtn}
          aria-label="Previous image"
        >
          <ChevronLeftIcon height={'20'} width={'12'} />
        </button>
      )}
      <Image src={pictures[currentPictureIndex]} alt={'test'} />
      {pictures.length > 1 && (
        <span className="pictures-counter">{`${currentPictureIndex + 1}/${
          pictures.length
        }`}</span>
      )}
      {pictures.length > 1 && (
        <button
          className="chevron--right"
          onClick={() => {
            void next(pictures).then()
          }}
          ref={nextBtn}
          aria-label="Next image"
        >
          <ChevronRightIcon height={'20'} width={'12'} />
        </button>
      )}
    </div>
  )
}
