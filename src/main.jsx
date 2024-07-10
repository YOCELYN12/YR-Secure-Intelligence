import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import LoginPagina from './Pages/LoginPagina.jsx'
import RegistroPagina from './Pages/RegistroPagina.jsx'
import ListaProductos from './Componentes/ListaProductos.jsx'
import PaginaPrincipal from './Pages/PaginaPrincipal.jsx'
import Home from './Pages/Home.jsx'
import Contacto from './Pages/Contacto.jsx'
import CatalogoProductos from './Pages/CatalogoProductos.jsx'

const router = createBrowserRouter([
  {
    path:"/",
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
    path:"/ListaProductos",
    element:<ListaProductos/>
  },

  {
    path:"/Contacto",
    element: <Contacto/>

  },
  
  {
    path:"/Home",
    element:<Home/>
  },

  {
    path:"/PaginaPrincipal",
    element: <PaginaPrincipal/>
  },

  {
    path: "/CatalogoProductos",
    element: <CatalogoProductos/>
  }

  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
