import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navegar = useNavigate()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={()=>(navegar("/Registro"))}>Registro</button>
      <button onClick={()=> (navegar("/PaginaInicio"))}>Pagina inicio</button>
    </div>
  )
}

export default Login
