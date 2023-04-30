import type { IHost } from '../interfaces/IHost'
import { Image } from './Image'
import { useEffect, useState } from 'react'

export const Avatar = ({ name, picture }: IHost): JSX.Element => {
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const getFirstname = (): string => {
    return name.split(' ')[0]
  }

  const getLastname = (): string => {
    return name.split(' ')[1]
  }

  useEffect(() => {
    setFirstname(getFirstname())
    setLastname(getLastname())
  })
  return (
    <div className="avatar">
      <div className="avatar-name">
        <p>{firstname}</p>
        <p>{lastname}</p>
      </div>
      <Image src={picture} alt={`${name} profile picture`} />
    </div>
  )
}
