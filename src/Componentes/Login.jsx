import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Get, Post } from '../Fetch/Fetch'
import Registro from './Registro'
import { useForm } from 'react-hook-form'

const Login = () => {
  const navegar = useNavigate()
  const [intEmail, setIntEmail] = useState("")
  const [intPassword, setIntPassword] = useState("")

  const validarUser = async (e) => {
    try {
      e.preventDefault()
      const data = await Get( "users")
      
      data.forEach(datos => {
       
        if (intEmail === datos.email && intPassword === datos.password) {
          console.log("hola")
          window.location.href = ("./Home")
          return alert("Bienvenido")
        } else if(!intEmail === !datos.email && !intPassword === !datos.password){
          return alert("usuario incorrecto")
        } 

        if(intEmail===("") || intPassword===("")){
          return alert("ingrese texto en los espacios")
        } else("Prueba")

      });

    } catch (error) {
      console.log("eror")
    }

  }
 
  return (
    <>
     <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e) => setIntEmail(e.target.value)}/>
     <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword (e.target.value)} />

     <button onClick={validarUser} >Logearse</button>

     <button onClick={()=> {navegar ("/RegistroPagina")}}>Registro</button>
     <button onClick={() => {navegar("/PaginaPrincipal")}} >Pagina principal</button>
    =
    </>
  )
}

export default Login
