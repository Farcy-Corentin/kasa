import { Link } from 'react-router-dom'
import type { FC } from 'react'

interface CardProps {
  src: string
  description: string
  id: string
}

export const Card: FC<CardProps> = ({ src, description, id }) => {
  return (
    <div className="card">
      <Link to={`/property/${id}`}>
        <img className="card-image" src={src} alt="card" />
        <div className="card-overlay">
          <p className="card-description">{description}</p>
        </div>
      </Link>
    </div>
  )
}
