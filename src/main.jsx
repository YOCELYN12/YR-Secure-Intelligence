import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PaginaInicio from './Componentes/PaginaInicio.jsx'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Home from './Componentes/Home.jsx'
import Login from './Componentes/Login.jsx'
import Registro from './Componentes/Registro.jsx'
import Contacto from './Componentes/Contacto.jsx'
import Catalogo from './Componentes/Catalogo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicio/>
  },

  {
    path: "/Home",
    element: <Home/>
  },

  {
    path: "/Registro",
    element: <Registro/>
  },

  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "PaginaInicio",
    element: <PaginaInicio/>
  },

  {
    path:"Contacto",
    element:<Contacto/>
  },
  
  {
    path: "Catalogo",
    element : <Catalogo/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
