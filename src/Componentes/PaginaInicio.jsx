import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Registro from './Registro'
import { Router } from 'react-router-dom'


function PaginaInicio() {
 const navegar = useNavigate()

  return (
    <>
     <nav>
        
     </nav>
    <div>
      <h1>Pagina inicio</h1>
      <button onClick={() => {navegar("/Registro")}}>Registro</button>
      <button onClick={() => {navegar("/Login")}}>Login</button>
    </div>
    </>
  )
}

export default PaginaInicio
