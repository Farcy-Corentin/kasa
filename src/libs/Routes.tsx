import { useRouteError } from 'react-router-dom'
import { Error as ErrorPage } from '../pages/Error'
import React from 'react'
import type { IError } from '../interfaces/IError'

export function RootErrorBoundary(): JSX.Element {
  const error = useRouteError() as IError

  return (
    <ErrorPage
      status={error.status}
      name={error.name}
      message={error.message ?? "Oups! La page que vous demandez n'existe pas."}
    />
  )
}

export const PropertyErrorBoundary = (): JSX.Element => {
  const error = useRouteError() as IError

  return (
    <ErrorPage
      status={error.status}
      name={error.name}
      message={error.message}
    />
  )
}
