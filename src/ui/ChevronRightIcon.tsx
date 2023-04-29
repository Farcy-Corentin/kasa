import type { IIcon } from '../interfaces/IIcon'

export const ChevronRightIcon = ({ height, width }: IIcon): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13Z"
        fill="white"
      />
    </svg>
  )
}
