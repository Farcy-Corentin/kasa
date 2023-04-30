import type { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren): JSX.Element => {
  return <div className="container">{children}</div>
}
