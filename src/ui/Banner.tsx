import type { PropsWithChildren } from 'react'
import { Image } from './Image'
import preview from '../assets/preview.png'

export const Banner = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="banner">
      <Image src={preview} alt={'preview image'} width={1240} height={223} />
      <div className="banner-wrapper">
        <h1>{children}</h1>
      </div>
    </div>
  )
}
