import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Contacto from './Componentes/Contacto.jsx'
import LoginPagina from './Pages/LoginPagina.jsx'
import PaginaPrincipal from './Pages/PaginaPrincipal.jsx'
import RegistroPagina from './Pages/RegistroPagina.jsx'
import ListaProductos from './Componentes/ListaProductos.jsx'
import InventarioCatalogo from './Componentes/InventarioCatalogo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal/>
  },

  {
    path: "/RegistroPagina",
    element: <RegistroPagina/>
  },

  {
    path: "/LoginPagina",
    element:<LoginPagina/>
  },

  {
    path:"ListaProductos",
    element:<ListaProductos/>
  },

  {
    path: "/Catalogo",
    element: <Catalogo/>
  },
  {
    path:"Contacto",
    element: <Contacto/>

  },

  {
    path:"PaginaPrincipal",
    element: <PaginaPrincipal/>
  },

  {
    path:"InventarioCatalogo",
    element: <InventarioCatalogo/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
