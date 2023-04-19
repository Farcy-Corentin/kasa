import type { ReactNode } from 'react'
import { Image } from './Image'

interface BannerProps {
  children?: ReactNode
  preview: string
}
export const Banner = ({ children, preview }: BannerProps): JSX.Element => {
  console.log('children', children)
  return (
    <div className="banner">
      <Image src={preview} alt={'preview image'} width={1240} height={223} />
      <div className="banner-wrapper">
        {children !== undefined ? <h1>{children}</h1> : ''}
      </div>
    </div>
  )
}
