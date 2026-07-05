import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Services from './routes/Services.jsx'
import Signup from './routes/Signup.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
   {
    path:"/contact",
    element:<Contact/>
  },
   {
    path:"/service",
    element:<Services/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
   {
    path:"/login",
    element:<Login/>
  },



]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <App/>
  </StrictMode>,
)
