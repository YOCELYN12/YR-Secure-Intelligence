import React from 'react'

const Contacto = () => {
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
      </div>
    </>
  )
}

export default Contacto
