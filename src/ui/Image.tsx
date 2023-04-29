import type { IImage } from '../interfaces/IImage'

export const Image = ({ src, alt }: IImage): JSX.Element => {
  return <img src={src} alt={alt} loading="lazy" />
}
