import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Registro from './Registro'
import { Router } from 'react-router-dom'
import "./PaginaInicio.css"

function PaginaInicio() {
  const navegar = useNavigate()

  return (
    <>

      <header className='header'>

        <div className='logo'>
          <img src="src/img/LogoTech.png" alt="" />
        </div>

        <nav>

          <ul className='nav-links'>

            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Productos</a></li>

          </ul>

        </nav>

        <a href="./Contacto" className='btn'><button>Contactenos</button></a>
      </header>


      {/* 
      <div className='slider-frame'>

        <ul>

          <li>

            <img src="src/img/Prueba/prueba2.jpg" alt="" />
            <div className='texto'>
              <h2>Prueba1</h2>
              <p>Somos su mejor opcion</p>
            </div>

          </li>

          <li>

            <img src="src/img/Prueba/prueba1.jpg" alt="" />
            <div className='texto'>
              <h2>Prueba2</h2>
              <p>Somos su mejor opcion</p>
            </div>

          </li>

        </ul>

      </div> */}


      <div className='contenedor' >
        <h1 className='bienvenido'>Bienvenido</h1>
      </div>

      <div className='registro'>

        <img src="src/img/Compu.jpg" alt="" />
        <div className='texto'>
          <button onClick={() => { navegar("/Registro") }}>Registro</button>
          <p>Prueba para poner el texto dentro de la imagen</p>
        </div>

      </div>

      <div className='Login'>

        <img src="src/img/Compu2.jpg" alt="" />
        <div className='text-img2'>
          <button onClick={() => { navegar("/Login") }}>Login</button>
          <p>Prueba para poner el texto dentro de la imagen</p>
        </div>

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

export default PaginaInicio
