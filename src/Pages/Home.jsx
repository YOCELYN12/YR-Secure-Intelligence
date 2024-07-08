import React from 'react'
import Header from '../Componentes/Header'
import Footer from '../Componentes/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navegar = useNavigate()
  

  return (
    <div>
      <Header/>
       <button onClick={()=> {navegar("/CatalogoProductos")}} > Catalogo</button>
      <Footer/>
    </div>
  )
}

export default Home
