import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MenuPage from './pages/MenuPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/menu', element: <MenuPage /> },
])

const rootElement = document.getElementById('root')
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


