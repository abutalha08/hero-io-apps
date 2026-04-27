import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from "./router/Routes";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <h2 className='bg-red-500'>Hello</h2>
   <RouterProvider router={router} />
   
  </StrictMode>,
)
