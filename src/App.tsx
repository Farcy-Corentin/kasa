import React from 'react'
import './sass/main.scss'
import { RouterProvider } from 'react-router-dom'
import { rooter } from './libs/Routes'

function App(): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={rooter} />
    </div>
  )
}

export default App
