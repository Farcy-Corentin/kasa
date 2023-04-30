import type { IHost } from './IHost'

export interface IProperty {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: IHost
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}
