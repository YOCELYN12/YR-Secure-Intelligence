import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Get, Post } from '../Fetch/Fetch'
import Registro from './Registro'


const Login = () => {

  const navegar = useNavigate()
  const [intEmail, setIntEmail] = useState("")
  const [intPassword, setIntPassword] = useState("")
  const navigate = useNavigate()

  const validarUser = async (e) => {
    try {
      e.preventDefault()
      const data = await Get("users") 
      
    

      const validarUsuarios = data.find(datos=> datos.email === intEmail && datos.password===intPassword)
      if(validarUsuarios){
        alert("Bienvenido")
        navigate("/Home")
      }else if(intEmail.trim() ==="" || intPassword.trim() ===""){
        alert("ingrese texto en los espacios vacios")
      } else(alert("datos incorrectos"))
      

    
    } catch (error) {
      console.log("eror")
    }


  }


  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e) => setIntEmail(e.target.value)} />
      <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} />

      <button onClick={validarUser} >Logearse</button>

      <button onClick={() => { navegar("/RegistroPagina") }}>Registro</button>
      <button onClick={() => { navegar("/PaginaPrincipal") }} >Pagina principal</button>

    </>
  )
}

export default Login
