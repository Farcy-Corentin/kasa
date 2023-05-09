import { createBrowserRouter, Outlet, useRouteError } from 'react-router-dom'
import { Error as ErrorPage } from '../pages/Error'
import React from 'react'
import type { IError } from '../interfaces/IError'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Property } from '../pages/Property'

export const rooter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: '',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'property/:id',
            element: <Property />,
          },
        ],
      },
    ],
  },
])
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
