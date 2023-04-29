import type { ReactNode } from 'react'
import { Image } from './Image'

interface BannerProps {
  children?: ReactNode
  preview: string
}
export const Banner = ({ children, preview }: BannerProps): JSX.Element => {
  return (
    <div className="banner">
      <Image src={preview} alt={'preview image'} />
      <div className="banner-wrapper">
        {children !== undefined ? <h1>{children}</h1> : ''}
      </div>
    </div>
  )
}
