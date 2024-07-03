import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>

      <header className='header-home'>

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



      <div className='container-footer-home'>

        <footer className='footer-home'>

          <div className='container-home'>

            <div className='footer-row-home'>

              <div className='footer-links'>

                <h4>Empresa</h4>
                <ul>

                  <li><a href="#">Nosotos</a></li>
                  <li><a href="#">Politica de privacidad</a></li>
                  <li><a href="#">Afiliate</a></li>

                </ul>

              </div>


              <div className='footer-links'>

                <div id='prueba'>
                  <h4>Ayuda</h4>
                </div>
                <ul>
                  <li><a href="#">Preguntas</a></li>
                  <li><a href="#">Compras</a></li>
                </ul>

              </div>

            </div>

          </div>

        </footer>
      </div>
    </div>
  )
}

export default Home
