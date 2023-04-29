import { useState } from 'react'
import type { RefObject } from 'react'

export const useCarrouselNavigation = (
  prevBtn: RefObject<HTMLButtonElement>,
  nextBtn: RefObject<HTMLButtonElement>
): {
  next: (pictures: string[]) => Promise<void>
  prev: (pictures: string[]) => Promise<void>
  currentPictureIndex: number
  setCurrentPictureIndex: (
    value: ((prevState: number) => number) | number
  ) => void
} => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(0)

  const prev = async (pictures: string[]): Promise<void> => {
    prevBtn?.current?.focus()
    const isFirstPicture = currentPictureIndex === 0
    setCurrentPictureIndex(
      isFirstPicture ? pictures.length - 1 : currentPictureIndex - 1
    )
  }

  const next = async (pictures: string[]): Promise<void> => {
    nextBtn?.current?.focus()
    const isNextPicture = currentPictureIndex === pictures.length - 1
    setCurrentPictureIndex(isNextPicture ? 0 : currentPictureIndex + 1)
  }

  return {
    currentPictureIndex,
    setCurrentPictureIndex,
    prev,
    next,
  }
}
