import { Container } from '../ui/Container'
import { Banner } from '../ui/Banner'
import propertiesData from '../data/properties.json'
import { Card } from '../ui/Card'
import type { ReactNode } from 'react'
import type { IProperty } from '../interfaces/IProperty'

export const Home = (): JSX.Element => {
  const properties: IProperty[] = propertiesData
  return (
    <Container>
      <Banner>Chez vous, partout et ailleurs</Banner>
      <section className="properties-section">
        {properties.map((property: IProperty): ReactNode => {
          return (
            <Card
              key={property.id}
              src={property.cover}
              description={property.description}
              id={property.id}
            />
          )
        })}
      </section>
    </Container>
  )
}
