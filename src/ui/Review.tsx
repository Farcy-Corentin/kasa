import { StarIcon } from './StarIcon'

interface ReviewProps {
  review: string
}
export const Review = ({ review }: ReviewProps): JSX.Element => {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="review">
      {range.map((rangeElem, index) =>
        parseInt(review) >= rangeElem ? (
          <StarIcon key={index} isEmpty={false} height="24" width="25" />
        ) : (
          <StarIcon key={index} isEmpty={true} height="24" width="25" />
        )
      )}
    </div>
  )
}
