import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../Fetch/Fetch'
import Login from './Login'

const Registro = () => {
  const navegar = useNavigate()
  const [intName, setIntName] = useState("")
  const [intEmail, setIntEmail] = useState("")
  const [intPassword, setIntPassword] = useState("")
  const estado = useState(false)

  const registrarse = async (e) => {
    e.preventDefault()
    let datos = {
      nombre:intName,
      email:intEmail,
      password:intPassword,
      estado: estado
    }
    await Post(datos)
  }

  return (
    <div>

      <h1>Registro</h1>
      <input type="text" placeholder='NAME' value={intName} onChange={(e) => setIntName(e.target.value)}/>
      <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e)=> setIntEmail(e.target.value)}/>
      <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} />

      <button onClick={()=> {navegar("/Login")}} >Login</button>
      <button onClick={()=> (navegar("/PaginaInicio"))}>Pagina inicio</button>
      <button onClick={registrarse} >Registrarse</button>

    </div>
  )
}

export default Registro
