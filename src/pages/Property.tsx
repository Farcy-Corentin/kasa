import propertiesData from '../data/properties.json'
import type { IProperty } from '../interfaces/IProperty'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { IError } from '../interfaces/IError'
import { Container } from '../ui/Container'
import { Avatar } from '../ui/Avatar'
import { Tag } from '../ui/Tag'
import { Review } from '../ui/Review'
import { Collapse } from '../ui/Collapse'
import { Carrousel } from '../ui/Carrousel'

class PropertyError extends Error implements IError {
  constructor(message: string, name: string, status: string) {
    super(message)
    this.message = message
    this.status = status
  }

  status: string
}

export const Property = (): JSX.Element => {
  const [property, setProperty] = useState<IProperty>({
    cover: '',
    description: '',
    equipments: [],
    host: {
      name: '',
      picture: '',
    },
    id: '',
    location: '',
    pictures: [],
    rating: '',
    tags: [],
    title: '',
  })

  const properties: IProperty[] = propertiesData
  const params = useParams()

  const getProperty = (): IProperty => {
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
    return properties.find(
      (property: IProperty) => property.id === params.id
    ) as IProperty
  }

  useEffect(() => {
    setProperty(getProperty())
  }, [])

  return (
    <Container>
      <section className="property-section">
        <Carrousel pictures={property.pictures} />
        <div className="property-wrapper">
          <div>
            <h2 className="property-title">{property.title}</h2>
            <p className="property-location">{property.location}</p>
            <div className="property-tags">
              {property.tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
          <div className="property-host-rating-wrapper">
            <Avatar name={property.host.name} picture={property.host.picture} />
            <Review review={property.rating} />
          </div>
        </div>
        <div className="property-content">
          <Collapse title={'Description'} content={property.description} />
          <Collapse title={'Équipements'} content={property.equipments} />
        </div>
      </section>
    </Container>
  )
}
