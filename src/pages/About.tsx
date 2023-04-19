import { Container } from '../ui/Container'
import { Banner } from '../ui/Banner'
import preview from '../assets/aboutPreview.png'
import { Collapse } from '../ui/Collapse'
import type { ICollapse } from '../interfaces/ICollapse'

export const About = (): JSX.Element => {
  const collapses: ICollapse[] = [
    {
      name: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      name: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      name: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      name: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <Container>
      <Banner preview={preview} />
      <Container>
        <div className="about-section">
          {collapses.map((collapse: ICollapse): JSX.Element => {
            return (
              <Collapse
                key={collapse.name}
                title={collapse.name}
                content={collapse.content}
              />
            )
          })}
        </div>
      </Container>
    </Container>
  )
}
