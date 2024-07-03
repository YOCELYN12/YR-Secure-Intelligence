import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../Fetch/Fetch'
import Login from './Login'
import { useForm } from 'react-hook-form'


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
    if (intName==("")|| intName==("")|| intPassword("")){
      return alert("ingrese texto en los espacios vacios")
    }
    await Post(datos)
  }


  return (


    <>

      <header className='header'>

        <div className='logo'>
          <img src="src/img/LogoTech.png" alt="" />
        </div>

        <nav>

          <ul className='nav-links'>

            <li><a href="./Home">Services</a></li>
            <li><a href="./Home">Projects</a></li>
            <li><a href="./Catalogo">Productos</a></li>

          </ul>

        </nav>

        <a href="./Contacto" className='btn'><button>Contactenos</button></a>
      </header>

      <div className='body'>

        <h1>Registro</h1>

        <form action="">

          <input type="text" placeholder='NAME' value={intName} onChange={(e) => setIntName(e.target.value)} /> {/*input para poder agregar el name a la API*/}
          <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e) => setIntEmail(e.target.value)} /> {/*input para poder agregar el email  a la API*/}
          <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} /> {/*input para poder agregar la password a la API*/}
        </form>

        <button onClick={() => { navegar("/Login") }} >Login</button>
        <button onClick={() => (navegar("/PaginaInicio"))}>Pagina inicio</button>
        <button onClick={registrarse}>Registrarse</button>

      </div>


      
      <div className='container-footer'>

        <footer className='footer'>

          <div className='container'>

            <div className='footer-row'>

              <div className='footer-links'>

                <h4>Empresa</h4>
                <ul>

                  <li><a href="#">Nosotos</a></li>
                  <li><a href="#">Politica de privacidad</a></li>
                  <li><a href="#">Afiliate</a></li>

                </ul>

              </div>


              <div className='footer-links'>

                <h4>Ayuda</h4>
                <ul>
                  <li><a href="#">Preguntas</a></li>
                  <li><a href="#">Compras</a></li>
                </ul>

              </div>

            </div>

          </div>

        </footer>
      </div>
    </>

  )
}

export default Registro
