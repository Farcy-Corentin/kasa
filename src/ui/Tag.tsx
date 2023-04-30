interface TagProps {
  name: string
}

export const Tag = ({ name }: TagProps): JSX.Element => {
  return <span className="tag">{name}</span>
}
