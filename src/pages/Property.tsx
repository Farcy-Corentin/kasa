import propertiesData from '../data/properties.json'
import type { IProperty } from '../interfaces/IProperty'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { IError } from '../interfaces/IError'

class PropertyError extends Error implements IError {
  constructor(message: string, name: string, status: string) {
    super(message)
    this.message = message
    this.status = status
  }

  status: string
}

export const Property = (): JSX.Element => {
  const [property, setProperty] = useState<IProperty>()

  const properties: IProperty[] = propertiesData
  const params = useParams()

  const getProperty = (): IProperty | undefined => {
    if (
      properties.find((property: IProperty) => property.id === params.id) ===
      undefined
    ) {
      throw new PropertyError(
        "Oups! La page que vous demandez n'existe pas.",
        'PropertyNotFound',
        '404'
      )
    }
    return properties.find((property: IProperty) => property.id === params.id)
  }

  useEffect(() => {
    setProperty(getProperty())
  }, [])

  return <h1>Apartment</h1>
}
