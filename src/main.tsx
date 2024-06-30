import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes'
import { ToogleBtnProvider } from './context/toogleBtn'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToogleBtnProvider>
      <RouterProvider router={Routes}/>
    </ToogleBtnProvider>
  </React.StrictMode>,
)
