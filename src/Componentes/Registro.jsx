import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../Fetch/Fetch'
import Login from './Login'
import Validaciones from './Validaciones'


const Registro = () => {
  //Costante para el uso del Hook useNavigate
  const navegar = useNavigate()

  //constantes para poder ingresar los datos a la API
  const [intName, setIntName] = useState("")
  const [intEmail, setIntEmail] = useState("")
  const [intPassword, setIntPassword] = useState("")

  //costante para utilizar el hook de usesSate en el estado de los usuarios 
  const estado = useState(false)

  //evento del boton registrarse, para que en el momento que detecte un click se agreguen los datos en la API
  const registrarse = async (e) => {
    e.preventDefault()
    let datos = {
      nombre: intName,
      email: intEmail,
      password: intPassword,
      estado: estado
    }
    await Post(datos)
  }


  

  return (

    <div className='body'>

      <h1>Registro</h1>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" placeholder='NAME' value={intName}  onChange={(e) => setIntName(e.target.value)} /> {/*input para poder agregar el name a la API*/}
        <input type="text" placeholder='EMAIL' value={intEmail}  onChange={(e) => setIntEmail(e.target.value)} /> {/*input para poder agregar el email  a la API*/}
        <input type="text" placeholder='PASSWORD' value={intPassword}  onChange={(e) => setIntPassword(e.target.value)} /> {/*input para poder agregar la password a la API*/}
      </form>
      <button onClick={() => { navegar("/Login") }} >Login</button>
      <button onClick={() => (navegar("/PaginaInicio"))}>Pagina inicio</button>
      <button onClick={registrarse}>Registrarse</button>

    </div>
  )
}

export default Registro
