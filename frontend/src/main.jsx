import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MenuPage from './pages/MenuPage.jsx'
import VisitPage from './pages/VisitPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/menu', element: <MenuPage /> },
  { path: '/visit', element: <VisitPage /> },
  { path: '/contact', element: <ContactPage /> },
])

const rootElement = document.getElementById('root')
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


