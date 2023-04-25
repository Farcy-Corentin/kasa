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
