import React from 'react'
import './sass/main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Property } from './pages/Property'
import { Layout } from './layout/Layout'

const rooter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'apartment/:id',
        element: <Property />,
      },
    ],
  },
])
function App(): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={rooter} />
    </div>
  )
}

export default App
