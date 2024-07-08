import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../Fetch/Fetch'
import { useForm } from 'react-hook-form'
import "./EstilosGenerales.css"

const Registro = () => {
  //Costante para el uso del Hook useNavigate
  const navegar = useNavigate()

  //constantes para poder ingresar los datos a la API
  const [intName, setIntName] = useState("")
  const [intEmail, setIntEmail] = useState("")
  const [intPassword, setIntPassword] = useState("")

  //evento del boton registrarse, para que en el momento que detecte un click se agreguen los datos en la API
  const registrarse = async (e) => {
    if (intEmail === ("") || intPassword === ("")) {
      alert("ingrese texto en los espacios")
    } else if (intEmail === (intEmail) || intPassword === (intPassword)) {

      e.preventDefault()
      let datos = {
        nombre: intName,
        email: intEmail,
        password: intPassword
      }
      await Post(datos, "users")
    }
  }

  return (
    <>

      <div className='body'>

        <h1>Registro</h1>

        <form action="">

          <input type="text" placeholder='NAME' value={intName} onChange={(e) => setIntName(e.target.value)} /> {/*input para poder agregar el name a la API*/}
          <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e) => setIntEmail(e.target.value)} /> {/*input para poder agregar el email  a la API*/}
          <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} /> {/*input para poder agregar la password a la API*/}
          
        </form>

        <button onClick={() => { navegar("/LoginPagina") }} >Login</button>
        <button onClick={() => { navegar("/PaginaPrincipal") }}>Pagina principal</button>
        <button onClick={registrarse}>Registrarse</button>

      </div>

    </>

  )
}

export default Registro
