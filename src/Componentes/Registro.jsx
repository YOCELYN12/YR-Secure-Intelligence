import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registro = () => {
  const navegar = useNavigate()
  return (
    <div>

      <h1>Registro</h1>
      <input type="text" placeholder='NAME' />
      <input type="text" placeholder='EMAIL'/>
      <input type="text" placeholder='PASSWORD' />

      <button onClick={()=> {navegar("/Login")}} >Login</button>
      <button onClick={()=> (navegar("/PaginaInicio"))}>Pagina inicio</button>
      
    </div>
  )
}

export default Registro
