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

            <li><a href="./Home">Services</a></li>
            <li><a href="./Home">Projects</a></li>
            <li><a href="./Catalogo">Productos</a></li>

          </ul>

        </nav>

        <a href="./Contacto" className='btn'><button>Contactenos</button></a>
      </header>




      <div className='container-button'>
        <h1>Bienvenido somos TechSolution</h1>
        <button className='button-registro' onClick={() => { navegar("/Registro") }}>Registro</button>
        <button className='button-login' onClick={() => { navegar("/Login") }}> Login</button>
      </div>


      <img className='contac' src="src/img/login2.png" alt="" />


      <div className='identidad'>
        <div>
          <p>Quienes somos:
            líderes en el desarrollo de aplicativos web y APIs con un enfoque incomparable en ciberseguridad avanzada. <br />
            En un mundo cada vez más interconectado, nuestra misión es proporcionar soluciones tecnológicas innovadoras <br />
            que no solo cumplen con los estándares de funcionalidad y rendimiento, sino que también garantizan la protección <br />
            integral de los datos y sistemas de nuestros clientes.
          </p>
        </div>
      </div>


      <div className='contenedor-foto'>

        <figure>


          <div className='capa'>

            <p>Nuestro equipo de expertos no solo desarrolla <br />
              aplicativos web y APIs robustos y eficientes, sino que también los fortalece <br />
              con capas de protección casi impenetrables. Cada línea de código está diseñada <br />
              para resistir ataques y asegurar la integridad de tus datos y sistemas.</p>


          </div>

        </figure>

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
