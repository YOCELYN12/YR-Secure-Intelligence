import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Get, Post } from '../Fetch/Fetch'
import Registro from './Registro'
import './StyRegistro.css'


const Login = () => {

  const navegar = useNavigate()
  const [intEmail, setIntEmail] = useState("")
  const [intPassword, setIntPassword] = useState("")
  const navigate = useNavigate()

  const validarUser = async (e) => {
    try {
      e.preventDefault()
      const data = await Get("users")



      const validarUsuarios = data.find(datos => datos.email === intEmail && datos.password === intPassword)
      if (validarUsuarios) {
        alert("Bienvenido")
        navigate("/Home")
      } else if (intEmail.trim() === "" || intPassword.trim() === "") {
        alert("ingrese texto en los espacios vacios")
      } else (alert("datos incorrectos"))



    } catch (error) {
      console.log("eror")
    }


  }


  return (
    <>
      <div className='contenedor-register'>

        <h1>Login</h1>

        <p className='letras' >Email</p>
        <input type="text" className='Int' value={intEmail} onChange={(e) => setIntEmail(e.target.value)} />

        <p className='letras'>Password</p>
        <input type="text" className='Int' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} />

        <button className='btn' onClick={validarUser} >Logearse</button>

        <button className='btn' onClick={() => { navegar("/RegistroPagina") }}>Registro</button>
        <button className='btn' onClick={() => { navegar("/PaginaPrincipal") }} >Pagina principal</button>
      </div>
    </>
  )
}

export default Login
