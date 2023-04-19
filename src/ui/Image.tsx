import type { IImage } from '../interfaces/IImage'

export const Image = ({ src, alt, width, height }: IImage): JSX.Element => {
  return (
    <img src={src} alt={alt} width={width} height={height} loading="lazy" />
  )
}
