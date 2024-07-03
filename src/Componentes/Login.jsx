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
      <div>
        <h1>Login</h1>

        <input type="text" placeholder='EMAIL' value={intEmail} onChange={(e) => setIntEmail(e.target.value)} />
        <input type="text" placeholder='PASSWORD' value={intPassword} onChange={(e) => setIntPassword(e.target.value)} />
        <button onClick={validarUser}>Logearse</button>

        <button onClick={() => (navegar("/Registro"))}>Registro</button>
        <button onClick={() => (navegar("/PaginaInicio"))}>Pagina inicio</button>
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

export default Login
