import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import RegistroPagina from '../Pages/RegistroPagina'
import LoginPagina from '../Pages/LoginPagina'

function PaginaInicio() {
  const navegar = useNavigate()

  return (
    <> 
    <div className='contenedorPagina'>

      <div className='container-button'>
        
        <h1>Bienvenido somos TechSolution</h1>
        <button className='btnAcceso' onClick={() => { navegar("/RegistroPagina") }}>Registro</button>
        <button className='btnAcceso' onClick={() => { navegar("/LoginPagina") }}> Login</button>

      </div>

      <div className='identidad'>
        <div>
          <p className='parrafo'>
            Nuestro equipo de expertos no solo desarrolla <br />
            aplicativos web y APIs robustos y eficientes, sino que también los fortalece <br />
            con capas de protección casi impenetrables. Cada línea de código está diseñada <br />
            para resistir ataques y asegurar la integridad de tus datos y sistemas.
          </p>
        </div>
      </div>

      </div>
    </>

  )
}

export default PaginaInicio
