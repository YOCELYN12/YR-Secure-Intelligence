import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Get,Post } from '../Fetch/Fetch'
import Registro from './Registro'

const Login = () => {
  const navegar = useNavigate()
 

  return (
    <div>
      <h1>Login</h1>

      <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e)=> setIntEmail(e.target.value)}/>
      <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} />
      <button onClick={validarUser} >Logearse</button>

      <button onClick={() => (navegar("/Registro"))}>Registro</button>
      <button onClick={() => (navegar("/PaginaInicio"))}>Pagina inicio</button>
    </div>
  )
}

export default Login
