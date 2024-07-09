import React from 'react'
import ListaProductos from '../Componentes/ListaProductos'
import InventarioCatalogo from '../Componentes/InventarioCatalogo'
import Header from '../Componentes/Header'
import Footer from '../Componentes/Footer'

const CatalogoProductos = () => {
  return (
    <div>
      <Header/>
      <InventarioCatalogo/>
      <h3>Hola</h3>
      <Footer/>
    </div>
  )
}

export default CatalogoProductos
